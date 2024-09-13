import { buttonProps } from '@/types'
import React from 'react'
import "./Select.css"

const Select = () => {
    return (
      <div className='selectbox'>
        <p>Tipo de Hora Complementar</p>
          <select name="Categoria" id="selectCat">
            <option value="tipoA">A - Complementação de formação específica ou profissional</option>
            <option value="tipoB">B - Atividades de Ensino</option>
            <option value="tipoC">C - Pesquisa e produção científica</option>
            <option value="tipoD">D - Atividades acadêmicas gerais</option>
            <option value="tipoE">E - Atividades de Extensão</option>
            <option value="tipoF">F - Atividades Esportivas e Culturais</option>
          </select>
      </div>
    )
}

export default Select