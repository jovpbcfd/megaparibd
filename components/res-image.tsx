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
}: {
    path: StaticImageData
    priority: boolean
    alt: string
    mobileSize: MobileSize
    desktopSize: DesktopSize
    screenSize: number
}) {
    const [imageWidth, setImageWidth] = useState(0)
    const [imageHeight, setImageHeight] = useState(0)

    // Dynamically set logo width & height base on user screen
    useEffect(() => {
        const screen = window.innerWidth

        if (screen < screenSize) {
            setImageWidth(mobileSize.width)
            setImageHeight(mobileSize.height)
        } else {
            setImageWidth(desktopSize.width)
            setImageHeight(desktopSize.height)
        }
    }, [])

    return (
        <>
            <Image
                src={path}
                width={imageWidth}
                height={imageHeight}
                priority={priority}
                alt={alt}
            />
        </>
    )
}
