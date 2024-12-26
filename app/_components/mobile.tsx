import ResImage from '@/components/res-image'
import Table from '@/components/table'

const homeAndriodData = [
    {
        dataLeft: 'bersyon ng Android',
        dataRight: '5.1',
    },
    {
        dataLeft: 'Pangunahing memorya',
        dataRight: '1 Gb',
    },
    {
        dataLeft: 'Libreng espasyo',
        dataRight: '46 Mb',
    },
    {
        dataLeft: 'Processor',
        dataRight: '1 Ghz',
    },
]
const homeiOSData = [
    {
        dataLeft: 'bersyon ng iOS',
        dataRight: '8.0',
    },
    {
        dataLeft: 'Pangunahing memorya',
        dataRight: '1 Gb',
    },
    {
        dataLeft: 'Libreng espasyo',
        dataRight: '46 Mb',
    },
    {
        dataLeft: 'Processor',
        dataRight: '1 Ghz',
    },
]

import iosImage from '@/public/img/prod/home/7_Download Panalobet PH app on iOS.webp'
import andriodImage from '@/public/img/prod/home/Download Panalobet PH app on Android.webp'

export default function MobileApp() {
    return (
        <section id="home-mobile-app" className="bg-[#fffdf4]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4 md:text-[2rem]">
                    Panalobet PH mobile app para sa Android at iOS
                </h3>
                <p className="font-light leading-tight text-[1rem]">
                    Kung gusto mong makaramdam ng mas higit na antas ng kaginhawahan kapag tumataya
                    sa sports, i-download ang mobile application ng opisina ng bookmaker sa iyong
                    smartphone. Nakabuo kami ng dalawang magkahiwalay na bersyon ng client para sa
                    mga sikat na operating system at nag-aalok na i-download ang mga ito nang libre
                    sa opisyal na website para sa lahat.
                </p>
                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-10">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={andriodImage}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto"
                        />
                    </div>
                    <div id="home-andriod-download" className="w-full md:w-[50%]">
                        <h3 className="text-[1.25rem] text-center font-semibold mb-4 md:text-left">
                            I-download ang Panalobet PH app sa Android
                        </h3>
                        <p className="font-light leading-tight text-[1rem]">
                            Kung gumagamit ka ng Android mobile device, i-download ang bersyong ito.
                            Maaari lamang itong i-download mula sa aming website. Ang application ay
                            hindi magagamit sa Play Market. Upang i-download at i-install ang
                            program sa iyong smartphone, gawin ang sumusunod:
                        </p>

                        <ol className="list-decimal list-inside">
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Buksan ang website. </strong>
                                Sa home page ng aming website, mag-click sa &quot;Smartphone
                                App&quot;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">I-download ang APK file. </strong>
                                I-click ang button para i-download ang app at hintayin itong
                                makumpleto
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Payagan ang pag-install. </strong>
                                Buksan ang mga setting ng seguridad ng cell phone at payagan ang mga
                                app mula sa hindi kilalang mga mapagkukunan na mai-install
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">I-install ang program. </strong>
                                Kapag natapos na ang pag-download ng Panalobet Philippines APK,
                                buksan ang file na ito at kumpirmahin ang pag-install.
                            </li>
                        </ol>
                        <p className="font-light leading-tight text-[1rem] mb-4">
                            Sa loob lamang ng isang minuto, makakapag-log in ka sa application sa
                            pamamagitan ng shortcut sa desktop, ipasok ang iyong username at
                            password at magsimulang tumaya sa iyong paboritong sports.
                        </p>
                    </div>
                </div>

                <div id="home-andriod-system-requirements" className="pt-4">
                    <h4 className="font-medium text-[1.05rem] leading-tight mb-4">
                        Mga Kinakailangan sa Android System
                    </h4>

                    <Table datas={homeAndriodData} />
                </div>

                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-10">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={iosImage}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto"
                        />
                    </div>

                    <div id="home-ios-download" className="w-full md:w-[50%]">
                        <h3 className="text-[1.25rem] text-center font-semibold mb-4 md:text-left">
                            I-download ang Panalobet PH app sa iOS
                        </h3>
                        <p className="font-light leading-tight text-[1rem]">
                            Para sa mga user ng iPhone at iPad, naghanda kami ng isa pang bersyon ng
                            application na tumatakbo sa iOS operating system. Maaari mo ring
                            i-download ito mula sa opisyal na website. Upang gawin ito, sundin
                            lamang ang ilang hakbang:
                        </p>

                        <ol className="list-decimal list-inside">
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Buksan ang site. </strong>
                                Pumunta sa iyong browser sa iyong smartphone at buksan ang home page
                                ng site. Pagkatapos ay piliin ang seksyong &quot;Smartphone
                                App&quot;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Pumunta sa App Store. </strong>
                                I-click ang button para i-download ang app para makapunta sa opisyal
                                na page nito sa App Store
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">I-install ang kliyente. </strong>
                                Sundin ang mga tagubilin sa Apple Digital Store para i-install ang
                                software.
                            </li>
                        </ol>
                        <p className="font-light leading-tight text-[1rem] mb-4">
                            Ang Panalobet Philippines mobile app para sa iOS ay hindi naiiba sa mga
                            tampok at hitsura mula sa bersyon ng Android. Magagawa mong gumawa ng
                            anumang uri ng taya, makakuha ng mga bonus at iba pang benepisyo.
                        </p>
                    </div>
                </div>

                <div id="home-ios-system-requirements" className="pt-4">
                    <h4 className="font-medium text-[1.05rem] leading-tight mb-4">
                        Mga kinakailangan sa system ng iOS
                    </h4>

                    <Table datas={homeiOSData} />
                </div>
            </div>
        </section>
    )
}
