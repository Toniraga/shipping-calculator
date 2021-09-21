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
      <option className="w-20" value="custom_package">Custom package</option>
      <option className="w-20" value="flat_rate_box">Flat rate box</option>
      <option className="w-20" value="flat_rate_envelope">Flat rate envelope</option>
    </select>
  )
}

export default Input
