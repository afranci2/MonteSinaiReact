import React from 'react'

const DefaultBody = (props) => {
  return (
    <div className='h-auto w-full'>
      {props.children}
    </div>
  )
}

export default DefaultBody