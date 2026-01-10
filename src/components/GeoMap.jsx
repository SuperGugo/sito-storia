import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function GeoMap({ Geomap, tooltips }) {
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
            <Geomap enableTooltip={enableTooltip} handleClick={handleClick} hover={hover} move={move}/>
            
            <div className={'p-2 absolute w-96 h-auto bg-[#efe4c8] border-4 border-[#3b2f1e4d] rounded-3xl pointer-events-none transition-opacity duration-200 ' + (tooltip ? 'opacity-100' : 'opacity-0')} style={pos}>
                <h1 className='text-3xl text-center font-navTitle font-bold my-2'>{tooltipTitle}</h1>
                <div className='font-content indent-3'><ReactMarkdown>{`${tooltipContent}`}</ReactMarkdown></div>
            </div>
        </>
    )
}
