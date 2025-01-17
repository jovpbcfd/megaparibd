import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/**',
            },
        ],
    },
    i18n: {
        locales: ['en', 'fil'],
        defaultLocale: 'en',
    },
}

export default nextConfig
