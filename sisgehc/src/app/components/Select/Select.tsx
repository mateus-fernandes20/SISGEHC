import { buttonProps } from '@/types'
import React from 'react'
import "./Select.css"

const Select = () => {
    return (
      <div className='selectbox'>
        <p>Tipo de Hora Complementar</p>
          <select name="Categoria" id="selectCat">
            <option value="cat1">Categoria 1</option>
            <option value="cat2">Categoria 2</option>
            <option value="cat3">Categoria 3</option>
          </select>
      </div>
    )
}

export default Select