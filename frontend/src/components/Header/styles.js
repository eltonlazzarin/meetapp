import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #121212;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 85px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    img {
      height: 40px;
      width: 40px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-right: 15px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
      font-weight: bold;
    }
  }
`;

export const Button = styled.button`
  height: 38px;
  width: 70px;
  background: #d44059;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#D44059')};
  }
`;
