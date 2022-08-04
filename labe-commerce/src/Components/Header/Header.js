import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {ContainerHeader,CartButton,ImgButton} from "./styled"

export default function Header() {

  // const navigate = useNavigate()

  // const goToCar = ()=>{
  //   navigate('/carrinho')
    
  // }

  return (
    <div>
      <ContainerHeader>
        <h1>LabeCommerce</h1>
        <CartButton>
        {/* <ImgButton onClick={goToCar} src="https://cdn-icons-png.flaticon.com/512/25/25619.png" /> */}
      </CartButton>
      </ContainerHeader>
    </div>
  )
}
