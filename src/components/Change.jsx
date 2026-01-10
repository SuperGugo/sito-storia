import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function Change({ before, after }) {
    const { argoment, part } = useParams();
    return (
        <>
            <div className="mt-10 flex justify-between p-10 font-titles">
                <Link to={`${before}`}><div className=" border-[#3b2f1e] text-black h-10 w-70 flex items-center justify-center transition-transform duration-500  hover:scale-110">
                    <p className="text-5xl font-titles transition-transform duration-2000 hover:-translate-x-5 hover:scale-125 ">⭠</p>
                    <p className="text-3xl font-titles italic">Torna indietro </p>
                </div>
                </Link>

                <Link to={`${after}`}><div className=" border-[#3b2f1e] text-black h-10 w-70 flex items-center justify-center transition-transform duration-500  hover:scale-110">
                    <p className="text-3xl font-titles italic">Vai avanti</p>
                    <p className="text-5xl font-titles transition-transform duration-2000 hover:translate-x-5 hover:scale-125">⭢</p>
                </div>
                </Link>
            </div>
        </>
    )
}