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
import StepOneImage from '@/public/img/prod/casino/1. Buksan ang Form.webp'
import StepTwoImage from '@/public/img/prod/casino/2. Punan ang Mga Field at Pumili ng Bonus.webp'
import StepThreeImage from '@/public/img/prod/casino/3. Kumpirmahin ang Email.webp'
import BoardGamesImage from '@/public/img/prod/casino/BOARDGAMES.webp'
import MgaPuwangImage from '@/public/img/prod/casino/Mga Puwang.webp'
import DealerGamesImage from '@/public/img/prod/casino/LIVE CASINO.webp'

const registrationPage = {
    image: HeroImage,
    title: 'Panalobet Casino Philippines – Maglaro sa Opisyal na Site',
    description: `Ang Panalobet Casino Philippines ay isa sa pinakasikat na seksyon ng site ng pagtaya, na umaakit sa libu-libong tagahanga ng entertainment sa pagsusugal. Dito maaari kang maglaro ng isang malaking bilang ng mga slot machine, mga laro sa mesa, mga lottery. Nag-aalok kami ng isang malawak na iba't ibang mga pagpipilian at lubos na kanais-nais na mga bonus para sa bawat kliyente. At ang pinakamahalaga, upang maglaro ay hindi mo kailangang muling magparehistro at magsagawa ng anumang iba pang mga karagdagang aksyon. Ang casino ay isinama sa opisina ng bookmaker at gumagana sa isang platform.`,
    buttonText: '',
}

const tableOfContents = [
    {
        title: 'Mga Online na Laro sa Panalobet Casino',
        link: '#',
        children: [
            { title: 'SuperAce', link: '#' },
            { title: 'Sugar Rush', link: '#' },
            { title: 'Magic Beans', link: '#' },
            { title: ' 777', link: '#' },
        ],
    },
    {
        title: 'Paano Magsisimulang Maglaro sa Panalobet Casino',
        link: '#',
    },
    {
        title: 'Mga Uri ng Laro sa Panalobet Casino Philippines',
        link: '#',
        children: [
            { title: 'Mga Puwang', link: '#' },
            { title: 'Board Games', link: '#' },
            { title: 'Mga Laro sa Mga Live na Dealer', link: '#' },
        ],
    },
    {
        title: 'FAQ',
        link: '#',
    },
]

const questions = [
    {
        question: 'Ano ang RTP?',
        answer: 'Ito ay isang parameter na sumasalamin sa porsyento ng mga kabayaran ng slot machine. Kung mas mataas ito, mas kumikita ang pagtaya sa slot.',
    },
    {
        question: 'Maaari ba akong makakuha ng dalawang bonus?',
        answer: 'Hindi, kailangan mong pumili ng bonus sa casino o bonus sa pagtaya sa sports. Isa lamang sa mga ito ang maaaring i-activate.',
    },
    {
        question: 'Maaari ba akong maglaro mula sa aking smartphone?',
        answer: 'Oo, sa mobile app sa web version maaari kang magpatakbo ng mga slot sa pamamagitan ng iyong smartphone.',
    },
    {
        question: 'Magkano ang maaari mong manalo?',
        answer: 'Depende ito sa maximum na payout na sinusuportahan ng slot mismo. Makikita mo ang katangiang ito sa tulong.',
    },
]

