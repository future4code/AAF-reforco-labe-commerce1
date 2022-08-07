import React, {useState} from "react";
import Itens from "./Itens";
import { CarrinhoStyled } from "./styled";
import { useNavigate } from "react-router-dom";
import { ContainerHeader } from "./styled";


function Carrinho ({carrinho}){
    const navigate = useNavigate();
    const goToIndex = () => {
      navigate("/");
    };
    const itensDoCarinho = carrinho?.map(({id,name,price, quantidade,valorTotal, onClick})=>{
 
        return <Itens
        key={id}
         name={name} 
         price={price} 
         quntidade={quantidade}
        //  onClick={() =>removerItemDoCarrinho(item)}
        />;  
})
    console.log(carrinho)
return (
  <div>
    <ContainerHeader>
      <h1>LabeCommerce </h1>
      <p onClick={goToIndex}>voltar</p>
    </ContainerHeader>

    <CarrinhoStyled>
<h2>Carrinho</h2>
      {itensDoCarinho}
      {/* <p>Valor Total: R$ {valorTotal}</p> */}
    </CarrinhoStyled>
  </div>
);
}
export default Carrinho