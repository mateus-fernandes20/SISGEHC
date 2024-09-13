import { buttonProps } from '@/types'
import React from 'react'
import "./DataInput.css"

const DataInput = () => {
    return (
      <div className='selectdatabox'>
        <p>Início do evento</p>
          <input placeholder="Escolha uma data" type="data" id="data" name="data"/><br/>
      </div>
    )
}

export default DataInput