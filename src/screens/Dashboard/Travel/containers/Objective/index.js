import React from 'react';

import { Container } from './styles';
import * as S from './styles';
import * as C from '../../../../../components';
import ObjectiveImg from '../../../../../common/images/objective.png';
import { useNavigation } from '@react-navigation/native';

export default function Objective() {
  const navigation = useNavigation();

  return (
    <Container>
      <S.ActivityText>Objetivo da Viagem:</S.ActivityText>
      <S.ImageContainer source={ObjectiveImg} />
      <S.ButtonContainer>
        <C.Button onPress={() => navigation.navigate('Expectations')}>
          <C.ButtonText>Prosseguir</C.ButtonText>
        </C.Button>
      </S.ButtonContainer>
    </Container>
  );
}
