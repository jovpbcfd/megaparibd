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

import HomeBanner from '@/public/img/prod/home/Panalobet  Official Website (1000 x 1000).webp'

import { hero, tableOfContentsData, questions } from '@/data/home-page'

export default function Home() {
    return (
        <>
            <Hero
                image={HomeBanner}
                title={hero.title}
                description={hero.description}
                buttonText={hero.buttonText}
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
