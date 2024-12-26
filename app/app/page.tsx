import Hero from '@/components/hero'
import Faq from '@/components/faq'
import Update from '@/components/update'
import TableOfContents from '@/components/table-content'

import HomeBanner from '@/public/img/panalobet-main-hero.webp'
import About from './_components/about'
import Mobile from './_components/mobile'
import VideoInstruction from './_components/video-instruction'
import All from './_components/all'

const tableOfContentsData = [
    { title: 'Impormasyon tungkol sa Panalobet PH app', link: '#app-info' },
    {
        title: 'Panalobet Mobile App Para sa Android At iOS',
        link: '#app-mobile',
        children: [
            {
                title: 'I-download ang Panalobet app para sa Android',
                link: '#app-andriod',
                children: [
                    {
                        title: 'Minimum na kinakailangan ng system',
                        link: '#app-andriod-system',
                    },
                ],
            },
            {
                title: 'Panalobet PH App para sa iOS',
                link: '#app-ios',
                children: [
                    {
                        title: 'Minimum na kinakailangan ng system',
                        link: '#app-ios-system',
                    },
                ],
            },
        ],
    },
    {
        title: 'Pagpaparehistro sa pamamagitan ng App',
        link: '#app-register',
    },
    {
        title: 'Promo Code sa App',
        link: '#app-promo',
    },
    {
        title: 'Paano Kumuha ng Panalobet PH Mobile Bonus?',
        link: '#app-mobile-bonus',
    },
    {
        title: 'Mga Paraan ng Pagbabayad',
        link: '#app-pay',
    },
    {
        title: 'Paano Maglagay ng Taya sa App?',
        link: '#app-bet',
    },
    {
        title: 'Pagtaya sa Palakasan',
        link: '#app-sports',
    },
    {
        title: 'Cybersports',
        link: '#app-cybersports',
    },
    {
        title: 'Mga tampok ng Panalobet App',
        link: '#app-features',
    },
    {
        title: 'Paano Gamitin ang Web Bersyon ng Panalobet',
        link: '#app-web',
    },
    {
        title: 'Mga Pagkakaiba sa pagitan ng Panalobet App at ng Website',
        link: '#app-diff',
    },
    {
        title: 'Online na casino Panalobet',
        link: '#app-online',
    },
    {
        title: 'Q&A',
        link: '#faq',
    },
]

const appPage = {
    image: HomeBanner,
    title: 'Panalobet App Download para sa Android (APK) at iOS',
    description: `Ang pagtaya sa Panalobet betting company ay maaaring gawin pareho sa opisyal na 
    website at sa mobile application. Ang kumpanya ay bumuo ng mga hiwalay na programa para sa mga 
    smartphone batay sa Android at iOS at ipinatupad ang kanilang buong paggana. Dito maaari kang maglagay 
    ng mga taya, makakuha ng mga bonus, at mag-withdraw ng mga panalo. At bawat bagong user na gumawa ng unang 
    deposito ay makakakuha ng bonus na hanggang 20,000 PHP.`,
    buttonText: 'I-download ang Panalobet App',
}

const questions = [
    {
        question: 'Kailangan ko bang magrehistro nang hiwalay sa app?',
        answer: 'Hindi, maaari kang maglaro sa pamamagitan ng iyong kasalukuyang account. Hindi na kailangang magparehistro nang hiwalay.',
    },
    {
        question: 'Maaari ba akong mag-withdraw ng pera sa pamamagitan ng app?',
        answer: 'Oo, ang mobile application na Panalobet Philippines ay nagbibigay ng isang ganap na cash register na may kakayahang magdeposito at mag-withdraw ng pera.',
    },
    {
        question: 'Maaari ko bang makuha ang bonus ng dalawang beses?',
        answer: 'Isang beses lang matatanggap ang Welcome Bonus. Hindi ito maaaring i-activate muli.',
    },
    {
        question:
            'Ano ang mangyayari kung makatanggap ako ng tawag sa telepono habang naglalaro ng mga laro sa casino?',
        answer: 'Ang app ay mababawasan at ikaw ay titigil sa pagtaya. Makakabalik ka sa laro kapag natapos na ang pag-uusap.',
    },
]

export default function AppPage() {
    return (
        <>
            <Hero
                image={appPage.image}
                title={appPage.title}
                description={appPage.description}
                buttonText={appPage.buttonText}
            />
            <TableOfContents content={tableOfContentsData} />
            <About />
            <Mobile />
            <VideoInstruction />
            <All />
            <Faq questions={questions} description="" />
            <Update />
        </>
    )
}
