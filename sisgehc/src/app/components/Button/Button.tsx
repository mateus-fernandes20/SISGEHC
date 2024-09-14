import { buttonProps } from '@/types'
import React from 'react'
import "./Button.css"

const Button = ({text, color}: buttonProps) => {
    return (
      <div className='buttonbox'>
          <button className={color}>{text}</button>
      </div>
    )
}

export default Button