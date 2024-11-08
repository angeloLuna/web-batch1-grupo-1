import './Navbar.css'
import Button from './styled/Button'

const Navbar = ({ cambiarEstado }) => {
  return(
    <div className='navbar-container'>
      <Button 
        texto="Iniciar sesión" 
        onClick={cambiarEstado}
      />
      <Button 
        texto="Regístrate" 
        onClick={cambiarEstado}
      />
    </div>
  )
}

export default Navbar