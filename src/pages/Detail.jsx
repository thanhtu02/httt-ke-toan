import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/dataContext";

const DetailPage = () => {
    const { store, detail, setDetail } = useContext(DataContext);

    if (!store || !store[0] || !store[0][detail]) {
        return null;
    }
    const dataDetail = store[0][detail]
    console.log('ma: ' + detail) // vi du: AAA hoac AAM, ABR, ...
    console.log(store)
    // mảng [0]:  {AAA :[{...}, {...}, {...},...}; {AAM :[{...}, {...}, {...},...};...
    // arr [AAA]: [{2019:1, 2020:2, 2021:2, 2023: 4}, {2019:2, 2020:4, 2021:7, 2023: 4}, {2019:2, 2020:4, 2021:2, 2023: 4}, {2019:3, 2020:2, 2021:7, 2023: 2},...]
    return (
        <div className="bg-white container px-4 mx-auto w-full flex justify-center items-center mt-12 mb-20">

            <div className="mr-auto">
                <p> Mã chứng khoán: {detail} </p>
                {dataDetail.map((e, index) => (
                    <div key={index} className="text-left flex flex-col gap-10 mt-4">
                        <p className="mt-2">{e?.criteria}</p>
                        <div className="table">
                            {e["2019"] && <p>{`2019: ${e["2019"]}`}</p>}
                            {e["2019"] === undefined && <p> 2019:<span className="text-red-800 "> --- </span> </p>}
                            {e["2020"] && <p>{`2020: ${e["2020"]}`}</p>}
                            {e["2020"] === undefined && <p> 2020:<span className="text-red-800 "> --- </span> </p>}
                            {e["2021"] && <p>{`2021: ${e["2021"]}`}</p>}
                            {e["2021"] === undefined && <p> 2021:<span className="text-red-800 "> --- </span> </p>}
                            {e["2022"] && <p>{`2022: ${e["2022"]}`}</p>}
                            {e["2022"] === undefined && <p> 2022:<span className="text-red-800 "> --- </span> </p>}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default DetailPage