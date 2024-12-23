import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

import Header from '@/components/header'
import Footer from '@/components/footer'

const rubik = Rubik({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${rubik.className} antialiased bg-gradient-to-br from-red-500 via-gray-700 to-blue-600 h-screen`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
