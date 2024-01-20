
import { useContext, useEffect } from 'react'
import data from '../api/bctc/data.json'
import { DataContext } from '../context/dataContext';

const MarketPage = () => {
 
    return (
        <div className="container w-full px-4 mx-auto mt-12 mb-20">
            <p className="text-left font-black mt-6 mb-2 text-xl text-sky-900"> Mã chứng khoán</p>
            {Object.keys(data).map((e, index) => {
                return (
                    <div key={index}
                        className="text-left">
                        <button className="p-2">
                            <p className="text-gray-800 font-bold">
                                {e}
                            </p>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default MarketPage 