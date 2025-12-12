import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

export default function App() {

  return (
    <div className='grid grid-cols-3'>
      <Navbar title="Sito Storia 4Cin"/>
        <Card img="/martin.jpg" title="riforma" />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    
  )
}