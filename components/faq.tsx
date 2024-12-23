'use client'

import { useState } from 'react'

type Faq = {
    question: string
    answer: string
}

export default function Faq({ questions }: { questions: Faq[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                <h3
                    className="text-[1.25rem] text-center font-semibold mb-4 relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-[50%] md:after:translate-x-[-50%]"
                >
                    FAQ
                </h3>
                <p className="font-light leading-tight text-[1rem] text-center">
                    Below we provide answers to a few common player questions. Before you send a
                    support request, make sure that the information you need is not listed below.
                </p>

                <div className="md:px-24">
                    {questions.map((faq, index) => (
                        <div key={index} className="border-dotted border-b border-[#000] my-4">
                            <h3>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-900 py-[1rem] md:py-[1.5rem]"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-content-${index}`}
                                >
                                    <span>{faq.question}</span>
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
                                        className={`ml-2 transform transition-transform duration-300 ${
                                            openIndex === index ? 'rotate-180' : 'rotate-0'
                                        }`}
                                        aria-hidden="true"
                                    >
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>
                            </h3>
                            <div
                                id={`faq-content-${index}`}
                                role="region"
                                className={`transition-[max-height] ease-in-out duration-300 overflow-hidden ${
                                    openIndex === index ? 'max-h-50' : 'max-h-0'
                                }`}
                                aria-hidden={openIndex !== index}
                            >
                                <p className="text-gray-700 pb-4 md:py-4">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
