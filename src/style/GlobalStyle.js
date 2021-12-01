import styled, { createGlobalStyle } from 'styled-components';
import pointer from '../images/2.png';

export const GlobalStyle = createGlobalStyle`
     * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      border:none;
      background-color: #F0F1ED;
      font-family: -apple-system,'Noto Sans KR', sans-serif;
      line-height: 1.5;
      cursor: url(${pointer}), default;
      scroll-behavior: smooth;
      }
`;

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  min-width: 375px;
  border: none;
  padding-top:70px;
`;
