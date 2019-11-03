import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;

  header {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: #fff;
      font-weight: bold;
      font-size: 32px;
    }
  }

  ul {
    margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }

  h3 {
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    padding: 20px;

    margin: auto;
    margin-top: 25px;

    display: flex;
    align-items: center;

    width: 60%;
    height: 62px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  margin: 5px 0 0;
  height: 44px;
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

  svg {
    margin-right: 10px;
  }
`;

export const Meetup = styled.li`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 62px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: scale(1.1);
  }

  opacity: ${props => (props.past ? 0.5 : 1)};

  strong {
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    span {
      color: #999;
      font-weight: bold;
    }

    svg {
      margin-left: 10px;
    }
  }
`;
