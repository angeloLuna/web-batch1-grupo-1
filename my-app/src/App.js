import { useState } from 'react'
import Navbar from './componentes/Navbar.js'
import Modal from './componentes/Modal.js'
import Card from './Card.js'
import './App.css'

function App() {

  const [mostrarModal, setMostrarModal] = useState(false)

  const changeMostrarModal = () => {

    setMostrarModal( !mostrarModal )
    
  }

  console.log(mostrarModal)

  return (
    <div className="App">
      <Navbar changeMostrarModal={changeMostrarModal} />
      
      {
        mostrarModal ? <Modal changeMostrarModal={changeMostrarModal} /> : <Card />
      }
      {
        // mostrarModal && <Modal changeMostrarModal={changeMostrarModal} />
      }
      
    </div>
  );
}




export default App;
