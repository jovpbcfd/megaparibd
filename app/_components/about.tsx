import Table from '@/components/table'

const homeAboutData = [
    {
        dataLeft: 'Year of registration',
        dataRight: '2019',
    },
    {
        dataLeft: 'Host Indian Players',
        dataRight: 'Yes',
    },
    {
        dataLeft: 'Accepts PHP',
        dataRight: 'Yes',
    },
    {
        dataLeft: 'License',
        dataRight: 'Curacao',
    },
    {
        dataLeft: 'Services',
        dataRight: '2019',
    },
    {
        dataLeft: 'Year of registration',
        dataRight: 'Sports betting, online casinos, poker',
    },
    {
        dataLeft: 'Software versions',
        dataRight: 'Official website, smartphone app',
    },
    {
        dataLeft: 'Welcome Bonus',
        dataRight: '+100% to the first deposit up to 20,000 INR',
    },
    {
        dataLeft: 'Deposit methods',
        dataRight: 'Nagad, Bkash, Rocket, Upay, AstroPay, Jeton Wallet, Kvitu',
    },
    {
        dataLeft: 'Minimum deposit',
        dataRight: '75 PHP',
    },
    {
        dataLeft: 'Minimum output',
        dataRight: '150 PHP',
    },
    {
        dataLeft: 'Customer Service',
        dataRight: 'E-mail, chat on the site',
    },
]

export default function About() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                <h3
                    className="text-[1.25rem] text-center font-semibold mb-4
                relative md:mb-10 md:after:content-[''] md:after:h-[3px] md:after:bg-[rgb(231,64,55)]
                md:after:max-w-[150px] md:after:absolute md:after:w-full md:after:bottom-[-6px]
                md:after:left-[50%] md:after:translate-x-[-50%]
                "
                >
                    About Panalobet
                </h3>
                <p className="text-[1rem] font-light leading-tight">
                    Despite its young age, the bookmaker’s office is able to offer users a lot of
                    important advantages, including lucrative bonuses and a large number of options
                    for betting. Registration of the company took place in 2019. To work in
                    Philippines legally, we obtained a license from the Curacao Gaming Commission.
                    It confirms the reliability and safety of the company and allows us to offer our
                    services to residents of dozens of countries.
                </p>
                <p className="text-[1rem] font-light leading-tight my-4">
                    Today the total number of registered users of Panalobet Philippines exceeds 500
                    thousand people. Popularity among players is explained by the fact that we are
                    constantly improving, offering new opportunities and benefits to each of our
                    clients.
                </p>

                <Table datas={homeAboutData} />

                <p className="font-light leading-tight text-[1rem] my-4">
                    To provide users with maximum convenience when interacting with the site, we
                    have developed a clear and user-friendly interface. Even absolute beginners who
                    have never bet before will be able to understand the navigation. One-click on
                    the button will take you to any section and get the information you are
                    interested in.
                </p>

                <p className="font-light leading-tight text-[1rem] mt-4">
                    The design of the site is adapted for viewing from cell phones. Regardless of
                    what model of smartphone you use and what operating system is installed on it,
                    the pages will automatically adjust to the size of the display.
                </p>
            </div>
        </section>
    )
}
