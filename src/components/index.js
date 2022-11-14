import styled from 'styled-components';
import { Dimensions, Platform } from 'react-native';

export const Box = styled.SafeAreaView`
  flex: 1;
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};

  height: ${Dimensions.get('window').height};
  width: ${Dimensions.get('window').width};

  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  padding-top: ${Platform.OS === 'android' ? '24px' : '0px'};
  margin: ${(props) => props.spacing || 0};
  border-radius: ${(props) => (props.radius ? '3px' : '0px')};
  border: ${(props) => props.border || 'none'};

  background: ${(props) =>
    props.theme[props.background] || props.background || 'transparent'};
`;

export const Button = styled.TouchableOpacity`
  height: ${(props) => props.height || '50px'};
  width: ${(props) => props.width || '80%'};
  background: ${(props) =>
    props.theme[props.background] || props.background || '#1334CB'};
  border-radius: ${(props) => (props.radius ? '10px' : '5px')};
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: ${(props) => (props.small ? '14px' : props.big ? '22px' : '18px')};
  font-family: 'Roboto_700Bold';
  color: #fff;
`;

export const TextError = styled.Text`
  color: ${(props) => props.theme[props.color || 'error']};
  font-size: 16px;
  margin-top: -10px;
  align-self: flex-start;
  margin-left: 30px;
  padding: 2px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background-color: #f4f4fa;
  flex: 1;
  width: 100%;
`;

export const IconButton = styled.TouchableOpacity`
  width: ${(props) => props.width || '32px'};
  height: ${(props) => props.height || '32px'};
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
