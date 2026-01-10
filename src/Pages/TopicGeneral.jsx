import { useParams } from 'react-router-dom'
import Change from '../components/Change.jsx';
import Sources from '../components/Sources.jsx';
import ReactMarkdown from 'react-markdown';

export default function TopicGeneral({ info }) {
    const { argoment } = useParams();
    return (
        <>
            <div className="bg-[#efe4c8] border-4 border-[#3b2f1e4d] rounded-3xl m-5 overflow-hidden">
                {info.general.geoMap}
            </div>
            
            <div className="bg-[#efe4c8] border-4 border-[#3b2f1e4d] rounded-3xl m-5">
                <div className='w-4/5 mx-auto my-12'>
                <div className='w-full text-center justify-center text-5xl font-bold mb-8 font-titles'>{`Approfondimento: ${info.general.factTitle}`}</div>
                {
                    info.general.facts.map((fact, index) => {
                        return ( 
                            <div key={index}>
                                <div className='block justify-center text-center text-4xl font-bold mb-5 font-navTitle'>{`${fact.title}`}</div>
                                <div className='blockflex justify-center text-2xl mb-8 font-content indent-8'><ReactMarkdown>{`${fact.description}`}</ReactMarkdown></div>
                            </div>
                        );
                    })
                }
            </div>
            </div>
            
            <Sources info={info} whatSource={"sourcesGeneral"}/>
            <Change before={`/${argoment}/personaggi`} after={`/`} />
        </>
    )
}