export default function CasinoPage() {
    return (
        <>
            <Hero
                image={registrationPage.image}
                title={registrationPage.title}
                description={registrationPage.description}
                buttonText=""
            />
            <TableOfContents content={tableOfContents} />
            <section className="bg-[#fffdf4]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16">
                    <div className="mb-10 gap-4 md:flex md:gap-16">
                        <div className="md:w-[50%] md:flex md:items-center md:justify-center">
                            <div className="text-center text-black rounded-xl pb-4 md:bg-[#252b73] md:p-4 md:text-white">
                                <h3 className="text-[1.25rem] text-center font-semibold mb-4">
                                    Super Ace
                                </h3>
                                <p>
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
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fffdf4]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-5">
                    <div className="mb-10 gap-4 md:flex md:gap-16">
                        <div className="md:w-[50%]  md:flex md:items-center md:justify-center">
                            <div className="text-center text-black rounded-xl pb-4 md:bg-[#252b73] md:p-4 md:text-white">
                                <h3 className="text-[1.25rem] text-center font-semibold mb-4">
                                    Sugar Rush
                                </h3>
                                <p>
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
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fffdf4]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-5">
                    <div className="mb-10 gap-4 md:flex md:gap-16">
                        <div className="md:w-[50%] md:flex md:items-center md:justify-center">
                            <div className="text-center text-black rounded-xl pb-4 md:bg-[#252b73] md:p-4 md:text-white">
                                <h3 className="text-[1.25rem] text-center font-semibold mb-4">
                                    Magic Beans
                                </h3>
                                <p>
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
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fffdf4]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-5">
                    <div className="mb-10 gap-4 md:flex md:gap-16">
                        <div className="md:w-[50%] md:flex md:items-center md:justify-center">
                            <div className="text-center text-black rounded-xl pb-4 md:bg-[#252b73] md:p-4 md:text-white">
                                <h3 className="text-[1.25rem] text-center font-semibold mb-4">
                                    777
                                </h3>
                                <p>
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
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-[#7f1d1d] via-[#1f2460] to-[#313380]">
                <div>
                    <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16">
                        <div className="mb-10 text-white">
                            <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                                Paano Magsimulang Maglaro sa Panalobet Casino
                            </h3>
                            <p>
                                Hindi mo kailangang gumawa ng hiwalay na account para magsimulang
                                maglaro ng mga laro sa casino. Kung dati kang nakarehistro sa aming
                                website, gamitin ang parehong username at password upang mag-log in
                                sa seksyon ng casino. Kung wala kang account, mangyaring lumikha ng
                                isa sa pamamagitan ng pagsunod sa mga tagubilin sa ibaba.
                            </p>
                        </div>

                        <div className="w-full grid gap-4 md:grid-cols-2 md:gap-24">
                            <div className="md:order-1">
                                <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                    01
                                </p>
                                <div className="bg-[#252b73] rounded-xl text-white p-3 text-center md:text-right md:p-4">
                                    <h4 className="text-md mb-2 font-medium md:text-xl">
                                        Buksan ang Form
                                    </h4>
                                    <p className="leading-tight md:w-[70%] md:ml-auto">
                                        Pumunta sa opisyal na website ng Panalobet Philippines at
                                        i-click ang button para magparehistro. Magbubukas ang isang
                                        form sa harap mo, kung saan maaari mong piliin kung paano
                                        gumawa ng account.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:order-2">
                                <Image
                                    src={StepOneImage}
                                    width={600}
                                    height={270}
                                    alt="Super Ace"
                                    priority={true}
                                />
                            </div>
                            <div className="md:order-4">
                                <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                    02
                                </p>
                                <div className="bg-[#252b73] rounded-xl text-white p-3 text-center md:text-right md:p-4">
                                    <h4 className="text-md mb-2 font-medium md:text-xl">
                                        Punan ang Mga Field at Pumili ng Bonus
                                    </h4>
                                    <p className="leading-tight md:w-[70%] md:ml-auto">
                                        Ilagay ang iyong personal at impormasyon sa
                                        pakikipag-ugnayan sa lahat ng mga blangkong linya. Gayundin,
                                        huwag kalimutang pumili ng isa sa mga bonus na inaalok ng
                                        site. Kung plano mong maglaro sa casino, ang bonus sa
                                        pagtaya sa sports ay hindi gagana para sa iyo.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:order-3">
                                <Image
                                    src={StepTwoImage}
                                    width={600}
                                    height={270}
                                    alt="Super Ace"
                                    priority={true}
                                />
                            </div>
                            <div className="md:order-5">
                                <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                    03
                                </p>
                                <div className="bg-[#252b73] rounded-xl text-white p-3 text-center md:text-right md:p-4">
                                    <h4 className="text-md mb-2 font-medium md:text-xl">
                                        Kumpirmahin ang Email
                                    </h4>
                                    <p className="leading-tight md:w-[70%] md:ml-auto">
                                        Isang email na may link sa pagkumpirma ay ipapadala sa email
                                        address na iyong tinukoy kanina. Kung pumili ka ng ibang
                                        paraan ng pagpaparehistro, magagawa mong kumpirmahin ang
                                        iyong email sa hinaharap sa panahon ng pag-verify.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:order-6">
                                <Image
                                    src={StepThreeImage}
                                    width={600}
                                    height={270}
                                    alt="Super Ace"
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-white">
                    <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:py-24">
                        <div className="mb-10">
                            <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                                Mga Uri ng Laro sa Panalobet Casino Philippines
                            </h3>
                            <p>
                                Sa catalog ng online casino entertainment ipinakita ang ilang libong
                                laro. Sa ganitong pagkakaiba-iba, ang bawat customer ay makakahanap
                                ng libangan ayon sa gusto nila at ma-enjoy ang kanilang oras sa
                                kanilang paboritong laro. Para sa kaginhawahan sa paghahanap, hinati
                                sila sa ilang kategorya.
                            </p>
                        </div>

                        <div>
                            <div className="mb-4 md:flex md:gap-16 md:mb-8">
                                <div className="md:w-[50%]">
                                    <h3
                                        className="text-[1.25rem] text-left font-semibold mb-4
                "
                                    >
                                        Mga puwang
                                    </h3>
                                    <p className="mb-2">
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

                                    <p className="mb-2 md:mb-10">
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
                                    />
                                </div>
                            </div>

                            <div className="mb-4 md:flex md:gap-16 md:mb-8">
                                <div className="md:w-[50%]">
                                    <h3
                                        className="text-[1.25rem] text-left font-semibold mb-4
                "
                                    >
                                        Board Games
                                    </h3>
                                    <p className="mb-2 md:10">
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
                                                <p className="leading-tight md:w-[70%] md:mr-auto">
                                                    Roulette;
                                                </p>
                                            </li>
                                            <li className="flex items-center gap-5 mb-2 md:mb-4">
                                                <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                                <p className="leading-tight md:w-[70%] md:mr-auto">
                                                    Blackjack;
                                                </p>
                                            </li>
                                            <li className="flex items-center gap-5 mb-2 md:mb-4">
                                                <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                                <p className="leading-tight md:w-[70%] md:mr-auto">
                                                    Poker;
                                                </p>
                                            </li>
                                            <li className="flex items-center gap-5 mb-2 md:mb-4">
                                                <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                                <p className="leading-tight md:w-[70%] md:mr-auto">
                                                    Mga dumi, atbp.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <p>
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
                                    />
                                </div>
                            </div>

                            <div className="md:flex md:gap-16">
                                <div className="md:w-[50%]">
                                    <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                                        Mga Laro sa Mga Live na Dealer
                                    </h3>
                                    <p className="mb-2 md:10">
                                        Ang parehong mga laro sa mesa, pati na rin ang iba pang
                                        libangan kung saan ang kalaban ng manlalaro ay hindi isang
                                        computer, ngunit isang live na tao - isang empleyado ng
                                        casino. Nagaganap ang laro sa live mode, at mapapanood ng
                                        mga user ang mga kaganapang nagaganap sa studio sa
                                        pamamagitan ng player.
                                    </p>

                                    <p>
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
