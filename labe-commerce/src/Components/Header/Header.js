import React from 'react'
import styled from 'styled-components'

const ContainerHeader = styled.div`
  background-color: red;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default function Header() {
  return (
    <div>
      <ContainerHeader>
        <h1>LabeCommerce</h1>
      </ContainerHeader>
    </div>
  )
}
