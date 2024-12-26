type Data = {
    dataLeft: string
    dataRight: string
}[]

export default function Table({ datas }: { datas: Data }) {
    return (
        <div>
            <table className="table-fixed w-full border-separate border-spacing-0 md:border-collapse md:border md:border-gray-600 overflow-hidden shadow-lg rounded-xl">
                <thead>
                    <tr className="bg-gradient-to-r from-red-500 via-gray-700 to-blue-600 text-white">
                        <th className="text-left py-4 px-6 text-lg font-bold uppercase tracking-wide">
                            {/* Column 1 */}
                        </th>
                        <th className="text-left py-4 px-6 text-lg font-bold uppercase tracking-wide">
                            {/* Column 2 */}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data, index) => (
                        <tr
                            key={index}
                            className={`${
                                index % 2 === 0
                                    ? 'bg-gradient-to-r from-white via-gray-100 to-gray-200'
                                    : 'bg-gradient-to-r from-gray-50 to-gray-100'
                            } hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 transition-all`}
                        >
                            <td className="py-4 px-6 text-gray-800 font-semibold border border-gray-300">
                                {data.dataLeft}
                            </td>
                            <td className="py-4 px-6 text-gray-800 border border-gray-300">
                                {data.dataRight}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
