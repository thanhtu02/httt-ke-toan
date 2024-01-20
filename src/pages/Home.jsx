import { useEffect, useState } from "react"
import CoPhieu from "../components/menu/CoPhieu"
import WatchList from "../components/menu/WatchList"


const menu = [{
    id: 0,
    name: 'Watchlist',
    cpn: <WatchList />
},
{
    id: 1,
    name: 'Cổ phiếu',
    cpn: <CoPhieu />
}]

const HomePage = () => {
    const [select, setSelect] = useState('Watchlist')
    
    return (
        <>
            <div className="container w-full px-4 mx-auto mt-12 mb-20 flex flex-col" >
                <div className="flex gap-8 ">
                    {menu.map((e, index) => {
                        const active = select === e?.name
                        const clsx = active ? " bg-gray-400 text-gray-100 " : "text-gray-700 "
                        return (
                            <div key={index}
                            >
                                <button
                                    className={"px-4 py-2 rounded-[8px] " + clsx}
                                    onClick={() => setSelect(e?.name)}>
                                    <p className="font-bold text-base "> {e?.name} </p>
                                </button>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full">
                    {select == 'Watchlist' && <WatchList />}
                    {select == 'Cổ phiếu' && <CoPhieu />}
                </div>
            </div>
        </>
    )
}

export default HomePage