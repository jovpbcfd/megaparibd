import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="container mx-auto p-[10px] md:py-[2rem]">
                <p
                    className="relative text-white text-[1rem] font-bold block mb-[1rem] pb-[10px] 
                    after:content-[''] after:bg-white after:absolute after:h-[1px] 
                    after:left-0 after:w-full after:max-w-[140px] after:bottom-0"
                >
                    Information
                </p>
                <nav>
                    <ul>
                        <li>
                            <Link href="#" className="text-white my-[.5rem] block">
                                Responsible Gaming
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white my-[.5rem] block">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white my-[.5rem] block">
                                License
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white my-[.5rem] block">
                                Anti-Fraud
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
