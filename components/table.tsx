type Data = {
    dataLeft: string
    dataRight: string
}[]

export default function Table({ datas }: { datas: Data }) {
    return (
        <div>
            <table className="table-fixed w-full  md:border-collapse md:border md:border-[#7e8993] md:table">
                <tbody>
                    {datas.map((data, index) => (
                        <tr
                            key={index}
                            className="flex flex-col justify-center items-center w-full border border-[#7e8993] rounded-xl my-4 odd:bg-white even:bg-[#f1f1f1]
                md:table-row md:w-auto md:rounded-none md:my-0"
                        >
                            <td className="text-center leading-tight p-[10px]  w-full font-bold md:font-normal md:w-auto md:border md:border-[#7e8993]">
                                {data.dataLeft}
                            </td>
                            <td className="text-center leading-tight p-[10px] w-full md:w-auto md:border md:border-[#7e8993]">
                                {data.dataRight}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
