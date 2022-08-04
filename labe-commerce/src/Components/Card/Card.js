import React from 'react'
import styled from 'styled-components'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

const ContainerCard = styled.div`
  width: 300px;
  height: 450px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 25px;
`

const ImgCard = styled.img`
  width: 280px;
  height: 300px;
  border-radius: 30px;
`

const ContainerInfos = styled.div`
  width: 200px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`

export default function Card(props) {
  return (
    <div>
      <ContainerCard>
        <ImgCard src={props.imgProduto} />
        <ContainerInfos>
          <p>{props.nomeProduto}</p>
          <p>R$ {props.valorProduto}</p>
        </ContainerInfos>

        <Box sx={{ '& > :not(style)': { m: 1 } }}>   
        <Fab size="medium" color="" aria-label="add">
       <AddIcon />
      </Fab>
    </Box>

      </ContainerCard>
    </div>
  )
}
