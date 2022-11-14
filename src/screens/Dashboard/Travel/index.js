import React from 'react';

import { Container } from './styles';
import * as S from './styles';
import * as C from '../../../components';
import { useNavigation } from '@react-navigation/native';

export default function Offers() {
  const navigation = useNavigation();

  return (
    <Container>
      <S.ActivityText>Insira seu destino:</S.ActivityText>
      <S.CellInput
        placeholder="v"
        placeholderTextColor="#f4f4fa"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
      />
      <S.ButtonContainer>
        <C.Button onPress={() => navigation.navigate('Objective')}>
          <C.ButtonText>Prosseguir</C.ButtonText>
        </C.Button>
      </S.ButtonContainer>
    </Container>
  );
}
