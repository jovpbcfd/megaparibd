import ResImage from '@/components/res-image'

import OfficialBanner from '@/public/img/prod/home/The official site of Panalobet for sports betting in Philippines.webp'

export default function OfficialSite() {
    return (
        <div id="home-official-site" className="text-white">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <h3 className="text-[1.5rem] text-center font-semibold mb-4 md:text-[2.5rem]">
                    Ang opisyal na site ng Panalobet para sa pagtaya sa sports sa Pilipinas
                </h3>
                <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:justify-between">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={OfficialBanner}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto md:rounded-xl md:shadow-2xl"
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <p className="font-light leading-tight text-[1.125rem] mb-4">
                            Ang paglalaro sa opisyal na site ng Panalobet Philippines ay makakaakit
                            sa lahat ng mahilig sa pagtaya sa sports. Ang aming kumpanya ay legal na
                            tumatakbo sa bansa at nag-aalok sa mga user ng iba&apos;t ibang
                            benepisyo:
                        </p>
                        <ul className="list-none p-0 m-0 font-serif text-lg text-white">
                            <li className="relative mb-6 pl-8 leading-relaxed hover:text-black transition">
                                <span className="absolute left-0 top-0 text-gold text-xl">★</span>
                                Ilang dosenang sports para sa pagtaya
                            </li>
                            <li className="relative mb-6 pl-8 leading-relaxed hover:text-black transition">
                                <span className="absolute left-0 top-0 text-gold text-xl">★</span>
                                Higit sa 1,000 sporting event araw-araw
                            </li>
                            <li className="relative mb-6 pl-8 leading-relaxed hover:text-black transition">
                                <span className="absolute left-0 top-0 text-gold text-xl">★</span>
                                Binuo ang Live na seksyon na may mga taya sa real-time
                            </li>
                            <li className="relative mb-6 pl-8 leading-relaxed hover:text-black transition">
                                <span className="absolute left-0 top-0 text-gold text-xl">★</span>
                                Mapagbigay na welcome bonus hanggang 20,000 PHP
                            </li>
                            <li className="relative mb-6 pl-8 leading-relaxed hover:text-black transition">
                                <span className="absolute left-0 top-0 text-gold text-xl">★</span>
                                Maginhawang mobile app para sa Android at iOS
                            </li>
                            <li className="relative mb-6 pl-8 leading-relaxed hover:text-black transition">
                                <span className="absolute left-0 top-0 text-gold text-xl">★</span>
                                Mabilis na pag-withdraw ng mga pondo sa dose-dosenang mga sistema ng
                                pagbabayad.
                            </li>
                        </ul>
                        {/* <ul>
                            <li className="font-light leading-tight my-[1.5rem] pl-8">
                                Several dozen sports for betting;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem] pl-8">
                                More than 1,000 sporting events daily;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem] pl-8">
                                Developed Live section with bets in real-time;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem] pl-8">
                                Generous welcome bonus up to 20,000 PHP;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem] pl-8">
                                Convenient mobile app for Android and iOS;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem] pl-8">
                                Fast withdrawal of funds to dozens of payment systems.
                            </li>
                        </ul> */}
                        <p className="font-light leading-tight text-[1.125rem]">
                            Upang simulan ang pagtaya sa opisyal na website ng Panalobet, ito ay
                            sapat na upang dumaan sa isang maikling pamamaraan ng pagpaparehistro.
                            Pagkatapos nito, makakakuha ka ng access sa lahat ng mga function at
                            feature ng site.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
