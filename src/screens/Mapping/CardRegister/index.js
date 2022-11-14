import React from 'react';

import { Container } from './styles';
import * as S from './styles';
import * as C from '../../../components';
import CardVisa from '../../../common/images/card.png';
import { useNavigation } from '@react-navigation/native';

export default function CardRegister() {
  const navigation = useNavigation();

  return (
    <Container>
      <S.ImageContainer source={CardVisa} />
      <S.ButtonContainer>

        <C.Button onPress={() => {
          navigation.navigate('MainTab');
        }}>
          <C.ButtonText>Cadastrar cartão</C.ButtonText>
        </C.Button>
      </S.ButtonContainer>
    </Container>
  );
}
