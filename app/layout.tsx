import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maxwell Jackson - Software Engineer & Full-Stack Developer",
  description:
    "Computer Science student at NC A&T with expertise in React, Next.js, and AI integration. Currently Software Engineer Intern at ReplyQuick.",
  keywords: [
    "Maxwell Jackson",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "AI Integration",
    "NC A&T",
  ],
  authors: [{ name: "Maxwell Jackson" }],
  openGraph: {
    title: "Maxwell Jackson - Software Engineer & Full-Stack Developer",
    description: "Computer Science student at NC A&T with expertise in React, Next.js, and AI integration.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
