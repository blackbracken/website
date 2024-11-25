import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'bracken.black',
  description: 'A website about blackbracken',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
