import { useState } from 'react'
import './App.css';
import Card from './Card';
import axios from 'axios';

function App() {

  // definicion de estados
  const [contador, setContador] = useState(0)
  const [result, setResult] = useState([])
  // funcion para contar
  const contar = () => {
    // contar
    console.log('contando', contador);
    setContador(contador + 1)
  }

  // llamada de pokeapi con axios
  axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(function (response) {
      // manejar respuesta exitosa
      if (response) {
        setResult(response.data.results)
        console.log(response.data.results)
      }
    })

  const productos = [{
    nombre: 'Manimoto',
    precio: 6000,
    url: '',

  }, {
    nombre: 'coca-cola',
    precio: 6000,
    url: ''
  },
  ]


  return (
    <div className="App">
      {/* <Card contar={contar} contador={contador} /> */}
      {
        result.map((item) => <Card nombre={item.name} url={item.url} />)
      }
    </div>
  );
}




export default App;
