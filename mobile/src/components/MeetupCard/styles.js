import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  height: 360px;
`;

export const Image = styled.Image.attrs({
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
})`
  height: 150px;
  width: 100%;
  margin-bottom: 15px;
`;

export const Content = styled.View`
  flex: 1;
  height: 200px;
  padding: 0 20px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Details = styled.View`
  justify-content: center;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  color: #999;
  margin-left: 3px;
`;

export const CardButton = styled(Button)`
  margin-top: 25px;
`;
