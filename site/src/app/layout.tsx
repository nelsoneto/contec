import { Header } from '@/components/Headers'
import type { Metadata } from 'next'
import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata: Metadata = {
  title: 'Contec Sistemas',
  description: 'O solução completa para sua empresa.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans`}>
        <main className="h-screen">
          <Header />
          {/* <Slider /> */}
          {children}
        </main>
      </body>
    </html>
  )
}
