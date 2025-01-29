import type { Metadata } from 'next'
import { aboutmetadata } from '@/data/metadata'

export const metadata: Metadata = {
    ...aboutmetadata,
    openGraph: {
        ...aboutmetadata
    }
}

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
