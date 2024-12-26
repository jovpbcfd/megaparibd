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
    { title: 'About Panalobet', link: '#' },
    { title: 'Welcome bonus for new users up to 20,000 PHP', link: '#' },
    { title: 'The official site of Panalobet for sports betting in Philippines', link: '#' },
    { title: 'How to sign up for Panalobet PH: step-by-step instructions?', link: '#' },
    { title: 'How to start betting?', link: '#' },
    {
        title: 'Panalobet PH mobile app for Android and iOS',
        link: '#',
        children: [
            {
                title: 'Download Panalobet PH app on Android',
                link: '#',
                children: [{ title: 'Android System Requirements', link: '#' }],
            },
            {
                title: 'Download Panalobet PH app on iOS',
                link: '#',
                children: [{ title: 'iOS system requirements', link: '#' }],
            },
        ],
    },
    { title: 'Panalobet Philippines video review', link: '#' },
    { title: 'Advantages of Panalobet', link: '#' },
    {
        title: 'Types of sports betting at Panalobet PH',
        link: '#',
        children: [
            { title: 'CockFighting', link: '#' },
            { title: 'Soccer', link: '#' },
            { title: 'Tennis', link: '#' },
        ],
    },
    { title: 'Betting on virtual sports', link: '#' },
    { title: 'Live Betting', link: '#' },
    { title: 'Betting odds', link: '#' },
    { title: 'Online Casino MegaPari', link: '#' },
    { title: 'Methods to deposit and withdraw money', link: '#' },
    { title: 'Player Support', link: '#' },
    { title: 'FAQ', link: '#' },
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
