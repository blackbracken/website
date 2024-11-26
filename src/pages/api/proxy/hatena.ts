import { PublishedIcon, type Published } from '@/kernel/published'
import { XMLParser } from 'fast-xml-parser'
import type { NextApiRequest, NextApiResponse } from 'next'

type HatenaEntry = {
  title: string
  updated: string | null
  published: string | null
  link: {
    rel: string
    href: string
  }[]
  'app:control': {
    'app:draft': string
    'app:preview': string
  }
}

type HatenaResponse = {
  feed: {
    link: {
      rel: string
      href: string
    }[]
    entry: HatenaEntry[] | HatenaEntry
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const latestApiUrl = 'https://blog.hatena.ne.jp/brackenblack/blackbracken.hatenablog.com/atom/entry'
  const auth = createBasicAuth()

  fetchHatenaEntriesWithPaging(latestApiUrl, auth)
    .then((entries) => filterPublishedEntries(entries))
    .then((entries) => mapEntriesToArticles(entries))
    .then((articles) => res.status(200).json(articles))
    .catch((error) => res.status(500).json(error))
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
})

const createBasicAuth = (): string => btoa(`${process.env.HATENA_USERNAME}:${process.env.HATENA_API_KEY}`)

const fetchHatenaEntriesWithPaging = async (url: string, auth: string): Promise<HatenaEntry[]> => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  })
  const hatenaRes: HatenaResponse = parser.parse(await res.text())

  const entryOrEntries = hatenaRes.feed.entry
  const entries = entryOrEntries === null ? [] : Array.isArray(entryOrEntries) ? entryOrEntries : [entryOrEntries]

  const nextUrl = hatenaRes.feed.link.find((link) => link.rel === 'next')?.href
  const nexts = nextUrl ? await fetchHatenaEntriesWithPaging(nextUrl, auth) : []

  return [...entries, ...nexts]
}

const filterPublishedEntries = (entries: HatenaEntry[]): HatenaEntry[] => {
  return entries.filter(
    (entry) => entry['app:control']['app:draft'] === 'no' && entry['app:control']['app:preview'] === 'no',
  )
}

const mapEntriesToArticles = (entries: HatenaEntry[]): Published[] => {
  return entries.flatMap((entry) => {
    const published_at = (entry.published || entry.updated) ?? null
    const link = entry.link.find((link) => link.rel === 'alternate')?.href ?? null
    if (published_at === null || link === null) {
      return []
    }

    return [
      {
        published_at,
        title: entry.title,
        link,
        icon: PublishedIcon.HatenaBlog,
      },
    ]
  })
}
