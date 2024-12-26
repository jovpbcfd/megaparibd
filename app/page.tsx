import Hero from '@/components/hero'
import Update from '@/components/update'
import Faq from '@/components/faq'
import TableOfContents from '@/components/table-content'

import About from './_components/about'
import WelcomeBonus from './_components/welcom-bonus'
import OfficialSite from './_components/official-site'
import SignUp from './_components/sign-up'
import StartBetting from './_components/start-betting'
import MobileApp from './_components/mobile'
import Review from './_components/review'
import Advantage from './_components/advantage'
import TypesOfSports from './_components/types-of-sports'
import Virtual from './_components/virtual'
import Live from './_components/live'
import BettingOdds from './_components/betting-odds'
import OnlineCasino from './_components/online-casino'
import MethodsToDeposit from './_components/methods-to-deposit'
import PlayerSupport from './_components/player-support'

// import HomeBanner from '@/public/img/Panalobet Website Content (398 x 398).webp'
import HomeBanner from '@/public/img/prod/home/Panalobet  Official Website (1000 x 1000).webp'

const homepage = {
    image: HomeBanner,
    title: 'Panalobet – Official Website for Online Sports Betting in Philippines',
    description: `Panalobet bookmaker offers Philippines users a wide range of opportunities
                        for betting on sports. The company has been officially operating since 2019,
                        and its legality is confirmed by the current license of Curacao. The
                        official Panalobet website offers more than 1,000 events for betting,
                        favorable odds, different prediction options, and a generous welcome bonus
                        for newcomers of up to 20,000 PHP.`,
    buttonText: 'Start Betting',
}

const tableOfContentsData = [
    { title: 'Tungkol sa Panalobet', link: '#home-about' },
    {
        title: 'Welcome bonus para sa mga bagong user hanggang 20,000 PHP',
        link: '#home-welcome-bonus',
    },
    {
        title: 'Ang opisyal na site ng Panalobet para sa pagtaya sa sports sa Pilipinas',
        link: '#home-official-site',
    },
    {
        title: 'Paano mag-sign up para sa Panalobet PH: step-by-step na mga tagubilin?',
        link: '#home-sign-up',
    },
    { title: 'Paano simulan ang pagtaya?', link: '#home-start-betting' },
    {
        title: 'Panalobet PH mobile app para sa Android at iOS',
        link: '#home-mobile-app',
        children: [
            {
                title: 'I-download ang Panalobet PH app sa Android',
                link: '#home-andriod-download',
                children: [
                    {
                        title: 'Mga Kinakailangan sa Android System',
                        link: '#home-andriod-system-requirements',
                    },
                ],
            },
            {
                title: 'I-download ang Panalobet PH app sa iOS',
                link: '#home-ios-download',
                children: [
                    {
                        title: 'Mga kinakailangan sa system ng iOS',
                        link: '#home-ios-system-requirements',
                    },
                ],
            },
        ],
    },
    { title: 'Panalobet Philippines video review', link: '#home-review' },
    { title: 'Mga kalamangan ng Panalobet', link: '#home-advantage' },
    {
        title: 'Mga uri ng pagtaya sa sports sa Panalobet PH',
        link: '#home-type-sports',
        children: [
            { title: 'Sabong', link: '#home-cockfighting' },
            { title: 'Soccer', link: '#home-soccer' },
            { title: 'Tennis', link: '#home-tennis' },
        ],
    },
    { title: 'Pagtaya sa virtual na palakasan', link: '#home-betting-virtual' },
    { title: 'Live na Pagtaya', link: '#home-betting-live' },
    { title: 'Mga logro sa pagtaya', link: '#home-betting-odds' },
    { title: 'Online Casino Panalobet', link: '#home-casino' },
    { title: 'Mga paraan upang magdeposito at mag-withdraw ng pera', link: '#home-deposits' },
    { title: 'Suporta sa Manlalaro', link: '#home-player-support' },
    { title: 'FAQ', link: '#faq' },
]

const questions = [
    {
        question: 'Ilang account ang maaari kong gawin?',
        answer: 'Pinapayagan ang mga user na magkaroon ng hindi hihigit sa isang account. Hindi pinapayagan ang muling pagpaparehistro.',
    },
    {
        question: 'Maaari ko bang makuha ang bonus nang installment?',
        answer: 'Hindi, maaari mo lang itong i-activate nang isang beses. Ang bonus ay maaari ding bawiin pagkatapos lamang matugunan ang mga kondisyon sa pagtaya.',
    },
    {
        question: 'Legal ba ang pagtaya sa sports?',
        answer: 'Oo, kung gagawin mo ang mga ito sa isang lisensyadong bookmaker office. Ang Panalobet ay tumatakbo sa ilalim ng lisensya ng Curacao.',
    },
    {
        question: 'Maaari ba akong tumaya sa PHP?',
        answer: 'Oo, kailangan mong piliin ang PHP bilang iyong pangunahing account currency kapag nirerehistro ang iyong account.',
    },
    {
        question: 'Maaari ko bang baguhin ang email na naka-link sa aking account?',
        answer: 'Hindi mo ito mababago sa iyong sarili, ngunit maaari kang makipag-ugnayan sa suporta.',
    },
]

export default function Home() {
    return (
        <>
            <Hero
                image={homepage.image}
                title={homepage.title}
                description={homepage.description}
                buttonText={homepage.buttonText}
            />
            <TableOfContents content={tableOfContentsData} />
            <About />
            <section className="bg-gradient-to-br from-[#7f1d1d] via-[#1f2460] to-[#313380] text-white md:py-16">
                <WelcomeBonus />
                <OfficialSite />
                <SignUp />
                <StartBetting />
            </section>
            <MobileApp />
            <section className="bg-gradient-to-br from-[#7f1d1d] via-[#1f2460] to-[#313380] text-white md:py-16">
                <Review />
                <Advantage />
                <TypesOfSports />
                <Virtual />
                <Live />
                <BettingOdds />
                <OnlineCasino />
                <MethodsToDeposit />
                <PlayerSupport />
            </section>
            <Faq
                questions={questions}
                description={`Sa ibaba ay nagbibigay kami ng mga sagot sa ilang karaniwang tanong ng manlalaro. Bago ka magpadala ng kahilingan sa suporta, tiyaking hindi nakalista sa ibaba ang impormasyong kailangan mo.
`}
            />
            <Update />
        </>
    )
}
