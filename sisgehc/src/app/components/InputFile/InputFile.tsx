import { inputFileProps } from '@/types'
import React from 'react'
import "./InputFile.css";

const InputFile = ({id, name, text}: inputFileProps) => {
  return (
    <div className='inputbox'>
        <p>{text}</p>
        <input type="file" accept='image/*' id={id} name={name}/>
    </div>
  )
}

export default InputFile
