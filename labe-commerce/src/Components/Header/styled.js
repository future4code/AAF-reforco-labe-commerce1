import styled from 'styled-components'

export const ContainerHeader = styled.div`
  background-color: #41414f;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #b0b0d6;
`
export const CartButton = styled.div`
  width: 48px;
  display: flex;
`

export const ImgButton = styled.img`
  width: 48px;
  /* margin-left: 300px; */
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

export const ConatainerTittle = styled.div``

export const Tittle = styled.h1`
  font-size: 50px;
`
