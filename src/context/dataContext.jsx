import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [store, setStore] = useState([]);
    const [detail, setDetail] = useState('');
    const updateData = newData => {
        const newDataArray = Array.isArray(newData) ? newData : [newData];
        setStore(newDataArray);
    };
    return (
        <DataContext.Provider value={{ store, updateData, detail, setDetail}}>
            {children}
        </DataContext.Provider>)
}


export default DataProvider;