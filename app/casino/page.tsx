import Image from 'next/image'
import Hero from '@/components/hero'
import Faq from '@/components/faq'
import TableOfContents from '@/components/table-content'
import Update from '@/components/update'

import HeroImage from '@/public/img/prod/casino/Casino Hero Section.webp'
import SuperaceImage from '@/public/img/prod/casino/Super Ace.webp'
import MagicBeansImage from '@/public/img/prod/casino/Magic Beans.webp'
import SugarRushImage from '@/public/img/prod/casino/Sugar Rush.webp'
import SevenImage from '@/public/img/prod/casino/777.webp'
import StepOneImage from '@/public/img/prod/casino/1. New - Buksan ang Form..webp'
import StepTwoImage from '@/public/img/prod/casino/2. New - Punan ang Mga Field at Pumili ng Bonus..webp'
import StepThreeImage from '@/public/img/prod/casino/3. New - Kumpirmahin ang Email..webp'
import BoardGamesImage from '@/public/img/prod/casino/BOARDGAMES.webp'
import MgaPuwangImage from '@/public/img/prod/casino/Mga Puwang.webp'
import DealerGamesImage from '@/public/img/prod/casino/LIVE CASINO.webp'

import { hero, questions, tableOfContents } from '@/data/casino-page'

export default function CasinoPage() {
    return (
        <>
            <Hero
                image={HeroImage}
                title={hero.title}
                description={hero.description}
                buttonText=""
            />
            <TableOfContents content={tableOfContents} />
            <section id="casino-online" className="bg-[#fffdf4]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16">
                    <div id="casino-super-ace" className="mb-10 gap-4 md:flex md:gap-16">
                        <div className="md:w-[50%] md:flex md:items-center md:justify-center">
                            <div className="text-center text-black rounded-xl pb-4 md:bg-[#252b73] md:p-4 md:text-white">
                                <h3 className="heading-content text-center font-semibold mb-4">
                                    Super Ace
                                </h3>
                                <p className="body-content leading-tight">
                                    Isa sa pinakasikat na slot machine ng mga nakaraang taon, kung
                                    saan maaari kang manalo ng hanggang x50,000 mula sa paunang
                                    taya. Lahat ng pinakakawili-wiling bagay ay nangyayari sa bonus
                                    na laro na may nababagong bilang ng mga libreng spin.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:w-[50%]">
                            <Image
                                src={SuperaceImage}
                                width={600}
                                height={200}
                                alt="Super Ace"
                                priority={true}
                                className="md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="casino-sugar-rush" className="bg-[#fffdf4]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-5">
                    <div className="mb-10 gap-4 md:flex md:gap-16">
                        <div className="md:w-[50%]  md:flex md:items-center md:justify-center">
                            <div className="text-center text-black rounded-xl pb-4 md:bg-[#252b73] md:p-4 md:text-white">
                                <h3 className="heading-content text-center font-semibold mb-4">
                                    Sugar Rush
                                </h3>
                                <p className="body-content leading-tight">
                                    Ang benchmark na mga klasikong slot sa tema ng mga aklat.
                                    Mangolekta ng tatlong libro sa limang reel at pumunta sa bonus
                                    round. Dito matutukoy ang isang random na simbolo, na lumalawak
                                    sa buong reel at babayaran anuman ang lokasyon sa field.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:w-[50%]">
                            <Image
                                src={SugarRushImage}
                                width={600}
                                height={200}
                                alt="Super Ace"
                                priority={true}
                                className="md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="casino-magic-beans" className="bg-[#fffdf4]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-5">
                    <div className="mb-10 gap-4 md:flex md:gap-16">
                        <div className="md:w-[50%] md:flex md:items-center md:justify-center">
                            <div className="text-center text-black rounded-xl pb-4 md:bg-[#252b73] md:p-4 md:text-white">
                                <h3 className="heading-content text-center font-semibold mb-4">
                                    Magic Beans
                                </h3>
                                <p className="body-content leading-tight">
                                    Isa sa mga bagong development ng Fa Chai Gaming na may function
                                    ng cascading symbols. Nawawala ang mga nilalaro na larawan sa
                                    mga reel, na nagbibigay ng puwang para sa mga bago. At sa bonus
                                    na laro ay mayroong pinagsama-samang mekaniko ng multiplier na
                                    nagpapataas ng lahat ng mga payout.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:w-[50%]">
                            <Image
                                src={MagicBeansImage}
                                width={600}
                                height={200}
                                alt="Super Ace"
                                priority={true}
                                className="md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="casino-777" className="bg-[#fffdf4]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-5">
                    <div className="mb-10 gap-4 md:flex md:gap-16">
                        <div className="md:w-[50%] md:flex md:items-center md:justify-center">
                            <div className="text-center text-black rounded-xl pb-4 md:bg-[#252b73] md:p-4 md:text-white">
                                <h3 className="heading-content text-center font-semibold mb-4">
                                    777
                                </h3>
                                <p className="body-content leading-tight">
                                    Isa pang maliwanag na bagong bagay na may limang reel na may
                                    iba&apos;t ibang laki. Ang mga gumagamit ay naaakit ng bonus na
                                    laro, kung saan maaari silang pumili ng mga card na may mga
                                    random na booster para sa mga freespin.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:w-[50%]">
                            <Image
                                src={SevenImage}
                                width={600}
                                height={200}
                                alt="Super Ace"
                                priority={true}
                                className="md:rounded-xl md:shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-[#7f1d1d] via-[#1f2460] to-[#313380]">
                <div>
                    <div
                        id="casino-start"
                        className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16"
                    >
                        <div className="mb-10 text-white">
                            <h3 className="heading-content text-left font-semibold mb-4">
                                Paano Magsimulang Maglaro sa Panalobet Casino
                            </h3>
                            <p className="body-content leading-tight">
                                Hindi mo kailangang gumawa ng hiwalay na account para magsimulang
                                maglaro ng mga laro sa casino. Kung dati kang nakarehistro sa aming
                                website, gamitin ang parehong username at password upang mag-log in
                                sa seksyon ng casino. Kung wala kang account, mangyaring lumikha ng
                                isa sa pamamagitan ng pagsunod sa mga tagubilin sa ibaba.
                            </p>
                        </div>

                        <div className="w-full grid gap-4 md:grid-cols-2 md:gap-16">
                            <div className="md:order-2 md:self-center">
                                <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                    01
                                </p>
                                <div className="bg-[#252b73] rounded-xl text-white p-3 text-center md:text-left md:p-4">
                                    <h4 className="sub-heading-content mb-2 font-medium">
                                        Buksan ang Form
                                    </h4>
                                    <p className="leading-tight body-content">
                                        Pumunta sa opisyal na website ng Panalobet Philippines at
                                        i-click ang button para magparehistro. Magbubukas ang isang
                                        form sa harap mo, kung saan maaari mong piliin kung paano
                                        gumawa ng account.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:border-2 md:border-gray-600 md:border-dashed md:p-2 md:rounded-xl md:order-1">
                                <Image
                                    src={StepOneImage}
                                    width={700}
                                    height={500}
                                    alt="Super Ace"
                                    priority={true}
                                    className="md:rounded-xl md:shadow-2xl"
                                />
                            </div>
                            <div className="md:order-3 md:self-center">
                                <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                    02
                                </p>
                                <div className="bg-[#252b73] rounded-xl text-white p-3 text-center md:text-left md:p-4">
                                    <h4 className="sub-heading-content mb-2 font-medium">
                                        Punan ang Mga Field at Pumili ng Bonus
                                    </h4>
                                    <p className="leading-tight body-content">
                                        Ilagay ang iyong personal at impormasyon sa
                                        pakikipag-ugnayan sa lahat ng mga blangkong linya. Gayundin,
                                        huwag kalimutang pumili ng isa sa mga bonus na inaalok ng
                                        site. Kung plano mong maglaro sa casino, ang bonus sa
                                        pagtaya sa sports ay hindi gagana para sa iyo.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:order-4 md:border-2 md:border-gray-600 md:border-dashed md:p-2 md:rounded-xl">
                                <Image
                                    src={StepTwoImage}
                                    width={600}
                                    height={270}
                                    alt="Super Ace"
                                    priority={true}
                                    className="md:rounded-xl md:shadow-2xl"
                                />
                            </div>
                            <div className="md:order-6 md:self-center">
                                <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                    03
                                </p>
                                <div className="bg-[#252b73] rounded-xl text-white p-3 text-center md:text-left md:p-4">
                                    <h4 className="mb-2 font-medium sub-heading-content">
                                        Kumpirmahin ang Email
                                    </h4>
                                    <p className="leading-tight body-content">
                                        Isang email na may link sa pagkumpirma ay ipapadala sa email
                                        address na iyong tinukoy kanina. Kung pumili ka ng ibang
                                        paraan ng pagpaparehistro, magagawa mong kumpirmahin ang
                                        iyong email sa hinaharap sa panahon ng pag-verify.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:order-5 md:w-fit md:border-2 md:border-gray-600 md:border-dashed md:p-2 md:rounded-xl">
                                <Image
                                    src={StepThreeImage}
                                    width={700}
                                    height={400}
                                    alt="Super Ace"
                                    priority={true}
                                    className="md:rounded-xl md:shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="casino-type" className="text-white">
                    <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:py-24">
                        <div className="mb-10">
                            <h3 className="heading-content text-left font-semibold mb-4">
                                Mga Uri ng Laro sa Panalobet Casino Philippines
                            </h3>
                            <p className="leading-tight body-content">
                                Sa catalog ng online casino entertainment ipinakita ang ilang libong
                                laro. Sa ganitong pagkakaiba-iba, ang bawat customer ay makakahanap
                                ng libangan ayon sa gusto nila at ma-enjoy ang kanilang oras sa
                                kanilang paboritong laro. Para sa kaginhawahan sa paghahanap, hinati
                                sila sa ilang kategorya.
                            </p>
                        </div>

                        <div>
                            <div id="casino-puwang" className="mb-4 md:flex md:gap-16 md:mb-8">
                                <div className="md:w-[50%]">
                                    <h3
                                        className="sub-heading-content text-left font-semibold mb-4
                "
                                    >
                                        Mga puwang
                                    </h3>
                                    <p className="leading-tight body-content mb-2">
                                        Ito ay mga slot machine na kinakatawan ng dose-dosenang
                                        sikat na provider. Ang mga puwang ay hinihiling sa mga
                                        manlalaro dahil sa mga tuntunin sa elementarya. Hindi ito
                                        nangangailangan ng anumang espesyal na kaalaman at
                                        kasanayan. Sa gitna ng mga makina ay isang random na
                                        generator ng numero, na tumutukoy sa huling resulta. Upang
                                        simulan ang laro, patakbuhin lamang ang slot, ayusin ang
                                        laki ng taya at iikot. Kung magkakatulad na character ang
                                        pumila, makukuha mo ang payout.
                                    </p>

                                    <p className="leading-tight body-content mb-2 md:mb-10">
                                        Ang bawat slot sa Panalobet Casino ay may mga fixed
                                        performance indicator na itinakda ng provider. Nalalapat ito
                                        sa RTP, pagkasumpungin, bilang ng mga linya at iba pang mga
                                        parameter. Hindi maaaring baguhin sila ng manlalaro o ng
                                        administrasyon ng casino, na ginagarantiyahan ang pagiging
                                        patas at transparency ng proseso ng paglalaro.
                                    </p>
                                </div>

                                <div className="flex items-center justify-center md:w-[50%]">
                                    <Image
                                        src={MgaPuwangImage}
                                        width={600}
                                        height={270}
                                        alt="Super Ace"
                                        priority={true}
                                        className="md:shadow-2xl md:rounded-xl"
                                    />
                                </div>
                            </div>

                            <div id="casino-board" className="mb-4 md:flex md:gap-16 md:mb-8">
                                <div className="md:w-[50%]">
                                    <h3
                                        className="sub-heading-content text-left font-semibold mb-4
                "
                                    >
                                        Board Games
                                    </h3>
                                    <p className="leading-tight body-content mb-4 md:10">
                                        to ay mga slot machine na kinakatawan ng dose-dosenang sikat
                                        na provider. Ang mga puwang ay hinihiling sa mga manlalaro.
                                        Dito ang kalalabasan ay maaaring nakadepende hindi lamang sa
                                        swerte, kundi pati na rin sa iyong kakayahan. Ang Panalobet
                                        Casino ay nag-aalok ng lahat ng sikat na laro sa mesa:
                                    </p>

                                    <div>
                                        <ul className="grid grid-cols-2">
                                            <li className="flex items-center gap-5 mb-2 md:mb-4">
                                                <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                                <p className="list-body-content leading-tight md:w-[70%] md:mr-auto">
                                                    Roulette;
                                                </p>
                                            </li>
                                            <li className="flex items-center gap-5 mb-2 md:mb-4">
                                                <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                                <p className="list-body-content leading-tight md:w-[70%] md:mr-auto">
                                                    Blackjack;
                                                </p>
                                            </li>
                                            <li className="flex items-center gap-5 mb-2 md:mb-4">
                                                <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                                <p className="list-body-content leading-tight md:w-[70%] md:mr-auto">
                                                    Poker;
                                                </p>
                                            </li>
                                            <li className="flex items-center gap-5 mb-2 md:mb-4">
                                                <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                                <p className="list-body-content leading-tight md:w-[70%] md:mr-auto">
                                                    Mga dumi, atbp.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="body-content leading-tight">
                                        Ang laro ay nilalaro laban sa isang computer na kalaban. Ang
                                        mga denominasyon ng mga card, dice at iba pang paraphernalia
                                        ay tinutukoy ng random number generator.
                                    </p>
                                </div>

                                <div className="flex items-center justify-center md:w-[50%]">
                                    <Image
                                        src={BoardGamesImage}
                                        width={600}
                                        height={270}
                                        alt="Super Ace"
                                        priority={true}
                                        className="md:shadow-2xl md:rounded-xl"
                                    />
                                </div>
                            </div>

                            <div id="casino-live" className="md:flex md:gap-16">
                                <div className="md:w-[50%]">
                                    <h3 className="heading-content text-left font-semibold mb-4">
                                        Mga Laro sa Mga Live na Dealer
                                    </h3>
                                    <p className="body-content leading-tight mb-2 md:10">
                                        Ang parehong mga laro sa mesa, pati na rin ang iba pang
                                        libangan kung saan ang kalaban ng manlalaro ay hindi isang
                                        computer, ngunit isang live na tao - isang empleyado ng
                                        casino. Nagaganap ang laro sa live mode, at mapapanood ng
                                        mga user ang mga kaganapang nagaganap sa studio sa
                                        pamamagitan ng player.
                                    </p>

                                    <p className="body-content leading-tight">
                                        Maaari mong panoorin ang mga aksyon ng dealer at
                                        makipag-chat sa kanya at sa iba pang mga manlalaro. Dahil
                                        ang mga resulta dito ay hindi gaanong nakadepende sa isang
                                        random na generator ng numero, posible na ipakita ang
                                        kanilang mga kasanayan at subukan ang iba&apos;t ibang mga
                                        diskarte.
                                    </p>
                                </div>

                                <div className="flex items-center justify-center md:w-[50%]">
                                    <Image
                                        src={DealerGamesImage}
                                        width={600}
                                        height={270}
                                        alt="Super Ace"
                                        priority={true}
                                        className="md:shadow-2xl md:rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Faq
                questions={questions}
                description={`Kung mayroon ka pa ring mga katanungan, maaari kang magtanong sa koponan ng suporta ng Panalobet sa pamamagitan ng email o makipag-chat sa website. Ang koponan ng suporta ay magagamit 24 na oras sa isang araw at handang magbigay sa iyo ng detalyadong payo anumang oras. At sa ibaba ay makikita mo ang mga sagot sa ilang mga tanyag na tanong.`}
            />

            <Update />
        </>
    )
}
