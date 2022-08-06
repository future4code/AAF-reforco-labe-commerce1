import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ContainerHeader,
  CartButton,
  ImgButton,
  ConatainerTittle,
  Tittle
} from './styled'

export default function Header() {
  const navigate = useNavigate()

  const goToCar = () => {
    navigate('/carrinho')
  }

  return (
    <div>
      <ContainerHeader>
        <ConatainerTittle>
          <Tittle>LabeCommerce</Tittle>
          <img src={''} />
        </ConatainerTittle>
        <CartButton>
          <ImgButton
            onClick={goToCar}
            src="https://cdn-icons-png.flaticon.com/512/5381/5381441.png"
          />
        </CartButton>
      </ContainerHeader>
    </div>
  )
}
