import ResImage from '@/components/res-image'
import PlayerSupportImage from '@/public/img/prod/home/18_Play Support.webp'

export default function PlayerSupport() {
    return (
        <div id="home-player-support" className="text-white">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] pt-4 md:pb-16">
                <div className="flex flex-col items-center gap-4 pt-4 md:flex-row-reverse md:justify-between">
                    <div className="w-full md:w-[50%]">
                        <ResImage
                            path={PlayerSupportImage}
                            priority={true}
                            mobileSize={{ width: 390, height: 240 }}
                            desktopSize={{ width: 530, height: 330 }}
                            alt="Official Banner home"
                            screenSize={900}
                            className="ml-auto md:rounded-xl"
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <h3 className="text-left font-semibold mb-4 heading-content">
                            Player Support
                        </h3>
                        <p className="font-light leading-tight body-content">
                            To solve problems and answer users’ questions, there is a 24-hour
                            support service. You can send any questions to it and always count on a
                            detailed consultation. The best way to contact them is by e-mail
                            support@panalobet.com
                        </p>
                        <p className="font-light leading-tight body-content">
                            If you write about verification or security issues, use
                            security@panalobet.com
                        </p>
                        <p className="font-light leading-tight body-content">
                            You can also write to us in the chat room on the website. This method of
                            communication is suitable if your question is urgent and its solution
                            cannot be delayed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
