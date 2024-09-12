import { inputProps } from '@/types'
import React from 'react'
import "./Input.css";

const Input = ({placeholder, text}: inputProps) => {
  return (
    <div className='inputbox'>
        <p>{text}</p>
        <input placeholder={placeholder}/>
    </div>
  )
}

export default Input