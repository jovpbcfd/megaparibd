import type { Metadata } from 'next'
import { regmetadata } from '@/data/metadata'

export const metadata: Metadata = {
    ...regmetadata,
    openGraph: {
        ...regmetadata
    }
}

export default function RegistrationLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
