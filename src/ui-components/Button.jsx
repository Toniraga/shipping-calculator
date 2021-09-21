import React from 'react'
import spinner from '../assets/spinner.svg';

const Button = ({
  children,
  disabled,
  loading,
  onClick,
  classNames,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-10 hover:bg-opacity-70 text-sm px-3 text-white bg-calc-blue ${classNames}`}
    >
      {loading ? <img src={spinner} className='animate-spin h-5 mx-auto' alt='spin' /> : children}
    </button>
  )
}

export default Button
