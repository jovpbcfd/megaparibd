'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TableOfContents() {
    const [isTableContentOpen, setTableContentOpen] = useState(false)

    const handleClick = () => {
        setTableContentOpen(!isTableContentOpen)
    }

    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto fix flex items-center justify-between mt-4 px-[10px] py-[16px] rounded-md shadow-md">
                <h2 className="text-[1.25rem] font-semibold leading-tight">Table of Contents</h2>
                <button onClick={handleClick}>Show</button>
                {isTableContentOpen && (
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-200 ease-out 
                                will-change-opacity ${
                                    isTableContentOpen
                                        ? 'opacity-100 visible'
                                        : 'opacity-0 invisible'
                                }`}
                        onClick={handleClick}
                    >
                        <div
                            className={`absolute bg-white inset-5 w-[90%] scale-10 mx-auto rounded-lg overflow-y-auto p-4 transition-transform duration-200 ease-out
                                    will-change-transform 
                                   ${isTableContentOpen ? 'scale-100' : 'scale-10'}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={handleClick} className="ml-auto block" type="button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                            <nav>
                                <ol className="list-decimal p-2 leading-snug">
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            About Panalobet
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Welcome bonus for new users up to 20,000 PHP
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            The official site of Panalobet for sports betting in
                                            Philippines
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            How to sign up for Panalobet PH: step-by-step
                                            instructions?
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            How to start betting?
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Panalobet PH mobile app for Android and iOS
                                        </Link>
                                        <ol className="list-decimal ml-4">
                                            <li className="py-[0.1rem]">
                                                <Link href="#">
                                                    Download Panalobet PH app on Android
                                                </Link>
                                                <ol className="list-decimal ml-4">
                                                    <li className="py-[0.1rem]">
                                                        <Link href="#" className="block">
                                                            Android System Requirements
                                                        </Link>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="py-[0.1rem]">
                                                <Link href="#" className="block">
                                                    Download Panalobet PH app on iOS
                                                </Link>
                                                <ol className="list-decimal ml-4">
                                                    <li className="py-[0.1rem]">
                                                        <Link href="#" className="block">
                                                            iOS system requirements
                                                        </Link>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Panalobet Philippines video review
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Advantages of Panalobet
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Types of sports betting at Panalobet PH
                                        </Link>
                                        <ol className="list-decimal ml-4">
                                            <li className="py-[0.1rem]">
                                                <Link href="#" className="block">
                                                    CockFighting
                                                </Link>
                                            </li>
                                            <li className="py-[0.1rem]">
                                                <Link href="#" className="block">
                                                    Soccer
                                                </Link>
                                            </li>
                                            <li className="py-[0.1rem]">
                                                <Link href="#" className="block">
                                                    Tennis
                                                </Link>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Betting on virtual sports
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Live Betting
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Betting odds
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Online Casino MegaPari
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Methods to deposit and withdraw money
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Player Support
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            FAQ
                                        </Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
