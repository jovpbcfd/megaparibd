import Hero from '@/components/hero'
import Faq from '@/components/faq'
import TableOfContents from '@/components/table-content'

import HomeBanner from '@/public/img/panalobet-hero-main.webp'
import Update from '@/components/update'

import { hero, tableOfContentsData, questions } from '@/data/registration-page'

export default function RegistrationPage() {
    return (
        <>
            <Hero
                image={HomeBanner}
                title={hero.title}
                description={hero.description}
                buttonText=""
            />
            <TableOfContents content={tableOfContentsData} />
            <section id="register-step" className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4">
                    <div className="mb-10">
                        <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                            Pagpaparehistro ng Panalobet: Mga Hakbang-hakbang na Tagubilin
                        </h3>
                        <p>
                            Ang pamamaraan ng pagpaparehistro sa Panalobet Philippines ay mabilis at
                            madali hangga&apos;t maaari. Makakagawa ka ng account sa maraming
                            paraan. Upang makapagrehistro, sundin ang ilang hakbang na inilarawan sa
                            ibaba.
                        </p>
                    </div>

                    <div className="w-full grid gap-4 md:grid-cols-2 md:gap-16">
                        <div className="md:order-1">
                            <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                01
                            </p>
                            <div className="bg-gray-100 p-3 text-center md:text-right md:p-4">
                                <h4 className="text-md mb-2 font-medium md:text-xl">
                                    Buksan ang Registration Form
                                </h4>
                                <p className="leading-tight md:w-[70%] md:ml-auto">
                                    Pumunta sa opisyal na site ng opisina ng bookmaker sa
                                    pamamagitan ng iyong browser at mag-click sa pindutan upang
                                    magparehistro. Makikita mo ito sa kanang sulok sa itaas ng
                                    screen.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-2 border-dashed rounded-md md:order-2">
                            Image
                        </div>
                        <div className="md:order-4">
                            <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                02
                            </p>
                            <div className="bg-gray-100 p-3 text-center md:text-right md:p-4">
                                <h4 className="text-md mb-2 font-medium md:text-xl">
                                    Piliin ang Paraan ng Pagpaparehistro
                                </h4>
                                <p className="leading-tight md:w-[70%] md:ml-auto">
                                    Bibigyan ka ng ilang paraan para gumawa ng account. Sa
                                    pamamagitan ng email, numero ng telepono, o 1-click. Piliin ang
                                    opsyon na tila mas maginhawa para sa iyo.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-2 border-dashed rounded-md md:order-3">
                            Image
                        </div>
                        <div className="md:order-5">
                            <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                03
                            </p>
                            <div className="bg-gray-100 p-3 text-center md:text-right md:p-4">
                                <h4 className="text-md mb-2 font-medium md:text-xl">
                                    Tukuyin ang Bonus
                                </h4>
                                <p className="leading-tight md:w-[70%] md:ml-auto">
                                    Sa parehong form ng pagpaparehistro, magagawa mong pumili ng isa
                                    sa mga bonus na aming inaalok. Kung gusto mong tumaya sa sports,
                                    tukuyin ang sports bonus.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-2 border-dashed rounded-md md:order-6">
                            Image
                        </div>
                        <div className="md:order-8">
                            <p className="text-[3rem] font-medium leading-none text-[#ddd] mb-2 md:text-[4.5rem]">
                                04
                            </p>
                            <div className="bg-gray-100 p-3 text-center md:text-right md:p-4">
                                <h4 className="text-md mb-2 font-medium md:text-xl">
                                    Punan ang Form
                                </h4>
                                <p className="leading-tight md:w-[70%] md:ml-auto">
                                    Ilagay ang iyong personal na impormasyon sa lahat ng walang
                                    laman na field. Gumamit lamang ng wastong impormasyon upang
                                    madali mong ma-verify sa hinaharap. Kung mayroon kang promo
                                    code, ilagay ito sa naaangkop na linya.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-2 border-dashed rounded-md md:order-7">
                            Image
                        </div>
                    </div>
                </div>
            </section>

            <section id="register-mobile" className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16">
                    <div className="mb-10 gap-4 md:flex md:gap-16">
                        <div className="md:w-[50%]">
                            <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                                Pagpaparehistro sa pamamagitan ng Mga Mobile Device
                            </h3>
                            <p>
                                Maaaring magparehistro ang mga user ng smartphone para sa Panalobet
                                BD mula sa kanilang device sa site o sa app. Ang pamamaraan ay hindi
                                naiiba. Kailangan mo ring buksan ang form ng pagpaparehistro, punan
                                ang mga patlang, pumili ng isang bonus at kumpirmahin ang paglikha
                                ng isang account. Ang account na ito ay pareho para sa lahat ng
                                bersyon ng software ng bookmaker.
                            </p>
                        </div>
                        <div className="flex items-center justify-center border-2 border-dashed rounded-md md:w-[50%]">
                            image
                        </div>
                    </div>
                </div>
            </section>

            <section id="register-video-instruction" className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16">
                    <div className="mb-10">
                        <div>
                            <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                                Video Instruksyon kung paano Magparehistro
                            </h3>
                            <p>
                                Kung makatagpo ka ng mga problema, o gusto mong makita sa sarili
                                mong mga mata kung paano nagaganap ang pagpaparehistro sa Panalobet
                                Philippines, patakbuhin ang maikling video na inihanda namin para sa
                                iyo. Ipinapaliwanag nito ang buong pamamaraan ng pagpaparehistro
                                nang sunud-sunod. Ulitin lang ang mga hakbang na makikita mo sa
                                screen.
                            </p>
                        </div>

                        <div
                            id="register-requirements"
                            className="grid grid-cols-1 gap-4 pt-4 md:gap-10"
                        >
                            <div className="md:ml-auto">
                                <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 shadow-lg text-white rounded-xl p-3 text-center md:text-left md:p-10">
                                    <h4 className="font-medium mb-2">
                                        Mga Kinakailangan sa Pagpaparehistro ng Panalobet
                                        Philippines
                                    </h4>
                                    <p className="leading-tight md:w-[70%] md:mr-auto md:mb-4">
                                        Bagaman ang pamamaraan ng pagpaparehistro sa opisina ng
                                        bookmaker ay kasing simple hangga&apos;t maaari at
                                        mauunawaan kahit na sa mga taong hindi pa tumaya dati, ang
                                        kumpanya ay may ilang mga patakaran at paghihigpit, na dapat
                                        malaman ng lahat. Ano ang mga patakarang ito:
                                    </p>

                                    <ul className="md:w-[50%]">
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight md:w-[70%] md:mr-auto">
                                                Ang mga gumagamit ng legal na edad ay pinapayagang
                                                magparehistro. Ang mga wala pang 18 taong gulang ay
                                                hindi pinapayagang ma-access sa pagsusugal;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight md:w-[70%] md:mr-auto">
                                                Ang bawat user ay maaaring magrehistro lamang ng
                                                isang account. Kung lumikha ka ng higit sa isang
                                                account, ikaw ay mai-block;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight md:w-[70%] md:mr-auto">
                                                Ang data na tinukoy ng manlalaro sa panahon ng
                                                pagpaparehistro ay dapat tumutugma sa katotohanan.
                                                Kung may makikitang mga pagkakaiba, hindi magiging
                                                posible ang pag-verify.
                                            </p>
                                        </li>
                                    </ul>

                                    <p>
                                        Siguraduhing basahin ang buong listahan ng mga panuntunan at
                                        ang kasunduan ng user bago magparehistro. Makakapigil ito sa
                                        iyong magkamali.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 shadow-lg text-white rounded-xl p-3 text-center md:text-left md:p-10">
                                    <h4 className="font-medium mb-2">Pagpapatunay ng Account</h4>
                                    <p className="leading-tight md:w-[70%] md:mr-auto md:mb-4">
                                        Upang matiyak ang pinakamataas na antas ng seguridad ng
                                        account at upang maprotektahan ang mga pondo sa mga balanse
                                        ng mga user, ang opisina ng bookmaker ng Panalobet ay
                                        nagbibigay ng pag-verify. Ito ang pamamaraan ng pag-verify
                                        ng pagkakakilanlan, na nagbibigay-daan sa iyong i-secure ang
                                        iyong account. Isinasagawa ito sa tatlong yugto:
                                    </p>

                                    <ul className="md:w-[50%]">
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight md:w-[70%] md:mr-auto">
                                                Pagkumpirma ng numero ng telepono at email;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight md:w-[70%] md:mr-auto">
                                                Pagpuno sa profile ng personal na data;
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-5 mb-2 md:mb-4">
                                            <div className="w-4 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                            <p className="leading-tight md:w-[70%] md:mr-auto">
                                                Patunay ng pagkakakilanlan sa pamamagitan ng
                                                pagpapadala ng mga larawan at pag-scan ng mga
                                                dokumento.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="register-welcome-bonus" className="bg-[#fff]">
                <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pt-16">
                    <div className="mb-10 gap-4 md:flex md:gap-16">
                        <div className="md:w-[50%]">
                            <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                                Welcome Bonus
                            </h3>
                            <p>
                                Ang bawat bagong manlalaro na nagdeposito sa unang pagkakataon ay
                                makakaasa na makatanggap ng Panalobet Welcome Bonus na hanggang
                                20,000 PHP. Dodoblehin ng platform ang anumang halaga ng deposito sa
                                loob ng itinakdang mga limitasyon. Magagawa mong i-withdraw ang pera
                                pagkatapos tumaya o gastusin ito sa anumang uri ng pagtaya.
                            </p>

                            <div>
                                <p className="my-4">
                                    Upang makuha ang bonus, dapat mong gawin ang mga sumusunod:
                                </p>

                                <ul>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-8 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:mr-auto">
                                            Ang mga gumagamit ng legal na edad ay pinapayagang
                                            magparehistro. Ang mga wala pang 18 taong gulang ay
                                            hindi pinapayagang ma-access sa pagsusugal;
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-8 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:mr-auto">
                                            Ang bawat user ay maaaring magrehistro lamang ng isang
                                            account. Kung lumikha ka ng higit sa isang account, ikaw
                                            ay mai-block;
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-5 mb-2 md:mb-4">
                                        <div className="w-8 h-10 bg-gray-200 rounded-full hidden md:block"></div>
                                        <p className="leading-tight md:mr-auto">
                                            Ang data na tinukoy ng manlalaro sa panahon ng
                                            pagpaparehistro ay dapat tumutugma sa katotohanan. Kung
                                            may makikitang mga pagkakaiba, hindi magiging posible
                                            ang pag-verify.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-2 border-dashed rounded-md md:w-[50%]">
                            image
                        </div>
                    </div>
                </div>
            </section>

            <Faq
                questions={questions}
                description={`Kung mayroon ka pa ring mga katanungan tungkol sa pagpaparehistro sa Panalobet Philippines, o kung kailangan mo ng payo, maaari kang humingi ng tulong mula sa serbisyo ng suporta ng opisina ng bookmaker. Ito ay magagamit sa buong orasan. Makakakita ka rin ng maikling FAQ sa ibaba, na mayroong maraming kapaki-pakinabang na impormasyon.`}
            />

            <Update />
        </>
    )
}
