import React from 'react';

import { Container } from './styles';
import * as S from './styles';
import * as C from '../../../../../components';
import ScheduleImg from '../../../../../common/images/planilha.png';
import { useNavigation } from '@react-navigation/native';

export default function Schedule() {
  const navigation = useNavigation();

  return (
    <Container>
      <S.ActivityText>Agenda com atividades da sua viagem com recomendações VISA:</S.ActivityText>
      <S.ImageContainer source={ScheduleImg} />
      <S.ButtonContainer>
        <C.Button onPress={() => navigation.navigate('Chat')}>
          <C.ButtonText>Reservar Atividade</C.ButtonText>
        </C.Button>
      </S.ButtonContainer>
    </Container>
  );
}
