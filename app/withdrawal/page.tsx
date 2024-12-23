import Hero from '@/components/hero'
import TableOfContents from '@/components/table-content'
import Faq from '@/components/faq'

import HomeBanner from '@/public/img/panalobet-main-hero.webp'

const tableOfContentsData = [
    {
        title: 'Paano Mag-withdraw ng Pera: Mga Hakbang-hakbang na Tagubilin',
        link: '#',
    },
    {
        title: 'Mga Sistema ng Pagbabayad',
        link: '#',
    },
    {
        title: 'Mga Kundisyon sa Pag-withdraw sa Panalobet Philippines',
        link: '#',
    },
    {
        title: 'FAQ',
        link: '#',
    },
]

const withdrawalPage = {
    image: HomeBanner,
    title: 'Paano Mag-withdraw ng Pera sa Panalobet Philippines',
    description: `Kapag nakuha mo ang iyong unang panalo mula sa pagtaya sa Panalobet Philippines bookmaker, magagawa mong i-withdraw ang mga ito. Ang lahat ng mga transaksyon sa pagbabayad sa site at sa app ay ginawa sa pamamagitan ng cashier. 
                Nagbigay kami ng suporta para sa dose-dosenang mga sistema ng pagbabayad, kabilang ang mga sikat sa Pilipinas. 
                At salamat sa mataas na bilis ng pagproseso ng aplikasyon, mababang limitasyon, at 24/7 na suporta, hindi ka magkakaroon ng anumang mga problema kapag sinusubukan mong makuha ang iyong mga panalo.`,
    buttonText: '',
}

const questions = [
    {
        question: 'Maaari ba akong mag-withdraw ng pera sa ibang pera?',
        answer: 'Oo, ngunit ang mga bayarin sa conversion ay maaaring itago para sa palitan ng pera.',
    },
    {
        question: 'Maaari ko bang i-withdraw ang bonus?',
        answer: 'Ang pera ng bonus ay maaaring bawiin lamang pagkatapos na ganap na matugunan ang mga kondisyon para sa pagtaya.',
    },
    {
        question: 'Maaari ba akong mag-withdraw ng pera sa maraming wallet?',
        answer: 'Oo, kapag nag-withdraw ka pipiliin mo ang sistema ng pagbabayad na gusto mong gamitin.',
    },
    {
        question: 'Maaari ba akong mag-withdraw ng pera sa pamamagitan ng app?',
        answer: 'Oo, ang Panalobet Philippines mobile app para sa Android at iOS ay sumusuporta sa isang ganap na cash register na may kakayahang magdeposito at mag-withdraw ng pera.',
    },
]

