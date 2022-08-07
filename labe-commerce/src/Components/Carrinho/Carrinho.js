import React, {useState} from "react";
import Itens from "./Itens";
import { CarrinhoStyled } from "./styled";
import { useNavigate } from "react-router-dom";
import { ContainerHeader } from "./styled";

// function Itens(props) {
//   return (
//     <ItensStyled>
//       <p>{props.name}</p>
//       <p>{props.price}</p>
//       <p>Quntidade:{props.quantidade}</p>
//     </ItensStyled>
//   );
// }
function Carrinho ({carrinho}){
    const navigate = useNavigate();
    const goToIndex = () => {
      navigate("/");
    };
    const itensDoCarinho = carrinho?.map(({name,price})=>{
 
        return <Itens name={name} price={price} quntidade={1}/>;  
})
    console.log(carrinho)
return (
  <div>
    <ContainerHeader>   
      <h1 onClick={goToIndex}>LabeCommerce</h1>
    </ContainerHeader>

    <CarrinhoStyled>
     
   {itensDoCarinho}
    </CarrinhoStyled>
  </div>
);
}
export default Carrinho