import ResImage from '@/components/res-image'
import Table from '@/components/table'
import OfficialBanner from '@/public/img/official-site-of-panalobet.webp'

const andriodMinRequirements = [
    {
        dataLeft: 'Android version',
        dataRight: '6.1',
    },
    {
        dataLeft: 'Main memory',
        dataRight: '1 Gb',
    },
    {
        dataLeft: 'Processor frequency',
        dataRight: '1 Ghz',
    },
    {
        dataLeft: 'Free memory space',
        dataRight: '50 Mb',
    },
]
const iosMinRequirements = [
    {
        dataLeft: 'iOS version',
        dataRight: '8.0',
    },
    {
        dataLeft: 'Main memory',
        dataRight: '1 Gb',
    },
    {
        dataLeft: 'Processor frequency',
        dataRight: '1 Ghz',
    },
    {
        dataLeft: 'Free memory space',
        dataRight: '50 Mb',
    },
]

export default function Mobile() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4">
                <div>
                    <h3 className="text-[1.25rem] text-left font-semibold mb-4">
                        Panalobet Mobile App Para sa Android At iOS
                    </h3>
                    <p className="font-light leading-tight text-[1rem]">
                        Ang mobile app na binuo namin ay angkop para sa paglalaro mula sa karamihan
                        ng mga smartphone anuman ang operating system na ginamit. Maaari kang tumaya
                        mula sa parehong mga Android at iOS device.
                    </p>

                    {/* ANDROID OS */}
                    <div>
                        <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-10">
                            <div className="w-full md:w-[50%]">
                                <ResImage
                                    path={OfficialBanner}
                                    priority={true}
                                    mobileSize={{ width: 390, height: 240 }}
                                    desktopSize={{ width: 530, height: 330 }}
                                    alt="Official Banner home"
                                    screenSize={900}
                                    className="ml-auto"
                                />
                            </div>
                            <div className="w-full md:w-[50%]">
                                <h3 className="text-[1.25rem] text-center font-semibold mb-4 md:text-left">
                                    I-download ang Panalobet app para sa Android
                                </h3>
                                <p className="font-light leading-tight text-[1rem]">
                                    Kung gumagamit ka ng Android smartphone, i-download ang
                                    naaangkop na bersyon ng mobile app sa aming website. Maaari mo
                                    lamang itong i-download dito. Hindi ito available sa Play
                                    Market. Upang gawin ito, sundin ang ilang hakbang na inilarawan
                                    sa ibaba.
                                </p>

                                <ol className="list-decimal list-inside">
                                    <li className="font-light leading-tight my-[1.5rem]">
                                        <strong className="font-bold">Pumunta sa website. </strong>
                                        Sa iyong mobile browser, buksan ang pangunahing pahina ng
                                        opisyal na website ng Panalobet Philippines at pumunta sa
                                        kategoryang “Smartphone application”;
                                    </li>
                                    <li className="font-light leading-tight my-[1.5rem]">
                                        <strong className="font-bold">
                                            I-download ang program.{' '}
                                        </strong>
                                        I-click ang button para i-download ang Panalobet PH APK
                                        file. Ang pag-download ay tatagal ng ilang segundo. Minsan
                                        hinaharangan ng browser ang pag-download. Aprubahan ito kung
                                        magbibigay sa iyo ng error ang sistema ng seguridad.
                                    </li>
                                    <li className="font-light leading-tight my-[1.5rem]">
                                        <strong className="font-bold">
                                            Baguhin ang mga setting.{' '}
                                        </strong>
                                        Buksan ang mga setting ng smartphone at sa mga setting
                                        payagan ang pag-install ng mga application na na-download
                                        mula sa hindi kilalang mga mapagkukunan.
                                    </li>
                                    <li className="font-light leading-tight my-[1.5rem]">
                                        <strong className="font-bold">
                                            Iinstall ang program.{' '}
                                        </strong>
                                        Patakbuhin ang file na na-download mo kanina at kumpirmahin
                                        ang pag-install nito. Aabutin ito ng hindi hihigit sa isang
                                        minuto. Pagkatapos nitong makumpleto, may lalabas na
                                        shortcut sa listahan ng mga application para ilunsad ang
                                        Panalobet para sa Android.
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h4 className="font-medium text-[1.05rem] leading-tight mb-4 md:text-[1.125rem] md:leading-[1.5] font-[500]">
                                Minimum na kinakailangan ng system.
                            </h4>

                            <p className="font-light leading-tight text-[1rem] mb-4">
                                Ang malaking bentahe ng Panalobet Philippines app para sa Android ay
                                ang mababang mga kinakailangan ng system para sa paglulunsad at
                                matatag na operasyon nito:
                            </p>

                            <Table datas={andriodMinRequirements} />

                            <p className="font-light leading-tight text-[1rem] mb-4 md:my-4">
                                Kung natutugunan ang mga parameter na ito, madali kang
                                makakapagpusta at makakagamit ng anumang iba pang function at
                                feature ng kliyente.
                            </p>
                            <p className="font-light leading-tight text-[1rem]">
                                Ang Panalobet App para sa Android ay Magagamit sa Sumusunod na Mga
                                Android Device:
                            </p>

                            <ul>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Samsung Galaxy Note 9;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    One Plus 6;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Huawei Honor 9;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Samsung Galaxy S8;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    LG G7;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Lenovo K6 Note;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Xiaomi Mi 6;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Nokia G20;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Oppo A53;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    Motorola E7i.
                                </li>
                            </ul>

                            <p className="font-light leading-tight text-[1rem]">
                                Ang pagsubok ay ginawa sa dose-dosenang iba pang mga modelo ng
                                smartphone. Kung ang iyong device ay katulad ng mga feature sa mga
                                nakalista sa itaas, hindi ka makakaranas ng anumang mga problema.
                            </p>
                        </div>
                    </div>

                    {/* IOS */}
                    <div>
                        <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between md:pt-10">
                            <div className="w-full md:w-[50%]">
                                <ResImage
                                    path={OfficialBanner}
                                    priority={true}
                                    mobileSize={{ width: 390, height: 240 }}
                                    desktopSize={{ width: 530, height: 330 }}
                                    alt="Official Banner home"
                                    screenSize={900}
                                    className="ml-auto"
                                />
                            </div>
                            <div className="w-full md:w-[50%]">
                                <h3 className="text-[1.25rem] text-center font-semibold mb-4 md:text-left">
                                    Panalobet PH App para sa iOS
                                </h3>
                                <p className="font-light leading-tight text-[1rem]">
                                    Kung gumagamit ka ng iOS smartphone, maaari mo ring i-download
                                    ang app at maglagay ng taya sa pamamagitan nito. Gumawa kami ng
                                    hiwalay na bersyon para sa mga iPhone at iPad.
                                </p>

                                <ol className="list-decimal list-inside">
                                    <li className="font-light leading-tight my-[1.5rem]">
                                        <strong className="font-bold">
                                            I-download ang Panalobet App Para sa iOS.{' '}
                                        </strong>
                                        Ang pag-download at pag-install ng mobile app para sa iOS ay
                                        mas mabilis at mas madali kaysa sa kaso ng Android. Upang
                                        simulan ang pagtaya, kailangan mo lamang magsagawa ng ilang
                                        mga aksyon.
                                    </li>
                                    <li className="font-light leading-tight my-[1.5rem]">
                                        <strong className="font-bold">
                                            Buksan ang pahina ng application.{' '}
                                        </strong>
                                        Pumunta sa mobile browser at buksan ang pangunahing pahina
                                        ng opisina ng bookmaker. Pagkatapos ay pumunta sa seksyong
                                        &quot;Smartphone app&quot;.
                                    </li>
                                    <li className="font-light leading-tight my-[1.5rem]">
                                        <strong className="font-bold">
                                            Buksan ang App Store.{' '}
                                        </strong>
                                        I-click ang button sa pag-download para pumunta sa page ng
                                        app sa Apple store. Maaari mo ring mahanap ito kaagad sa App
                                        Store.
                                    </li>
                                    <li className="font-light leading-tight my-[1.5rem]">
                                        <strong className="font-bold">
                                            Iinstall ang program.{' '}
                                        </strong>
                                        I-install ang Panalobet Philippines app sa iOS sa
                                        pamamagitan ng pagsunod sa mga tagubilin sa App Store.
                                        Pagkatapos nito, magagawa mong ilunsad ito, mag-log in at
                                        magsimulang tumaya.
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h4 className="font-medium text-[1.05rem] leading-tight mb-4 md:text-[1.125rem] md:leading-[1.5] font-[500]">
                                Minimum na kinakailangan ng system.
                            </h4>

                            <p className="font-light leading-tight text-[1rem] mb-4">
                                Para gumana nang maayos ang Panalobet mobile app sa iOS, mababa rin
                                ang mga kinakailangan. Dapat matugunan ng smartphone ang mga
                                sumusunod na pamantayan:
                            </p>

                            <Table datas={iosMinRequirements} />

                            <p className="font-light leading-tight text-[1rem] mb-4 md:my-4">
                                Ang mga kinakailangang ito ay natutugunan ng karamihan sa mga
                                modernong smartphone at maging ng mga modelo ng mga nakaraang taon.
                            </p>
                            <p className="font-light leading-tight text-[1rem]">
                                Ang Panalobet PH App para sa iOS ay Mahusay na Gumagana sa:
                            </p>

                            <ul>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    iPhone 6s at 6s Plus;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    iPhone SE
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    iPhone 7 at 7 Plus;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    iPhone Xs, Xs Max at XR;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    iPhone 11, 11 Pro at 11 Pro Max;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    iPhone 12, Mini, 12 Pro at Pro Max;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    iPhone 13, Mini, 13 Pro at Pro Max;
                                </li>
                                <li
                                    className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                                >
                                    iPad 3, 4, Mini, Air, Pro.
                                </li>
                            </ul>

                            <p className="font-light leading-tight text-[1rem]">
                                Kung mayroon kang isa sa mga modelong ito, magagawa mong tumaya nang
                                walang mga problema at hindi makaranas ng mga paghihirap.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
