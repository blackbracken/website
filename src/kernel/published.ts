
export type Published = {
  published_at: string
  title: string
  link: string
  icon: PublishedIcon | null
}

export const PublishedIcon = {
  Zenn: {
    path: '/icons/zenn.svg',
    alt: 'Zenn',
  },
  HatenaBlog: {
    path: '/icons/hatenablog.svg',
    alt: 'Hatena Blog',
  },
  SpeakerDeck: {
    path: '/icons/speakerdeck.svg',
    alt: 'Speaker Deck',
  },
} as const;
export type PublishedIcon = typeof PublishedIcon[keyof typeof PublishedIcon]