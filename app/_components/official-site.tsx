import ResImage from '@/components/res-image'

import OfficialBanner from '@/public/img/The-official-site-of-Mega-Pari-for-sports-betting-in-Bangladesh4.webp'

export default function OfficialSite() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4">
                    The official site of Panalobet for sports betting in Philippines
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
                            className="ml-auto"
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <p className="font-light leading-tight text-[1rem]">
                            Playing on the official site of Panalobet Philippines will appeal to all
                            sports betting enthusiasts. Our company operates in the country legally
                            and offers users various benefits:
                        </p>
                        <ul>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Several dozen sports for betting;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                More than 1,000 sporting events daily;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Developed Live section with bets in real-time;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Generous welcome bonus up to 20,000 PHP;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Convenient mobile app for Android and iOS;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Fast withdrawal of funds to dozens of payment systems.
                            </li>
                        </ul>
                        <p className="font-light leading-tight text-[1rem]">
                            In order to start betting on the official Panalobet website, it is
                            enough to go through a short registration procedure. After that, you
                            will get access to all the functions and features of the site.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
