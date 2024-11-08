import './Buscador.css'

const Buscador = () => {
  return (
    <div className='buscador-container'>
      <div className="buscador">
        <input placeholder='Buscar...' type="text" className="buscador-input" />
      </div>
    </div>
  )
}

export default Buscador