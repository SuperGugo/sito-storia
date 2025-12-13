import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function Change({ before, after }) {
    const { argoment, part } = useParams();
    return (
        <>
            <div className="mt-10 flex justify-between p-10">
                <Link to={`${before}`}><div className="h-30 w-70 flex items-center justify-center rounded-full"><p className="text-3xl font-titles text-amber-900">Torna indietro</p></div></Link>
                <Link to={`${after}`}><div className="h-30 w-70 flex items-center justify-center rounded-full"><p className="text-3xl font-titles text-amber-900">Vai avanti</p></div></Link>
            </div>
        </>
    )
}