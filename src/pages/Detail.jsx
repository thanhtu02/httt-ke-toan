import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/dataContext";
import dataStock from "../api/bctc/stock.json"

const DetailPage = () => {
    const { store, detail, setDetail } = useContext(DataContext);
    if (!store || !store[0] || !store[0][detail]) {
        return null;
    }
    const dataDetail = store[0][detail]
    console.log(dataStock)

    return (
        <div className="bg-white container px-4 mx-auto w-full flex justify-center mt-12 mb-20 gap-12">
            <div className="mr-auto">
                <p className="text-left font-black mt-6 mb-2 text-xl text-sky-900"> Mã: {detail} </p>
                {dataDetail.map((e, index) => (
                    <div key={index} className="text-left flex flex-col gap-10 mt-4">
                        <p className="mt-2">{e?.criteria}</p>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            2019
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            2020
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            2021
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            2022
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            {e["2019"] && <p>{`${e["2019"]}`}</p>}
                                            {e["2019"] === undefined && <p> <span className="text-red-800 "> --- </span> </p>}
                                        </td>
                                        <td className="px-6 py-4">
                                            {e["2020"] && <p>{`${e["2020"]}`}</p>}
                                            {e["2020"] === undefined && <p> <span className="text-red-800 "> --- </span> </p>}
                                        </td>
                                        <td className="px-6 py-4">
                                            {e["2021"] && <p>{`${e["2021"]}`}</p>}
                                            {e["2021"] === undefined && <p><span className="text-red-800 "> --- </span> </p>}
                                        </td>
                                        <td className="px-6 py-4">
                                            {e["2022"] && <p>{`${e["2022"]}`}</p>}
                                            {e["2022"] === undefined && <p><span className="text-red-800 "> --- </span> </p>}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" bg-white mt-28 border border-gray-300 px-4 py-2 rounded-[8px] gap-12">
                {Object.keys(dataStock).map((e, index) => {
                    return (
                        <div key={index}
                            className="text-left">
                            {e === detail && (
                                <div className="p-2">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thread className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr className="w-full">
                                                <th scope="col" className="px-6 py-3">
                                                    Close
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-12 py-3">
                                                    High
                                                </th>
                                                <th scope="col" className="px-0 py-3">
                                                    Low
                                                </th>
                                                <th scope="col" className="px-14 py-3">
                                                    Open
                                                </th>
                                                <th scope="col" className="px-0 py-3">
                                                    Volume
                                                </th>
                                            </tr>
                                        </thread>
                                        {dataStock[e].map((item, itemIndex) => (
                                            <div key={itemIndex}>
                                                <div>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <td className="px-6 py-4">
                                                            <p className="">{item.Close}</p>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <p className="">{new Date(item.Date).toLocaleDateString()}</p></td>
                                                        <td className="px-6 py-4">
                                                            <p className="">{item.High}</p>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <p className="">{item.Low}</p>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <p className="">{item.Open}</p>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <p className="">{item.Volume}</p>
                                                        </td>
                                                    </tr>
                                                </div>
                                            </div>))}
                                    </table>
                                </div>
                            )
                            }
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default DetailPage