import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/public/img/panalobet-logo.webp'
import FacebookIcon from '@/public/img/prod/footer/facebook-icon.webp'
import InstagramIcon from '@/public/img/prod/footer/instagram-icon.webp'
import TelegramIcon from '@/public/img/prod/footer/telegram-icon.webp'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#7f1d1d] via-[#1f2460] to-[#313380] shadow-lg py-10">
            <div className="container mx-auto grid grid-cols-1 gap-4 p-[10px] md:grid-cols-3 md:py-[2rem]">
                <div className="flex items-center flex-col gap-5">
                    <div className="mt-4">
                        <Image
                            src={Logo}
                            alt="Panalobet Logo"
                            width={200}
                            height={36}
                            priority={false}
                        />
                    </div>
                    <div className="my-2">
                        <p className="text-2xl text-gray-200 font-bold font-italic">Social Media</p>
                    </div>
                    <nav>
                        <ul className="flex items-center gap-6 md:gap-8">
                            <li>
                                <Link href="#" aria-label="Facebook Icon" className="block w-full">
                                    <Image
                                        src={FacebookIcon}
                                        alt="Facebook Icon"
                                        width={40}
                                        height={40}
                                        priority={false}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" aria-label="Instagram Icon" className="block w-full">
                                    <Image
                                        src={InstagramIcon}
                                        alt="Instragram Icon"
                                        width={40}
                                        height={40}
                                        priority={false}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" aria-label="Telegram Icon" className="block w-full">
                                    <Image
                                        src={TelegramIcon}
                                        alt="Telegram Icon"
                                        width={40}
                                        height={40}
                                        priority={false}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="text-gray-200 mt-12 mb-4 md:my-0 md:place-self-center ">
                    <p className="text-2xl text-gray-200 font-bold font-italic mb-4">Quick Links</p>
                    <nav>
                        <ul className="grid grid-rows-2">
                            <li className="px-2 py-1">
                                <Link href={'/'} className="block w-full">
                                    Home
                                </Link>
                            </li>
                            <li className="px-2 py-1">
                                <Link href={'/app'} className="block w-full">
                                    App
                                </Link>
                            </li>
                            <li className="px-2 py-1">
                                <Link href={'/registration'} className="block w-full">
                                    Registration
                                </Link>
                            </li>
                            <li className="px-2 py-1">
                                <Link href={'/withdrawal'} className="block w-full">
                                    Withdrawal
                                </Link>
                            </li>
                            <li className="px-2 py-1">
                                <Link href={'/casino'} className="block w-full">
                                    Casino
                                </Link>
                            </li>
                            <li className="px-2 py-1">
                                <Link href={'/support'} className="block w-full">
                                    Support
                                </Link>
                            </li>
                            <li className="px-2 py-1">
                                <Link href={'/about'} className="block w-full">
                                    About
                                </Link>
                            </li>
                            <li className="px-2 py-1">
                                <Link href={'/contacts'} className="block w-full">
                                    Contacts
                                </Link>
                            </li>
                            <li className="px-2 py-1">
                                <Link href={'/blog'} className="block w-full">
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="text-gray-200 flex flex-col gap-5">
                    <p className="font-bold text-md md:text-4xl">
                        Sign-up Today at
                        <span className="block">Panalobet</span>
                    </p>

                    <Link
                        href="#"
                        className="py-4 px-8 max-w-[150px] bg-gray-100 block text-gray-400 font-bold text-center rounded-md md:py-2 md:px-3
                        hover:bg-gray-300
                        "
                    >
                        SIGN-UP
                    </Link>

                    <p className="text-sm md:text-md">Panalobet © 2024 All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
