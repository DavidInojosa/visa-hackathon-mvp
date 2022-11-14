import React from 'react';

import { Container } from './styles';
import * as S from './styles';
import * as C from '../../../../../components';
import Expects from '../../../../../common/images/expects.png';
import { useNavigation } from '@react-navigation/native';

export default function Expectations() {
  const navigation = useNavigation();

  return (
    <Container>
      <S.ActivityText>Expectativa de gastos total por pessoa:</S.ActivityText>
      <S.ImageContainer source={Expects} />
      <S.ActivityText>Início da Viagem:</S.ActivityText>
      <S.CellInput
        placeholder="31/12/2022"
        placeholderTextColor="#c1c1c1"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
      />
      <S.ActivityText>Fim da viagem:</S.ActivityText>
      <S.CellInput
        placeholder="07/01/2023"
        placeholderTextColor="#c1c1c1"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
      />
      <S.ButtonContainer>
        <C.Button onPress={navigation.navigate('Preferences')
        }>
          <C.ButtonText>Prosseguir</C.ButtonText>
        </C.Button>
      </S.ButtonContainer>
    </Container >
  );
}
