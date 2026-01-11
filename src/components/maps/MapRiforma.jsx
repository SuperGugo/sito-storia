import { Link } from "react-router-dom";
import { useState } from 'react';

const MappaControriforma = () => (<svg
    width="1400"
    height="700"
    viewBox="0 0 1400 700"
    xmlns="http://www.w3.org/2000/svg"
>
    <defs>
        <style>{`
                        .line { fill: none; stroke: #D0D0D0; stroke-width: 1.5; }
                        .center-box { fill: #1E1E24; rx: 4; }
                        .purple-conn { fill: #8B5CF6; rx: 4; }
                        .purple-small { fill: #EADDFF; stroke: #C084FC; stroke-width: 1; rx: 2; }
                        .purple-large { fill: #FBF7FF; stroke: #A78BFA; stroke-width: 1.5; rx: 2; }
                        .orange-conn { fill: #FF5E1A; rx: 4; }
                        .orange-small { fill: #FFE4D6; stroke: #FFB088; stroke-width: 1; rx: 2; }
                        .orange-large { fill: #FFF9F5; stroke: #FFCCAA; stroke-width: 1.5; rx: 2; }
                        .green-conn { fill: #5AC560; rx: 4; }
                        .green-small { fill: #DCFCE7; stroke: #86EFAC; stroke-width: 1; rx: 2; }
                        .green-large { fill: #F0FDF4; stroke: #86EFAC; stroke-width: 1.5; rx: 2; }
                        .fo-div {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        box-sizing: border-box;
                        padding: 4px;
                        line-height: 1.2;
                        }
                        .title-text { color: white; font-weight: bold; font-size: 14px; text-transform: uppercase; }
                        .branch-title { color: white; font-weight: bold; font-size: 11px; }
                        .label-text { color: #333; font-weight: bold; font-size: 9px; }
                        .desc-text { color: #222; font-size: 9px; text-align: left; overflow: hidden; }
                        strong { font-weight: bold; color: #000; }
                    `}</style>
    </defs>

    <g id="connections">
        <path d="M 600 350 H 480" className="line" />
        <path d="M 800 350 C 850 350, 830 220, 880 220" className="line" />
        <path d="M 800 350 C 850 350, 830 520, 880 520" className="line" />
        <path d="M 360 350 C 330 350, 330 140, 270 140" className="line" />
        <path d="M 360 350 C 330 350, 330 250, 270 250" className="line" />
        <path d="M 360 350 C 330 350, 330 420, 270 420" className="line" />
        <path d="M 360 350 C 330 350, 330 530, 270 530" className="line" />
        <line x1="190" y1="140" x2="160" y2="140" className="line" />
        <line x1="190" y1="250" x2="160" y2="250" className="line" />
        <line x1="190" y1="420" x2="160" y2="420" className="line" />
        <line x1="190" y1="530" x2="160" y2="530" className="line" />

        <path d="M 980 220 C 1010 220, 1010 60, 1040 60" className="line" />
        <line x1="1120" y1="60" x2="1150" y2="60" className="line" />

        <path d="M 980 220 C 1010 220, 1010 220, 1040 220" className="line" />
        <path d="M 1120 220 C 1135 220, 1135 150, 1150 150" className="line" />
        <line x1="1120" y1="220" x2="1150" y2="220" className="line" />
        <path d="M 1120 220 C 1135 220, 1135 290, 1150 290" className="line" />
        <path d="M 980 220 C 1010 220, 1010 380, 1040 380" className="line" />
        <line x1="1120" y1="380" x2="1150" y2="380" className="line" />

        <path d="M 1000 520 C 1020 520, 1020 480, 1050 480" className="line" />
        <path d="M 1000 520 C 1020 520, 1020 560, 1050 560" className="line" />
        <line x1="1130" y1="480" x2="1160" y2="480" className="line" />
        <line x1="1130" y1="560" x2="1160" y2="560" className="line" />
    </g>

    <rect x="600" y="295" width="200" height="110" className="center-box" />
    <foreignObject x="600" y="295" width="200" height="110">
        <div className="fo-div title-text">
            LA CONTRORIFORMA:<br />CONCILIO, INQUISIZIONE E RINNOVAMENTO SPIRITUALE
        </div>
    </foreignObject>

    <rect x="360" y="325" width="120" height="50" className="purple-conn" />
    <foreignObject x="360" y="325" width="120" height="50">
        <div className="fo-div branch-title">
            RINNOVAMENTO SPIRITUALE E PASTORALE
        </div>
    </foreignObject>

    <rect x="880" y="195" width="100" height="50" className="orange-conn" />
    <foreignObject x="880" y="195" width="100" height="50">
        <div className="fo-div branch-title">
            RIAFFERMAZIONE DOGMATICA E RIFORMA
        </div>
    </foreignObject>

    <rect x="880" y="505" width="120" height="30" className="green-conn" />
    <foreignObject x="880" y="505" width="120" height="30">
        <div className="fo-div branch-title">
            REPRESSIONE DEL DISSENSO
        </div>
    </foreignObject>

    <rect x="190" y="120" width="80" height="40" className="purple-small" />
    <foreignObject x="190" y="120" width="80" height="40">
        <div className="fo-div label-text">
            Nuovi Ordini Religiosi
        </div>
    </foreignObject>

    <rect x="50" y="95" width="110" height="90" className="purple-large" />
    <foreignObject x="50" y="95" width="110" height="90">
        <div className="fo-div desc-text">
            Nascita di nuovi ordini dediti a educazione, assistenza e missione (pilastri del rinnovamento).
        </div>
    </foreignObject>

    <rect x="190" y="230" width="80" height="40" className="purple-small" />
    <foreignObject x="190" y="230" width="80" height="40">
        <div className="fo-div label-text">
            I Gesuiti
        </div>
    </foreignObject>

    <rect x="50" y="205" width="110" height="90" className="purple-large" />
    <foreignObject x="50" y="205" width="110" height="90">
        <div className="fo-div desc-text">
            Fondati da S. Ignazio: rigida disciplina, obbedienza al Papa e intensa attività educativa.
        </div>
    </foreignObject>

    <rect x="190" y="400" width="50" height="40" className="purple-small" />
    <foreignObject x="190" y="400" width="50" height="40">
        <div className="fo-div label-text">
            Attività Missionaria
        </div>
    </foreignObject>

    <rect x="50" y="375" width="110" height="90" className="purple-large" />
    <foreignObject x="50" y="375" width="110" height="90">
        <div className="fo-div desc-text">
            Forte impulso all'evangelizzazione ed estensione della fede in America, Asia e Africa.
        </div>
    </foreignObject>

    <rect x="190" y="510" width="80" height="40" className="purple-small" />
    <foreignObject x="190" y="510" width="80" height="40">
        <div className="fo-div label-text">
            Approccio alla Fede
        </div>
    </foreignObject>

    <rect x="50" y="485" width="110" height="90" className="purple-large" />
    <foreignObject x="50" y="485" width="110" height="90">
        <div className="fo-div desc-text">
            Diffusione del catechismo e incoraggiamento di una devozione più emotiva e partecipata.
        </div>
    </foreignObject>

    <rect x="1040" y="45" width="80" height="30" className="orange-small" />
    <foreignObject x="1040" y="45" width="80" height="30">
        <div className="fo-div label-text">
            Concilio di Trento
        </div>
    </foreignObject>

    <rect x="1150" y="20" width="130" height="80" className="orange-large" />
    <foreignObject x="1150" y="20" width="130" height="80">
        <div className="fo-div desc-text">
            (1545-63) Fulcro della riaffermazione dottrinale e disciplina in risposta alla Riforma.
        </div>
    </foreignObject>

    <rect x="1040" y="205" width="80" height="30" className="orange-small" />
    <foreignObject x="1040" y="205" width="80" height="30">
        <div className="fo-div label-text">
            Dogmi e Principi
        </div>
    </foreignObject>

    <rect x="1150" y="125" width="130" height="50" className="orange-large" />
    <foreignObject x="1150" y="125" width="130" height="50">
        <div className="fo-div desc-text">
            <strong>Scritture:</strong> Solo la Chiesa (Magistero) ha autorità per interpretarle.
        </div>
    </foreignObject>

    <rect x="1150" y="195" width="130" height="50" className="orange-large" />
    <foreignObject x="1150" y="195" width="130" height="50">
        <div className="fo-div desc-text">
            <strong>Salvezza:</strong> Ottenuta per fede E opere buone (contro "sola fide").
        </div>
    </foreignObject>

    <rect x="1150" y="265" width="130" height="50" className="orange-large" />
    <foreignObject x="1150" y="265" width="130" height="50">
        <div className="fo-div desc-text">
            <strong>Sacramenti:</strong> Confermati numero e valore di tutti i 7 sacramenti.
        </div>
    </foreignObject>

    <rect x="1040" y="365" width="80" height="30" className="orange-small" />
    <foreignObject x="1040" y="365" width="80" height="30">
        <div className="fo-div label-text">
            Riforme Disciplinari
        </div>
    </foreignObject>

    <rect x="1150" y="340" width="130" height="80" className="orange-large" />
    <foreignObject x="1150" y="340" width="130" height="80">
        <div className="fo-div desc-text">
            Istituzione seminari per formazione clero e obbligo residenza vescovi.
        </div>
    </foreignObject>

    <rect x="1050" y="465" width="80" height="30" className="green-small" />
    <foreignObject x="1050" y="465" width="80" height="30">
        <div className="fo-div label-text">
            Inquisizione
        </div>
    </foreignObject>

    <rect x="1160" y="440" width="120" height="80" className="green-large" />
    <foreignObject x="1160" y="440" width="120" height="80">
        <div className="fo-div desc-text">
            Potenziamento del Sant'Uffizio: tribunale supremo per processare gli eretici.
        </div>
    </foreignObject>

    <rect x="1050" y="545" width="80" height="30" className="green-small" />
    <foreignObject x="1050" y="545" width="80" height="30">
        <div className="fo-div label-text">
            Indice Libri Proibiti
        </div>
    </foreignObject>

    <rect x="1160" y="520" width="120" height="80" className="green-large" />
    <foreignObject x="1160" y="520" width="120" height="80">
        <div className="fo-div desc-text">
            Elenco opere considerate pericolose, vietate per controllare le idee.
        </div>
    </foreignObject>
</svg>);

