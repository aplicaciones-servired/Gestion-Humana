import type { JSX } from "react"

interface TableExtintorProps {
    DataExtintor: string;
}

const TableExtintor = ({ DataExtintor }: TableExtintorProps) => {
    return (
        <>
            <section className="container px-4 mx-auto bg-white rounded-md h-full ">
                <div className="flex flex-col mt-6">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-300 rounded-lg shadow-sm">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right">
                                            <span>Company</span>
                                        </th>
                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right">
                                            Status
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right">
                                            About
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right">
                                            Users
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right">
                                            License use
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=" bg-white divide-y">
                                    <tr className="cursor-pointer hover:from-blue-50">
                                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <div>
                                                <h2 className="font-medium">Catalog</h2>
                                            </div>
                                        </td>
                                        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                            Customer
                                        </td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div>
                                                <p>Time tracking, invoicing and expenses</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div className="flex items-center"></div>
                                        </td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TableExtintor;