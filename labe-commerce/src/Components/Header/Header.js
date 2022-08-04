import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const ContainerHeader = styled.div`
  background-color: red;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const CartButton = styled.div`
  width: 48px;
  display: flex;
`

const ImgButton = styled.img`
  width: 48px;
 margin-left: 300px;
  cursor: pointer;
  :hover {
    animation: ImgButton 0.3s linear both;
    @keyframes ImgButton {
      100% {
        transform: scale(1.2);
      }
    }
  }
`

export default function Header() {

  const navigate = useNavigate()

  const goToCar = ()=>{
    navigate('/carrinho')
    
  }

  return (
    <div>
      <ContainerHeader>
        <h1>LabeCommerce</h1>
        <CartButton>
        <ImgButton onClick={goToCar} src="https://cdn-icons-png.flaticon.com/512/25/25619.png" />
      </CartButton>
      </ContainerHeader>
    </div>
  )
}
