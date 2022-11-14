import React from 'react';

import { Container } from './styles';
import * as S from './styles';
import * as C from '../../../components';
import CardVisa from '../../../common/images/card.png';

export default function Offers() {

  return (
    <Container>
      <S.SubtitleText>VISA POINTS: 2312</S.SubtitleText>
      <S.CardContainer>
        <S.ImageContainer source={CardVisa} />
        <S.ActivityText>Cartão Cadastrado</S.ActivityText>
      </S.CardContainer>
      <S.CardContainer>
        <S.ImageContainer source={CardVisa} />
        <S.ActivityText>Cartão Cadastrado</S.ActivityText>
      </S.CardContainer>
      <C.Button onPress={() => null}>
        <C.ButtonText>Cadastrar novo cartão</C.ButtonText>
      </C.Button>
      <S.RewardsButton>
        <S.RewardsText>VISA Rewards | Promoções</S.RewardsText>
      </S.RewardsButton>
    </Container>
  );
}
