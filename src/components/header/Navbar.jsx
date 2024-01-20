import React from 'react';
import { Link } from 'react-router-dom';

const routes = [{
    id: 0,
    title: 'Trang chủ',
    page: "/"
}, {
    id: 1,
    title: 'Tin tức',
    page: "/news"
}, {
    id: 2,
    title: 'Thị trường',
    page: "/market"
}]

const Navbar = () => {

    return (
        <div className="flex items-center gap-8">
            {routes.map((e, index) => (
                <div key={index}>
                    <Link to={e?.page}>
                        <button className=""> <p className="text-gray-700
                        text-lg font-bold">{e?.title} </p></button>
                    </Link>
                </div>
            )
            )}
        </div>
    );
};

export default Navbar 