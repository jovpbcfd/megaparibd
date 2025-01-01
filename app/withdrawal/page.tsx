import Image from 'next/image'

import Hero from '@/components/hero'
import TableOfContents from '@/components/table-content'
import Faq from '@/components/faq'

import HeroImage from '@/public/img/prod/withdrawal/PANALOBET HERO SECTION WITHDRAWAL.webp'
import StepOneImage from '@/public/img/prod/withdrawal/1. NEW - Open a Cash Register..webp'
import StepTwoImage from '@/public/img/prod/withdrawal/2. NEW - Specify the Payment System..webp'
import StepThreeImage from '@/public/img/prod/withdrawal/3. NEW - Fill Out the Fields..webp'
import ConditionWithdrawImage from '@/public/img/prod/withdrawal/Mga Kundisyon sa Pag-withdraw sa Panalobet Philippines.webp'
import SystemWithdrawImage from '@/public/img/prod/withdrawal/Mga Sistema ng Pagbabayad.webp'

import { hero, tableOfContentsData, questions } from '@/data/withdrawal-page'

export default function WithdrawalPage() {
    return (
        <>
            <Hero
                image={HeroImage}
                title={hero.title}
                description={hero.description}
                buttonText={hero.buttonText}
            />
            <TableOfContents content={tableOfContentsData} />
            <section id="withdrawal-step" className="bg-[#fffdf4] md:pb-12">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:py-16">
                    <div className="mb-10">
                        <h3 className="heading-content leading-tight text-left font-semibold mb-4">
                            Paano Mag-withdraw ng Pera: Hakbang sa Hakbang na Mga Tagubilin?
                        </h3>
                        <p className="body-content md:pb-16">
                            Ang pamamaraan ng withdrawal sa opisina ng Panalobet bookmaker ay kasing
                            simple hangga&apos;t maaari. Kasama lang dito ang ilang hakbang. Para
                            gumawa ng kahilingan para sa funds transfer, sundin ang mga hakbang na
                            inilalarawan sa ibaba.
                        </p>
                    </div>

                    <div className="w-full grid gap-4 md:grid-cols-2 md:gap-16">
                        <div className="md:order-2 md:self-center">
                            <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                01
                            </p>
                            <div className="bg-gray-100 p-3 text-center md:text-left md:p-4">
                                <h4 className="mb-2 font-medium sub-heading-content">
                                    Magbukas ng Cash Register
                                </h4>
                                <p className="leading-tight body-content">
                                    Pagkatapos mag-log in, pumunta sa seksyon ng Cashier. Magagawa
                                    mo ito sa pamamagitan ng pag-click sa status ng balanse, o sa
                                    pamamagitan ng mga setting ng profile. Pagkatapos pumunta sa
                                    cashier, piliin ang tab na withdrawal.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:p-2 md:border-2 md:border-dashed md:rounded-xl md:order-1">
                            <Image
                                src={StepOneImage}
                                width={598}
                                height={576}
                                alt="Step One"
                                priority={true}
                                quality={100}
                                className="md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                        <div className="md:order-3 md:self-center">
                            <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                02
                            </p>
                            <div className="bg-gray-100 p-3 text-center md:text-left md:p-4">
                                <h4 className="mb-2 font-medium sub-heading-content">
                                    Tukuyin ang Sistema ng Pagbabayad
                                </h4>
                                <p className="leading-tight body-content">
                                    Sa mga serbisyong ipinakita sa window na ito, piliin ang gusto
                                    mong gamitin para mag-withdraw ng mga pondo. Upang gawin ito,
                                    mag-click sa kaukulang logo.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:p-2 md:border-2 md:border-dashed md:rounded-xl  md:order-4">
                            <Image
                                src={StepTwoImage}
                                width={598}
                                height={248}
                                alt="Step One"
                                priority={true}
                                quality={100}
                                className="md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                        <div className="md:order-6 md:self-center">
                            <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                03
                            </p>
                            <div className="bg-gray-100 p-3 text-center md:text-left md:p-4">
                                <h4 className="mb-2 font-medium sub-heading-content">
                                    Punan ang mga Patlang
                                </h4>
                                <p className="leading-tight body-content">
                                    Ipasok ang mga detalye, contact at impormasyon sa pagbabayad sa
                                    lahat ng mga blangkong linya. Suriin ang impormasyon at
                                    kumpirmahin ang paglikha ng application. Pagkatapos ay hintayin
                                    ang mga pondo na ma-kredito sa account.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:p-2 md:border-2 md:border-dashed md:rounded-xl md:order-5">
                            <Image
                                src={StepThreeImage}
                                width={598}
                                height={248}
                                alt="Step One"
                                priority={true}
                                quality={100}
                                className="md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-[#7f1d1d] via-[#1f2460] to-[#313380]">
                <div id="withdrawal-conditions" className="text-white">
                    <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16 md:pb-10">
                        <div className="md:flex md:gap-16">
                            <div className="md:w-[50%]">
                                <h3 className="heading-content leading-tight text-left font-semibold mb-4">
                                    Mga Kundisyon sa Pag-withdraw sa Panalobet Philippines
                                </h3>
                                <p className="body-content leading-tight mb-2 md:mb-10">
                                    Bago gumawa ng withdrawal application, tiyaking pamilyar ka sa
                                    mga tuntuning inaalok ng bawat indibidwal na sistema ng
                                    pagbabayad. gayundin, ang ilang kundisyon ay tinukoy ng aming
                                    tanggapan ng bookmaker. Tungkol saan ito:
                                </p>

                                <div>
                                    <ul className="grid grid-cols-2 md:grid-cols-1">
                                        <li className="flex items-center gap-5 pb-2 md:pb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                Ang pinakamababang halaga ng withdrawal ay 150 PHP.
                                                Hindi ka makakapag-withdraw ng mas mababa kaysa
                                                doon;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                Ang oras ng pagpoproseso ng aplikasyon ay hindi
                                                hihigit sa 7 araw, ngunit sa pagsasagawa ang pera ay
                                                dumarating sa average na 2-3 oras;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                Ang mga withdrawal ay maaari lamang gawin sa mga
                                                e-wallet at bank card na pagmamay-ari ng may-ari ng
                                                account;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                Isang kahilingan sa pag-withdraw lamang ang maaaring
                                                gawin sa isang pagkakataon. Ipoproseso ang mga
                                                kasunod na kahilingan ayon sa priyoridad.
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <p className="leading-tight body-content">
                                    Ang lahat ng mga sistema ng pagbabayad na ito ay gumagana nang
                                    bilateral, iyon ay, maaari mong gamitin ang mga ito upang
                                    magdeposito at mag-withdrawAngPanalobet Philippines ay hindi
                                    naniningil ng bayad sa pag-withdraw, ngunit maaaring ito ay
                                    itinakda ng sistema ng pagbabayad. Isaalang-alang ito.
                                </p>
                            </div>

                            <div className="flex items-center justify-center md:w-[50%]">
                                <Image
                                    src={ConditionWithdrawImage}
                                    width={598}
                                    height={248}
                                    alt="Step One"
                                    priority={true}
                                    className="rounded-xl  md:shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="withdrawal-methods" className="text-white">
                    <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-24 md:pb-10">
                        <div className="md:flex md:gap-16">
                            <div className="md:w-[50%]">
                                <h3 className="heading-content text-left font-semibold mb-4">
                                    Mga Sistema ng Pagbabayad
                                </h3>
                                <p className="mb-2 body-content leading-tight md:mb-10">
                                    Upang bigyan ang mga user ng maximum na kaginhawahan,
                                    nakikipagtulungan kami sa isang malaking bilang ng mga serbisyo
                                    sa pagbabayad na sikat sa Pilipinas. Tingnan ang kanilang
                                    kumpletong listahan sa cashier&apos;s desk. Narito ang mga
                                    serbisyong madalas piliin ng aming mga kliyente:
                                </p>

                                <div>
                                    <ul className="grid grid-cols-2 md:grid-cols-3">
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                Nagad;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                Bkash;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                Rocket;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                Upay;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                AstroPay;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                Jeton Wallet;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                Kvitum;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight list-body-content md:w-[70%] md:mr-auto">
                                                Cryptocurrencies.
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <p className="body-content leading-tight">
                                    Ang lahat ng mga sistema ng pagbabayad na ito ay gumagana nang
                                    bilateral, iyon ay, maaari mong gamitin ang mga ito upang
                                    magdeposito at mag-withdraw ng pera.
                                </p>
                            </div>

                            <div className="flex items-center justify-center md:w-[50%]">
                                <Image
                                    src={SystemWithdrawImage}
                                    width={598}
                                    height={248}
                                    alt="Step One"
                                    priority={true}
                                    className="rounded-xl md:shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Faq
                questions={questions}
                description={`Sa ibaba ay nagbibigay kami ng mga sagot sa ilang karaniwang tanong ng user. Kung hindi mo mahanap ang impormasyong kailangan mo dito, mangyaring makipag-ugnayan sa suporta para sa tulong.`}
            />
        </>
    )
}
