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
    const [dimensions, setDimensions] = useState<MobileSize | DesktopSize | null>(null)

    // Dynamically set width & height base on user screen
    useEffect(() => {
        const handleResize = () => {
            const screen = window.innerWidth
            setDimensions(screen < screenSize ? mobileSize : desktopSize)
        }

        // Set dimensions initially
        handleResize()

        // Attach the resize event listener
        window.addEventListener('resize', handleResize)

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [screenSize, mobileSize, desktopSize])

    if (!dimensions) {
        return null
    }

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
