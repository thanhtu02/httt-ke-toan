import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/dataContext";
import dataStock from "../api/bctc/stock.json"
import CandlestickChart from "../components/CandlestickChart";
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
import Chart from 'chart.js/auto';

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
            
            <div className="flex flex-col mt-28 gap-6">
                <div> <CandlestickChart /> </div>
                <div className="bg-white border border-gray-300 px-4 py-2 rounded-[8px]">
                    <p className="text-left p-2 text-red-500 font-bold"> PE: 
                        {detail === 'AAA' && <>  37.17 </>}
                        {detail === 'AAM' && <>  133.74 </>}
                        {detail === 'AAT' && <>  117.56 </>}
                        {detail === 'AAV' && <>  -15.38 </>}
                        {detail === 'ABR' && <>  6.90 </>}
                    </p>
                    <p className="text-left p-2 text-red-500 font-bold"> EPS:
                        {detail === 'AAA' && <>  255 </>}
                        {detail === 'AAM' && <>  67 </>}
                        {detail === 'AAT' && <>  47 </>}
                        {detail === 'AAV' && <>  -260 </>}
                        {detail === 'ABR' && <>  1,963 </>}
                    </p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-2 rounded-[8px]">
                    {Object.keys(dataStock).map((e, index) => {
                        return (
                            <div key={index}
                                className="text-left">
                                {e === detail && (
                                    <div className="p-2">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <div className="flex text-left p-4 font-bold">
                                                <p className="w-full p-2">Close</p>
                                                <p className="w-full p-2 ml-3">Date</p>
                                                <p className="w-full p-2 ml-8">High</p>
                                                <p className="w-full p-2  ml-2">Low</p>
                                                <p className="w-full p-2 ml-2">Open</p>
                                                <p className="w-full p-2">Volume</p>
                                            </div>
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
              
            </div>
        </div >
    )
}

export default DetailPage