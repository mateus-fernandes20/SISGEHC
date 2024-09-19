import { selectProps } from '@/types'
import React from 'react'
import "./TimeInput.css"

const TimeInput = ({text}: selectProps) => {
    return (
      <div className='selectdatabox'>
        <p>{text}</p>
          <input placeholder="Escolha um horário" type="time" id="hora" name="hora"/><br/>
      </div>
    )
}

export default TimeInput
