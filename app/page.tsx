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

import HomeBanner from '@/public/img/panalobet-main-hero.webp'

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
        question: 'How many accounts can I create?',
        answer: 'Users are allowed to have no more than one account. Re-registration is not allowed.',
    },
    {
        question: 'Can I get the bonus in installments?',
        answer: 'No, you can only activate it once. The bonus can also be withdrawn only after the wagering conditions are met in full.',
    },
    {
        question: 'Is sports betting legal?',
        answer: 'Yes, if you do them at a licensed bookmaker’s office. Panalobet operates under a Curacao license.',
    },
    {
        question: 'Can I bet on PHP?',
        answer: 'Yes, you need to select PHP as your primary account currency when registering your account.',
    },
    {
        question: 'Can I change the email linked to my account?',
        answer: 'You can’t change it yourself, but you can contact support.',
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
            <WelcomeBonus />
            <OfficialSite />
            <SignUp />
            <StartBetting />
            <MobileApp />
            <Review />
            <Advantage />
            <TypesOfSports />
            <Virtual />
            <Live />
            <BettingOdds />
            <OnlineCasino />
            <MethodsToDeposit />
            <PlayerSupport />
            <Faq questions={questions} description="" />
            <Update />
        </>
    )
}
