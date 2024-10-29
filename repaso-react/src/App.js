import { useState } from 'react'
import './App.css';
import Navbar from './componentes/Navbar'

function App() {

const [mostrarBoton, setMostrarBoton] = useState(false)

const [datos, setDatos] = useState([
  {
    id,
    titulo,
    desc,
    url,
    comment: [],
    likes,
    user
  }
])



console.log(mostrarBoton);

const cambiarEstado = () => {
  console.log('funciona')
  setMostrarBoton(true)
}

console.log(mostrarBoton)
  return (
    <div className="App">
      <Navbar cambiarEstado={cambiarEstado} />
    </div>
  );
}

export default App;
