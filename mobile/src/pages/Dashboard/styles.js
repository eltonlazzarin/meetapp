import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 8px 0;
  flex: 1;
`;

export const DateHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin: 0 -15px;
`;

export const MeetupText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 0 20px;
  color: #fff;
`;

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 4 },
})``;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#FFF',
  size: 50,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
