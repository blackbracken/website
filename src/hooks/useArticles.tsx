import { type Published } from '@/kernel/published'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

const localArticles: Published[] = [
  {
    published_at: '2024-11-21',
    title: 'Jetpack Glanceを使ったカスタマイズ可能なウィジェットの開発',
    link: 'https://developers.cyberagent.co.jp/blog/archives/50784/',
    icon: null,
  },
]

const useArticles = () => {
  const [zennResult, setZennResult] = useState<Published[] | null>(null)
  const [hatenaResult, setHatenaResult] = useState<Published[] | null>(null)

  useEffect(() => {
    Promise.all([
      fetch('/api/proxy/zenn')
        .then((res) => res.json())
        .then((res) => res as Published[])
        .then((res) => setZennResult(res)),
      fetch('/api/proxy/hatena')
        .then((res) => res.json())
        .then((res) => res as Published[])
        .then((res) => setHatenaResult(res)),
    ]).catch((error) => {
      console.error(error)

      setZennResult(null)
      setHatenaResult(null)
    })
  }, [])

  return mergeAndSortArticles(zennResult, hatenaResult, localArticles)
}

const mergeAndSortArticles = (...articles: (Published[] | null)[]) => {
  if (articles.some((article) => article === null)) {
    return null
  }

  const isArticle = (a: Published | null): a is Published => a !== null
  return articles
    .flat()
    .filter(isArticle)
    .sort((a, b) => dayjs(b.published_at).diff(dayjs(a.published_at)))
}

export default useArticles
