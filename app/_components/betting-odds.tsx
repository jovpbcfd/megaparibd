import ResImage from '@/components/res-image'
import OfficialBanner from '@/public/img/The-official-site-of-Mega-Pari-for-sports-betting-in-Bangladesh4.webp'

export default function BettingOdds() {
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
