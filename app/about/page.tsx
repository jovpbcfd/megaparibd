import Hero from '@/components/hero'

import HomeBanner from '@/public/img/panalobet-hero-main.webp'
import Update from '@/components/update'

const aboutPage = {
    image: HomeBanner,
    title: 'Tungkol sa Amin',
    description: `Nag-aalok ang Panalobet sa mga user ng malaking hanay ng entertainment sa pagsusugal, mula sa pagtaya sa sports hanggang sa mga online na casino at lottery. Ang platform ay pangunahing nakatuon sa rehiyon ng Asya, na makikita sa suporta ng mga pambansang pera ng mga lokal na bansa, kabilang ang PHP.`,
    buttonText: '',
}

export default function AboutPage() {
    return (
        <>
            <Hero
                image={aboutPage.image}
                title={aboutPage.title}
                description={aboutPage.description}
                buttonText=""
            />
            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16 md:pb-10">
                    <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                        Paano Magsisimula?
                    </h3>
                    <p>
                        Sa Pilipinas, legal na tumatakbo ang Panalobet sa ilalim ng lisensyang
                        ibinigay ng Curacao Gambling Commission. Kinukumpirma ng dokumentong ito ang
                        kaligtasan ng site ng pagtaya at nagpapahintulot sa amin na ayusin ang
                        pagsusugal at pagtaya sa sports sa dose-dosenang mga bansa sa buong mundo.
                    </p>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:mt-12 md:gap-16">
                        <div>
                            <p className="mb-2 md:mb-12">
                                Ang kumpanya ay sumusunod sa ilang mga prinsipyo sa trabaho nito:
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
                                            <path d="M18 20a6 6 0 0 0-12 0" />
                                            <circle cx="12" cy="10" r="4" />
                                            <circle cx="12" cy="12" r="10" />
                                        </svg>
                                    </div>
                                    <p className="leading-tight">
                                        Pagbibigay ng maximum na iba&apos;t ibang entertainment para
                                        sa mga user;
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
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                            <path d="m9 12 2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="leading-tight">
                                        Pagpapanatili ng mataas na antas ng seguridad para sa mga
                                        account at balanse;
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
                                            <polygon points="6 3 20 12 6 21 6 3" />
                                        </svg>
                                    </div>
                                    <p className="leading-tight">
                                        Paggalang sa mga prinsipyo ng responsableng paglalaro.
                                    </p>
                                </li>
                            </ul>

                            <p className="leading-tight mb-4">
                                To this end, we are constantly developing and improving, offering
                                players new services, personalized bonuses and other gaming
                                benefits.
                            </p>

                            <p className="leading-tight">
                                To start betting at the Megapari Bangladesh bookmaker’s office, just
                                choose one of the outcomes on the website or in the app, click on
                                the odds corresponding to it and fill in the betting slip,
                                specifying its type and amount.
                            </p>
                        </div>

                        <div className="flex items-center justify-center border-2 border-dashed rounded-md">
                            image
                        </div>
                    </div>
                </div>
            </section>
            <Update />
        </>
    )
}
