import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: linear-gradient(-180deg, white, #0d2c5b);
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;

  img {
    width: 210px;
    height: 52px;
    padding: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 1);
      }
    }

    hr {
      margin-top: 10px;
    }

    span {
      color: #e20000;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #fa923f;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#fa923f')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
