import ResImage from '@/components/res-image'
import OfficialBanner from '@/public/img/prod/home/How to start betting.webp'

export default function StartBetting() {
    return (
        <div className="text-white">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4 md:text-[2rem]">
                    Paano simulan ang pagtaya?
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
                            Upang makapagsimula kang tumaya sa opisina ng Panalobet Philippines
                            bookmaker, kailangan mong dumaan sa ilang hakbang, simula sa
                            pagpaparehistro, at pagtatapos sa paglalagay ng taya mismo. Sa ibaba ay
                            sasabihin namin sa iyo kung ano ang kailangan mong gawin:
                        </p>

                        <ol className="list-decimal list-inside">
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Gumawa ng account. </strong>
                                Magrehistro ng account sa opisyal na website ng Panalobet
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">I-download ang app. </strong>
                                Kung gusto mong maglaro sa pamamagitan ng Android o iOS app,
                                i-download ito mula sa site at i-install ito. Kung hindi, maaari ka
                                ring tumaya sa opisyal na site sa iyong browser.
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">I-refill ang iyong account. </strong>
                                Magbukas ng cash register at magdeposito. Huwag kalimutan ang
                                welcome bonus
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Gumawa ng isang taya.</strong>
                                Piliin ang mga tugma at resulta na interesado ka at maglagay ng taya
                                sa pamamagitan ng pagtukoy sa uri at halaga.
                            </li>
                        </ol>
                        <p className="font-light leading-tight text-[1rem]">
                            Kung ang hula ay lumabas na tama, makakatanggap ka ng isang payout at
                            maaari mong bawiin ito sa pamamagitan ng cashier.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
