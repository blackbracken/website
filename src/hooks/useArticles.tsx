import type { Article } from '@/kernel/article'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

const localArticles: Article[] = [
  {
    published_at: '2024-11-21',
    title: 'Jetpack Glanceを使ったカスタマイズ可能なウィジェットの開発',
    link: 'https://developers.cyberagent.co.jp/blog/archives/50784/',
  },
]

const useArticles = () => {
  const [zennResult, setZennResult] = useState<Article[] | null>(null)
  const [hatenaResult, setHatenaResult] = useState<Article[] | null>(null)

  useEffect(() => {
    Promise.all([
      fetch('/api/proxy/zenn')
        .then((res) => res.json())
        .then((res) => res as Article[])
        .then((res) => setZennResult(res)),
      fetch('/api/proxy/hatena')
        .then((res) => res.json())
        .then((res) => res as Article[])
        .then((res) => setHatenaResult(res)),
    ]).catch((error) => {
      console.error(error)

      setZennResult(null)
      setHatenaResult(null)
    })
  }, [])

  return mergeAndSortArticles(zennResult, hatenaResult, localArticles)
}

const mergeAndSortArticles = (...articles: (Article[] | null)[]) => {
  if (articles.some((article) => article === null)) {
    return null
  }

  const isArticle = (a: Article | null): a is Article => a !== null
  return articles
    .flat()
    .filter(isArticle)
    .sort((a, b) => dayjs(b.published_at).diff(dayjs(a.published_at)))
}

export default useArticles
