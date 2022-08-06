import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 320px;
  height: 450px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 12px;
  background-color: #cfcfcf;
`

export const ImgCard = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 30px;
  margin-top: 3px;
`

export const ContainerInfos = styled.div`
  width: 200px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 0;
`

export const ImgCart = styled.img`
  width: 32px;
  padding: 7px;
  margin: 1px;
`

export const ContainerButton = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  :hover {
    background-color: #767691;
  }
`
