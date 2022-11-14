import styled from 'styled-components/native';

export const TabArea = styled.View`
  height: 70px;
  background-color: #FCC014;
  flex-direction: row;
  padding-left: 4px;
  padding-right: 4px;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #1532D5;
  border-radius: 35px;
  margin-top: -70px;
`;

export const TabItemTextCenter = styled.Text`
  margin-top: 8px;
  align-self: flex-start;
  font-family: 'Roboto_700Bold';
  font-size: 12px;
  color: #575757;
  margin-left: 8px;
`;
export const TabItemText = styled.Text`
  margin-top: 8px;
  align-self: flex-start;
  font-family: 'Roboto_700Bold';
  font-size: 12px;
  color: #575757;
`;

export const Row = styled.View`
  margin-left: 3%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const ContainerNumber = styled.View`
  height: 22px;
  width: 22px;
  background-color: #878787;
  margin-left: -10px;
  margin-top: -20px;
  justify-content: center;
  align-items: center;
  border-radius: 100;
`;

export const ImageContainer = styled.Image`
  width: 50px;
  height: 16px;
`;
