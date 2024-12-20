'use client'

import Link from 'next/link'
import { useState } from 'react'

import HeaderLogo from '@/public/img/panalobet-logo.webp'
import ResImage from './res-image'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header className="bg-stone-950">
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
                        <button onClick={handleClick} className="md:hidden">
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
                            className={`absolute bg-stone-950 top-0 left-0 flex flex-col h-dvh text-white transition-transform duration-300 ease-out will-change-transform ${
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
                                <button className="w-full bg-white text-[#000] border border-white px-[.5rem] py-[.7rem] transition-hover duration-200 ease-out hover:bg-black hover:text-white">
                                    Registration
                                </button>
                                <button className="w-full bg-white text-[#000] border border-white px-[.5rem] py-[.7rem] transition-hover duration-200 ease-out hover:bg-black hover:text-white">
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
                            className={`w-full bg-white text-[#000] border border-white px-[.5rem] py-[.7rem] transition-hover duration-200 ease-out md:w-[150px] hover:bg-black hover:text-white
                            ${isOpen ? 'cursor-not-allowed' : ''}
                        `}
                        >
                            Registration
                        </button>
                        <button
                            disabled={isOpen}
                            className={`w-full bg-white text-[#000] border border-white px-[.5rem] py-[.7rem] transition-hover duration-200 ease-out md:w-[150px] hover:bg-black hover:text-white
                            ${isOpen ? 'cursor-not-allowed' : ''}
                        `}
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
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
