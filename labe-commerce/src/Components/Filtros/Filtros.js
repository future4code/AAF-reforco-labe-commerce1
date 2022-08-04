import React from 'react'
import {StyleInput,ContainerFilter}from "./styled"
export function Filtros() {
  return (
    <ContainerFilter>
      <div>
        <h3>Filtros</h3>
        <StyleInput type="number" placeholder="Valor minimo" />
        <StyleInput type="number" placeholder="Valor maximo" />
      </div>
      <div>
        <input type="text" placeholder="pesquisar" />
      </div>
      <div>
        <select>
          <option>Crescente</option>
          <option>decrescente</option>
        </select>
      </div>
    
    </ContainerFilter>
  )
}
