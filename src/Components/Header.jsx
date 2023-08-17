import React from 'react'
import Button from './Button'
 function Header({title,onAdd,ShowAdd}) {
 
    return (
        <header className='header'>
            <h1 
            style ={headingStyle}>{title}
            </h1>
            <Button text={ShowAdd?'Close':'Add'}
             onClick={onAdd} 
             color={ShowAdd?'red':'green'}/>
        </header>
  )
}
Header.defaultProps = {
 title: "Task Tracker",
}
const headingStyle ={
    color: 'red',
    backgroundColour: 'black',
}
export default Header