import Header from '@/components/header'
import Footer from '../_components/footer'
import Hero from '@/components/hero'

import HomeBanner from '@/public/img/panalobet-main-hero.webp'

const appPage = {
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

export default function AppPage() {
    return (
        <>
            <Header />
            <main>
                <Hero
                    image={appPage.image}
                    title={appPage.title}
                    description={appPage.description}
                    buttonText={appPage.buttonText}
                />
            </main>
            <Footer />
        </>
    )
}
