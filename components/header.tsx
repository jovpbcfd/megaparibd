'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import HeaderLogo from '@/public/img/panalobet-logo.webp'
import ResImage from './res-image'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isBreadcrumbShow, setIsBreadcrumbShow] = useState(false)
    const pathname = usePathname()

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleHomePageNavigation = () => {
        setIsBreadcrumbShow(false)
    }

    useEffect(() => {
        if (pathname !== '/') {
            setIsBreadcrumbShow(true)
        }
    }, [pathname])

    return (
        <>
            <header className="">
                <div className="container mx-auto p-[10px] md:p-[20px] lg:flex lg:flex-col lg:items-center">
                    <div className="fix flex justify-between items-center">
                        <div>
                            <ResImage
                                path={HeaderLogo}
                                priority={true}
                                alt="Panalobet Logo"
                                mobileSize={{ width: 200, height: 36 }}
                                desktopSize={{ width: 300, height: 36 }}
                                screenSize={900}
                            />
                        </div>
                        <button onClick={handleClick} className="md:hidden" aria-label="navigation">
                            <span
                                className={`bg-white block transition-all duration-300 ease-out cursor-pointer 
                    h-0.5 w-6 rounded-sm ${
                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
                            ></span>
                            <span
                                className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                            ></span>
                            <span
                                className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
                            ></span>
                        </button>
                        <div
                            className={`absolute bg-gray-300 top-0 left-0 flex flex-col h-dvh text-stone-950 transition-transform duration-300 ease-out will-change-transform z-100 ${
                                isOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}
                        >
                            <div className="p-[10px]">
                                <ResImage
                                    path={HeaderLogo}
                                    priority={true}
                                    alt="Panalobet Logo"
                                    mobileSize={{ width: 200, height: 36 }}
                                    desktopSize={{ width: 300, height: 36 }}
                                    screenSize={900}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-3 px-[10px] pt-[16px] mt-[24px]">
                                <button
                                    className={`text-[1.1rem] px-6 py-2 font-bold rounded-full
                                        bg-gradient-to-br from-stone-950/30 to-gray-100/20 backdrop-blur-md
                                        text-gray-900 border border-white/40 shadow-md
                                        transition-all duration-200 ease-out
                                        hover:bg-gradient-to-br hover:from-red-500 hover:to-blue-600 hover:text-white hover:shadow-xl`}
                                >
                                    Registration
                                </button>
                                <button
                                    className={`text-[1.1rem] px-6 py-2 font-bold rounded-full
                                        bg-gradient-to-br from-stone-950/30 to-gray-100/20 backdrop-blur-md
                                        text-gray-900 border border-white/40 shadow-md
                                        transition-all duration-200 ease-out
                                        hover:bg-gradient-to-br hover:from-red-500 hover:to-blue-600 hover:text-white hover:shadow-xl`}
                                >
                                    Download
                                </button>
                            </div>
                            <div className="mt-5 px-[10px] pb-[10px]">
                                <nav>
                                    <ul>
                                        <li className="py-[15px] transition-hover duration-200 ease-out hover:bg-stone-800">
                                            <Link href="/app">APP</Link>
                                        </li>
                                        <li className="py-[15px] transition-hover duration-200 ease-out hover:bg-stone-800">
                                            <Link href="/registration" className="block">
                                                REGISTRATION
                                            </Link>
                                        </li>
                                        <li className="py-[15px] transition-hover duration-200 ease-out hover:bg-stone-800">
                                            <Link href="/withdrawal" className="block">
                                                WITHDRAWAL
                                            </Link>
                                        </li>
                                        <li className="py-[15px] transition-hover duration-200 ease-out hover:bg-stone-800">
                                            <Link href="/casino" className="block">
                                                CASINO
                                            </Link>
                                        </li>
                                        <li className="py-[15px] transition-hover duration-200 ease-out hover:bg-stone-800">
                                            <Link href="/support" className="block">
                                                SUPPORT
                                            </Link>
                                        </li>
                                        <li className="py-[15px] transition-hover duration-200 ease-out hover:bg-stone-800">
                                            <Link href="/about" className="block">
                                                ABOUT
                                            </Link>
                                        </li>
                                        <li className="py-[15px] transition-hover duration-200 ease-out hover:bg-stone-800">
                                            <Link href="/contacts" className="block">
                                                CONTACTS
                                            </Link>
                                        </li>
                                        <li className="py-[15px] transition-hover duration-200 ease-out hover:bg-stone-800">
                                            <Link href="/blog" className="block">
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`flex items-center gap-3 pt-[20px] mt-[29px] transition-opacity duration-300 ease-out md:pt-[10px] md:mt-[20px] ${isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
                    >
                        <button
                            disabled={isOpen}
                            className={`text-[1.1rem] px-6 py-2 font-bold rounded-full
                                bg-gradient-to-br from-white/30 to-gray-100/20 backdrop-blur-md
                                text-gray-900 border border-white/40 shadow-md
                                transition-all duration-200 ease-out
                                hover:bg-gradient-to-br hover:from-red-500 hover:to-blue-600 hover:text-white hover:shadow-xl ${isOpen ? 'cursor-not-allowed' : ''}`}
                        >
                            Registration
                        </button>
                        <button
                            disabled={isOpen}
                            className={`text-[1.1rem] px-6 py-2 font-bold rounded-full
                                bg-gradient-to-br from-white/30 to-gray-100/20 backdrop-blur-md
                                text-gray-900 border border-white/40 shadow-md
                                transition-all duration-200 ease-out
                                hover:bg-gradient-to-br hover:from-red-500 hover:to-blue-600 hover:text-white hover:shadow-xl ${isOpen ? 'cursor-not-allowed' : ''}`}
                        >
                            Download
                        </button>
                    </div>
                    <div className="hidden md:flex md:mt-[15px]">
                        <nav>
                            <ul className="flex text-white gap-[1.5rem]">
                                <li className="py-[15px] transition-hover duration-200 ease-out hover:text-cyan-400">
                                    <Link href="/app">APP</Link>
                                </li>
                                <li className="py-[15px] transition-hover duration-200 ease-out hover:text-cyan-400">
                                    <Link href="/registration" className="block">
                                        REGISTRATION
                                    </Link>
                                </li>
                                <li className="py-[15px] transition-hover duration-200 ease-out hover:text-cyan-400">
                                    <Link href="/withdrawal" className="block">
                                        WITHDRAWAL
                                    </Link>
                                </li>
                                <li className="py-[15px] transition-hover duration-200 ease-out hover:text-cyan-400">
                                    <Link href="/casino" className="block">
                                        CASINO
                                    </Link>
                                </li>
                                <li className="py-[15px] transition-hover duration-200 ease-out hover:text-cyan-400">
                                    <Link href="/support" className="block">
                                        SUPPORT
                                    </Link>
                                </li>
                                <li className="py-[15px] transition-hover duration-200 ease-out hover:text-cyan-400">
                                    <Link href="/about" className="block">
                                        ABOUT
                                    </Link>
                                </li>
                                <li className="py-[15px] transition-hover duration-200 ease-out hover:text-cyan-400">
                                    <Link href="/contacts" className="block">
                                        CONTACTS
                                    </Link>
                                </li>
                                <li className="py-[15px] transition-hover duration-200 ease-out hover:text-cyan-400">
                                    <Link href="/blog" className="block">
                                        BLOG
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="container h-[27px] mx-auto">
                    <div className="ml-[10px] md:ml-[20px] xl:ml-[15%] md:relative">
                        {isBreadcrumbShow && (
                            <ol className="flex items-center gap-4 text-[16px] md:absolute">
                                <li className="text-slate-100 block hover:text-gray-200">
                                    <Link href="/" onClick={handleHomePageNavigation}>
                                        Panalobet
                                    </Link>
                                </li>
                                <li className="text-slate-100 text-sm">&gt;</li>
                                <li className="text-white block">
                                    <span>Panalobet </span>
                                    {pathname.split('/')[1].charAt(0).toUpperCase() +
                                        pathname.slice(2)}
                                </li>
                            </ol>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}
