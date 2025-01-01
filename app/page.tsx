import Image from 'next/image'

// import Hero from '@/components/hero'
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
            <section className="md:pb-16">
                <div className="max-w-7xl mx-auto py-[1rem] px-[10px] md:flex md:gap-5 md:flex-row-reverse justify-between items-center">
                    <div className="relative w-full h-[200px] flex items-center justify-center  md:h-[500px] md:w-[40%]">
                        <Image
                            src={HomeBanner}
                            alt="Panalobet Main Hero Image"
                            fill={true}
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 100vw, 1920px"
                            priority
                        />
                    </div>
                    <div className="w-full text-white md:w-[60%]">
                        <h1 className="font-bold text-[1.5rem] leading-tight mb-4 md:mb-7 md:text-[2.625rem]">
                            {hero.title}
                        </h1>
                        <p className="font-light leading-tight text-[1rem] md:text-[1.125rem]">
                            {hero.description}
                        </p>
                        <div className="mt-4 max-w-fit md:mt-8">
                            <button
                                className={`${hero.buttonText ? '' : 'hidden'} text-[1.1rem] p-[0.5rem] w-full font-bold rounded-full
                                                bg-gradient-to-br from-red-500 via-gray-700 to-blue-600 text-white shadow-lg
                                                border border-gray-200 border-solid
                                                transition-all duration-200 ease-out
                                                hover:bg-gradient-to-br hover:from-blue-600 hover:via-gray-700 hover:to-red-500 hover:shadow-xl
                                                hover:text-gray-100 hover:border-gray-300
                                                focus:ring-4 focus:ring-red-500 focus:ring-offset-2 md:w-full md:p-[1rem]`}
                            >
                                {hero.buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <TableOfContents content={tableOfContentsData} />
            <WelcomeBonus />
            <MobileApp />
            <section className="bg-gradient-to-br from-[#7f1d1d] via-[#1f2460] to-[#313380] text-white md:py-16">
                <OfficialSite />
                <SignUp />
                <StartBetting />
            </section>
            <About />
            <section className="bg-gradient-to-br from-[#7f1d1d] via-[#1f2460] to-[#313380] text-white md:py-16">
                <TypesOfSports />
                <Virtual />
                <Live />
                <Review />
                <Advantage />
                <BettingOdds />
                <MethodsToDeposit />
                <OnlineCasino />
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
