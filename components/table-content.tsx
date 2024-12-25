'use client'

import { useState } from 'react'
import Link from 'next/link'

type TableOfContentsItem = {
    title: string
    link?: string
    children?: TableOfContentsItem[]
}

type TableOfContentsProps = {
    content: TableOfContentsItem[]
}

export default function TableOfContents({ content }: TableOfContentsProps) {
    const [isTableContentOpen, setTableContentOpen] = useState(false)

    const toggleTableContent = () => {
        setTableContentOpen(!isTableContentOpen)
    }

    const renderList = (items: TableOfContentsItem[], prefix = '') => {
        return (
            <ol className="ml-6">
                {items.map((item, index) => {
                    const currentPrefix = prefix ? `${prefix}.${index + 1}` : `${index + 1}`
                    return (
                        <li key={currentPrefix} className="py-[0.1rem]">
                            {item.link ? (
                                <Link href={item.link} className="block">
                                    {currentPrefix}. {item.title}
                                </Link>
                            ) : (
                                <span className="block">
                                    {currentPrefix}. {item.title}
                                </span>
                            )}
                            {item.children && renderList(item.children, currentPrefix)}
                        </li>
                    )
                })}
            </ol>
        )
    }

    return (
        <section className="bg-[#fff] md:py-10">
            <div className="max-w-[500px] mx-auto flex items-center justify-between pt-4 px-[2rem] py-[16px] rounded-md shadow-md">
                <h2 className="text-[1.25rem] font-semibold leading-tight">Talaan ng Nilalaman</h2>
                <button onClick={toggleTableContent} className="text-blue-500">
                    {isTableContentOpen ? 'Itago' : 'Ipakita'}
                </button>
                {isTableContentOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-out"
                        onClick={toggleTableContent}
                    >
                        <div
                            className="bg-white max-w-lg mx-auto rounded-lg overflow-y-auto p-4 transition-transform duration-300 ease-out transform scale-100"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={toggleTableContent}
                                className="ml-auto block text-gray-600 hover:text-black"
                                type="button"
                            >
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
                            <nav>{renderList(content)}</nav>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
