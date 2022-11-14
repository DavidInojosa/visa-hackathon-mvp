import React from 'react';

import { Container } from './styles';
import * as S from './styles';
import * as C from '../../../../../components';
import ExpectsLazer from '../../../../../common/images/expectslazer.png';
import { useNavigation } from '@react-navigation/native';

export default function Preferences() {
  const navigation = useNavigation();

  return (
    <Container>
      <S.ActivityText>Preferências culinárias(japonesa, comidas locais, etc):</S.ActivityText>
      <S.ImageContainer source={ExpectsLazer} />
      <S.ActivityText>Preferências de eventos:</S.ActivityText>
      <S.ImageContainer source={ExpectsLazer} />
      <S.ButtonContainer>
        <C.Button onPress={() => navigation.navigate('Schedule')}>
          <C.ButtonText>Prosseguir</C.ButtonText>
        </C.Button>
      </S.ButtonContainer>
    </Container>
  );
}
