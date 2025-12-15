import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Card({ img, title, link }) {
    return (
        <>
            <div className="flex justify-center ">
                <Link to={`/${link}/mappa`}>
                    <div className="  w-70 h-90 m-5 rounded-xl bg-[#f2ead3] border-4 border-[#0e0d0d8f] shadow-xl transition-transform duration-1000 hover:scale-105 hover:shadow-2xl ">

                        <div className="">
                            <img src={img} className="sepia-50 h-60 w-60 rounded-2xl object-cover mx-auto pt-2" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <p className="text-3xl font-titles text-center tracking-wide
                                ">{title}</p>
                        </div>


                    </div>
                </Link>
            </div>

        </>
    )
}


