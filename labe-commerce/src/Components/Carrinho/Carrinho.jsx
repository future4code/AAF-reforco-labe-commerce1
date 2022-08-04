import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContainerHeader = styled.div`
  background-color: red;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h1{
    cursor: pointer;
  }
`


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
