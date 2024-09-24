import { buttonProps, selectProps } from '@/types'
import React from 'react'
import "./SelectConta.css"

const SelectConta = ({text, value, onChange}: selectProps) => {
    return (
      <div className='selectbox'>
        <p>Tipo de usuário</p>
          <select name="Categoria" id="tipoUsuario" value={value} onChange={onChange}>
            <option value={1}>Aluno</option>
            <option value={2}>Professor</option>
          </select>
      </div>
    )
}

export default SelectConta