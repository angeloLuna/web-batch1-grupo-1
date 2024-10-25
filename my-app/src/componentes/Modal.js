import './Modal.css'

const Modal = ({changeMostrarModal}) => {
 return (
  <div className='modal-container'>
    <div className="modal">
      <input placeholder='Email' className='email' type="text" />
      <input placeholder='Contraseña' className='password' type="text" />
      <button onClick={changeMostrarModal}>Entrar</button>
    </div>
  </div>
 ) 
}

export default Modal