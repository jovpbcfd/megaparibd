import type { Metadata } from 'next'
import { contactmetadata } from '@/data/metadata'

export const metadata: Metadata = {
    ...contactmetadata,
    openGraph: {
        ...contactmetadata
    }
}

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
