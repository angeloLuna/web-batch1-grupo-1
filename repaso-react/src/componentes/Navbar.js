import './Navbar.css'

const Navbar = ({ cambiarEstado }) => {
  return(
    <div className='navbar-container'>
      <button onClick={cambiarEstado} className='navbar-button'>Iniciar sesión</button>
    </div>
  )
}

export default Navbar