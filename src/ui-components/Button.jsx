import React from 'react'

const Button = ({
  children,
  onClick,
  classNames,
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-10 hover:bg-opacity-70 text-sm px-3 text-white bg-calc-blue ${classNames}`}
    >
      {children}
    </button>
  )
}

export default Button
