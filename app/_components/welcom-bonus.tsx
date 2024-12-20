import ResImage from '@/components/res-image'

import WelcomBannerHome from '@/public/img/Welcome-bonus-for-new-users-up-to-20000-B0DT-1024x640.webp'

export default function WelcomeBonus() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                <h3
                    className="text-[1.25rem] text-center font-semibold mb-4 relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-[50%] md:after:translate-x-[-50%]"
                >
                    Welcome bonus for new users up to 20,000 PHP
                </h3>
                <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:justify-between">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={WelcomBannerHome}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Welcome Banner home"
                            screenSize={900}
                            className="ml-auto"
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <p className="font-light leading-tight text-[1rem]">
                            After registering and making your first deposit, you’ll be able to
                            receive a Panalobet starter bonus. We will double any first deposit
                            amount up to 20,000 PHP and allow you to withdraw this money after
                            several conditions are met. To take part in the promotion, you only need
                            to do a few actions:
                        </p>
                        <ol className="list-decimal ml-4">
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Registration. </strong>
                                Create an account on the official Panalobet Philippines website. To
                                do this, open the main page, click on the Registration button,
                                choose how to create an account, and fill in all the blank fields.
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">
                                    Specify personal information.{' '}
                                </strong>
                                Go to the account settings and enter your information in all the
                                empty fields. Only use real information. If you make a mistake or
                                enter false information on purpose, you won’t be able to verify your
                                account in the future;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Deposit. </strong>
                                Press the Deposit button to go to the cashier’s desk. Then select a
                                payment system, fill in the details and confirm the operation. The
                                minimum deposit amount to activate a bonus is 100 PHP. The maximum
                                amount of the bonus – 26,000 PHP.
                            </li>
                        </ol>

                        <p className="font-light leading-tight text-[1rem]">
                            When the money arrives on your balance, the bonus will be automatically
                            credited to your account. But you will not be able to withdraw the money
                            immediately. To be able to get them to a bank card or e-wallet, you must
                            meet the conditions of wagering. To do this you will need to make bets
                            for 5 times the amount of bonus within 3 months. In this case, bets must
                            be of an express type for 3 or more events with odds of not less than
                            1.4 for each.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
