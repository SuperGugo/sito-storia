import { Link } from "react-router-dom";

export default function MapRiforma() {
    function stampaBenni() {
        console.log("stampa benni");
    }
    return (
        <>
            <div className="flex justify-center items-center  bg-[#efe4c8] border-4 border-[#3b2f1e4d] rounded-3xl m-5 h-150">

                <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <Link to={`/riforma/personaggi`}><rect id="svg_6" height="216.2963" width="443.70367" y="51.85184" x="56.88889" stroke-width="8" stroke="#000" fill="#ffffff" /></Link>
                        <rect stroke-width="9" id="svg_4" height="208" width="444" y="321.2" x="253.59998" stroke="#000" fill="#fff" />
                        <line id="svg_7" y2="320.20961" x2="389.59998" y1="268.2" x1="389.59998" stroke-width="6" stroke="#000" fill="none" />
                        <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_8" y="153.2" x="125.59998" stroke-width="0" stroke="#000" fill="#000000">questa</text>
                        <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_9" y="441.2" x="339.59998" stroke-width="0" stroke="#000" fill="#000000">mapa</text>
                    </g>
                </svg>

            </div>

        </>
    )
}