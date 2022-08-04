import React from 'react'
import styled from 'styled-components'

const ContainerFilter = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`



const StyleInput = styled.input`
  margin: 4px;
`

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
