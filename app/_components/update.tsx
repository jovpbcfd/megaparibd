export default function Update() {
    return (
        <section className="bg-[#fff]">
            <div className="max-w-7xl mx-auto px-[10px] py-[16px] mt-4">
                <p className="text-center md:text-left">Updated: Thu, 11 Jan 2024 10:31:16</p>

                <div className="md:mx-auto md:max-w-2xl md:mt-10">
                    <p className="font-bold my-4 text-[1.5rem] text-center md:text-left">
                        Comments
                    </p>

                    <form>
                        <div className="flex flex-col items-center md:flex-row md:gap-5">
                            <div className="w-full my-5">
                                <label htmlFor="name" className="sr-only">
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="border border-[#7e8993] w-full p-2 rounded-md"
                                />
                            </div>
                            <div className="w-full my-2">
                                <label htmlFor="email" className="sr-only">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="border border-[#7e8993] w-full p-2 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="w-full my-5">
                            <input
                                name="comment"
                                type="textarea"
                                placeholder="Comment"
                                className="border border-[#7e8993] w-full px-2 py-2 pb-7 rounded-md"
                            />
                        </div>

                        <button
                            type="submit"
                            className="p-[.5rem] text-[#FFF] text-center font-[1.1rem] cursor-pointer font-bold min-w-[150px] my-4 md:py-[1rem]"
                            style={{
                                background: 'linear-gradient(240.87deg, #eee 4.31%, #ccc 141.87%)',
                            }}
                        >
                            Comment
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
