import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

import {
  ImgCard,
  ContainerInfos,
  ContainerCard,
  ImgCart,
  ContainerButton
} from './style'

export default function Card({img,name,price,id,addToCar}) {
  return (
    <div>
      <ContainerCard>
        <ImgCard src={img} />
        <ContainerInfos>

          <p>{name}</p>
          <p>R$ {price}</p>
        </ContainerInfos>

        {/* <ContainerButton
        onClick={() =>addToCar({name,price})}>
          <ImgCart
            src={
              'https://cdn-icons.flaticon.com/png/512/5952/premium/5952776.png?token=exp=1659803256~hmac=8a2beadafd828d07d4d8ad0fee1ae446'
            }
          />
        </ContainerButton> */}

        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab size="medium" color="" aria-label="add">
            <AddIcon
               onClick={() =>addToCar({name,price})}>
            </AddIcon>        
          </Fab>
        </Box>
      </ContainerCard>
    </div>
  );
}
