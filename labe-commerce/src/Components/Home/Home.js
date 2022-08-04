import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import { Filtros } from '../Filtros/Filtros'
import Header from '../Header/Header'

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export function Home() {
  const [produtos, setProdutos] = useState([
    {
      imgProduto:
        'https://i.pinimg.com/564x/7b/de/e5/7bdee5a30249a67d9c65187a8417937a.jpg',
      nomeProduto: 'Dog',
      valorProduto: 200.0
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/d7/11/e0/d711e069af91fe37ef2830ca7a231ca3.jpg',
      nomeProduto: 'Dog psicopata',
      valorProduto: 130.3
    },
    {
      imgProduto:
        'https://i.pinimg.com/236x/5f/0d/14/5f0d1495d0193840c988fb70f29e892e.jpg',
      nomeProduto: 'gato',
      valorProduto: 250.56
    }
  ])

  const Cards = produtos.map((produtos, index) => {
    return (
      <Card
        key={index}
        imgProduto={produtos.imgProduto}
        nomeProduto={produtos.nomeProduto}
        valorProduto={produtos.valorProduto}
      />
    )
  })

  return (
    <div>
      <Header />
      <Filtros />
      <ContainerProdutos>{Cards}</ContainerProdutos>
    </div>
  )
}
