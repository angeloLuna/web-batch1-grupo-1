import './Navbar.css'

const Navbar = ({ handleShowMenu }) => {
  return (
    <div className='navbar-container'>
      <span>Simulador Lolcito</span>
      <button onClick={handleShowMenu}>Menu</button>
    </div>
  )
}

export default Navbar