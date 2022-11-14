import styled from 'styled-components/native';

export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`;

export const CellInputArea = styled.View`
  width: 100%;
  height: 50px;
  background-color: #4F61B1;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const CellInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
  font-family: 'Roboto_400Regular';
`;

export const CustomButton = styled.TouchableOpacity`
  height: 50px;
  background-color: ${(props) => props.theme[props.color || 'primary']};
  border-radius: 10px;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_700Bold';
  color: ${(props) => props.theme[props.color || 'light']};
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  height: 30px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme[props.color || 'light']};
  font-family: 'Roboto_400Regular';
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme[props.color || 'primary']};
  font-family: 'Roboto_700Bold';
  margin-left: 5px;
`;

export const TextError = styled.Text`
  color: ${(props) => props.theme[props.color || 'error']};
  opacity: 0.99;
  font-size: 16px;
  margin-top: -10px;
  align-self: flex-start;
  margin-left: 30px;
  padding: 2px;
  border-radius: 5px;
  font-family: 'Roboto_400Regular';
`;

export const ImageContainer = styled.Image`
  width: 320px;
  height: 184px;
  align-self: center;
`;
