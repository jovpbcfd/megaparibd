'use client'

import { useState } from 'react'

type Faq = {
    question: string
    answer: string
}

export default function Faq({ questions, description }: { questions: Faq[]; description: string }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <section id="faq" className="bg-[#fffdf4]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] md:py-16">
                <h3 className="text-center font-semibold mb-4 heading-content">FAQ</h3>
                <p className="font-light leading-tight body-content text-center md:mb-16">
                    {description}
                </p>

                <div className="md:px-24">
                    {questions.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#7f1d1d] via-[#1f2460] to-[#313380] text-white my-4"
                        >
                            <h3>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-900 p-[1rem] md:py-[1.5rem]"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-content-${index}`}
                                >
                                    <span className="text-white">{faq.question}</span>
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
                                        className={`ml-2 transform transition-transform duration-300 text-white ${
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
                                <p className="text-white pb-4 md:p-4">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
