import type { Metadata } from 'next'
import { appmetadata } from '@/data/metadata'

export const metadata: Metadata = {
    ...appmetadata, 
    openGraph: {
        ...appmetadata
    }
}

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
