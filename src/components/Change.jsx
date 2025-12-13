import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function Change({ before, after }) {
    const { argoment, part } = useParams();
    return (
        <>
            <div className="mt-10 flex justify-between p-10">
                <Link to={`${before}`}><div className="bg-gray-500 hover:bg-gray-700 h-30 w-70 flex items-center justify-center rounded-full"><p className="text-3xl">torna indietro</p></div></Link>
                <Link to={`${after}`}><div className="bg-gray-500 hover:bg-gray-700 h-30 w-70 flex items-center justify-center rounded-full"><p className="text-3xl">vai avanti</p></div></Link>
            </div>
        </>
    )
}