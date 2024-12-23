import ResImage from '@/components/res-image'
import Table from '@/components/table'

import OfficialBanner from '@/public/img/official-site-of-panalobet.webp'

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
            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                    <h3
                        className="text-[1.25rem] text-left font-semibold mb-4
                relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-0"
                    >
                        Promo Code sa App
                    </h3>
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-10">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={OfficialBanner}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <p>
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
            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                    <h3
                        className="text-[1.25rem] text-left font-semibold mb-4
                relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-0"
                    >
                        Paano Kumuha ng Panalobet PH Mobile Bonus?
                    </h3>

                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={OfficialBanner}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto"
                            />
                        </div>

                        <div className="w-full md:w-[50%]">
                            <p className="font-light leading-tight text-[1rem]">
                                Kapag gumawa ka ng account, magagawa mong i-activate ang welcome
                                bonus para sa mga bagong dating. Ang alok na ito ay nalalapat lamang
                                sa mga bagong may hawak ng account na hindi pa tumaya sa Panalobet
                                Philippines mobile app at sa opisyal na website. Upang maisaaktibo
                                ang bonus kakailanganin mo:
                            </p>
                            <ol className="list-decimal list-inside">
                                <li className="font-light leading-tight my-[1.5rem]">
                                    <strong className="font-bold">
                                        Magrehistro at ilagay ang promo code MEGA2022.{' '}
                                    </strong>
                                    Magagawa mo ito alinman sa site o sa mismong application.
                                    Mag-click sa pindutan upang magparehistro, piliin ang uri nito,
                                    tukuyin ang iyong personal na data, at kumpletuhin ang
                                    pamamaraan ng paglikha ng account;
                                </li>
                                <li className="font-light leading-tight my-[1.5rem]">
                                    <strong className="font-bold">Punan ang iyong profile. </strong>
                                    Kapag nalikha ang account, buksan ang mga setting ng account at
                                    punan ang lahat ng mga blangkong field ng personal na
                                    impormasyon. Gumamit lamang ng totoong impormasyon tungkol sa
                                    iyong sarili, kung hindi, hindi mo mabe-verify ang iyong
                                    account;
                                </li>
                                <li className="font-light leading-tight my-[1.5rem]">
                                    <strong className="font-bold">Punan muli ang account. </strong>
                                    Sa yugtong ito, kailangan mong pumunta sa cashier at magdeposito
                                    ng 100 PHP hanggang 20,000 PHP. Ang parehong halaga ay agad na
                                    maikredito sa iyong balanse ng bonus.
                                </li>
                            </ol>

                            <p className="font-light leading-tight text-[1rem]">
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

            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                    <h3
                        className="text-[1.25rem] text-left font-semibold mb-4
                relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-0"
                    >
                        Mga Paraan ng Pagbabayad
                    </h3>

                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={OfficialBanner}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <p className="font-light leading-tight text-[1rem]">
                                Sinusuportahan ng Panalobet Philippines mobile app ang lahat ng
                                sistema ng pagbabayad na available sa opisyal na website ng opisina
                                ng bookmaker. Sa kanilang tulong, maaari kang magdeposito at
                                mag-withdraw ng pera. Maraming serbisyo ang sikat sa mga bansa sa
                                Asya, lalo na:
                            </p>

                            <ul>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Nagad;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Bkash;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Rocket;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Upay;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    AstroPay;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Jeton Wallet;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Kvitum;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Cryptocurrencies.
                                </li>
                            </ul>

                            <p className="font-light leading-tight text-[1rem]">
                                Maaari kang magdeposito ng hindi bababa sa 75 PHP, at ang
                                pinakamababang halaga ng withdrawal ay 150 PHP. Kaya, maaari kang
                                magsimulang tumaya kahit na wala kang malaking badyet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                    <h3
                        className="text-[1.25rem] text-left font-semibold mb-4
                relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-0"
                    >
                        Paano Maglagay ng Taya sa App?
                    </h3>
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={OfficialBanner}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <p className="font-light leading-tight text-[1rem]">
                                Sinusuportahan ng Panalobet Philippines mobile app ang lahat ng
                                sistema ng pagbabayad na available sa opisyal na website ng opisina
                                ng bookmaker. Sa kanilang tulong, maaari kang magdeposito at
                                mag-withdraw ng pera. Maraming serbisyo ang sikat sa mga bansa sa
                                Asya, lalo na:
                            </p>

                            <ol className="list-decimal list-inside">
                                <li className="font-light leading-tight my-[1.5rem]">
                                    Mag-log in. Mag-log in sa iyong account gamit ang username at
                                    password na iyong tinukoy kanina;
                                </li>
                                <li className="font-light leading-tight my-[1.5rem]">
                                    Pumili ng tugma. Pumunta sa listahan ng lahat ng sports, hanapin
                                    ang isa na interesado ka, at piliin ang championship at ang
                                    laban;
                                </li>
                                <li className="font-light leading-tight my-[1.5rem]">
                                    Magpasya sa mga posibilidad. Mag-click sa mga logro na naaayon
                                    sa mga resulta na gusto mong tayaan;
                                </li>
                                <li className="font-light leading-tight my-[1.5rem]">
                                    Kumpirmahin ang taya. Punan ang kupon sa pamamagitan ng
                                    pagpahiwatig ng uri ng taya at halaga nito.
                                </li>
                            </ol>

                            <p className="font-light leading-tight text-[1rem]">
                                Makikita mo kung anong mga taya ang ginawa mo kanina sa kasaysayan.
                                Ang pagkalkula ng mga taya ay ginawa kaagad pagkatapos ng pagtatapos
                                ng kaganapang pampalakasan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                    <h3
                        className="text-[1.25rem] text-left font-semibold mb-4
                relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-0"
                    >
                        Pagtaya sa Palakasan
                    </h3>
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={OfficialBanner}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <p className="font-light leading-tight text-[1rem]">
                                Sa mobile app ng Panalobet Philippines, makakahanap ka ng higit sa
                                40 sports. Araw-araw dito maaari kang tumaya sa libu-libong mga
                                kaganapang pampalakasan sa mga sumusunod na lugar:
                            </p>

                            <ul>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Kuliglig;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Soccer
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Basketbol;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Hockey;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Tennis;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Table tennis;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Volleyball;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Lahi;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Martial Arts;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Formula 1, atbp.
                                </li>
                            </ul>

                            <p className="font-light leading-tight text-[1rem]">
                                Maaari mong makita ang isang listahan ng lahat ng magagamit na
                                sports para sa pagtaya sa pangunahing menu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                    <h3
                        className="text-[1.25rem] text-left font-semibold mb-4
                relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-0"
                    >
                        Cybersports
                    </h3>
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={OfficialBanner}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <p className="font-light leading-tight text-[1rem]">
                                Kung mahilig ka sa mga laro sa computer at sinusunod mo ang mga
                                pagtatanghal ng mga propesyonal na koponan at manlalaro, subukang
                                maglagay ng ilang taya sa seksyong cybersports. Ang Panalobet PH app
                                sa Android at iOS ay nag-aalok ng mga taya sa mga sumusunod na laro:
                            </p>

                            <ul>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Dota 2;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Liga ng mga Alamat;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    CS:GO;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Halo;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Rainbow Six;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Age of Empires 2, atbp.
                                </li>
                            </ul>

                            <p className="font-light leading-tight text-[1rem]">
                                Maaaring ilagay ang mga taya bago at pagkatapos ng simula ng mga
                                laban sa Live na seksyon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                    <h3
                        className="text-[1.25rem] text-left font-semibold mb-4
                relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-0"
                    >
                        Mga tampok ng Panalobet App
                    </h3>
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={OfficialBanner}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <p className="font-light leading-tight text-[1rem]">
                                Ginagawa namin ang lahat na posible upang mabigyan ang mga user ng
                                maximum na kaginhawahan, kaginhawahan, at mga benepisyo kapag
                                naglalaro sa pamamagitan ng mobile application. Matapos itong
                                i-download at i-install sa iyong smartphone, maaari kang umasa sa
                                ilang mga benepisyo:
                            </p>

                            <ul>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Paghiwalayin ang mga bersyon para sa Android at iOS;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Higit sa 40 sports at 1,000 laban araw-araw;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Welcome bonus para sa mga baguhan hanggang 20,000 PHP;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Magdamag na serbisyo sa suporta.
                                </li>
                            </ul>

                            <p className="font-light leading-tight text-[1rem]">
                                Sundin ang aming mga tagubilin, i-download ang app at simulan ang
                                pagtaya sa iyong mga paboritong koponan at atleta.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                    <h3
                        className="text-[1.25rem] text-left font-semibold mb-4
                relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-0"
                    >
                        Paano Gamitin ang Web Bersyon ng Panalobet
                    </h3>

                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={OfficialBanner}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <p className="font-light leading-tight text-[1rem]">
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

            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                    <h3
                        className="text-[1.25rem] text-left font-semibold mb-4
                relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-0"
                    >
                        Mga Pagkakaiba sa pagitan ng Panalobet App at ng Website
                    </h3>
                    <p className="font-light leading-tight text-[1rem] md:mb-4">
                        Bagama&apos;t ang mga pangkalahatang feature at function ng mobile app at
                        ang opisyal na site ay pareho, may kaunting pagkakaiba sa pagitan ng
                        dalawang bersyon:
                    </p>

                    <Table datas={diffAppAndWeb} />

                    <p className="font-light leading-tight text-[1rem] md:mt-4">
                        Kung hindi, ang dalawang bersyon ay halos magkapareho. Maaari kang tumaya
                        pareho sa website at sa app. Ang pangalawang opsyon lang ay nagbibigay ng
                        mas mataas na antas ng kaginhawaan.
                    </p>
                </div>
            </section>

            <section className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                    <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-5">
                        <div className="w-full md:w-[50%]">
                            <ResImage
                                path={OfficialBanner}
                                priority={true}
                                mobileSize={{ width: 390, height: 240 }}
                                desktopSize={{ width: 530, height: 330 }}
                                alt="Official Banner home"
                                screenSize={900}
                                className="ml-auto"
                            />
                        </div>
                        <div className="w-full md:w-[50%]">
                            <p className="font-light leading-tight text-[1rem]">
                                Kung napagod ka sa pagtaya sa sports, maaari kang maglaro ng online
                                casino sa Panalobet mobile app. Upang gawin ito, kailangan mong
                                pumunta sa seksyon ng parehong pangalan. Mayroong daan-daang mga
                                entertainment sa pagsusugal:
                            </p>

                            <ul>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Mga slot machine;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Mga laro sa board;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Mga Lottery;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Mga laro na may mga live na dealer.
                                </li>
                            </ul>

                            <p className="font-light leading-tight text-[1rem]">
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
