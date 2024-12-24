import ResImage from '@/components/res-image'
import OfficialBanner from '@/public/img/The-official-site-of-Mega-Pari-for-sports-betting-in-Bangladesh4.webp'

export default function StartBetting() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4">
                    How to start betting?
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
                            In order for you to start betting at the Panalobet Philippines
                            bookmaker’s office, you need to go through several steps, starting with
                            registration, and finishing with placing the bet itself. Below we will
                            tell you what you need to do:
                        </p>

                        <ol className="list-decimal list-inside">
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Create an account. </strong>
                                Register an account on the official Panalobet website;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Download the app. </strong>
                                If you want to play through the Android or iOS app, download it from
                                the site and install it. If not, you can also bet on the official
                                site in your browser;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Refill your account. </strong>
                                Open a cash register and make a deposit. Do not forget the welcome
                                bonus;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Make a bet. </strong>
                                Select the matches and outcomes you are interested in and place a
                                bet by specifying the type and amount.
                            </li>
                        </ol>
                        <p className="font-light leading-tight text-[1rem]">
                            If the prediction turns out to be correct, you will receive a payout and
                            can withdraw it through the cashier.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
