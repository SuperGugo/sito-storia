import { useParams } from 'react-router-dom'
import mapsData from '../../data/Data.jsx'
import TopicMap from './TopicMap.jsx';
import TopicCharacters from './TopicCharacters.jsx';
import TopicGeneral from './TopicGeneral.jsx';
import Navbar from '../components/Navbar.jsx';
import ReactMarkdown from 'react-markdown';

export default function TopicPages() {

    const { argoment, part } = useParams();
    const info = mapsData[argoment];
    if (!info) return <h1>Argomento non trovato</h1>;

    let content;
    if (part === "mappa") content = <TopicMap info={info} />;
    else if (part === "personaggi") content = <TopicCharacters info={info} />
    else if (part === "generale") content = <TopicGeneral info={info} />

    return (
        <>
            <Navbar title={info.title + " - " + part} />
            {content}
        </>
    )
}