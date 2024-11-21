import './Button.css'

const Button = ({children}) => {
  return (
    <div className='button-container'>
      {children}
    </div>
  );
}

export default Button;
