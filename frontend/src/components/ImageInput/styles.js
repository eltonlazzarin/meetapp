import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  width: 100%;

  label {
    cursor: pointer;
    height: 300px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.4);
    color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      &:hover {
        opacity: 0.7;
      }

      strong {
        font-size: 20px;
      }
    }

    img {
      height: 100%;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
