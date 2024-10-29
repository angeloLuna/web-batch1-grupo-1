import './Card.css'

const Card = ({ name, id }) => {
  return (
    <div className="card-content" style={{
      backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg)`,

    }}>
      <div className="card-data">
        <span className="name">{name}</span>
        <span className="region">region</span>
      </div>
    </div>
  )
}

export default Card