import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

export default function App() {

  return (<>
    <Navbar title="Sito Storia" img="logo.jpg" /> 
    <div className='grid grid-cols-3'>
      
        <section id="Argomenti" className='col-span-3'></section>
        <Card img="/martin.jpg" title="Riforma e controriforma" link="riforma" />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
       
    </div>
    </>
  )
}