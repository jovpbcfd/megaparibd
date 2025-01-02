import Image from 'next/image'
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
                <div className="relative w-full h-[200px] flex items-center justify-center  md:h-[500px] md:w-[40%]">
                    <Image
                        src={image}
                        alt="Panalobet Main Hero Image"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 768px) 100vw, 1920px"
                        priority
                    />
                </div>
                <div className="w-full text-white md:w-[60%]">
                    <h1 className="font-bold text-[1.5rem] leading-tight mb-4 md:mb-7 md:text-[2.625rem]">
                        {title}
                    </h1>
                    <p className="font-light leading-tight text-[1rem] md:text-[1.125rem]">
                        {description}
                    </p>
                    <div className="mt-4 max-w-fit md:mt-8">
                        <button
                            className={`${buttonText ? '' : 'hidden'} text-[1.1rem] p-[0.5rem] w-full font-bold rounded-full
                                                bg-gradient-to-br from-red-500 via-gray-700 to-blue-600 text-white shadow-lg
                                                border border-gray-200 border-solid
                                                transition-all duration-200 ease-out
                                                hover:bg-gradient-to-br hover:from-blue-600 hover:via-gray-700 hover:to-red-500 hover:shadow-xl
                                                hover:text-gray-100 hover:border-gray-300
                                                focus:ring-4 focus:ring-red-500 focus:ring-offset-2 md:w-full md:p-[1rem]`}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
