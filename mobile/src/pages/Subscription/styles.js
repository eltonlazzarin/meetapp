import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 8px 0;
  flex: 1;
`;

export const MeetupText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 0 20px;
  color: #fff;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 4 },
})``;
