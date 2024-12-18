'use client'

import Header from '@/components/header'
import Hero from './_components/hero'
import TableOfContents from './_components/table-of-contents'

export default function Home() {
    return (
        <div>
            <div className="bg-stone-950">
                <Header />
            </div>
            <Hero />
            <TableOfContents />
            <section className="bg-[#fff]">
                <div className="container mx-auto px-[10px] py-[16px] mt-4">
                    <h3 className="text-[1.25rem] text-center font-semibold mb-4">
                        About Panalobet
                    </h3>
                    <p className="text-[1rem] font-light leading-tight">
                        Despite its young age, the bookmaker’s office is able to offer users a lot
                        of important advantages, including lucrative bonuses and a large number of
                        options for betting. Registration of the company took place in 2019. To work
                        in Philippines legally, we obtained a license from the Curacao Gaming
                        Commission. It confirms the reliability and safety of the company and allows
                        us to offer our services to residents of dozens of countries.
                    </p>
                    <p className="text-[1rem] font-light leading-tight my-4">
                        Today the total number of registered users of Panalobet Philippines exceeds
                        500 thousand people. Popularity among players is explained by the fact that
                        we are constantly improving, offering new opportunities and benefits to each
                        of our clients.
                    </p>
                    <div className="rounded-md overflow-hidden">
                        <table className="table-fixed w-full border-collapse">
                            <tbody>
                                <tr className="text-center border border-black">
                                    <td className="text-center w-1/2 p-2 bg-gray-100">
                                        Year of registration
                                    </td>
                                    <td className="text-black p-2">2019</td>
                                </tr>
                                <tr className="border border-black text-center rounded-md mt-2">
                                    <td>Host Indian Players</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Accepts PHP</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>License</td>
                                    <td>Curacao</td>
                                </tr>
                                <tr>
                                    <td>Services</td>
                                    <td>Sports betting, online casinos, poker</td>
                                </tr>
                                <tr>
                                    <td>Software versions</td>
                                    <td>Official website, smartphone app</td>
                                </tr>
                                <tr>
                                    <td>Welcome Bonus</td>
                                    <td>+100% to the first deposit up to 20,000 INR</td>
                                </tr>
                                <tr>
                                    <td>Deposit methods</td>
                                    <td>
                                        Nagad, Bkash, Rocket, Upay, AstroPay, Jeton Wallet, Kvitu
                                    </td>
                                </tr>
                                <tr>
                                    <td>Minimum deposit</td>
                                    <td>75 PHP</td>
                                </tr>
                                <tr>
                                    <td>Minimum output</td>
                                    <td>150 PHP</td>
                                </tr>
                                <tr>
                                    <td>Customer Service</td>
                                    <td>E-mail, chat on the site</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}
