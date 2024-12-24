import ResImage from '@/components/res-image'
import OfficialBanner from '@/public/img/The-official-site-of-Mega-Pari-for-sports-betting-in-Bangladesh4.webp'

export default function Virtual() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4">
                    Betting on virtual sports
                </h3>
                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between">
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
                            Every year cybersports are becoming more and more popular and are
                            attracting more and more people. Many people like to bet on these
                            sports. Panalobet actively develops this direction and offers to bet on
                            many games:
                        </p>
                        <ul>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Dota 2;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                League of Legends;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                CS:GO;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Halo;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Rainbow Six;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Age of Empires 2, etc.
                            </li>
                        </ul>

                        <p className="font-light leading-tight text-[1rem]">
                            If you like cybersports, you can bet on them on the Panalobet website
                            and app. We give you the opportunity to make predictions both before the
                            matches and in live mode.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
