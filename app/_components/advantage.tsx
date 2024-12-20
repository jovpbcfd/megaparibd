import ResImage from '@/components/res-image'
import OfficialBanner from '@/public/img/The-official-site-of-Mega-Pari-for-sports-betting-in-Bangladesh4.webp'

export default function Advantage() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                <h3
                    className="text-[1.25rem] text-center font-semibold mb-4 relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-[50%] md:after:translate-x-[-50%]"
                >
                    Advantages of Panalobet
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
                            We do our best to provide the most comfortable conditions for betting to
                            all our clients. After registering and depositing your account at
                            panalobet Philippines you can count on many important benefits that will
                            make your gambling experience unforgettable:
                        </p>
                        <ul>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Large welcome bonus for new players of up to 20,000 PHP;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                A functional mobile application for Android and iOS smartphones;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                More than 40 sports and 1000 events for betting every day;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                24-hour support service, ready to help solve any problem;
                            </li>
                            <li
                                className="relative font-light leading-tight my-[1.5rem] pl-8
                                after:content-[''] after:block after:absolute after:bg-red-500 after:w-[10px] after:h-[10px]
                                after:rounded-full after:left-0 after:top-[5px] md:after:w-[14px] md:after:h-[14px]
                                "
                            >
                                Dozens of types of payment systems at the box office.
                            </li>
                        </ul>

                        <p className="font-light leading-tight text-[1rem]">
                            We are constantly evolving, offering new features and functions to our
                            players. Stay with Panalobet and there will be even more profitable
                            betting opportunities ahead of you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