export default function WithdrawalPage() {
    return (
        <>
            <Hero
                image={withdrawalPage.image}
                title={withdrawalPage.title}
                description={withdrawalPage.description}
                buttonText={withdrawalPage.buttonText}
            />
            <TableOfContents content={tableOfContentsData} />
            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4">
                    <div className="mb-10">
                        <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                            Paano Mag-withdraw ng Pera: Hakbang sa Hakbang na Mga Tagubilin?
                        </h3>
                        <p>
                            Ang pamamaraan ng withdrawal sa opisina ng Panalobet bookmaker ay kasing
                            simple hangga&apos;t maaari. Kasama lang dito ang ilang hakbang. Para
                            gumawa ng kahilingan para sa funds transfer, sundin ang mga hakbang na
                            inilalarawan sa ibaba.
                        </p>
                    </div>

                    <div className="w-full grid gap-4 md:grid-cols-2 md:gap-16">
                        <div className="md:order-1">
                            <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                01
                            </p>
                            <div className="bg-gray-100 p-3 text-center md:text-right md:p-4">
                                <h4 className="text-md mb-2 font-medium md:text-xl">
                                    Magbukas ng Cash Register
                                </h4>
                                <p className="leading-tight md:w-[70%] md:ml-auto">
                                    Pagkatapos mag-log in, pumunta sa seksyon ng Cashier. Magagawa
                                    mo ito sa pamamagitan ng pag-click sa status ng balanse, o sa
                                    pamamagitan ng mga setting ng profile. Pagkatapos pumunta sa
                                    cashier, piliin ang tab na withdrawal.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-2 border-dashed rounded-md md:order-2">
                            Image
                        </div>
                        <div className="md:order-4">
                            <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                02
                            </p>
                            <div className="bg-gray-100 p-3 text-center md:text-right md:p-4">
                                <h4 className="text-md mb-2 font-medium md:text-xl">
                                    Tukuyin ang Sistema ng Pagbabayad
                                </h4>
                                <p className="leading-tight md:w-[70%] md:ml-auto">
                                    Sa mga serbisyong ipinakita sa window na ito, piliin ang gusto
                                    mong gamitin para mag-withdraw ng mga pondo. Upang gawin ito,
                                    mag-click sa kaukulang logo.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-2 border-dashed rounded-md md:order-3">
                            Image
                        </div>
                        <div className="md:order-5">
                            <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                03
                            </p>
                            <div className="bg-gray-100 p-3 text-center md:text-right md:p-4">
                                <h4 className="text-md mb-2 font-medium md:text-xl">
                                    Punan ang mga Patlang
                                </h4>
                                <p className="leading-tight md:w-[70%] md:ml-auto">
                                    Ipasok ang mga detalye, contact at impormasyon sa pagbabayad sa
                                    lahat ng mga blangkong linya. Suriin ang impormasyon at
                                    kumpirmahin ang paglikha ng application. Pagkatapos ay hintayin
                                    ang mga pondo na ma-kredito sa account.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-2 border-dashed rounded-md md:order-6">
                            Image
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16 md:pb-10">
                    <div className="md:flex md:gap-16">
                        <div className="md:w-[50%]">
                            <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                                Mga Sistema ng Pagbabayad
                            </h3>
                            <p className="mb-2 md:mb-10">
                                Upang bigyan ang mga user ng maximum na kaginhawahan,
                                nakikipagtulungan kami sa isang malaking bilang ng mga serbisyo sa
                                pagbabayad na sikat sa Pilipinas. Tingnan ang kanilang kumpletong
                                listahan sa cashier&apos;s desk. Narito ang mga serbisyong madalas
                                piliin ng aming mga kliyente:
                            </p>

                            <div>
                                <ul className="grid grid-cols-2 md:grid-cols-3">
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">
                                            Nagad;
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">
                                            Bkash;
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">
                                            Rocket;
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">Upay;</p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">
                                            AstroPay;
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">
                                            Jeton Wallet;
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">
                                            Kvitum;
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">
                                            Cryptocurrencies.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <p>
                                Ang lahat ng mga sistema ng pagbabayad na ito ay gumagana nang
                                bilateral, iyon ay, maaari mong gamitin ang mga ito upang
                                magdeposito at mag-withdraw ng pera.
                            </p>
                        </div>

                        <div className="flex items-center justify-center border-2 border-dashed rounded-md md:w-[50%]">
                            Image
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16 md:pb-10">
                    <div className="md:flex md:gap-16">
                        <div className="md:w-[50%]">
                            <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                                Mga Kundisyon sa Pag-withdraw sa Panalobet Philippines
                            </h3>
                            <p className="mb-2 md:mb-10">
                                Bago gumawa ng withdrawal application, tiyaking pamilyar ka sa mga
                                tuntuning inaalok ng bawat indibidwal na sistema ng pagbabayad.
                                gayundin, ang ilang kundisyon ay tinukoy ng aming tanggapan ng
                                bookmaker. Tungkol saan ito:
                            </p>

                            <div>
                                <ul className="grid grid-cols-2 md:grid-cols-1">
                                    <li className="flex items-center gap-5 pb-2 md:pb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">
                                            Ang pinakamababang halaga ng withdrawal ay 150 PHP.
                                            Hindi ka makakapag-withdraw ng mas mababa kaysa doon;
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">
                                            Ang oras ng pagpoproseso ng aplikasyon ay hindi hihigit
                                            sa 7 araw, ngunit sa pagsasagawa ang pera ay dumarating
                                            sa average na 2-3 oras;
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">
                                            Ang mga withdrawal ay maaari lamang gawin sa mga
                                            e-wallet at bank card na pagmamay-ari ng may-ari ng
                                            account;
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:w-[70%] md:mr-auto">
                                            Isang kahilingan sa pag-withdraw lamang ang maaaring
                                            gawin sa isang pagkakataon. Ipoproseso ang mga kasunod
                                            na kahilingan ayon sa priyoridad.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <p>
                                Ang lahat ng mga sistema ng pagbabayad na ito ay gumagana nang
                                bilateral, iyon ay, maaari mong gamitin ang mga ito upang
                                magdeposito at mag-withdrawAngPanalobet Philippines ay hindi
                                naniningil ng bayad sa pag-withdraw, ngunit maaaring ito ay itinakda
                                ng sistema ng pagbabayad. Isaalang-alang ito.
                            </p>
                        </div>

                        <div className="flex items-center justify-center border-2 border-dashed rounded-md md:w-[50%]">
                            Image
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
