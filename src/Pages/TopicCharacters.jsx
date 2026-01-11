import { useParams } from 'react-router-dom'
import Change from '../components/Change.jsx';
import Sources from '../components/Sources.jsx';
import ReactMarkdown from 'react-markdown';

export default function TopicMap({ info }) {
  const { argoment } = useParams();
  let i = 0;
  return (
    <>
      <div className="bg-[#efe4c8] border-4 border-[#3b2f1e4d] rounded-3xl m-5 py-12">
        {info.characters.map(info => (
          <div className='flex flex-col items-center'>
            <div className='text-4xl font-bold mb-8 font-titles'><ReactMarkdown>{`${info.name}`}</ReactMarkdown></div>
            <div className='flex w-2/3 mb-2'>
              {(i % 2 == 0) && <img src={`${info.image}`} width={200}></img>}
              {info.desc.map((desc, index) => { return (
                <div className='w-full'>
                  <p className='ml-20 mr-20 mt-5 mb-5 text-3xl'><ReactMarkdown>{`${desc.title}`}</ReactMarkdown></p>
                  <p className='ml-20 mr-20 mt-5 mb-5 text-xl'><ReactMarkdown>{`${desc.description}`}</ReactMarkdown></p>
                </div>
                )})}
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

