import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

export default function App() {

  return (<>
    <Navbar title="Il meraviglioso sito di storia della Quarta CIN" img="logo.jpg" /> 
    <div className='grid grid-cols-3 pb-10'>
        <Card img="/argomenti/martin.jpg" title="Riforma e controriforma" link="riforma" />
        <Card img="/argomenti/wip.jpg" title="L'età Elisabettiana (WIP)" link="elisabetta" />
        <Card img="/argomenti/wip.jpg" title="Il Seicento (WIP)" link="seicento" />
        <Card img="/argomenti/wip.jpg" title="L'illuminismo (WIP)" link="illuminismo" />
        <Card img="/argomenti/wip.jpg" title="La Rivoluzione Industriale (WIP)" link="industriale" />
        <Card img="/argomenti/wip.jpg" title="La Rivoluzione Americana (WIP)" link="americana" />
        <Card img="/argomenti/wip.jpg" title="La Rivoluzione Francese (WIP)" link="francese" />
        <Card img="/argomenti/wip.jpg" title="Napoleone (WIP)" link="napoleone" />
        <Card img="/argomenti/wip.jpg" title="Il Risorgimento (WIP)" link="risorgimento" />
    </div>
    </>
  )
}