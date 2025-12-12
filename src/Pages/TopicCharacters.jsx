import { useParams } from 'react-router-dom'
import Change from '../components/Change.jsx';
import Sources from '../components/Sources.jsx';
import ReactMarkdown from 'react-markdown';

export default function TopicMap({ info }) {
  const { argoment } = useParams();
  return (
    <>
      <div>
        {info.characters.map(info => (
          <>
            <p className='flex items-center justify-center text-4xl mt-5'><ReactMarkdown>{`${info.name}`}</ReactMarkdown></p>
            <p className='ml-20 mr-20 mt-5 mb-5 text-xl><ReactMarkdown'><ReactMarkdown>{`${info.description}`}</ReactMarkdown></p>
          </>
        ))}
      </div>

      <Sources info={info} whatSource={"sourcesCharacters"} />
      <Change before={`/${argoment}/mappa`} after={`/${argoment}/generale`} />
    </>
  )
}

