import { textProps } from '@/types'
import React from 'react'
import "./TextArea.css";

const TextArea = ({placeholder, text}: textProps) => {
  return (
    <div className='textbox'>
        <p>{text}</p>
        <textarea name='descricao' rows={20} cols={50} placeholder={placeholder}/>
    </div>
  )
}

export default TextArea