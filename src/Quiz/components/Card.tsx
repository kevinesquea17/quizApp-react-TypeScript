import React from 'react'

interface CardProps{
    children: JSX.Element | JSX.Element[]
}

const Card = ({children}: CardProps) => {
  return (
    <div className='w-[90%] h-[57%] sm:w-[40%] sm:h-[410px] p-4 bg-white rounded shadow-md relative'>
        {children}
    </div>
  )
}

export default Card
