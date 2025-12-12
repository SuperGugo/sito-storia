import { useParams } from 'react-router-dom'
import Change from '../components/Change.jsx';
import Sources from '../components/Sources.jsx';
import ReactMarkdown from 'react-markdown';

export default function TopicMap({ info }) {
  const { argoment } = useParams();
  let i = 0;
  return (
    <>
      <div>
        {info.characters.map(info => (
          <div className='flex flex-col items-center'>
            <p className='flex items-center justify-center text-4xl mt-5'><ReactMarkdown>{`${info.name}`}</ReactMarkdown></p>
            <div className='flex w-2/3'>
              {(i % 2 == 0) && <img src={`${info.image}`} width={200}></img>}
              <p className='ml-20 mr-20 mt-5 mb-5 text-xl><ReactMarkdown'><ReactMarkdown>{`${info.description}`}</ReactMarkdown></p>
              {(i++ % 2 != 0) && <img src={`${info.image}`} width={200}></img>}
            </div>
          </div>
        ))}
      </div>

      <Sources info={info} whatSource={"sourcesCharacters"} />
      <Change before={`/${argoment}/mappa`} after={`/${argoment}/generale`} />
    </>
  )
}

