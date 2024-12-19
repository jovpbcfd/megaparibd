'use client'

import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react'

type MobileSize = {
    width: number
    height: number
}

type DesktopSize = {
    width: number
    height: number
}

export default function ResImage({
    path,
    priority,
    alt,
    mobileSize,
    desktopSize,
    screenSize,
    ...props
}: {
    path: StaticImageData
    priority: boolean
    alt: string
    mobileSize: MobileSize
    desktopSize: DesktopSize
    screenSize: number
    [key: string]: unknown
}) {
    const [dimensions, setDimensions] = useState(() => {
        const screen = typeof window !== 'undefined' ? window.innerWidth : 0

        return screen < screenSize ? mobileSize : desktopSize
    })

    // Dynamically set width & height base on user screen
    useEffect(() => {
        const handleResize = () => {
            const screen = window.innerWidth
            setDimensions(screen < screenSize ? mobileSize : desktopSize)
        }

        // Attach the resize event listener
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize)
        }

        // Cleanup the event listener on component unmount
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [screenSize, mobileSize, desktopSize])

    return (
        <>
            <Image
                src={path}
                width={dimensions.width}
                height={dimensions.height}
                priority={priority}
                alt={alt}
                {...props}
            />
        </>
    )
}
