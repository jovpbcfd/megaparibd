'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const [isSpinning, setIsSpinning] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        setIsSpinning(true)
        setTimeout(() => {
            setIsSpinning(false)
            setIsVisible(false)
        }, 500) // Match the fadeOut animation duration

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    role="button"
                    aria-label="Scroll to top"
                    className={`dashed-circle ${isSpinning ? 'spinning' : ''}`}
                >
                    ↑
                </button>
            )}
        </div>
    )
}
