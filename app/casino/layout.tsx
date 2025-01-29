import type { Metadata } from 'next'
import { casinometadata } from '@/data/metadata'

export const metadata: Metadata = {
    ...casinometadata,
    openGraph: {
        ...casinometadata
    }
}

export default function CasinoLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
