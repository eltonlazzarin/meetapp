import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: #fff;
      font-weight: bold;
      font-size: 32px;
    }

    aside {
      display: flex;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      margin: 5px 0 0;
      height: 44px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      svg {
        margin-right: 5px;
      }

      + button {
        margin-left: 10px;
      }

      &.edit {
        background: #4dbaf9;
        &:hover {
          background: ${darken(0.08, '#4DBAF9')};
        }
      }

      &.cancel {
        background: #d44059;
        &:hover {
          background: ${darken(0.08, '#d44059')};
        }
      }
    }
  }
`;

export const Meetup = styled.div`
  margin-top: 40px;
  max-width: 900px;
  display: flex;
  flex-direction: column;

  img {
    align-self: center;
    width: 100%;
    height: 300px;
    margin-bottom: 15px;
    border-radius: 4px;
  }

  p {
    font-size: 16px;
    color: #fff;
    line-height: 32px;
    margin-bottom: 20px;
  }

  div {
    font-size: 14px;
    color: #ffffff;
    opacity: 0.6;
    display: flex;
    flex-direction: row;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 60px;
    }

    svg {
      margin-right: 5px;
    }
  }
`;
