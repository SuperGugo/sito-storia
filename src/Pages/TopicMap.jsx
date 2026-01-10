import { useParams } from 'react-router-dom'
import Change from '../components/Change.jsx';
import Sources from '../components/Sources.jsx';
import ReactMarkdown from 'react-markdown';

export default function TopicMap({ info }) {
    const { argoment } = useParams();
    const Mappa = info.map
    return (
        <>
            <Mappa />
            <Sources info={ info } whatSource={"sourcesMap"} />
            <Change before={"/"} after={`/${argoment}/personaggi`} />
        </>
    )
}