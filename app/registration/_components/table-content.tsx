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
                <h2 className="text-[1.25rem] font-semibold leading-tight">Talaan ng Nilalaman</h2>
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
                                            Ipakita
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Pagpaparehistro ng Panalobet: Mga Hakbang-hakbang na
                                            Tagubilin
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Pagpaparehistro sa pamamagitan ng Mga Mobile Device
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Video Instruksyon kung paano Magparehistro
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Mga Kinakailangan sa Pagpaparehistro ng Panalobet
                                            Philippines
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Pagpapatunay ng Account
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Welcome Bonus
                                        </Link>
                                    </li>
                                    <li className="py-[0.1rem]">
                                        <Link href="#" className="block">
                                            Advantages of Panalobet
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
