import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './header/Navbar';
import { IconSearch } from '@tabler/icons-react';
import { DataContext } from '../context/dataContext';

const Header = () => {
    const { isAuthenticated } = useAuth0();
    const [search, setSearch] = useState('')
    const { store, setStore, detail, setDetail } = useContext(DataContext);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const navigate = useNavigate();
    const searchInContext = useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            const searchUppercase = search.toUpperCase();
            const matchingKeys = store.length > 0 ? Object.keys(store[0]).filter(key => key.includes(searchUppercase)) : [];
            setSearchResults(matchingKeys);
            setLoading(false);
            if (search.length !== 0 && matchingKeys.length !== 0) {
                setShowModal(true);
            } else {
                setShowModal(false);
            }
        }, 600);
    }, [store, search, search.length]);
    useEffect(() => {
        searchInContext();
    }, [search, searchInContext]);

    const onChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSelectValue = (e) => {
        setDetail(e);
        navigate('/detail')
        setSearch('')
    }
    console.log(detail)
    return (
        <>
            <div className="container w-full px-4 mx-auto">
                <div className="flex items-center">
                    <div className="">
                        <img src="https://s.net.vn/GM7C"
                            className="bg-white w-18 h-12" />
                    </div>
                    <div className="mx-auto"> <Navbar /> </div>
                    <div className="relative flex items-center  gap-2 bg-white border border-gray-300 rounded-[4px] px-4 py-2 hover:border-sky-900 focus:border-sky-900">
                        <IconSearch size={24} className="text-sky-950" />
                        <input type="text"
                            value={search}
                            onChange={onChange}
                            placeholder="Nhập mã doanh nghiệp tại đây"
                            className="w-full text-lg focus:outline-none" />
                        {loading && (
                            <div className="absolute bg-white
                                top-[52%] left-0 translate-y-[1.5rem] border border-gray-300 w-full shadow-xl rounded-[4px] p-2">
                                <p className="text-gray-600 text-sm "> Đang tải...</p>
                            </div>
                        )}
                        {showModal && (
                            <div className="absolute bg-white
                                top-[52%] left-0 translate-y-[1.5rem] border border-gray-300 w-full shadow-xl rounded-[4px] p-4">
                                <p className="text-gray-600 text-sm text-left mb-2" >Kết quả tìm kiếm </p>
                                <div className="flex flex-col gap-1">
                                    {searchResults.map((e, index) => {
                                        return (
                                            <div key={index}>
                                                <button className="w-full"
                                                    onClick={()=>handleSelectValue(e)}>
                                                    <p className="text-base font-extrabold text-sky-900 text-left">{e}</p>
                                                </button>
                                            </div>
                                        )
                                    })} </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Header