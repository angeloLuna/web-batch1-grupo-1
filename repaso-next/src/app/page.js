'use client'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from "./components/Navbar";
import Buscador from "./components/Buscador";
import Menu from "./components/Menu";
import Esquinas from './components/Esquinas';

export default function Home() {
  const apiUrl = 'https://ddragon.leagueoflegends.com/cdn/14.22.1/data/en_US/champion/Aatrox.json'



  console.log('hey')
  const [showMenu, setShowMenu] = useState(false)
  const [data, setData] = useState({})

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    axios.get(apiUrl)
      .then(function (response) {
        // manejar respuesta exitosa
        console.log(response);
        if(response) {
          setData(response.data.data)
        }
      })
  }, [])

  console.log(data)
  return (
    <div className="">
      <Navbar handleShowMenu={handleShowMenu} />
      <Buscador />
      {
        showMenu && <Menu />
      }
      
      {
        data && <span style={{color: 'white'}}>{data}</span>
      }

      <Esquinas />
    </div>
  );
}
