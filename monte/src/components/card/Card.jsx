import React from 'react'

const Card = (props) => {
  return (
    <div className='rounded-md backdrop-blur-sm drop-shadow-md'>{props.children}</div>
  )
}

export default Card