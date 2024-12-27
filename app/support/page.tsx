import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/hero'
import TableOfContents from '@/components/table-content'
import Faq from '@/components/faq'
import Update from '@/components/update'

import HeroImage from '@/public/img/prod/support/HERO SUPPORT.webp'
import EmailImage from '@/public/img/prod/support/Email.webp'
import OnsiteImage from '@/public/img/prod/support/On-site Chat.webp'

import { hero, questions, tableOfContents } from '@/data/support-page'

export default function SupportPage() {
    return (
        <>
            <Hero
                image={HeroImage}
                title={hero.title}
                description={hero.description}
                buttonText={hero.buttonText}
            />
            <TableOfContents content={tableOfContents} />
            <section id="support-email" className="bg-[#fffdf4]">
                <div className="grid grid-cols-1 gap-4  max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:grid-cols-2 md:gap-16 md:pb-16">
                    <div>
                        <div className="mb-12">
                            <h3 className="text-[1.25rem] text-left font-semibold mb-4">Email</h3>
                            <p>
                                Ang pinaka maraming nalalaman na paraan upang makipag-ugnayan sa
                                sinumang may problema. Maaari kang sumulat sa isa sa dalawang
                                opisyal na email address, depende sa problemang kinakaharap mo.
                            </p>
                            <div className="my-4">
                                <p>
                                    <span>Para sa mga pangkalahatang tanong, pumunta sa </span>
                                    <Link
                                        href="mailto:support@panalobet.com"
                                        className="font-bold text-blue-900"
                                    >
                                        support@panalobet.com.
                                    </Link>
                                </p>
                                <p>
                                    <span>Para sa mga pangkalahatang tanong, pumunta sa </span>
                                    <Link
                                        href="mailto:security@panalobet.com"
                                        className="font-bold text-blue-900"
                                    >
                                        security@panalobet.com.
                                    </Link>
                                </p>
                            </div>

                            <p>
                                At huwag kalimutan ang mga pangunahing prinsipyo ng pagiging
                                magalang at mga pamantayan ng komunikasyon. Huwag maging bastos sa
                                serbisyo ng suporta. Lalo na&apos;t maaari kang ma-block para sa mga
                                insulto.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={EmailImage}
                                width={500}
                                height={200}
                                alt="Email Support"
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="bg-red-50 py-4 px-3 rounded-md mb-2 md:mb-4">
                            <div className="flex items-stretch gap-4">
                                <div className="self-start bg-red-100 p-2 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-red-300"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" x2="12" y1="8" y2="12" />
                                        <line x1="12" x2="12.01" y1="16" y2="16" />
                                    </svg>
                                </div>
                                <p className="text-sm leading-tight">
                                    Maaari kang makatanggap ng tugon mula sa koponan ng suporta sa
                                    loob ng ilang oras. Minsan, maaaring mas matagal bago
                                    makatanggap ng tugon kapag ang aming team ng suporta ay abala.
                                    Hindi mo direktang maimpluwensyahan ang bilis ng pagproseso ng
                                    iyong kahilingan, ngunit maaari mong gawing mas madali ang aming
                                    trabaho. Upang gawin ito, mangyaring sundin ang mga sumusunod na
                                    rekomendasyon:
                                </p>
                            </div>
                        </div>

                        <ul className="md:pl-4">
                            <li className="flex items-stretch gap-4 mb-2">
                                <div className="self-start bg-gray-200 p-2 rounded-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-gray-400"
                                    >
                                        <path d="M2 21a8 8 0 0 1 10.821-7.487" />
                                        <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                                        <circle cx="10" cy="8" r="5" />
                                    </svg>
                                </div>
                                <p className="leading-tight">
                                    Huwag gumawa ng maramihang mga thread ng komunikasyon. Magpadala
                                    lamang ng isang email at makipag-ugnayan sa pamamagitan nito.
                                    Hindi mo kailangang gumawa ng maraming thread. Hindi ito
                                    makakatulong na malutas ang problema nang mas mabilis;
                                </p>
                            </li>
                            <li className="flex items-stretch gap-4 mb-2">
                                <div className="self-start bg-gray-200 p-2 rounded-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-gray-400"
                                    >
                                        <path d="M2 21a8 8 0 0 1 10.821-7.487" />
                                        <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                                        <circle cx="10" cy="8" r="5" />
                                    </svg>
                                </div>
                                <p className="leading-tight">
                                    Huwag gumawa ng maramihang mga thread ng komunikasyon. Magpadala
                                    lamang ng isang email at makipag-ugnayan sa pamamagitan nito.
                                    Hindi mo kailangang gumawa ng maraming thread. Hindi ito
                                    makakatulong na malutas ang problema nang mas mabilis;
                                </p>
                            </li>
                            <li className="flex items-stretch gap-4 mb-2">
                                <div className="self-start bg-gray-200 p-2 rounded-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-gray-400"
                                    >
                                        <path d="M2 21a8 8 0 0 1 10.821-7.487" />
                                        <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                                        <circle cx="10" cy="8" r="5" />
                                    </svg>
                                </div>
                                <p className="leading-tight">
                                    Huwag gumawa ng maramihang mga thread ng komunikasyon. Magpadala
                                    lamang ng isang email at makipag-ugnayan sa pamamagitan nito.
                                    Hindi mo kailangang gumawa ng maraming thread. Hindi ito
                                    makakatulong na malutas ang problema nang mas mabilis;
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="support-onsite" className="bg-[#fff]">
                <div className="grid grid-cols-1 gap-4 max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:grid-cols-2 md:gap-16 md:pb-16">
                    <div>
                        <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                            On-site na Chat
                        </h3>
                        <p className="leading-tight mb-4">
                            Upang malutas ang mga kagyat na tanong na pumipigil sa iyo sa paglalaro
                            ngayon, maaari mong gamitin ang chat sa site. Upang gawin ito, buksan
                            ang pangunahing pahina ng opisyal na site, hanapin ang pindutan ng
                            pag-activate ng chat, at mag-type ng mensahe sa field. Pagkalipas ng
                            ilang minuto, sasagutin ka ng operator, at maaari mong tanungin siya ng
                            anumang mga katanungan na maaaring mayroon ka.
                        </p>

                        <p className="leading-tight">
                            Tandaan na ang serbisyo ng suporta na Panalobet Philippines sa online na
                            chat sa site ay maaaring sumagot nang matagal sa gabi, pati na rin sa
                            kaso ng isang mabigat na workload. Sa kasong ito, siguraduhing tingnan
                            ang seksyong may mga madalas itanong. Marahil, naroon ang impormasyong
                            kailangan mo.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src={OnsiteImage}
                            width={500}
                            height={200}
                            alt="On-site Chat Support"
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </section>
            <Faq
                questions={questions}
                description={`Sa ibaba ay sasagutin namin ang ilan sa mga tanong na pinakamadalas itanong sa amin ng mga user. Suriin ang impormasyong ito bago makipag-ugnayan sa suporta sa customer para sa tulong.`}
            />
            <Update />
        </>
    )
}
