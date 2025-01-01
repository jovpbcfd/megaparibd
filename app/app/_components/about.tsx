import Table from '@/components/table'

const appAboutData = [
    {
        dataLeft: 'Application version',
        dataRight: '1.2.4',
    },
    {
        dataLeft: 'APK file size',
        dataRight: '12 Mb',
    },
    {
        dataLeft: 'Installed application size',
        dataRight: '46 Mb',
    },
    {
        dataLeft: 'Cost of loading',
        dataRight: 'Free',
    },
    {
        dataLeft: 'Operating system support',
        dataRight: 'Android, iOS',
    },
    {
        dataLeft: 'Access to Sports Betting',
        dataRight: 'After registering',
    },
    {
        dataLeft: 'Access to Live Betting',
        dataRight: 'After registering',
    },
]

export default function About() {
    return (
        <section id="app-info" className="bg-[#fffdf4]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <h3 className="text-left font-semibold mb-4 heading-content">
                    Impormasyon tungkol sa Panalobet PH app
                </h3>
                <p className="font-light leading-tight my-4 body-content">
                    Ang pagbuo ng mobile application ng Panalobet Philippines ay isinagawa nang
                    hiwalay para sa mga Android at iOS device. Ipinatupad namin sa isang
                    nada-download na kliyente ang lahat ng mga function ng opisina ng bookmaker. Sa
                    pamamagitan nito, maaari kang tumaya, magdeposito at mag-withdraw, mag-activate
                    ng mga bonus, makipag-ugnayan sa mga serbisyo ng suporta.
                </p>

                <Table datas={appAboutData} />

                <p className="font-light leading-tight my-4 body-content">
                    Pagkatapos ilunsad ang application, makikita mo ang start screen. Ginagamit nito
                    ang klasikong disenyo ng kumpanya. Ipinatupad namin ang interface sa madilim na
                    kulay para hindi mapagod ang mga mata ng mga user kahit sa mahabang laro. Ang
                    mga accent sa mga key button ay magaan, na ginagawang intuitive ang nabigasyon
                    at nagbibigay-daan sa iyong mag-navigate sa anumang seksyon sa ilang mga
                    pag-click.
                </p>

                <p className="font-light leading-tight mt-4 body-content">
                    Ang mabibigat na graphic na elemento ay hindi rin kasama sa disenyo. Salamat
                    dito, mabilis na gumagana ang application kahit na may mabagal na bilis ng
                    Internet at hindi matatag na koneksyon.
                </p>
            </div>
        </section>
    )
}
