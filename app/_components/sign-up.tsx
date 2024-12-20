import ResImage from '@/components/res-image'

import OfficialBanner from '@/public/img/The-official-site-of-Mega-Pari-for-sports-betting-in-Bangladesh4.webp'

export default function SignUp() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                <h3
                    className="text-[1.25rem] text-center font-semibold mb-4 relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-[50%] md:after:translate-x-[-50%]"
                >
                    How to sign up for Panalobet BD: step-by-step instructions?
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
                            You must be 18 years old or older to create an account on this site.
                            Minors are not allowed to gamble or bet on sports. If you are already 18
                            years old, go through 3 short steps to start playing:
                        </p>

                        <ol className="list-decimal list-inside">
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Open the registration form. </strong>
                                Go to the home page of the site and click the button to register
                                your account. Choose how to create an account by phone number,
                                email, or 1-click;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Select the type of bonus. </strong>
                                Next to the registration form, you will be able to select one of the
                                current Panalobet bonuses. If you are interested in sports betting,
                                specify the sports bonus;
                            </li>
                            <li className="font-light leading-tight my-[1.5rem]">
                                <strong className="font-bold">Provide information. </strong>
                                Fill out the form with personal information. Also, be sure to enter
                                the promo code in the appropriate field.
                            </li>
                        </ol>
                        <p className="font-light leading-tight text-[1rem]">
                            After completing the registration, you will be able to log in to your
                            account, deposit your account, and start playing. The created account
                            will be suitable for authorization both on the official website and in
                            the mobile application.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
