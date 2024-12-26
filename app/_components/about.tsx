import Table from '@/components/table'

const homeAboutData = [
    {
        dataLeft: 'Taon ng pagpaparehistro',
        dataRight: '2019',
    },
    {
        dataLeft: 'Nagho-host ng mga manlalarong Indian',
        dataRight: 'Oo',
    },
    {
        dataLeft: 'Tumatanggap ng PHP',
        dataRight: 'Oo',
    },
    {
        dataLeft: 'Lisensya',
        dataRight: 'Curacao',
    },
    {
        dataLeft: 'Mga serbisyo',
        dataRight: 'Pagtaya sa sports, online casino, poker',
    },
    {
        dataLeft: 'Mga bersyon ng software',
        dataRight: 'Opisyal na website, smartphone app',
    },
    {
        dataLeft: 'Software versions',
        dataRight: 'Official website, smartphone app',
    },
    {
        dataLeft: 'Welcome Bonus',
        dataRight: '+100% sa unang deposito hanggang 20,000 INR',
    },
    {
        dataLeft: 'Mga paraan ng pagdedeposito',
        dataRight: 'Nagad, Bkash, Rocket, Upay, AstroPay, Jeton Wallet, Kvitum, Cryptocurrencies',
    },
    {
        dataLeft: 'Pinakamababang deposito',
        dataRight: '75 PHP',
    },
    {
        dataLeft: 'Minimum na output',
        dataRight: '150 PHP',
    },
    {
        dataLeft: 'Serbisyo sa Customer',
        dataRight: 'E-mail, makipag-chat sa site',
    },
]

export default function About() {
    return (
        <section id="home-about" className="bg-[#fffdf4]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4 md:text-[2rem]">
                    Tungkol sa Panalobet
                </h3>
                <p className="text-[1rem] font-light leading-tight">
                    Sa kabila ng murang edad nito, ang opisina ng bookmaker ay nagagawang mag-alok
                    sa mga user ng maraming mahahalagang bentahe, kabilang ang mga kapaki-pakinabang
                    na bonus at isang malaking bilang ng mga pagpipilian para sa pagtaya. Naganap
                    ang pagpaparehistro ng kumpanya noong 2019. Upang legal na magtrabaho sa
                    Pilipinas, kumuha kami ng lisensya mula sa Curacao Gaming Commission.
                    Kinukumpirma nito ang pagiging maaasahan at kaligtasan ng kumpanya at
                    pinapayagan kaming mag-alok ng aming mga serbisyo sa mga residente ng
                    dose-dosenang mga bansa.
                </p>
                <p className="text-[1rem] font-light leading-tight my-4">
                    Ngayon ang kabuuang bilang ng mga rehistradong gumagamit ng Panalobet
                    Philippines ay lumampas sa 500 libong tao. Ang katanyagan sa mga manlalaro ay
                    ipinaliwanag sa pamamagitan ng katotohanan na kami ay patuloy na nagpapabuti,
                    nag-aalok ng mga bagong pagkakataon at benepisyo sa bawat isa sa aming mga
                    kliyente.
                </p>

                <Table datas={homeAboutData} />

                <p className="font-light leading-tight text-[1rem] my-4">
                    Upang mabigyan ang mga user ng maximum na kaginhawahan kapag nakikipag-ugnayan
                    sa site, bumuo kami ng isang malinaw at madaling gamitin na interface. Kahit na
                    ang mga ganap na baguhan na hindi pa tumaya noon ay mauunawaan ang nabigasyon.
                    Ang isang pag-click sa pindutan ay magdadala sa iyo sa anumang seksyon at makuha
                    ang impormasyong interesado ka.
                </p>

                <p className="font-light leading-tight text-[1rem] mt-4">
                    Ang disenyo ng site ay iniangkop para sa pagtingin mula sa mga cell phone.
                    Anuman ang modelo ng smartphone na iyong ginagamit at kung anong operating
                    system ang naka-install dito, ang mga pahina ay awtomatikong mag-aadjust sa laki
                    ng display.
                </p>
            </div>
        </section>
    )
}
