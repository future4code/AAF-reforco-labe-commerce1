import styled from "styled-components";

export const ContainerHeader = styled.div`
  background-color: red;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const CartButton = styled.div`
  width: 48px;
  display: flex;
`;

export const ImgButton = styled.img`
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
`;
