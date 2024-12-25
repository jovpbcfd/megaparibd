import ResImage from './res-image'
import type { StaticImageData } from 'next/image'

export default function Hero({
    image,
    title,
    description,
    buttonText,
}: {
    image: StaticImageData
    title: string
    description: string
    buttonText: string
}) {
    return (
        <section className="md:pb-16">
            <div className="max-w-7xl mx-auto py-[1rem] px-[10px] md:flex md:gap-5 md:flex-row-reverse justify-between items-center">
                <div className="w-full md:w-[40%]">
                    <ResImage
                        path={image}
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
                    <h1 className="font-bold text-[1.5rem] leading-tight mb-4 md:mb-7 md:text-[2rem]">
                        {title}
                    </h1>
                    <p className="font-light leading-tight text-[1rem]">{description}</p>
                    <div className="mt-4 max-w-fit md:mt-8">
                        <button
                            className={`${buttonText ? '' : 'hidden'} text-black text-[1.1rem] p-[0.5rem] bg-white w-full font-bold rounded-full
                        border border-black border-dashed
                        cursor-pointer transition-all duration-200 ease-out hover:bg-black hover:text-white hover:border-white md:w-full md:p-[1rem]`}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
