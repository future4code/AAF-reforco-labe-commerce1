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

const CartButton = styled.div`
  width: 48px;
  display: flex;
`

const ImgButton = styled.img`
  width: 48px;
  :hover {
    animation: ImgButton 0.3s linear both;
    @keyframes ImgButton {
      100% {
        transform: scale(1.2);
      }
    }
  }
`

export function Filtros() {
  return (
    <ContainerFilter>
      <div>
        <input type="number" placeholder="Valor minimo" />
        <input type="number" placeholder="Valor maximo" />
        <input type="text" placeholder="pesquisar" />
      </div>
      <CartButton>
        <ImgButton src="https://cdn-icons-png.flaticon.com/512/25/25619.png" />
      </CartButton>
    </ContainerFilter>
  )
}
