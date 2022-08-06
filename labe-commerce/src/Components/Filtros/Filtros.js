import React from 'react'
import styled from 'styled-components'
import { ContainerFilter, TittleFilter } from './styled'

const StyleInput = styled.input`
  margin: 4px;
`

export function Filtros(props) {
  return (
    <ContainerFilter>
      <h3>Filtros</h3>
      <div>
        <StyleInput
          type="number"
          placeholder="Valor Minimo"
          value={props.valMin}
          onChange={ev => {
            props.setValMin(ev.target.value)
          }}
        />

        <StyleInput
          type="number"
          placeholder="Valor Maximo"
          value={props.valMax}
          onChange={ev => {
            props.setValMax(ev.target.value)
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Pesquisar"
          value={props.query}
          onChange={props.handleQueryInput}
        />
      </div>

      <div>
        <select value={props.orderParam} onChange={props.handleOrderParam}>
          <option></option>
          <option value="asc">Crescente</option>
          <option value="desc">Decrescente</option>
        </select>
      </div>
    </ContainerFilter>
  )
}
