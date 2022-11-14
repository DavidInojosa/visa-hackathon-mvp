import React, { useState } from 'react';

import { Container } from './styles';
import * as S from './styles';
import * as C from '../../../components';

import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
export default function Concierge() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const navigation = useNavigation();

  return (
    <Container>
      <S.TextRegular>Escolha o motivo do contato com o seu Concierge:</S.TextRegular>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="VISA PAY" value="visapay" />
        <Picker.Item label="Dúvidas" value="duvidas" />
        <Picker.Item label="Agendamento de Serviço" value="servicos" />
        <Picker.Item label="Seguro" value="seguro" />
      </Picker>
      <S.ButtonContainer>
        <C.Button onPress={() => {
          navigation.navigate('Chat');
        }}>
          <C.ButtonText>Prosseguir</C.ButtonText>
        </C.Button>
      </S.ButtonContainer>
    </Container>
  );
}
