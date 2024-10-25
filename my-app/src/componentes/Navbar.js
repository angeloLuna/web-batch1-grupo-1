import './Navbar.css'

const Navbar = ({changeMostrarModal}) => {
  return (
    <div className='navbar-container'>
      <button onClick={changeMostrarModal} className='button-login'> Iniciar sesión</button>
    </div>
  )
}

export default Navbar