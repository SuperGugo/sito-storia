import { useParams } from 'react-router-dom'
import Change from '../components/Change.jsx';
import Sources from '../components/Sources.jsx';
import ReactMarkdown from 'react-markdown';

export default function TopicGeneral({ info }) {
    const { argoment } = useParams();
    return (
        <>
            
            {info.general.geoMap}
            <p className='flex justify-center text-5xl '><ReactMarkdown>{`${info.general.factTitle}`}</ReactMarkdown></p>
            <p className='flex justify-center text-2xl m-10'><ReactMarkdown>{`${info.general.factDescription}`}</ReactMarkdown></p>
            <Sources info= {info} whatSource={"sourcesGeneral"}/>
            <Change before={`/${argoment}/personaggi`} after={`/`} />
        </>
    )
}
