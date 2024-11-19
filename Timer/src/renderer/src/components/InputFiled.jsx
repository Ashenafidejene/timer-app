import React from 'react'

export default function InputFiled({label,value,onChange,placeholder}) {

  return (
    <div className='text-3xl'>
      <label
      className='text-stone-300'
      >{label}:</label>
      <input type='number' value={value} onChange={onChange} placeholder={placeholder}
      className='w-20 bg-transparent text-blue-400' ></input>
    </div>
  )
}
