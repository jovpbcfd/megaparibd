import ResImage from '@/components/res-image'
import OnlineCasinoImage from '@/public/img/prod/home/15_Online Casino Panalobet.webp'

export default function OnlineCasino() {
    return (
        <div id="home-casino" className="text-white">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={OnlineCasinoImage}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto md:rounded-xl md:shadow-2xl"
                        />
                    </div>

                    <div className="w-full md:w-[50%]">
                        <h3 className="text-[1.25rem] text-left font-semibold mb-4 md:text-[2rem]">
                            Online Casino Panalobet
                        </h3>
                        <p className="font-light leading-tight text-[1rem] mb-8">
                            Nagsusumikap kaming tiyakin na ang lahat ng aming mga customer ay
                            nakakakuha ng pinaka magkakaibang mga pagkakataon para sa isang masayang
                            libangan. Samakatuwid, kung napagod ka sa pagtaya sa sports, maaari kang
                            pumunta sa seksyon ng online casino at subukan ang iyong kapalaran sa
                            libu-libong mga laro sa pagsusugal. Ang lahat ng mga ito ay nahahati sa
                            dalawang kategorya:
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
                                        Normal. Ito ay mga slot machine, table games, at iba pang
                                        entertainment na nagaganap nang walang partisipasyon ng mga
                                        live na tao. Ang mga resulta ay nakasalalay sa isang random
                                        na generator ng numero
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
                                        Mabuhay. Sa mga laro na may mga live na dealer, maaari mong
                                        panoorin ang host sa live na mode, makipag-usap sa kanya sa
                                        pamamagitan ng chat, atbp.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <p className="font-light leading-tight text-[1rem]">
                            Ang listahan ng entertainment sa mga online casino Panalobet Philippines
                            ay patuloy na lumalawak. Palagi kang naghihintay para sa mga
                            kapana-panabik na laro mula sa pinakamahusay na mga developer sa mundo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