const MappaAltraRoba = () => (<svg width="1400" height="700" viewBox="0 0 1400 600" xmlns="http://www.w3.org/2000/svg">

    <defs>
        <style>{`
        .connector { fill: none; stroke: #D0D0D0; stroke-width: 1.5; }
        .box-bg { fill: #F9F9FA; stroke-width: 1.5; }
        .node-solid { stroke: none; rx: 4; ry: 4; }
        .node-light { stroke-width: 1.5; rx: 4; ry: 4; }
        .main-box { rx: 2; ry: 2; fill: #F9F9FA; stroke-width: 1.5; }
        .fo-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          padding: 3px;
          font-family: sans-serif;
          line-height: 1.15;
        }
        .title-main { 
          color: white; 
          font-weight: bold; 
          font-size: 13px; 
          text-align: center; 
          text-transform: uppercase;
        }
        .branch-title {
          color: white;
          font-weight: bold;
          font-size: 10px;
          text-align: center;
        }
        .node-label {
          color: #222;
          font-weight: bold;
          font-size: 9px;
          text-align: center;
        }
        .desc-text {
          color: #111;
          font-size: 9px;
          text-align: left;
          overflow: hidden;
        }
      `}</style>
    </defs>

    <path d="M415 290 C 370 290, 380 110, 400 110" className="connector" />
    <path d="M415 290 C 380 290, 410 320, 395 320" className="connector" />
    <path d="M605 290 C 640 290, 600 97, 630 97" className="connector" />
    <path d="M605 290 C 640 290, 600 367, 630 367" className="connector" />
    <line x1="320" y1="110" x2="300" y2="110" className="connector" />
    <line x1="205" y1="110" x2="190" y2="110" className="connector" />

    <path d="M290 320 C 270 320, 260 240, 250 240" className="connector" />
    <line x1="290" y1="320" x2="270" y2="320" className="connector" />
    <path d="M290 320 C 270 320, 260 410, 260 410" className="connector" />
    <line x1="160" y1="240" x2="140" y2="240" className="connector" />
    <line x1="160" y1="320" x2="140" y2="320" className="connector" />
    <line x1="175" y1="410" x2="155" y2="410" className="connector" />

    <path d="M717 97 C 730 97, 720 50, 735 50" className="connector" />
    <path d="M717 97 C 730 97, 720 142, 735 142" className="connector" />
    <line x1="835" y1="50" x2="855" y2="50" className="connector" />
    <line x1="815" y1="142" x2="835" y2="142" className="connector" />

    <path d="M730 367 C 740 367, 740 280, 750 280" className="connector" />
    <line x1="730" y1="367" x2="750" y2="367" className="connector" />
    <path d="M730 367 C 740 367, 740 455, 750 455" className="connector" />
    <line x1="825" y1="280" x2="845" y2="280" className="connector" />
    <line x1="820" y1="367" x2="845" y2="367" className="connector" />
    <line x1="835" y1="455" x2="855" y2="455" className="connector" />

    <rect x="415" y="250" width="190" height="80" rx="5" ry="5" fill="#1D1D26" />
    <foreignObject x="415" y="250" width="190" height="80">
        <div className="fo-container title-main">
            DIVERGENZE ECONOMICHE<br />E TENSIONI SOCIALI IN EUROPA<br />(XVI-XVII SECOLO)
        </div>
    </foreignObject>

    <rect x="320" y="90" width="80" height="40" fill="#3B6FE0" className="node-solid" />
    <foreignObject x="320" y="90" width="80" height="40">
        <div className="fo-container branch-title">
            LEZIONE STORICA
        </div>
    </foreignObject>

    <rect x="205" y="97" width="95" height="26" fill="#E8E8FF" stroke="#3B6FE0" className="node-light" />
    <foreignObject x="205" y="97" width="95" height="26">
        <div className="fo-container node-label">
            Crescita senza equità
        </div>
    </foreignObject>

    <rect x="60" y="55" width="130" height="110" stroke="#3B6FE0" className="main-box" />
    <foreignObject x="60" y="55" width="130" height="110">
        <div className="fo-container desc-text">
            Le vicende economiche del XVI-XVII secolo dimostrano che la prosperità macroeconomica può coesistere con una diffusa sofferenza sociale se i profitti non vengono distribuiti equamente.
        </div>
    </foreignObject>

    <rect x="290" y="300" width="105" height="40" fill="#8A40F2" className="node-solid" />
    <foreignObject x="290" y="300" width="105" height="40">
        <div className="fo-container branch-title">
            IMPATTI E TENSIONI SOCIALI
        </div>
    </foreignObject>

    <rect x="160" y="225" width="90" height="30" fill="#EAD6FF" stroke="#8A40F2" className="node-light" />
    <foreignObject x="160" y="225" width="90" height="30">
        <div className="fo-container node-label">
            Povertà e disuguaglianze
        </div>
    </foreignObject>

    <rect x="30" y="195" width="110" height="85" stroke="#8A40F2" className="main-box" />
    <foreignObject x="30" y="195" width="110" height="85">
        <div className="fo-container desc-text">
            Nonostante la crescita generale, la maggior parte della popolazione rimane povera, con la ricchezza concentrata nelle mani delle élite.
        </div>
    </foreignObject>

    <rect x="160" y="305" width="110" height="35" fill="#EAD6FF" stroke="#8A40F2" className="node-light" />
    <foreignObject x="160" y="305" width="110" height="35">
        <div className="fo-container node-label">
            Condizioni di vita
        </div>
    </foreignObject>

    <rect x="10" y="285" width="130" height="75" stroke="#8A40F2" className="main-box" />
    <foreignObject x="10" y="285" width="130" height="75">
        <div className="fo-container desc-text">
            La popolazione comune affronta salari bassi, precarietà e condizioni difficili, alimentando la domanda di riforme.
        </div>
    </foreignObject>

    <rect x="175" y="395" width="95" height="30" fill="#EAD6FF" stroke="#8A40F2" className="node-light" />
    <foreignObject x="175" y="395" width="95" height="30">
        <div className="fo-container node-label">
            Ricchezza vs Benessere
        </div>
    </foreignObject>

    <rect x="25" y="375" width="130" height="90" stroke="#8A40F2" className="main-box" />
    <foreignObject x="25" y="375" width="130" height="90">
        <div className="fo-container desc-text">
            La ricchezza delle colonie (es. Spagna) non crea benessere comune se usata per spese militari anziché investimenti sociali.
        </div>
    </foreignObject>

    <rect x="630" y="70" width="87" height="55" fill="#FF5510" className="node-solid" />
    <foreignObject x="630" y="70" width="87" height="55">
        <div className="fo-container branch-title">
            TRAIETTORIE ECONOMICHE DIVERGENTI
        </div>
    </foreignObject>

    <rect x="735" y="35" width="100" height="30" fill="#FFE0CC" stroke="#FF5510" className="node-light" />
    <foreignObject x="735" y="35" width="100" height="30">
        <div className="fo-container node-label">
            Potenze commerciali
        </div>
    </foreignObject>

    <rect x="855" y="10" width="130" height="85" stroke="#FF5510" className="main-box" />
    <foreignObject x="855" y="10" width="130" height="85">
        <div className="fo-container desc-text">
            Inghilterra e Olanda si affermano grazie a mercati in espansione e capacità finanziaria.
        </div>
    </foreignObject>

    <rect x="735" y="125" width="80" height="35" fill="#FFE0CC" stroke="#FF5510" className="node-light" />
    <foreignObject x="735" y="125" width="80" height="35">
        <div className="fo-container node-label">
            Declino Spagna
        </div>
    </foreignObject>

    <rect x="840" y="115" width="125" height="105" stroke="#FF5510" className="main-box" />
    <foreignObject x="840" y="115" width="125" height="105">
        <div className="fo-container desc-text">
            Nonostante l'oro coloniale, subisce il declino per enormi spese militari e mancati investimenti produttivi.
        </div>
    </foreignObject>

    <rect x="630" y="340" width="100" height="55" fill="#55C255" className="node-solid" />
    <foreignObject x="630" y="340" width="100" height="55">
        <div className="fo-container branch-title">
            FATTORI CRESCITA ECONOMICA
        </div>
    </foreignObject>

    <rect x="750" y="265" width="75" height="30" fill="#D5F0D5" stroke="#55C255" className="node-light" />
    <foreignObject x="750" y="265" width="75" height="30">
        <div className="fo-container node-label">
            Espansione commerci
        </div>
    </foreignObject>

    <rect x="845" y="240" width="130" height="90" stroke="#55C255" className="main-box" />
    <foreignObject x="845" y="240" width="130" height="90">
        <div className="fo-container desc-text">
            L'incremento dell'attività commerciale favorisce l'accumulazione di capitale e nuove industrie.
        </div>
    </foreignObject>

    <rect x="750" y="350" width="70" height="30" fill="#D5F0D5" stroke="#55C255" className="node-light" />
    <foreignObject x="750" y="350" width="70" height="30">
        <div className="fo-container node-label">
            Nuovi prodotti
        </div>
    </foreignObject>

    <rect x="850" y="355" width="130" height="70" stroke="#55C255" className="main-box" />
    <foreignObject x="850" y="355" width="130" height="70">
        <div className="fo-container desc-text">
            Beni coloniali (zucchero, caffè, tabacco) modificano consumi e mercati.
        </div>
    </foreignObject>

    <rect x="750" y="440" width="85" height="30" fill="#D5F0D5" stroke="#55C255" strokeDasharray="3,2" className="node-light" />
    <foreignObject x="750" y="440" width="85" height="30">
        <div className="fo-container node-label">
            Le Compagnie
        </div>
    </foreignObject>

    <rect x="860" y="450" width="130" height="90" stroke="#55C255" className="main-box" />
    <foreignObject x="860" y="450" width="130" height="90">
        <div className="fo-container desc-text">
            Strumenti fondamentali per finanziare imprese, gestire rotte e sostenere la crescita delle potenze emergenti.
        </div>
    </foreignObject>
</svg>)

const mappe = [<MappaControriforma />, <MappaAltraRoba />];

export default function MapRiforma() {
    let [mappa, setMappa] = useState(0);

    function backMappa() {

        if (mappa == 0) setMappa(mappe.length - 1); else setMappa(mappa - 1);
    }
    function forwardMappa() {
        setMappa((mappa + 1) % mappe.length);

    }
    function stampaBenni() {
        console.log("stampa benni");
    }
    return (
        <>
            <div className="flex justify-center items-center  bg-[#efe4c8] border-4 border-[#3b2f1e4d] rounded-3xl m-5 overflow-hidden px-10">
                <button onClick={backMappa} className="h-full text-[#3b2f1eee] text-5xl font-titles transition-transform duration-200 hover:-translate-x-5 hover:scale-125 ">⭠</button>
                <div className="mx-auto">
                    {mappe[mappa]}
                </div>
                <button onClick={forwardMappa} className="h-full text-[#3b2f1eee] text-5xl font-titles transition-transform duration-200 hover:translate-x-5 hover:scale-125">⭢</button>
            </div>

        </>
    )
}