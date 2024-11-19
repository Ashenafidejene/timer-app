import React from 'react'

export default function InputFiled({label,value,onChange,placeholder}) {
  const handleInputChange = (e) => {
    const inputvalue = e.target.value;
    if (/^\d+$/.test(inputvalue)) { // Correct capitalization
      onChange(e);
    }
  };
  return (
    <div className='text-3xl'>
      <label
      className='text-stone-300'
      >{label}:</label>
      <input type='number' value={value} onChange={handleInputChange} placeholder={placeholder}
      className='w-20 bg-transparent text-blue-400' ></input>
    </div>
  )
}
