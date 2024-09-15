import { inputProps } from '@/types'
import React from 'react'
import "./Input.css";

const Input = ({id, placeholder, text}: inputProps) => {
  return (
    <div className='inputbox'>
        <p>{text}</p>
        <input id={id} placeholder={placeholder}/>
    </div>
  )
}

export default Input