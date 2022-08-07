import React from "react";
import { ItensStyled } from "./styled";

function Itens(props) {
  return (
    <ItensStyled>
      <p>{props.name}</p>
      <>
      <p>{props.price}</p>
      <p>Quntidade:{props.quantidade}</p>
      </>
      <button onClick ={ props.onClick }
      >Remover</button>
    </ItensStyled>
  );
}
export default Itens;
