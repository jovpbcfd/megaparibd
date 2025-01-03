import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'App page',
    description: 'Generated by create next app',
}

export default function SupportLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
