import React from 'react'

const Square = ({children, updateBoard, index}) => {
  const handleClick = () => {
    updateBoard(index);
  }
  return (
    <div onClick={handleClick} className={`flex items-center justify-center text-6xl select-none`}>
      {children}
    </div>
  )
}

export default Square
