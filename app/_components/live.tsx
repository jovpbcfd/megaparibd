import ResImage from '@/components/res-image'
import OfficialBanner from '@/public/img/The-official-site-of-Mega-Pari-for-sports-betting-in-Bangladesh4.webp'

export default function Live() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4">Live Betting</h3>
                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between">
                    <div>
                        <ResImage
                            path={OfficialBanner}
                            priority={false}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                        />
                    </div>

                    <div>
                        <p className="font-light leading-tight text-[1rem]">
                            This category of sports betting will appeal to those who are well versed
                            in at least one sport and are able to react quickly to events that occur
                            on the field. The Live section presents matches that have already
                            started. You can bet on them in real-time. This kind of prediction has a
                            few important differences from the regular one:
                        </p>
                        <ul>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Every match presented here has already begun;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                For many matches there are live broadcasts that you can watch;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Coefficients can change frequently, reacting to changes in the
                                course of the confrontation.
                            </li>
                        </ul>

                        <p className="font-light leading-tight text-[1rem]">
                            You can combine live bets with regular bets, make individual
                            predictions, or express. The number of events constantly available to
                            users exceeds 100 matches.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
