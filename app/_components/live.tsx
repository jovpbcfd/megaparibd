import ResImage from '@/components/res-image'
import LiveImage from '@/public/img/prod/home/13_Live Betting.webp'

export default function Live() {
    return (
        <div id="home-betting-live" className="text-white">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={LiveImage}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto md:rounded-xl"
                        />
                    </div>

                    <div className="w-full md:w-[50%]">
                        <h3 className="text-[1.25rem] text-left font-semibold mb-4 md:text-[2rem]">
                            Live na Pagtaya
                        </h3>
                        <p className="font-light leading-tight text-[1rem] mb-8">
                            Ang kategoryang ito ng pagtaya sa palakasan ay mag-aapela sa mga taong
                            bihasa sa kahit isang isport at mabilis na makakapag-react sa mga
                            kaganapang nagaganap sa field. Ang Live na seksyon ay nagpapakita ng mga
                            laban na nagsimula na. Maaari kang tumaya sa kanila sa real-time. Ang
                            ganitong uri ng hula ay may ilang mahahalagang pagkakaiba mula sa
                            karaniwan:
                        </p>
                        <ul>
                            <li className="flex items-center items-stretch gap-4 mb-2 md:mb-8">
                                <div className="self-start bg-blue-50 p-2 rounded-md">
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
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <p className="leading-tight">
                                        Ang bawat laban na ipinakita dito ay nagsimula na
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center items-stretch gap-4 mb-2 md:mb-8">
                                <div className="self-start bg-blue-50 p-2 rounded-md">
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
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <p className="leading-tight">
                                        Para sa maraming mga laban mayroong mga live na broadcast na
                                        maaari mong panoorin
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center items-stretch gap-4 mb-2 md:mb-8">
                                <div className="self-start bg-blue-50 p-2 rounded-md">
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
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <p className="leading-tight">
                                        Ang mga coefficient ay maaaring magbago nang madalas, na
                                        tumutugon sa mga pagbabago sa kurso ng paghaharap.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <p className="font-light leading-tight text-[1rem]">
                            Maaari mong pagsamahin ang mga live na taya sa mga regular na taya,
                            gumawa ng mga indibidwal na hula, o ipahayag. Ang bilang ng mga
                            kaganapang palaging available sa mga user ay lumampas sa 100 tugma.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
