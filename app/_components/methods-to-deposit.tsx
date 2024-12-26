import ResImage from '@/components/res-image'
import MethodsDeposit from '@/public/img/prod/home/16_Methods to deposit and withdraw money.webp'

export default function MethodsToDeposit() {
    return (
        <div className="text-white">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={MethodsDeposit}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto"
                        />
                    </div>

                    <div className="w-full md:w-[50%]">
                        <h3 className="text-[1.25rem] text-left font-semibold mb-4 md:text-[2rem]">
                            Mga paraan upang magdeposito at mag-withdraw ng pera
                        </h3>
                        <p className="font-light leading-tight text-[1rem] mb-8">
                            Sinusuportahan ng Panalobet Philippines ang dose-dosenang mga sistema ng
                            pagbabayad, mula sa mga bank card hanggang sa mga cryptocurrencies.
                            Nagbigay kami ng kakayahang magdeposito at mag-withdraw ng pera sa
                            pamamagitan ng karamihan sa mga sikat na serbisyo sa rehiyon, kabilang
                            ang:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-4">
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
                                    <p className="leading-tight">Nagad</p>
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
                                    <p className="leading-tight">Bkash</p>
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
                                    <p className="leading-tight">Rocket</p>
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
                                    <p className="leading-tight">Upay</p>
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
                                    <p className="leading-tight">AstroPay</p>
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
                                    <p className="leading-tight">Jeton Wallet</p>
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
                                    <p className="leading-tight">Kvitum</p>
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
                                    <p className="leading-tight">Cryptocurrencies.</p>
                                </div>
                            </li>
                        </ul>

                        <p className="font-light leading-tight text-[1rem]">
                            Ang minimum na deposito ay 75 PHP lamang at ang pinakamababang
                            withdrawal – ay 150 PHP. Pakitandaan na maaaring mag-iba ang mga
                            limitasyong ito sa iba&apos;t ibang sistema ng pagbabayad. Ngunit anuman
                            ito, ang deposito ay agad na kredito, at ang pag-withdraw ay tumatagal
                            ng hindi hihigit sa ilang araw.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
