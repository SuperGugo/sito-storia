import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Card({ img, title, link }) {
    return (
        <>
            <div className="flex justify-center">
                <Link to={`/${link}/mappa`}>
                    <div className="h-75 w-55 m-5 rounded-3xl bg-neutral-200 shadow-xl">

                        <div className="bg-red-900 h-35 m-5">
                            <img src={img} className="h-34 w-50" />
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-4xl font-titles">{title}</p>
                        </div>


                    </div>
                </Link>
            </div>

        </>
    )
}


