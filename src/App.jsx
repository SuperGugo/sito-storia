import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

export default function App() {

  return (<>
    <Navbar title="Sito Storia" img="logo.jpg" /> 
    <div className='grid grid-cols-3 pb-10'>
        <Card img="/argomenti/martin.jpg" title="Riforma e controriforma" link="riforma" />
        <Card img="/argomenti/wip.jpg" title="L'età Elisabettiana (WIP)" link="elisabetta" />
        <Card img="/argomenti/wip.jpg" title="Saeculum septimum decimum (WIP)" link="seicento" />
        <Card img="/argomenti/wip.jpg" title="הנאורות (WIP)" link="illuminismo" />
        <Card img="/argomenti/wip.jpg" title="La Rivoluzione Industriale (WIP)" link="industriale" />
        <Card img="/argomenti/wip.jpg" title="La Revolucion Americana (WIP)" link="americana" />
        <Card img="/argomenti/wip.jpg" title="Noi siamo Carlo Chiesa (WIP)" link="francese" />
        <Card img="/argomenti/wip.jpg" title="ナポレオン (WIP)" link="napoleone" />
        <Card img="/argomenti/wip.jpg" title="حركة النهضة (WIP)" link="risorgimento" />
    </div>
    </>
  )
}