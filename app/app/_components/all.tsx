import ResImage from '@/components/res-image'
import Table from '@/components/table'

import PromoCodeImage from '@/public/img/prod/app/Promo Code sa App.webp'
import BonusImage from '@/public/img/prod/app/Paano Kumuha ng Panalobet PH Mobile Bonus.webp'
import MethodImage from '@/public/img/prod/app/Mga Paraan ng Pagbabayad.webp'
import StepImage from '@/public/img/prod/app/Paano Maglagay ng Taya sa App1.webp'
import SportBettingImage from '@/public/img/prod/app/Pagtaya sa Palakasan.webp'
import CybersportImage from '@/public/img/prod/app/Cybersports.webp'
import PanalobetImage from '@/public/img/prod/app/Mga tampok ng Panalobet App.webp'
import WebImage from '@/public/img/prod/app/Paano Gamitin ang Web Bersyon ng Panalobet.webp'
import OnlineCasinoImage from '@/public/img/prod/app/Online casino Panalobet.webp'

const diffAppAndWeb = [
    {
        dataLeft: 'Need to download and install',
        dataRight: 'Runs in browser',
    },
    {
        dataLeft: 'Smoother and more user-friendly interface',
        dataRight: 'Standard navigation and interface',
    },
    {
        dataLeft: 'Less high speed requirements for the internet',
        dataRight: 'You need a stable internet connection',
    },
    {
        dataLeft: 'There are minimum system requirements',
        dataRight: 'Works on all devices and operation systems',
    },
]

