 import PropTypes from 'prop-types'
const Button = ({color,text,onClick}) => {
  return (
            <button onClick={onClick}style ={{backgroundColor:color}}className='btn'>{text}
             </button>
  )
}

Button.defaultProps={
    color: 'blue',
    text: 'button',
}
Button.propTypes ={
    color: PropTypes.string,
    text: PropTypes.string

}
export default Button