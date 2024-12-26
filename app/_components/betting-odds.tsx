import ResImage from '@/components/res-image'
import BettingOddImage from '@/public/img/prod/home/14_Betting Odds.webp'

export default function BettingOdds() {
    return (
        <div className="text-white">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={BettingOddImage}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto"
                        />
                    </div>

                    <div className="w-full md:w-[50%]">
                        <h3 className="text-[1.25rem] text-left font-semibold mb-4 md:text-[2rem]">
                            Mga logro sa pagtaya
                        </h3>
                        <p className="font-light leading-tight text-[1rem]">
                            Maaari mong gamitin ang mga odds na inaalok ng Panalobet PH upang
                            kalkulahin ang potensyal na benepisyo ng isang taya. Gumagamit kami ng
                            sistema ng mga decimal. Ang bawat logro ay may isang digit bago ang
                            decimal point at hanggang dalawa pa pagkatapos nito. Upang maunawaan
                            kung gaano karaming pera ang makukuha mo kung tama ang iyong hula,
                            i-multiply ang halaga ng taya sa mga logro.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
