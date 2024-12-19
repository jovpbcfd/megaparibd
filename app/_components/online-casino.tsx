import ResImage from '@/components/res-image'
import OfficialBanner from '@/public/img/The-official-site-of-Mega-Pari-for-sports-betting-in-Bangladesh4.webp'

export default function OnlineCasino() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4">
                    Betting on virtual sports
                </h3>
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
                            We strive to make sure that all our customers get the most diverse
                            opportunities for a pleasant pastime. Therefore, if you get tired of
                            betting on sports, you can go to the online casino section and try your
                            luck at thousands of gambling games. All of them are divided into two
                            categories:
                        </p>
                        <ul>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Normal. These are slot machines, table games, and other
                                entertainment that takes place without the participation of live
                                people. The results depend on a random number generator;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Live. In games with live dealers you can watch the host in live
                                mode, communicate with him via chat, etc. The atmosphere of such
                                games is as close to a real casino as possible, while the random
                                number generator either does not affect the result or does so
                                minimally.
                            </li>
                        </ul>

                        <p className="font-light leading-tight text-[1rem]">
                            The list of entertainment at online casinos Panalobet Philippines is
                            constantly expanding. You are always waiting for exciting games from the
                            world’s best developers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
