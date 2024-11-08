import './Button.css'


const Button = ({ onClick, texto, background, color }) => {
  console.log(background)
  return (
    <div onClick={onClick}className='button-container' style={{
      background: {background},
    }}>
      {texto}
    </div>
  )
}

export default Button