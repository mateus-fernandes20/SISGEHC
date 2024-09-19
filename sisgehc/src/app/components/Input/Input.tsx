import { inputProps } from '@/types'
import React from 'react'
import "./Input.css";

const Input = ({id, placeholder, text, value, onChange}: inputProps) => {
  return (
    <div className='inputbox'>
        <p>{text}</p>
        <input id={id} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input