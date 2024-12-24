import ResImage from '@/components/res-image'
import OfficialBanner from '@/public/img/The-official-site-of-Mega-Pari-for-sports-betting-in-Bangladesh4.webp'

export default function BettingOdds() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4">Bettings Odds</h3>
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
                            You can use the odds offered by Panalobet PH to calculate the potential
                            benefit of a bet. We use a system of decimals. Each odds has one digit
                            before the decimal point and up to two more after it. To understand how
                            much money you will get if your prediction is correct, multiply the bet
                            amount by the odds.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
