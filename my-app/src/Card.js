
const Card = ({ nombre, precio, url, contar, contador }) => {
  return (
    <div className="card">
      <span className="title">
        {nombre}
      </span>
      <span className="desc">
        {precio}
      </span>
      <span className="url">
        {url}
      </span>
      <button onClick={contar}>Click</button>
      <span className="counter">{contador}</span>
    </div>
  )
}



export default Card