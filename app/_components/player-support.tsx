import ResImage from '@/components/res-image'
import OfficialBanner from '@/public/img/The-official-site-of-Mega-Pari-for-sports-betting-in-Bangladesh4.webp'

export default function PlayerSupport() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                <h3 className="text-[1.25rem] text-center font-semibold mb-4">Player Support</h3>
                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={OfficialBanner}
                            priority={false}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <p className="font-light leading-tight text-[1rem]">
                            To solve problems and answer users’ questions, there is a 24-hour
                            support service. You can send any questions to it and always count on a
                            detailed consultation. The best way to contact them is by e-mail
                            support@panalobet.com
                        </p>
                        <p className="font-light leading-tight text-[1rem]">
                            If you write about verification or security issues, use
                            security@panalobet.com
                        </p>
                        <p className="font-light leading-tight text-[1rem]">
                            You can also write to us in the chat room on the website. This method of
                            communication is suitable if your question is urgent and its solution
                            cannot be delayed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
