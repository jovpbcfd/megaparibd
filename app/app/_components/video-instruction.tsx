import ResImage from '@/components/res-image'

import RegisterImage from '@/public/img/prod/app/Pagpaparehistro sa pamamagitan ng App.webp'

export default function VideoInstruction() {
    return (
        <section className="bg-[#fffdf4]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-24">
                <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                    Mga Tagubilin sa Video para sa Pag-download at Pag-install ng Panalobet
                    Philippines App para sa Android at iOS
                </h3>
                <p className="font-light leading-tight text-[1rem]">
                    Sa maikling video sa ibaba ay binigyan ka namin ng sunud-sunod na mga tagubilin
                    kung paano i-download at i-install ang Philippines mobile bookmaker app. Sundin
                    ang mga tagubilin sa gabay na ito, at sa loob lamang ng ilang minuto ay
                    makakapagsimula ka nang maglaro.
                </p>

                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={RegisterImage}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto md:rounded-xl"
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <h3 className="text-[1.25rem] text-center font-semibold mb-4 md:text-left">
                            Pagpaparehistro sa pamamagitan ng App
                        </h3>
                        <p className="font-light leading-tight text-[1rem]">
                            Kung wala ka pa ring account, maaari kang gumawa ng isa sa pamamagitan
                            ng app. Upang gawin ito, i-download at i-install ang program, at
                            pagkatapos ay sundin ang ilang higit pang mga hakbang:
                        </p>

                        <ol className="list-decimal list-inside">
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">
                                    Buksan ang registration form.{' '}
                                </strong>
                                I-click ang button para magparehistro pagkatapos ilunsad ang
                                application at piliin kung paano gumawa ng account. Maaari itong
                                mairehistro sa pamamagitan ng email, numero ng telepono, o isang
                                pag-click;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Pumili ng bonus. </strong>
                                Tukuyin ang uri ng bonus na nais mong matanggap. Maaari kang pumili
                                ng sports bonus para sa pagtaya sa Panalobet Philippines, o para sa
                                paglalaro sa casino;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Punan ang mga patlang. </strong>
                                Ilagay ang iyong personal na data sa lahat ng walang laman na linya.
                                Ilagay ang kumbinasyon ng mga character na MEGA2022 sa field ng
                                promo code para maging kwalipikado para sa lahat ng kasalukuyang
                                bonus ng site.
                            </li>
                        </ol>

                        <p className="font-light leading-tight text-[1rem]">
                            Ang ginawang account ay maaaring gamitin para mag-log in pareho sa app
                            at sa opisyal na website.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
