import ResImage from '@/components/res-image'

import WelcomBannerHome from '@/public/img/prod/home/Welcome bonus for new users up to 20,000 PHP.webp'

export default function WelcomeBonus() {
    return (
        <div id="home-welcome-bonus">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4 md:text-[2rem]">
                    Welcome bonus para sa mga bagong user hanggang 20,000 PHP
                </h3>
                <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:justify-between">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={WelcomBannerHome}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Welcome Banner home"
                            screenSize={900}
                            className="ml-auto md:rounded-xl"
                            quality={100}
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <p className="font-light leading-tight text-[1rem]">
                            Pagkatapos magrehistro at gawin ang iyong unang deposito, makakatanggap
                            ka ng Panalobet starter bonus. Dodoblehin namin ang anumang halaga ng
                            unang deposito hanggang 20,000 PHP at hahayaan kang i-withdraw ang
                            perang ito pagkatapos matugunan ang ilang kundisyon. Upang makilahok sa
                            pag-promote, kailangan mo lamang gawin ang ilang mga aksyon:
                        </p>
                        <ol className="list-decimal ml-4">
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Pagpaparehistro. </strong>
                                Gumawa ng account sa opisyal na website ng Panalobet Philippines.
                                Upang gawin ito, buksan ang pangunahing pahina, mag-click sa
                                pindutan ng Pagpaparehistro, piliin kung paano lumikha ng isang
                                account, at punan ang lahat ng mga blangkong field.
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">
                                    Tukuyin ang personal na impormasyon.{' '}
                                </strong>
                                Pumunta sa mga setting ng account at ilagay ang iyong impormasyon sa
                                lahat ng walang laman na field. Gumamit lamang ng totoong
                                impormasyon. Kung nagkamali ka o sinasadyang maglagay ng maling
                                impormasyon, hindi mo mabe-verify ang iyong account sa hinaharap;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Deposito. </strong>
                                Pindutin ang pindutan ng Deposit upang pumunta sa mesa ng cashier.
                                Pagkatapos ay pumili ng isang sistema ng pagbabayad, punan ang mga
                                detalye at kumpirmahin ang operasyon. Ang pinakamababang halaga ng
                                deposito para ma-activate ang isang bonus ay 100 PHP. Ang maximum na
                                halaga ng bonus – 26,000 PHP.
                            </li>
                        </ol>

                        <p className="font-light leading-tight text-[1rem]">
                            Kapag ang pera ay dumating sa iyong balanse, ang bonus ay awtomatikong
                            maikredito sa iyong account. Ngunit hindi mo agad mai-withdraw ang pera.
                            Upang makuha ang mga ito sa isang bank card o e-wallet, dapat mong
                            matugunan ang mga kondisyon ng pagtaya. Upang gawin ito, kailangan mong
                            tumaya para sa 5 beses ang halaga ng bonus sa loob ng 3 buwan. Sa kasong
                            ito, ang mga taya ay dapat na isang express type para sa 3 o higit pang
                            mga kaganapan na may posibilidad na hindi bababa sa 1.4 para sa bawat
                            isa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
