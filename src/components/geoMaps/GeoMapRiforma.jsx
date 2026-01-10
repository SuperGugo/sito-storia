import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function GeoMapRiforma({ tooltips }) {
    const [pos, setPos] = useState({
        left: 0,
        top: 0
    });

    const [tooltip, enableTooltip] = useState(false);

    const [tooltipTitle, changeTooltipTitle] = useState("titolo");
    const [tooltipContent, changeTooltipContent] = useState("contenuto");

    function move(e) {
        const x = Math.min(e.clientX + 5, document.body.getBoundingClientRect().width - 400);
        setPos({
            left: x,
            top: e.clientY - document.body.getBoundingClientRect().top + 15,
        });
    }

    function hover(title, content) {
        changeTooltipTitle(title);
        changeTooltipContent(tooltips[content]);
    }

    function handleClick(e, title, content) {
        e.preventDefault();
        hover(title, content);
        move(e);
        enableTooltip(true);
    }

    return (
        <>
            <img src="/cartine/riforma.jpg" useMap="#image-map" onClick={(e) => { enableTooltip(false) }}></img>

            <map name="image-map"  onMouseMove={(e) => { move(e) }} onMouseEnter={() => { enableTooltip(true) }} onMouseLeave={() => { enableTooltip(false) }}>
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Germania - PROTESTANTE", "protestanti")}
                    onMouseEnter={() => hover("Germania - PROTESTANTE", "protestanti")}
                    coords="816,722,791,783,845,753,893,754,973,751,992,728,965,666,1002,660,1018,612,1065,542,898,552,836,556,765,618,758,636,805,662"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Svezia - PROTESTANTE", "protestanti")}
                    onMouseEnter={() => hover("Svezia - PROTESTANTE", "protestanti")}
                    coords="1003,475,1054,475,1262,344,1372,67,1117,61,1027,197,1062,269,1033,283,997,324,973,433"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Inghilterra e Scozia - PROTESTANTE", "protestanti")}
                    onMouseEnter={() => hover("Inghilterra e Scozia - PROTESTANTE", "protestanti")}
                    coords="608,601,766,620,776,571,796,294,641,348,666,475"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Svizzera - PROTESTANTE", "protestanti")}
                    onMouseEnter={() => hover("Svizzera - PROTESTANTE", "protestanti")}
                    coords="815,769,853,793,928,796,898,753,850,748"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Danimarca e Norvegia  - PROTESTANTE", "protestanti")}
                    onMouseEnter={() => hover("Danimarca e Norvegia - PROTESTANTE", "protestanti")}
                    coords="913,558,1032,520,1045,477,1000,472,973,430,995,320,1060,266,1027,193,1114,58,1023,56,878,288,867,380"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Spagna e Portogallo  - CATTOLICI", "cattolici")}
                    onMouseEnter={() => hover("Spagna e Portogallo - CATTOLICI", "cattolici")}
                    coords="454,1026,548,1043,751,983,726,879,462,756,366,951"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Francia - CATTOLICI", "cattolici")}
                    onMouseEnter={() => hover("Francia - CATTOLICI", "cattolici")}
                    coords="626,839,700,881,760,856,813,886,846,833,795,779,820,716,810,661,758,621,604,647"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Irlanda - CATTOLICI", "cattolici")}
                    onMouseEnter={() => hover("Irlanda - CATTOLICI", "cattolici")}
                    coords="553,540,616,527,663,470,656,443,606,425,569,440,534,507"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Italia - CATTOLICI", "cattolici")}
                    onMouseEnter={() => hover("Italia - CATTOLICI", "cattolici")}
                    coords="833,1026,1007,1126,1110,1004,952,824,987,802,970,779,928,794,850,789,816,767,800,779,850,829,833,862"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Austria, Ungheria e Boemia - CATTOLICI", "cattolici")}
                    onMouseEnter={() => hover("Austria, Ungheria e Boemia - CATTOLICI", "cattolici")}
                    coords="970,779,985,809,1023,868,1104,748,1127,746,1144,839,1160,818,1149,706,1107,691,1102,642,1030,606,1000,656,968,663,993,729,977,749,897,754,927,793"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Polonia e Lituania - CATTOLICI", "cattolici")}
                    onMouseEnter={() => hover("Polonia e Lituania - CATTOLICI", "cattolici")}
                    coords="1028,605,1102,647,1107,692,1219,719,1301,470,1257,460,1237,370,1144,413,1134,505,1074,523"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Grecia e Serbia - ORTODOSSI", "ortodossi")}
                    onMouseEnter={() => hover("Grecia e Serbia - ORTODOSSI", "ortodossi")}
                    coords="1021,865,1206,1132,1355,940,1420,736,1328,720,1346,778,1308,813,1326,850,1261,871,1206,875,1138,841,1119,756,1093,748,1076,806"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Ex Impero Bizantino - Maggioranza MUSULMANA", "musulmani")}
                    onMouseEnter={() => hover("Ex Impero Bizantino - Maggioranza MUSULMANA", "musulmani")}
                    coords="1353,938,1294,1013,1346,1113,1453,1265,1832,1259,1827,978,1707,831,1608,796"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Ungheria, Moldavia e Romania - ORTODOSSI", "ortodossi")}
                    onMouseEnter={() => hover("Ungheria, Moldavia e Romania - ORTODOSSI", "ortodossi")}
                    coords="1154,842,1214,875,1312,852,1336,726,1227,691,1220,718,1150,702"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Russia - ORTODOSSI", "ortodossi")}
                    onMouseEnter={() => hover("Russia - ORTODOSSI", "ortodossi")}
                    coords="1231,687,1327,725,1676,787,1825,973,1827,56,1377,56,1267,337,1234,370,1254,457,1302,470"
                    shape="poly"
                />
                <area
                    target="_parent"
                    href="https://benni.com"
                    onClick={(e) => handleClick(e, "Popoli MUSULMANI", "musulmani")}
                    onMouseEnter={() => hover("Popoli MUSULMANI", "musulmani")}
                    coords="286,1111,289,1221,422,1194,496,1146,543,1168,690,1141,821,1184,913,1259,1013,1263,903,1091,449,1041"
                    shape="poly"
                />
            </map>

            <div className={'p-2 absolute w-96 h-auto bg-[#efe4c8] border-4 border-[#3b2f1e4d] rounded-3xl pointer-events-none transition-opacity duration-200 ' + (tooltip ? 'opacity-100' : 'opacity-0')} style={pos}>
                <h1 className='text-3xl text-center font-navTitle font-bold my-2'>{tooltipTitle}</h1>
                <div className='font-content indent-3'><ReactMarkdown>{`${tooltipContent}`}</ReactMarkdown></div>
            </div>
        </>
    )
}
