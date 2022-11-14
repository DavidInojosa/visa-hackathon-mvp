import { Platform } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f4f4fa;
  padding-top: ${Platform.OS === 'android' ? '25px' : 0};
  margin: 16px;
  justify-content: center;
`;

export const HeaderArea = styled.View`
  height: ${Platform.OS === 'ios' ? `100px` : `110px`};
  width: 100%;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 0px;
  margin-top: -60px;
`;

export const NextActivities = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fdfdfd;
  margin-top: 5px;
  min-height: 86px;
  justify-content: space-between;
  width: 95%;
  border-radius: 5px;
  align-self: center;
`;

export const LeftColorTab = styled.View`
  justify-content: center;
  align-self: center;
  width: 4px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  height: 80%;
`;

export const Photo = styled.TouchableOpacity`
  height: 70px;
  width: 90px;
  margin-left: 20px;
  align-self: center;
  background-color: ${(props) => props.theme[props.color || 'light']};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SubtitleText = styled.Text`
  padding: 20px;
  align-self: flex-start;
  font-family: 'Roboto_400Regular';
  font-size: 18px;
  color: #575757;
`;
export const VerticalContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex-direction: column;
`;

export const HeaderContainer = styled.View`
  background-color: #f4f4fa;
  justify-content: center;
`;

export const TextHeaderArea = styled.View`
  background-color: #fff;
  flex-direction: column;
  align-items: center;
`;

export const BackIconContainer = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  margin-left: 3%;
  justify-content: center;
`;

export const TextRegular = styled.Text`
  font-size: 22px;
  align-self: flex-start;
  color: #575757;
  font-family: 'Roboto_400Regular';
`;

export const ActivitiesView = styled.ScrollView`
  flex: 1;
  background-color: #f1f1f1;
  min-height: 300px;
  margin-bottom: 20px;
`;

export const ViewProgressCard = styled.View`
  height: 30px;
  width: 40px;
  background-color: ${(props) => props.theme[props.color || 'concluded25']};
  border-radius: 5px;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-left: 4.6%;
`;

export const ProgressText = styled.Text`
  color: ${(props) => props.theme[props.color || 'light']};
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  text-align: center;
`;

export const ColumnTexts = styled.View`
  flex: 1;
  padding: 8px;
  align-self: center;
`;

export const ActivityText = styled.Text`
  color: ${(props) => props.theme[props.color || 'dark']};
  font-size: 14px;
  font-family: 'Roboto_700Bold';
  text-align: left;
  margin-left: 16px;
`;

export const ActivitySubtext = styled.Text`
  color: ${(props) => props.theme[props.color || 'dark']};
  font-size: 12px;
  font-family: 'Roboto_400Regular';
  text-align: center;
  margin-top: 4px;
`;

export const ImageContainer = styled.Image`
  width: 260px;
  height: 280px;
  align-self: center;
  margin-bottom: 16px;
`;

export const CardContainer = styled.View`
  margin-bottom: 8px;
`;

export const RewardsText = styled.Text`
  color: #1334CB;
  font-size: 14px;
  margin-top: 40px;
  font-family: 'Roboto_700Bold';
  text-align: center;
  text-decoration: underline;
`;

export const RewardsButton = styled.TouchableOpacity``;

export const ButtonContainer = styled.View`
  margin-top: 16px;
`;

export const CardExpectation = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
`;
export const CellInput = styled.TextInput`
  font-size: 16px;
  color: #4F61B1;
  margin-left: 16px;
  margin-right: 16px;
  font-family: 'Roboto_400Regular';
  border-width: 1px;
  border-radius: 4px;
`;

