import ResImage from '@/components/res-image'
import HomeBanner from '@/public/img/panalobet-main-hero.webp'

export default function Hero() {
    return (
        <section className="bg-[#45454f]">
            <div className="max-w-7xl mx-auto py-[1rem] px-[10px] md:flex md:gap-5 md:flex-row-reverse justify-between items-center">
                <div className="w-full md:w-[40%]">
                    <ResImage
                        path={HomeBanner}
                        priority={true}
                        mobileSize={{
                            width: 300,
                            height: 300,
                        }}
                        desktopSize={{
                            width: 530,
                            height: 530,
                        }}
                        alt="Home banner"
                        screenSize={900}
                    />
                </div>
                <div className="w-full text-white md:w-[60%]">
                    <h1 className="font-bold text-[1.5rem] leading-tight mb-4 md:mb-7">
                        Panalobet– Official Website for Online Sports Betting in Philippines
                    </h1>
                    <p className="font-light leading-tight text-[1rem]">
                        Panalobet bookmaker offers Philippines users a wide range of opportunities
                        for betting on sports. The company has been officially operating since 2019,
                        and its legality is confirmed by the current license of Curacao. The
                        official Panalobet website offers more than 1,000 events for betting,
                        favorable odds, different prediction options, and a generous welcome bonus
                        for newcomers of up to 20,000 PHP.
                    </p>
                    <div className="mt-4 md:mt-8">
                        <button
                            className="text-black text-[1.1rem] p-[0.5rem] bg-white w-full font-bold rounded-full
                        border border-black border-dashed
                        cursor-pointer transition-all duration-200 ease-out hover:bg-black hover:text-white hover:border-white md:w-[150px]"
                        >
                            Start Betting
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
