import { useEffect, useState } from 'react'
import './Layout.css'
import helmet from '../assets/img/helmet.png'
import Card from './Card'
import axios from 'axios'

const Layout = () => {

  const [data, setData] = useState([])

  

  useEffect(() => {
    axios.get('https://ddragon.leagueoflegends.com/cdn/14.21.1/data/en_US/champion.json')
  .then(function (response) {
    // manejar respuesta exitosa
    if (response) {
      setData(Object.values(response.data.data))
    }
    // console.log(response);
  })
  }, [])

  console.log('dataState', data)
  return (
    <div className="layout">
      <div className="background-img">
      </div>
      <div className="content">
        <div className="header">
          <div className="left">
            <span>i</span>
            <span>Buscar campeón</span>
          </div>
          <div className="rigth">
            <span>i</span>
            <span>Ordenar por</span>
            <span> : A - z</span>
          </div>
        </div>
        <div className="title">
          <img className="helmet" src={helmet} alt="" />
          <span className="title-text">CAMPEONES</span>
        </div>
        <div className="champions">
          {
            data.length !== 0  && data.map((item) => <Card id={item.id} name={item.name} />)
          }
          
        </div>
      </div>
    </div>
  )
}

export default Layout