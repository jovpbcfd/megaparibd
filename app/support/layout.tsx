import type { Metadata } from 'next'
import { supportmetadata } from '@/data/metadata'

export const metadata: Metadata = {
    ...supportmetadata,
    openGraph: {
        ...supportmetadata
    }
}

export default function SupportLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
