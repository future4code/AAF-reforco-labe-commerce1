import React from "react";
import { useNavigate } from "react-router-dom";
import {ContainerHeader} from "./styled"

export function Carrinho() {

const navigate = useNavigate()
const goToIndex = () => {
navigate('/')

}


  return (
  <div>
     <ContainerHeader>
     <h1 onClick={goToIndex}>LabeCommerce</h1>
     {/* <button onClick={goToIndex}>Voltar</button> */}
     </ContainerHeader>
    
    <h1>Carrinho</h1>
    </div>
    );
}
