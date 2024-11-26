import { PublishedIcon, type Published } from '@/kernel/published'
import type { NextApiRequest, NextApiResponse } from 'next'

type ZennResponse = {
  articles: {
    title: string
    published_at: string
    path: string
  }[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiUrl = 'https://zenn.dev/api/articles?username=blackbracken&count=128&order=latest'

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const resp = (await response.json()) as ZennResponse
    const articles: Published[] = resp.articles.map((raw) => {
      return {
        published_at: raw.published_at,
        title: raw.title,
        link: `https://zenn.dev/${raw.path}`,
        icon: PublishedIcon.Zenn,
      }
    })
    res.status(response.status).json(articles)
  } catch (_) {
    res.status(500).json({ error: 'error' })
  }
}
