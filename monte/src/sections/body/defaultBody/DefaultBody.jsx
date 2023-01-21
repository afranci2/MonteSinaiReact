import React from 'react'

const DefaultBody = (props) => {
  return (
    <div className='relative m-auto p-8 md:w-11/12'>
      {props.children}
    </div>
  )
}

export default DefaultBody