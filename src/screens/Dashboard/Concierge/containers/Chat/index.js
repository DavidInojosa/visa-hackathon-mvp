import React from 'react';

import { Container } from './styles';
import * as S from './styles';
import ConciergeChat from '../../../../../common/images/chat-concierge.png';
import { useNavigation } from '@react-navigation/native';

export default function Chat() {
  const navigation = useNavigation();

  return (
    <Container>
      <S.ChatContainer onPress={() => {
        navigation.navigate('MainTab');
      }}>
        <S.ImageContainer source={ConciergeChat} />
      </S.ChatContainer>
    </Container>
  );
}
