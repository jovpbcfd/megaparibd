import Hero from '@/components/hero'
import TableOfContents from '@/components/table-content'
// import Faq from '@/components/faq'
// import Update from '@/components/update'

import HomeBanner from '@/public/img/panalobet-main-hero.webp'

const tableOfContents = [
    {
        title: 'Email',
        link: '#',
    },
    {
        title: 'On-site Chat',
        link: '#',
    },
    {
        title: 'FAQ',
        link: '#',
    },
]

const supportPage = {
    image: HomeBanner,
    title: 'Serbisyo sa Customer ng Panalobet Philippines',
    description: `Upang makapagbigay ng napapanahong suporta sa mga manlalaro, 
    magbigay ng payo at sagutin ang iba't ibang tanong, ang opisina ng bookmaker na Panalobet Philippines ay may espesyal na serbisyo. Maaari kang makipag-ugnayan sa team ng suporta para sa anumang problema at humingi ng tulong sa paglutas nito sa lalong madaling panahon. 
    Nagbigay kami ng ilang paraan para makipag-ugnayan sa suporta.`,
    buttonText: '',
}

// const questions = [
//     {
//         question: 'Kailangan ko bang magrehistro nang hiwalay sa app?',
//         answer: 'Hindi, maaari kang maglaro sa pamamagitan ng iyong kasalukuyang account. Hindi na kailangang magparehistro nang hiwalay.',
//     },
//     {
//         question: 'Maaari ba akong mag-withdraw ng pera sa pamamagitan ng app?',
//         answer: 'Oo, ang mobile application na Panalobet Philippines ay nagbibigay ng isang ganap na cash register na may kakayahang magdeposito at mag-withdraw ng pera.',
//     },
//     {
//         question: 'Maaari ko bang makuha ang bonus ng dalawang beses?',
//         answer: 'Isang beses lang matatanggap ang Welcome Bonus. Hindi ito maaaring i-activate muli.',
//     },
//     {
//         question:
//             'Ano ang mangyayari kung makatanggap ako ng tawag sa telepono habang naglalaro ng mga laro sa casino?',
//         answer: 'Ang app ay mababawasan at ikaw ay titigil sa pagtaya. Makakabalik ka sa laro kapag natapos na ang pag-uusap.',
//     },
// ]

export default function SupportPage() {
    return (
        <>
            <Hero
                image={supportPage.image}
                title={supportPage.title}
                description={supportPage.description}
                buttonText={supportPage.buttonText}
            />
            <TableOfContents content={tableOfContents} />
            <section></section>
        </>
    )
}
