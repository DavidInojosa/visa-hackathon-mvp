import React, { useState } from 'react';
import Visa from '../../common/images/visa-white-logo.png';

import * as S from './styles';

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <S.TabArea>
      <S.TabItem onPress={() => goTo('Home')}>
        {
          state.index === 0 ? (
            <></>
          ) : (
            <></>
          )}
        <S.TabItemText>CONHEÇA</S.TabItemText>
      </S.TabItem>
      < S.TabItem onPress={() => goTo('Concierge')}>
        {
          state.index === 1 ? (
            <></>
          ) : (
            <></>
          )}
        <S.TabItemText>CONCIERGE</S.TabItemText>
      </S.TabItem>


      <S.TabItem onPress={() => goTo('VISAPAY')}>
        <S.TabItemCenter onPress={() => goTo('VISAPAY')}>

          <S.ImageContainer source={Visa} />
        </S.TabItemCenter>
        <S.TabItemTextCenter>SERVIÇOS</S.TabItemTextCenter>
      </S.TabItem>
      <S.TabItem onPress={() => goTo('Travel')}>
        {
          state.index === 3 ? (
            <></>
          ) : (
            <></>
          )}
        <S.TabItemText>VIAGEM</S.TabItemText>
      </S.TabItem>
      < S.TabItem onPress={() => goTo('Configuration')}>
        {
          state.index === 4 ? (
            <></>
          ) : (
            <></>
          )}
        <S.TabItemText>CONFIGURA...</S.TabItemText>
      </S.TabItem>
    </S.TabArea>
  );
};
