import ResImage from '@/components/res-image'
import CricketImage from '@/public/img/prod/home/9_Cricket.webp'
import SoccerImage from '@/public/img/prod/home/10_Soccer.webp'
import TennisImage from '@/public/img/prod/home/11_Tennis.webp'

export default function TypesOfSports() {
    return (
        <div className="text-white">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4 md:mb-5 md:text-[2rem]">
                    Mga uri ng pagtaya sa sports sa Panalobet BD
                </h3>
                <p className="font-light leading-tight text-[1rem] text-center md:mb-16">
                    Ang isa sa mga pangunahing bentahe ng opisina ng bookmaker ay ang suporta ng
                    isang malaking bilang ng mga sports para sa pagtaya. Sa amin, makakagawa ka ng
                    mga hula sa pinakasikat na palakasan.
                </p>

                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:mb-8">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={CricketImage}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto"
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <h3 className="text-[1.25rem] text-left font-semibold mb-4">Kuliglig</h3>
                        <p className="font-light leading-tight text-[1rem] mb-8">
                            Lalo na sikat ang isport na ito sa mga bansang Asyano. Pagkatapos
                            magrehistro sa website ng Panalobet, magagawa mong tumaya sa daan-daang
                            mga laban sa lahat ng mga pangunahing kampeonato:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-3">
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
                                    <p className="leading-tight">IPL</p>
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
                                    <p className="leading-tight">ODI</p>
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
                                    <p className="leading-tight">Serye ng abo</p>
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
                                    <p className="leading-tight">Dalawampu&apos;t20</p>
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
                                    <p className="leading-tight">Australia laban sa England</p>
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
                                    <p className="leading-tight">Africa vs India, atbp</p>
                                </div>
                            </li>
                        </ul>
                        <p className="font-light leading-tight text-[1rem]">
                            Ang pagpili ng isang partikular na kaganapan, makikita mo ang isang
                            listahan ng lahat ng mga posibilidad na magagamit para sa pagtaya.
                            Idagdag ang mga ito sa kupon, tukuyin ang uri ng taya at ang halaga at
                            gawin ang iyong hula.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:mb-8">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={SoccerImage}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto"
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <h3 className="text-[1.25rem] text-left font-semibold mb-4">Soccer</h3>
                        <p className="font-light leading-tight text-[1rem] mb-8">
                            Sikat na sikat ang soccer sa mga bansang Europeo, ngunit gusto rin ito
                            ng mga mamamayan ng Pilipinas. Ito ang pinakamalawak na kategorya para
                            sa pagtaya, na nag-aalok ng higit sa 1,000 posibleng resulta araw-araw.
                            Sinusuportahan namin ang dose-dosenang mga kumpetisyon:
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
                                    <p className="leading-tight">Champions League</p>
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
                                    <p className="leading-tight">Liga ng Europa</p>
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
                                        Mga kampeonato sa Italy, England, France, Germany at
                                        dose-dosenang iba pang mga bansa
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
                                        World Championships, Europe, atbp.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p className="font-light leading-tight text-[1rem]">
                            Maaaring ilagay ang mga taya sa parehong seasonal at friendly na mga
                            laban. At ang pagpili ng mga posibleng resulta ay magpapasaya kahit na
                            ang pinaka masugid na tagahanga ng pagtaya.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:mb-8">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={TennisImage}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto"
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <h3 className="text-[1.25rem] text-left font-semibold mb-4">Tennis</h3>
                        <p className="font-light leading-tight text-[1rem] mb-8">
                            Maraming mga gumagamit ang mahilig sa tennis at mas gustong tumaya sa
                            sport na ito dahil sa malawak na posibilidad at pagkakaiba-iba ng mga
                            resulta. Kasabay nito, mas madaling hulaan ang mga resulta kaysa sa
                            soccer, hockey, at iba pang sports ng koponan. Sa opisina ng bookmaker
                            ng Panalobet Philippines maaari kang tumaya sa iba&apos;t ibang
                            kumpetisyon:
                        </p>
                        <ul className="grid grid-cols-2">
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
                                    <p className="leading-tight">WTA.</p>
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
                                    <p className="leading-tight">UTR.</p>
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
                                    <p className="leading-tight">ITF.</p>
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
                                    <p className="leading-tight">ATF.</p>
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
                                    <p className="leading-tight">Challenger, atbp.</p>
                                </div>
                            </li>
                        </ul>
                        <p className="font-light leading-tight text-[1rem]">
                            Pumili ng isa sa kanila mula sa listahan, tukuyin ang partikular na
                            pagsalungat, piliin ang mga logro at maglagay ng taya sa loob ng ilang
                            minuto.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