export default function All() {
    return (
        <>
            <section id="app-web" className="text-white">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={WebImage}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <h3 className="heading-content text-left font-semibold mb-4">
                                Paano Gamitin ang Web Bersyon ng Panalobet
                            </h3>
                            <p className="font-light leading-tight body-content">
                                Kung sa ilang kadahilanan ay hindi mo ma-download ang application sa
                                iyong smartphone, o ang aparato ay hindi nakakatugon sa mga minimum
                                na kinakailangan ng system, maaari kang tumaya sa pamamagitan ng
                                opisyal na website. Upang gawin ito, buksan ang pangunahing pahina
                                ng bookmaker, mag-log in gamit ang iyong username at password at
                                simulan ang paglalaro. Sa mga tuntunin ng mga pagkakataon para sa
                                pagtaya ang site ay hindi mababa sa aplikasyon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="app-mobile-bonus" className="text-white">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={BonusImage}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto md:rounded-xl md:shadow-2xl"
                            />
                        </div>

                        <div className="w-full md:w-[50%]">
                            <h3 className="text-left font-semibold mb-4 heading-content leading-tight">
                                Paano Kumuha ng Panalobet PH Mobile Bonus?
                            </h3>
                            <p className="font-light leading-tight body-content mb-4 md:mb-0">
                                Kapag gumawa ka ng account, magagawa mong i-activate ang welcome
                                bonus para sa mga bagong dating. Ang alok na ito ay nalalapat lamang
                                sa mga bagong may hawak ng account na hindi pa tumaya sa Panalobet
                                Philippines mobile app at sa opisyal na website. Upang maisaaktibo
                                ang bonus kakailanganin mo:
                            </p>
                            <ol className="list-decimal list-inside">
                                <li className="font-light leading-tight my-[1.5rem]">
                                    <strong className="font-bold list-heading-content">
                                        Magrehistro at ilagay ang promo code MEGA2022.{' '}
                                    </strong>
                                    Magagawa mo ito alinman sa site o sa mismong application.
                                    Mag-click sa pindutan upang magparehistro, piliin ang uri nito,
                                    tukuyin ang iyong personal na data, at kumpletuhin ang
                                    pamamaraan ng paglikha ng account;
                                </li>
                                <li className="font-light leading-tight my-[1.5rem]">
                                    <strong className="font-bold list-heading-content">
                                        Punan ang iyong profile.{' '}
                                    </strong>
                                    Kapag nalikha ang account, buksan ang mga setting ng account at
                                    punan ang lahat ng mga blangkong field ng personal na
                                    impormasyon. Gumamit lamang ng totoong impormasyon tungkol sa
                                    iyong sarili, kung hindi, hindi mo mabe-verify ang iyong
                                    account;
                                </li>
                                <li className="font-light leading-tight my-[1.5rem]">
                                    <strong className="font-bold list-heading-content">
                                        Punan muli ang account.{' '}
                                    </strong>
                                    Sa yugtong ito, kailangan mong pumunta sa cashier at magdeposito
                                    ng 100 PHP hanggang 20,000 PHP. Ang parehong halaga ay agad na
                                    maikredito sa iyong balanse ng bonus.
                                </li>
                            </ol>

                            <p className="font-light leading-tight body-content">
                                Upang ma-withdraw ang perang ito, dapat kang gumawa ng 5x na
                                turnover sa pagtaya ng halaga ng bonus sa loob ng 90 araw. Gumawa ng
                                mga express na taya sa 3 o higit pang mga kaganapan na may mga logro
                                mula sa 1.4 para sa bawat isa. Kapag nagawa mo na ang kinakailangang
                                turnover, ang mga pondo ay maaaring ilipat sa pamamagitan ng cashier
                                sa isang e-wallet o bank card.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="app-pay" className="text-white">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={MethodImage}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <h3 className="text-left font-semibold mb-4 heading-content">
                                Mga Paraan ng Pagbabayad
                            </h3>
                            <p className="font-light leading-tight body-content mb-4 md:mb-0">
                                Sinusuportahan ng Panalobet Philippines mobile app ang lahat ng
                                sistema ng pagbabayad na available sa opisyal na website ng opisina
                                ng bookmaker. Sa kanilang tulong, maaari kang magdeposito at
                                mag-withdraw ng pera. Maraming serbisyo ang sikat sa mga bansa sa
                                Asya, lalo na:
                            </p>

                            <ul className="grid grid-cols-1 md:mt-5 md:grid-cols-4">
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
                                            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                            <path d="m2 16 6 6" />
                                            <circle cx="16" cy="9" r="2.9" />
                                            <circle cx="6" cy="5" r="3" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Nagad</p>
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
                                            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                            <path d="m2 16 6 6" />
                                            <circle cx="16" cy="9" r="2.9" />
                                            <circle cx="6" cy="5" r="3" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Bkash</p>
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
                                            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                            <path d="m2 16 6 6" />
                                            <circle cx="16" cy="9" r="2.9" />
                                            <circle cx="6" cy="5" r="3" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Rocket</p>
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
                                            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                            <path d="m2 16 6 6" />
                                            <circle cx="16" cy="9" r="2.9" />
                                            <circle cx="6" cy="5" r="3" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Upay</p>
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
                                            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                            <path d="m2 16 6 6" />
                                            <circle cx="16" cy="9" r="2.9" />
                                            <circle cx="6" cy="5" r="3" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">AstroPay</p>
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
                                            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                            <path d="m2 16 6 6" />
                                            <circle cx="16" cy="9" r="2.9" />
                                            <circle cx="6" cy="5" r="3" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Jeton Wallet
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
                                            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                            <path d="m2 16 6 6" />
                                            <circle cx="16" cy="9" r="2.9" />
                                            <circle cx="6" cy="5" r="3" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Kvitum</p>
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
                                            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                            <path d="m2 16 6 6" />
                                            <circle cx="16" cy="9" r="2.9" />
                                            <circle cx="6" cy="5" r="3" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Cryptocurrencies
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <p className="font-light leading-tight body-content">
                                Maaari kang magdeposito ng hindi bababa sa 75 PHP, at ang
                                pinakamababang halaga ng withdrawal ay 150 PHP. Kaya, maaari kang
                                magsimulang tumaya kahit na wala kang malaking badyet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="app-bet" className="text-white">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={StepImage}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <h3 className="text-left font-semibold mb-4 heading-content leading-tight">
                                Paano Maglagay ng Taya sa App?
                            </h3>
                            <p className="font-light leading-tight body-content mb-4 md:mb-0">
                                Sinusuportahan ng Panalobet Philippines mobile app ang lahat ng
                                sistema ng pagbabayad na available sa opisyal na website ng opisina
                                ng bookmaker. Sa kanilang tulong, maaari kang magdeposito at
                                mag-withdraw ng pera. Maraming serbisyo ang sikat sa mga bansa sa
                                Asya, lalo na:
                            </p>

                            <ol className="list-decimal list-inside">
                                <li className="font-light leading-tight my-[1.5rem] list-body-content">
                                    Mag-log in. Mag-log in sa iyong account gamit ang username at
                                    password na iyong tinukoy kanina;
                                </li>
                                <li className="font-light leading-tight my-[1.5rem] list-body-content">
                                    Pumili ng tugma. Pumunta sa listahan ng lahat ng sports, hanapin
                                    ang isa na interesado ka, at piliin ang championship at ang
                                    laban;
                                </li>
                                <li className="font-light leading-tight my-[1.5rem] list-body-content">
                                    Magpasya sa mga posibilidad. Mag-click sa mga logro na naaayon
                                    sa mga resulta na gusto mong tayaan;
                                </li>
                                <li className="font-light leading-tight my-[1.5rem] list-body-content">
                                    Kumpirmahin ang taya. Punan ang kupon sa pamamagitan ng
                                    pagpahiwatig ng uri ng taya at halaga nito.
                                </li>
                            </ol>

                            <p className="font-light leading-tight body-content">
                                Makikita mo kung anong mga taya ang ginawa mo kanina sa kasaysayan.
                                Ang pagkalkula ng mga taya ay ginawa kaagad pagkatapos ng pagtatapos
                                ng kaganapang pampalakasan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="app-promo" className="text-white">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-10">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={PromoCodeImage}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <h3 className="text-left font-semibold mb-4 heading-content">
                                Promo Code sa App
                            </h3>
                            <p className="leading-tight body-content">
                                Kung gusto mong makuha ang lahat ng kasalukuyang Panalobet bookmaker
                                bonus, ilagay ang promo code MEGA2022 sa kaukulang field kapag
                                nagrerehistro. Gamit ang code na ito, makakakuha ka ng hanggang
                                26,000 PHP sa iyong unang deposito, pati na rin lumahok sa iba pang
                                mga promosyon sa site sa hinaharap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="app-sports" className="text-white">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={SportBettingImage}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <h3 className="heading-content text-left font-semibold mb-4">
                                Pagtaya sa Palakasan
                            </h3>
                            <p className="font-light leading-tight body-content mb-4 md:mb-0">
                                Sa mobile app ng Panalobet Philippines, makakahanap ka ng higit sa
                                40 sports. Araw-araw dito maaari kang tumaya sa libu-libong mga
                                kaganapang pampalakasan sa mga sumusunod na lugar:
                            </p>

                            <ul className="grid grid-cols-2 md:mt-5 md:grid-cols-4">
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
                                            <path d="m12 8 6-3-6-3v10" />
                                            <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                                            <path d="m6.49 12.85 11.02 6.3" />
                                            <path d="M17.51 12.85 6.5 19.15" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Kuliglig</p>
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
                                            <path d="m12 8 6-3-6-3v10" />
                                            <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                                            <path d="m6.49 12.85 11.02 6.3" />
                                            <path d="M17.51 12.85 6.5 19.15" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Soccer</p>
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
                                            <path d="m12 8 6-3-6-3v10" />
                                            <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                                            <path d="m6.49 12.85 11.02 6.3" />
                                            <path d="M17.51 12.85 6.5 19.15" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Basketbol</p>
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
                                            <path d="m12 8 6-3-6-3v10" />
                                            <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                                            <path d="m6.49 12.85 11.02 6.3" />
                                            <path d="M17.51 12.85 6.5 19.15" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Hockey</p>
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
                                            <path d="m12 8 6-3-6-3v10" />
                                            <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                                            <path d="m6.49 12.85 11.02 6.3" />
                                            <path d="M17.51 12.85 6.5 19.15" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Tennis</p>
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
                                            <path d="m12 8 6-3-6-3v10" />
                                            <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                                            <path d="m6.49 12.85 11.02 6.3" />
                                            <path d="M17.51 12.85 6.5 19.15" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Table tennis
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
                                            <path d="m12 8 6-3-6-3v10" />
                                            <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                                            <path d="m6.49 12.85 11.02 6.3" />
                                            <path d="M17.51 12.85 6.5 19.15" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Volleyball
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
                                            <path d="m12 8 6-3-6-3v10" />
                                            <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                                            <path d="m6.49 12.85 11.02 6.3" />
                                            <path d="M17.51 12.85 6.5 19.15" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Lahi</p>
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
                                            <path d="m12 8 6-3-6-3v10" />
                                            <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                                            <path d="m6.49 12.85 11.02 6.3" />
                                            <path d="M17.51 12.85 6.5 19.15" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Martial Arts
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
                                            <path d="m12 8 6-3-6-3v10" />
                                            <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                                            <path d="m6.49 12.85 11.02 6.3" />
                                            <path d="M17.51 12.85 6.5 19.15" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Formula 1, atbp
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <p className="font-light leading-tight body-content">
                                Maaari mong makita ang isang listahan ng lahat ng magagamit na
                                sports para sa pagtaya sa pangunahing menu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="app-features" className="text-white">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={PanalobetImage}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <h3 className="heading-content text-left font-semibold mb-4">
                                Mga tampok ng Panalobet App
                            </h3>
                            <p className="font-light leading-tight body-content mb-4 md:mb-0">
                                Ginagawa namin ang lahat na posible upang mabigyan ang mga user ng
                                maximum na kaginhawahan, kaginhawahan, at mga benepisyo kapag
                                naglalaro sa pamamagitan ng mobile application. Matapos itong
                                i-download at i-install sa iyong smartphone, maaari kang umasa sa
                                ilang mga benepisyo:
                            </p>

                            <ul className="grid grid-cols-1 md:mt-5 md:grid-cols-2">
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
                                            <rect width="7" height="7" x="3" y="3" rx="1" />
                                            <rect width="7" height="7" x="14" y="3" rx="1" />
                                            <rect width="7" height="7" x="14" y="14" rx="1" />
                                            <rect width="7" height="7" x="3" y="14" rx="1" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Paghihiwalayin ang mga bersyon para sa Andriod at iOS.
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
                                            <rect width="7" height="7" x="3" y="3" rx="1" />
                                            <rect width="7" height="7" x="14" y="3" rx="1" />
                                            <rect width="7" height="7" x="14" y="14" rx="1" />
                                            <rect width="7" height="7" x="3" y="14" rx="1" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Higit sa 40 sports at 1,000 laban araw-araw;
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
                                            <rect width="7" height="7" x="3" y="3" rx="1" />
                                            <rect width="7" height="7" x="14" y="3" rx="1" />
                                            <rect width="7" height="7" x="14" y="14" rx="1" />
                                            <rect width="7" height="7" x="3" y="14" rx="1" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Welcome bonus para sa mga baguhan hanggang 20,000 PHP.
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
                                            <rect width="7" height="7" x="3" y="3" rx="1" />
                                            <rect width="7" height="7" x="14" y="3" rx="1" />
                                            <rect width="7" height="7" x="14" y="14" rx="1" />
                                            <rect width="7" height="7" x="3" y="14" rx="1" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Magdamag na serbisyo sa suporta.
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <p className="font-light leading-tight body-content">
                                Sundin ang aming mga tagubilin, i-download ang app at simulan ang
                                pagtaya sa iyong mga paboritong koponan at atleta.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="app-diff" className="bg-[#fffdf4] md:pt-24">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                    <h3 className="heading-content text-left font-semibold mb-4">
                        Mga Pagkakaiba sa pagitan ng Panalobet App at ng Website
                    </h3>
                    <p className="font-light leading-tight body-content md:mb-4">
                        Bagama&apos;t ang mga pangkalahatang feature at function ng mobile app at
                        ang opisyal na site ay pareho, may kaunting pagkakaiba sa pagitan ng
                        dalawang bersyon:
                    </p>

                    <Table datas={diffAppAndWeb} />

                    <p className="font-light leading-tight body-content md:pt-4">
                        Kung hindi, ang dalawang bersyon ay halos magkapareho. Maaari kang tumaya
                        pareho sa website at sa app. Ang pangalawang opsyon lang ay nagbibigay ng
                        mas mataas na antas ng kaginhawaan.
                    </p>
                </div>
            </section>

            <section id="app-cybersports" className="text-white">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={CybersportImage}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <h3 className="heading-content text-left font-semibold mb-4">
                                Cybersports
                            </h3>
                            <p className="font-light leading-tight body-content mb-4 md:mb-0">
                                Kung mahilig ka sa mga laro sa computer at sinusunod mo ang mga
                                pagtatanghal ng mga propesyonal na koponan at manlalaro, subukang
                                maglagay ng ilang taya sa seksyong cybersports. Ang Panalobet PH app
                                sa Android at iOS ay nag-aalok ng mga taya sa mga sumusunod na laro:
                            </p>

                            <ul className="grid grid-cols-2 md:mt-5 md:grid-cols-3">
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
                                            <path d="M12 8V4H8" />
                                            <rect width="16" height="12" x="4" y="8" rx="2" />
                                            <path d="M2 14h2" />
                                            <path d="M20 14h2" />
                                            <path d="M15 13v2" />
                                            <path d="M9 13v2" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Dota 2</p>
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
                                            <path d="M12 8V4H8" />
                                            <rect width="16" height="12" x="4" y="8" rx="2" />
                                            <path d="M2 14h2" />
                                            <path d="M20 14h2" />
                                            <path d="M15 13v2" />
                                            <path d="M9 13v2" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Liga ng mga Alamat
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
                                            <path d="M12 8V4H8" />
                                            <rect width="16" height="12" x="4" y="8" rx="2" />
                                            <path d="M2 14h2" />
                                            <path d="M20 14h2" />
                                            <path d="M15 13v2" />
                                            <path d="M9 13v2" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">CS:GO</p>
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
                                            <path d="M12 8V4H8" />
                                            <rect width="16" height="12" x="4" y="8" rx="2" />
                                            <path d="M2 14h2" />
                                            <path d="M20 14h2" />
                                            <path d="M15 13v2" />
                                            <path d="M9 13v2" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">Halo</p>
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
                                            <path d="M12 8V4H8" />
                                            <rect width="16" height="12" x="4" y="8" rx="2" />
                                            <path d="M2 14h2" />
                                            <path d="M20 14h2" />
                                            <path d="M15 13v2" />
                                            <path d="M9 13v2" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Rainbow Six
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
                                            <path d="M12 8V4H8" />
                                            <rect width="16" height="12" x="4" y="8" rx="2" />
                                            <path d="M2 14h2" />
                                            <path d="M20 14h2" />
                                            <path d="M15 13v2" />
                                            <path d="M9 13v2" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Age of Empires 2, atbp.
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <p className="font-light leading-tight body-content">
                                Maaaring ilagay ang mga taya bago at pagkatapos ng simula ng mga
                                laban sa Live na seksyon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="app-online" className="bg-[#fffdf4]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-20">
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
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
                            <h3 className="heading-content text-left font-semibold mb-4">
                                Online na casino Panalobet
                            </h3>
                            <p className="font-light leading-tight body-content mb-4 md:mb-0">
                                Kung napagod ka sa pagtaya sa sports, maaari kang maglaro ng online
                                casino sa Panalobet mobile app. Upang gawin ito, kailangan mong
                                pumunta sa seksyon ng parehong pangalan. Mayroong daan-daang mga
                                entertainment sa pagsusugal:
                            </p>

                            <ul className="grid grid-cols-2 md:mt-5">
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
                                            <rect width="16" height="20" x="4" y="2" rx="2" />
                                            <line x1="8" x2="16" y1="6" y2="6" />
                                            <line x1="16" x2="16" y1="14" y2="18" />
                                            <path d="M16 10h.01" />
                                            <path d="M12 10h.01" />
                                            <path d="M8 10h.01" />
                                            <path d="M12 14h.01" />
                                            <path d="M8 14h.01" />
                                            <path d="M12 18h.01" />
                                            <path d="M8 18h.01" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Mga slot machine
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
                                            <rect width="16" height="20" x="4" y="2" rx="2" />
                                            <line x1="8" x2="16" y1="6" y2="6" />
                                            <line x1="16" x2="16" y1="14" y2="18" />
                                            <path d="M16 10h.01" />
                                            <path d="M12 10h.01" />
                                            <path d="M8 10h.01" />
                                            <path d="M12 14h.01" />
                                            <path d="M8 14h.01" />
                                            <path d="M12 18h.01" />
                                            <path d="M8 18h.01" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Mga laro sa board;
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
                                            <rect width="16" height="20" x="4" y="2" rx="2" />
                                            <line x1="8" x2="16" y1="6" y2="6" />
                                            <line x1="16" x2="16" y1="14" y2="18" />
                                            <path d="M16 10h.01" />
                                            <path d="M12 10h.01" />
                                            <path d="M8 10h.01" />
                                            <path d="M12 14h.01" />
                                            <path d="M8 14h.01" />
                                            <path d="M12 18h.01" />
                                            <path d="M8 18h.01" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Mga Lottery
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
                                            <rect width="16" height="20" x="4" y="2" rx="2" />
                                            <line x1="8" x2="16" y1="6" y2="6" />
                                            <line x1="16" x2="16" y1="14" y2="18" />
                                            <path d="M16 10h.01" />
                                            <path d="M12 10h.01" />
                                            <path d="M8 10h.01" />
                                            <path d="M12 14h.01" />
                                            <path d="M8 14h.01" />
                                            <path d="M12 18h.01" />
                                            <path d="M8 18h.01" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="leading-tight list-body-content">
                                            Mga laro na may mga live na dealer
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <p className="font-light leading-tight body-content">
                                Sa casino, makikita mo ang mga development ng mga sikat na provider,
                                kabilang ang Playson, Irondog, Pragmatic Play, EGT, atbp. Ang bawat
                                slot machine ay maaaring tumakbo sa demo mode at tumaya sa mga
                                chips.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
