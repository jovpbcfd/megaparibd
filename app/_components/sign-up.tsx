import ResImage from '@/components/res-image'

import OfficialBanner from '@/public/img/prod/home/How to sign up for Panalobet BD_step by step instructions.webp'

export default function SignUp() {
    return (
        <div id="home-sign-up" className="text-white">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4 md:text-[2rem]">
                    Paano mag-sign up para sa Panalobet BD: sunud-sunod na mga tagubilin?
                </h3>
                <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:justify-between">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={OfficialBanner}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto md:rounded-xl"
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <p className="font-light leading-tight text-[1rem]">
                            Ikaw ay dapat na 18 taong gulang o mas matanda upang lumikha ng isang
                            account sa site na ito. Ang mga menor de edad ay hindi pinapayagang
                            magsugal o tumaya sa sports. Kung ikaw ay 18 taong gulang na, dumaan sa
                            3 maikling hakbang upang simulan ang paglalaro:
                        </p>

                        <ol className="list-decimal list-inside">
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">
                                    Buksan ang registration form.{' '}
                                </strong>
                                Pumunta sa home page ng site at i-click ang button para irehistro
                                ang iyong account. Piliin kung paano gumawa ng account sa
                                pamamagitan ng numero ng telepono, email, o 1-click
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Piliin ang uri ng bonus. </strong>
                                Sa tabi ng form ng pagpaparehistro, magagawa mong pumili ng isa sa
                                kasalukuyang mga bonus ng Panalobet. Kung interesado ka sa pagtaya
                                sa sports, tukuyin ang bonus sa sports.
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Magbigay ng impormasyon. </strong>
                                Punan ang form na may personal na impormasyon. Gayundin,
                                siguraduhing ilagay ang promo code sa naaangkop na field.
                            </li>
                        </ol>
                        <p className="font-light leading-tight text-[1rem]">
                            Pagkatapos makumpleto ang pagpaparehistro, magagawa mong mag-log in sa
                            iyong account, magdeposito ng iyong account, at magsimulang maglaro. Ang
                            ginawang account ay magiging angkop para sa awtorisasyon kapwa sa
                            opisyal na website at sa mobile application.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
