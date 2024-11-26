'use client'
import useArticles from '@/hooks/useArticles'
import type { Article } from '@/kernel/article'
import type { Deck } from '@/kernel/deck'
import { decks } from '@/kernel/deck'
import dayjs from 'dayjs'
import type { ReactNode } from 'react'
import './global.css'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>bracken.black</div>
      <Name />
      <SeeAlso />
      <Decks />
      <Articles />
    </main>
  )
}

const Name = () => {
  return (
    <div>
      <h1>Name</h1>
      Yoshikane Fumitaka
    </div>
  )
}

const SeeAlso = () => {
  return (
    <div>
      <h1>See also</h1>
      <ul>
        <li className={styles.listItem}>
          <a className={styles.link} href="https://github.com/blackbracken/">GitHub</a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.link} href="https://x.com/black_bracken">Twitter (currently X)</a>
        </li>
      </ul>
    </div>
  )
}

const Decks = () => {
  return (
    <div>
      <h1>Decks</h1>
      <ul>
        {decks.map((deck, idx) => (
          <ListItem value={deck} key={idx} />
        ))}
      </ul>
    </div>
  )
}

const Articles = () => {
  const articles = useArticles()

  let node: ReactNode | null = null
  if (articles === null) {
    node = <div>Loading...</div>
  } else if (articles.length === 0) {
    node = <div>No articles found</div>
  } else {
    node = (
      <ul>
        {articles.map((article, idx) => (
          <ListItem value={article} key={idx} />
        ))}
      </ul>
    )
  }

  return (
    <div>
      <h1>Articles</h1>
      {node}
    </div>
  )
}

const ListItem = (props: { value: Article | Deck }) => {
  const article = props.value

  return (
    <li className={styles.listItem}>
      <div className={styles.date}>{dayjs(article.published_at).format('YYYY-MM-DD')}</div>{' '}
      <a className={styles.link} href={article.link}>{article.title}</a>
    </li>
  )
}
