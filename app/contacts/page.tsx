import Image from 'next/image'
import Hero from '@/components/hero'
import Update from '@/components/update'

import HeroImage from '@/public/img/prod/contacts/HERO CONTACT.webp'
import ListContactImage from '@/public/img/prod/contacts/Contact List.webp'

import { hero } from '@/data/contact-page'

export default function ContactPage() {
    return (
        <>
            <Hero
                image={HeroImage}
                title={hero.title}
                description={hero.description}
                buttonText=""
            />
            <section className="bg-[#fffdf4]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16 md:pb-10">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:mt-12 md:gap-16">
                        <div>
                            <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                                Listahan ng Mga Contact
                            </h3>
                            <p className="leading-tight mb-2 md:mb-8">
                                Kung mayroong anumang mga problema, tanong at komersyal na alok, ang
                                mga gumagamit ay maaaring makipag-ugnay sa pangangasiwa ng site nang
                                direkta sa pamamagitan ng isa sa mga opisyal na contact. Ang mga
                                pangunahing ay ililista sa ibaba.
                            </p>

                            <ul className="mb-2 md:mb-4">
                                <li className="flex items-center items-stretch gap-4 mb-2 md:mb-8">
                                    <div className="self-start bg-blue-100 p-2 rounded-md">
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
                                            className="text-blue-300"
                                        >
                                            <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
                                            <path d="M6 12h16" />
                                        </svg>
                                    </div>
                                    <p className="leading-tight">
                                        E-mail para sa mga pangkalahatang katanungan:
                                        support@panalobet.com
                                    </p>
                                </li>
                                <li className="flex items-stretch gap-4 mb-2 md:mb-8">
                                    <div className="self-start bg-blue-100 p-2 rounded-md">
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
                                            className="text-blue-300"
                                        >
                                            <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
                                            <path d="M6 12h16" />
                                        </svg>
                                    </div>
                                    <p className="leading-tight">
                                        E-mail para sa mga isyu sa seguridad: security@panalobet.com
                                    </p>
                                </li>
                                <li className="flex items-stretch gap-4 mb-2 md:mb-8">
                                    <div className="self-start bg-blue-100 p-2 rounded-md">
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
                                            className="text-blue-300"
                                        >
                                            <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
                                            <path d="M6 12h16" />
                                        </svg>
                                    </div>
                                    <p className="leading-tight">Online chat sa website</p>
                                </li>
                                <li className="flex items-stretch gap-4 mb-2 md:mb-8">
                                    <div className="self-start bg-blue-100 p-2 rounded-md">
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
                                            className="text-blue-300"
                                        >
                                            <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
                                            <path d="M6 12h16" />
                                        </svg>
                                    </div>
                                    <p className="leading-tight">Mga grupo sa mga social network</p>
                                </li>
                            </ul>

                            <p className="leading-tight">
                                Lubos naming inirerekumenda na gumamit ka lamang ng mga opisyal at
                                na-verify na contact upang maiwasan ang panganib na makatagpo ng mga
                                scammer at mga site na nagpapanggap bilang Panalobet.
                            </p>
                        </div>

                        <div className="flex items-center justify-center">
                            <Image
                                src={ListContactImage}
                                width={598}
                                height={506}
                                alt="List of Contact"
                                priority={true}
                                className="rounded-xl md:shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Update />
        </>
    )
}
