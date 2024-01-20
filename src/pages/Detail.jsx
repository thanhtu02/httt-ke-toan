import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/dataContext";

const DetailPage = () => {
    const { store, detail, setDetail } = useContext(DataContext);
    if (!store || !store[0] || !store[0][detail]) {
        return null;
    }
    const dataDetail = store[0][detail]
    console.log('ma: ' + detail) 
    console.log(store)
   
    return (
        <div className="bg-white container px-4 mx-auto w-full flex justify-center items-center mt-12 mb-20">
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
        </div>
    )
}

export default DetailPage