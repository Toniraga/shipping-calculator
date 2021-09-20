import React from 'react'

const Input = ({
  placeholder,
  type = 'text',
  value,
  onChange,
  name,
  disabled,
  classNames
}) => {
  return (
    <input 
      className={`h-10 py-3 rounded-md text-sm ${classNames}`} 
      placeholder={placeholder}
      name={name}
      style={{fontSize: '0.8rem', backgroundColor: 'white'}}
      value={value}
      onChange={onChange}
      disabled={disabled}
      type={type}
    />
  )
}


export const Select = ({
  value,
  onChange,
  name,
  className
}) => {
  return (
    <select
      value={value}
      name={name}
      onChange={(e) => onChange(e)}
      className={`select-option h-10 border rounded-md text-sm ${className}`}
    >
      <option className="w-20" value="Custom package">Custom package</option>
      <option className="w-20" value="Flat rate box">Flat rate box</option>
      <option className="w-20" value="Flat rate envelope">Flat rate envelope</option>
    </select>
  )
}

export default Input
