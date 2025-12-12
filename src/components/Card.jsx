import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Card({ img, title, link }) {
    return (
        <>
            <div className="flex justify-center">
                <Link to={`/${link}/mappa`}>
                    <div className="h-75 w-55 bg-green-400 hover:bg-green-700 m-5 rounded-3xl border-5 border-purple-700">

                        <div className="bg-red-900 h-35 m-5 border-3 border-purple-700">
                            <img src={img} className="h-34 w-50" />
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-4xl">{title}</p>
                        </div>


                    </div>
                </Link>
            </div>

        </>
    )
}


