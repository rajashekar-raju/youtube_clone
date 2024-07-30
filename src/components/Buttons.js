import React from 'react'

const Buttons = ({name}) => {
  return (
    <div className='snap-center'>
        <button className='px-4 py-2 bg-[#f0f0f0] hover:bg-gray-300 border-collapse outline-none rounded-lg mx-3'>{name}</button>
    </div>
  )
}

export default Buttons