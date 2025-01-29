import type { Metadata } from 'next'
import { withdrawalmetadata } from '@/data/metadata'

export const metadata: Metadata = {
    ...withdrawalmetadata,
    openGraph: {
        ...withdrawalmetadata
    }
}

export default function WithdrawalLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
