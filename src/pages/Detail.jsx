import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/dataContext";

const DetailPage = () => {
    const { store, detail, setDetail } = useContext(DataContext);

    if (!store || !store[0] || !store[0][detail]) {
        return null;
    }
    const dataDetail = Object.keys(store[0][detail])

    console.log('ma: ' + detail) // vi du: AAA hoac AAM, ABR, ...
    console.log(store)
    console.log(dataDetail) // mảng [0]:  {AAA :[{...}, {...}, {...},...}; {AAM :[{...}, {...}, {...},...};...
    return (
        <div className="bg-white container px-4 mx-auto w-full flex justify-center items-center mt-12 mb-20">

            <div className="mr-auto">
                <p> Mã chứng khoán: {detail} </p>
                {dataDetail.map((e, index) => (
                    <div key={index} className="text-left flex gap-10 mt-4">
                        <p>{index + 1}</p>
                        <p>{e}</p>
                        {Object.keys(e).map((value, key) => (
                            <div key={key}>
                                <p>
                                    {key}
                                ----
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default DetailPage