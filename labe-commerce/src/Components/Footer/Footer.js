import React from 'react'
import {
  ContainerFooter,
  IconFooter,
  ContainerIcons,
  ContainerInfos,
  Infos,
  LojaApps,
  IconsApps,
  ContainerCash,
  Bandeiras,
  ContainerInfos2,
  ContainerBandeiras,
  SocialMeadiaIcon,
  ContainerIconApp
} from './Styled'

export default function Footer() {
  return (
    <ContainerFooter>
      <ContainerInfos>
        <Infos>Fale conosco</Infos>
        <Infos>SAC</Infos>
        <Infos>Sobre nós</Infos>
      </ContainerInfos>

      <ContainerInfos2>
        <Infos>Endereço: Av. Virtual Lucinda, 374, SP</Infos>
        <Infos>Contato: 9 99 9999-5555</Infos>
        <Infos>E-mail: LabeCommerce@commerceInc.com</Infos>
      </ContainerInfos2>
      <ContainerCash>
        <div>
          <Infos>Aceitamos</Infos>
        </div>
        <ContainerBandeiras>
          <Bandeiras
            src={'https://cdn-icons-png.flaticon.com/512/121/121877.png'}
          />
          <Bandeiras
            src={
              'https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135018-mastercard_82253.png'
            }
          />
        </ContainerBandeiras>
      </ContainerCash>
      <ContainerIcons>
        <div>
          <Infos>Redes Sociais</Infos>
        </div>
        <SocialMeadiaIcon>
          <IconFooter
            src={
              'https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1659803900~hmac=e70a4c506aa86b6de4d80918f22a4d82'
            }
          />
          <IconFooter
            src={
              'https://cdn-icons.flaticon.com/png/512/3955/premium/3955024.png?token=exp=1659803702~hmac=39080cf821da009529189c15857649cf'
            }
          />
        </SocialMeadiaIcon>
      </ContainerIcons>
      <LojaApps>
        <div>
          <Infos>Baixe em</Infos>
        </div>
        <ContainerIconApp>
          <IconsApps
            src={'https://cdn-icons-png.flaticon.com/512/300/300218.png'}
          />
          <IconsApps
            src={
              'https://cdn-icons.flaticon.com/png/512/2504/premium/2504884.png?token=exp=1659806138~hmac=ecc0208dc56216ffa3a69c5f018c93ee'
            }
          />
        </ContainerIconApp>
      </LojaApps>
    </ContainerFooter>
  )
}
