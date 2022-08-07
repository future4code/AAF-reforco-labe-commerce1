import React, { useState } from 'react'
import Card from '../Card/Card'
import { Filtros } from '../Filtros/Filtros'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { ContainerProdutos, Div } from './styled'


export function Home({valores}) {
  const [query, setQuery] = useState('')
  const [orderParam, setOrderParam] = useState('')
  const [valMax, setValMax] = useState('')
  const [valMin, setValMin] = useState('')
  const {carrinho,setCarrinho} = valores
  const [valorTotal, setValorTotal] = useState(0);
  const [listaDeProdutos, setlistaDeProdutos] = useState([
    {
      id: 1,
      img: "https://i.pinimg.com/564x/0b/ec/1f/0bec1fcce29af6a8f2d7c6039e8fe96e.jpg",
      name: "Satelite espacial Labe-14x",
      price: 79.99,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/8c/67/90/8c67904606f4aedce9a30d04683f9ebe.jpg",
      name: "Satélite Labe-67",
      price: 200000.0,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/da/cf/32/dacf32e08c108903abf04532fa3b7e7a.jpg",
      name: "Moleton Nasa branco",
      price: 79.99,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/564x/14/5c/40/145c40af13bef6d7cb300c38556ac946.jpg",
      name: "Moleton Nasa preto",
      price: 79.99,
    },
    {
      id: 5,
      img: " https://i.pinimg.com/564x/a2/24/b6/a224b6f8f8639936fe33d73fd21d1c4e.jpg",
      name: "Moleton Nasa bege",
      price: 84.99,
    },
    {
      id: 6,
      img: "https://i.pinimg.com/564x/61/2e/d3/612ed39d64801ca3d0f7a39a511c2d52.jpg",
      name: "Camisa Nasa branca",
      price: 49.99,
    },
    {
      id: 7,
      img: "https://i.pinimg.com/564x/2b/50/8f/2b508f9ee45fb80f1e77ea5250ac32d4.jpg",
      name: "Camisa Nasa preta",
      price: 49.99,
    },
    {
      id: 8,
      img: "https://i.pinimg.com/564x/3c/7c/10/3c7c1008b33bbe0c76eb2d91c2a0934b.jpg",
      name: "Fragmento de meteorito",
      price: 999.99,
    },
    {
      id: 9,
      img: "https://i.pinimg.com/564x/5c/20/b7/5c20b7cb92efb16fa4876ccab716df16.jpg",
      name: "Capsula espacial",
      price: 1000000.0,
    },
    {
      id: 10,
      img: "https://i.pinimg.com/564x/c4/46/96/c4469651847594b48f2ea07896ad47c4.jpg",
      name: "Projeto de um ónibus Espacial",
      price: 750049.3,
    },
    {
      id: 11,
      img: "https://i.pinimg.com/564x/26/39/5a/26395a9ca6c00b7ff03431e08b0d84a0.jpg",
      name: "Viagem para Lua",
      price: 200000.0,
    },
    {
      id: 12,
      img: "https://i.pinimg.com/564x/7b/39/ef/7b39ef2a94a38c06ae4da5a406a693a2.jpg",
      name: "Viagem para Marte",
      price: 200000.0,
    },
    {
      id: 13,
      img: "https://i.pinimg.com/564x/d6/ab/a4/d6aba4145ead35556adf90c1589ca2f3.jpg",
      name: "Viagem para Plutão",
      price: 200000.0,
    },
    {
      id: 14,
      img: "https://i.pinimg.com/564x/7d/49/85/7d49858cc7ca1dc0b0fb5e0075cb4119.jpg",
      name: "Viagem pela Galaxia",
      price: 150000.0,
    },
    {
      id: 15,
      img: "https://i.pinimg.com/564x/77/10/ee/7710eee83b399bae50e4451eae545ca4.jpg",
      name: "Passeio pela Estação Espacial Internacional",
      price: 250000.0,
    },
  ]);
 const addToCar = (produto) => {
  console.log(carrinho)
   const attCar = [...carrinho, produto];
   setCarrinho(attCar);
 };
  const Cards = listaDeProdutos
    .filter(
      listaDeProdutos =>
        query === '' || listaDeProdutos.name.toLowerCase().includes(query)
    )
    .filter(listaDeProdutos => valMin === '' || listaDeProdutos.price >= valMin)
    .filter(listaDeProdutos => valMax === '' || listaDeProdutos.price <= valMax)
    .sort((a, b) =>
      orderParam === '' ||
      (orderParam === 'asc' && a.price > b.price)
        ? 1
        : -1
    )
    .sort((a, b) =>
      orderParam === '' ||
      (orderParam === 'desc' && a.price > b.price)
        ? -1
        : 1
    )

    .map((listaDeProdutos, index,) => {
      return (
        <Card
          key={index}
          id={listaDeProdutos.id}
          img={listaDeProdutos.img}
          name={listaDeProdutos.name}
          price={listaDeProdutos.price}
          addToCar={addToCar}
        />
      );
    })
    
      const handleQueryInput = event => {
        setQuery(event.target.value)
      }
    
      const handleOrderParam = event => {
        setOrderParam(event.target.value)
      }
    // const produto = listaDeProdutos.map((item) => {
    //   return <Card produto={item} addToCar={addToCar} />;
    // });

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
  );
}
