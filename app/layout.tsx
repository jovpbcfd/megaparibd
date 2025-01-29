import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { homemetadata } from '@/data/metadata'
import './globals.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollBarIndicator from '@/components/scrollbar-indicator'
import ScrollToTop from '@/components/scroll-to-top'

const rubik = Rubik({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    ...homemetadata,
    openGraph: {
        ...homemetadata
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    // bg-gradient-to-br from-red-500 via-gray-700 to-blue-600
    // bg-gradient-to-br from-[#7f1d1d] via-[#1f2460] to-[#313380]
    // bg-gradient-to-br from-[#4e2a8a] via-[#1f2460] to-[#313380]
    // bg-gradient-to-br from-[#313380] via-[#3a4b8e] to-[#4e2a8a]
    // bg-gradient-to-br from-[#313380] via-[#2a3c7f] to-[#3c1a1a] 20%
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${rubik.className} antialiased bg-gradient-to-br from-red-500 via-gray-700 to-blue-600 h-screen`}
            >
                <ScrollBarIndicator />
                <ScrollToTop />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
