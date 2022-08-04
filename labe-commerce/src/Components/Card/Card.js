import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { ImgCard, ContainerInfos, ContainerCard } from "./style";


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
