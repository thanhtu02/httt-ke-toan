import { useContext } from "react";
import { DataContext } from "../context/dataContext";

const DetailPage = () => {
    const { store, setStore, detail, setDetail } = useContext(DataContext);
    console.log('ma: ' + detail)
    console.log(store)
    return (
        <>
            DetailPage
        </>
    )
}

export default DetailPage