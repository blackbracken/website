import type { Published } from "@/kernel/published";
import { PublishedIcon } from "@/kernel/published"

// TODO: move
export const decks: Published[] = [
  {
    published_at: '2024-12-06',
    title: 'Exploring: Partial and Independent Composables',
    link: 'https://speakerdeck.com/blackbracken/exploring-partial-and-independent-composables',
    icon: PublishedIcon.SpeakerDeck,
  },
  {
    published_at: '2023-03-16',
    title: 'kotlin-resultを用いて鉄道志向なエラーハンドリングを試みる',
    link: 'https://speakerdeck.com/blackbracken/kotlin-resultwoyong-itetie-dao-zhi-xiang-naerahandoringuwoshi-miru',
    icon: PublishedIcon.SpeakerDeck,
  },
  {
    published_at: '2022-11-25',
    title: 'CLで取り込み始めた階層的なUiStateについて',
    link: 'https://speakerdeck.com/blackbracken/cldequ-riip-mishi-metajie-ceng-de-nauistatenituite',
    icon: PublishedIcon.SpeakerDeck,
  }
]
