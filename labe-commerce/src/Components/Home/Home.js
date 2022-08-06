import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import { Filtros } from '../Filtros/Filtros'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { ContainerProdutos, Div } from './styled'
// import {Data} from '../../Data'
export function Home() {
  const [query, setQuery] = useState('')
  const [orderParam, setOrderParam] = useState('')
  const [valMax, setValMax] = useState('')
  const [valMin, setValMin] = useState('')
  const [produtos, setProdutos] = useState([
    {
      imgProduto:
        'https://i.pinimg.com/564x/0b/ec/1f/0bec1fcce29af6a8f2d7c6039e8fe96e.jpg',
      nomeProduto: 'Satelite espacial Labe-14x',
      valorProduto: 79.99
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/8c/67/90/8c67904606f4aedce9a30d04683f9ebe.jpg',
      nomeProduto: 'Satélite Labe-67',
      valorProduto: 200000.0
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/da/cf/32/dacf32e08c108903abf04532fa3b7e7a.jpg',
      nomeProduto: 'Moleton Nasa branco',
      valorProduto: 79.99
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/14/5c/40/145c40af13bef6d7cb300c38556ac946.jpg',
      nomeProduto: 'Moleton Nasa preto',
      valorProduto: 79.99
    },
    {
      imgProduto:
        ' https://i.pinimg.com/564x/a2/24/b6/a224b6f8f8639936fe33d73fd21d1c4e.jpg',
      nomeProduto: 'Moleton Nasa bege',
      valorProduto: 84.99
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/61/2e/d3/612ed39d64801ca3d0f7a39a511c2d52.jpg',
      nomeProduto: 'Camisa Nasa branca',
      valorProduto: 49.99
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/2b/50/8f/2b508f9ee45fb80f1e77ea5250ac32d4.jpg',
      nomeProduto: 'Camisa Nasa preta',
      valorProduto: 49.99
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/3c/7c/10/3c7c1008b33bbe0c76eb2d91c2a0934b.jpg',
      nomeProduto: 'Fragmento de meteorito',
      valorProduto: 999.99
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/5c/20/b7/5c20b7cb92efb16fa4876ccab716df16.jpg',
      nomeProduto: 'Capsula espacial',
      valorProduto: 1000000.0
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/c4/46/96/c4469651847594b48f2ea07896ad47c4.jpg',
      nomeProduto: 'Projeto de um ónibus Espacial',
      valorProduto: 750049.3
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/26/39/5a/26395a9ca6c00b7ff03431e08b0d84a0.jpg',
      nomeProduto: 'Viagem para Lua',
      valorProduto: 200000.0
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/7b/39/ef/7b39ef2a94a38c06ae4da5a406a693a2.jpg',
      nomeProduto: 'Viagem para Marte',
      valorProduto: 200000.0
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/d6/ab/a4/d6aba4145ead35556adf90c1589ca2f3.jpg',
      nomeProduto: 'Viagem para Plutão',
      valorProduto: 200000.0
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/7d/49/85/7d49858cc7ca1dc0b0fb5e0075cb4119.jpg',
      nomeProduto: 'Viagem pela Galaxia',
      valorProduto: 150000.0
    },
    {
      imgProduto:
        'https://i.pinimg.com/564x/77/10/ee/7710eee83b399bae50e4451eae545ca4.jpg',
      nomeProduto: 'Passeio pela Estação Espacial Internacional',
      valorProduto: 250000.0
    }
  ])

  const Cards = produtos
    .filter(
      produtos =>
        query === '' || produtos.nomeProduto.toLowerCase().includes(query)
    )
    .filter(produtos => valMin === '' || produtos.valorProduto >= valMin)
    .filter(produtos => valMax === '' || produtos.valorProduto <= valMax)
    .sort((a, b) =>
      orderParam === '' ||
      (orderParam === 'asc' && a.valorProduto > b.valorProduto)
        ? 1
        : -1
    )
    .sort((a, b) =>
      orderParam === '' ||
      (orderParam === 'desc' && a.valorProduto > b.valorProduto)
        ? -1
        : 1
    )

    .map((produtos, index) => {
      return (
        <Card
          key={index}
          imgProduto={produtos.imgProduto}
          nomeProduto={produtos.nomeProduto}
          valorProduto={produtos.valorProduto}
        />
      )
    })

  const handleQueryInput = event => {
    setQuery(event.target.value)
  }

  const handleOrderParam = event => {
    setOrderParam(event.target.value)
  }

  return (
    <Div>
      <Header />
      <Filtros
        handleQueryInput={handleQueryInput}
        handleOrderParam={handleOrderParam}
        states={{ query, orderParam }}
        valMin={valMin}
        setValMin={setValMin}
        valMax={valMax}
        setValMax={setValMax}
      />

      <ContainerProdutos>{Cards}</ContainerProdutos>
      <Footer />
    </Div>
  )
}
