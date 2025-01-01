'use client'

import { useEffect, useState } from 'react'

export default function ScrollBarIndicator() {
    const [scrollPercentage, setScrollPercentage] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollY = window.scrollY

            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100

            setScrollPercentage(scrollPercent)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div id="scrollbar-indicator" className="fixed top-0 left-0 right-0 h-[5px] z-50">
            <div
                className="h-full bg-gradient-to-r from-red-500 via-gray-700 to-blue-600"
                style={{
                    width: `${scrollPercentage}%`,
                }}
            ></div>
        </div>
    )
}
