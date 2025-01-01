import Hero from '@/components/hero'
import Faq from '@/components/faq'
import Update from '@/components/update'
import TableOfContents from '@/components/table-content'

import About from './_components/about'
import Mobile from './_components/mobile'
import VideoInstruction from './_components/video-instruction'
import All from './_components/all'

import HeroImage from '@/public/img/prod/app/HERO APP.webp'

import { hero, questions, tableOfContentsData } from '@/data/app-page'

export default function AppPage() {
    return (
        <>
            <Hero
                image={HeroImage}
                title={hero.title}
                description={hero.description}
                buttonText={hero.buttonText}
            />
            <TableOfContents content={tableOfContentsData} />
            <Mobile />
            <div className="bg-gradient-to-br from-[#7f1d1d] via-[#1f2460] to-[#313380]">
                <All />
            </div>
            <About />
            <VideoInstruction />
            <Faq questions={questions} description="" />
            <Update />
        </>
    )
}
