import styled from "styled-components";

export const ContainerHeader = styled.div`
  background-color: #41414f;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #b0b0d6;
  h1 {
    cursor: pointer;
  }
`;

export const CarrinhoStyled = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ItensStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 10px 0;
  }
  border-radius: 5px;
  border: solid 1px;
  padding: 10px;
  margin: 10px;
`;
