import React from 'react'

const Input = ({ name, label, change, type, value, btnDisabled}) => {
  return (
    <div className="form-group">
      {type !== "submit" && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        placeholder={label}
        type={type || "text"}
        onChange={change}
        value={value}
        disabled={btnDisabled}
      />
    </div>
  )
}

export default Input;
