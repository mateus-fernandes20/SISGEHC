import { selectProps } from '@/types'
import React from 'react'
import "./DataInput.css"

const DataInput = ({text}: selectProps) => {
    return (
      <div className='selectdatabox'>
        <p>{text}</p>
          <input placeholder="Escolha uma data" type="data" id="data" name="data"/><br/>
      </div>
    )
}

export default DataInput