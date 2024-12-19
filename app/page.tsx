import Header from '@/components/header'
import Hero from './_components/hero'
import TableOfContents from './_components/table-of-contents'
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

export default function Home() {
    return (
        <>
            <div className="bg-stone-950">
                <Header />
            </div>
            <Hero />
            <TableOfContents />
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
        </>
    )
}
