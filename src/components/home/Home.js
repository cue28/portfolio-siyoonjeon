import React from 'react';
import styled from 'styled-components';

import { Container } from '../../style/GlobalStyle';

const Title = styled.h2`
  font-family: "Adobe Caslon Pro",Georgia,serif;
  font-size:70px;
  line-height:100px;
  text-transform:capitalize;
  white-space : nowrap;
  margin: 0;
  position:absolute;
  color: transparent;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  ::before{
    content:'Frontend Developer. Siyoon Jeon.';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
    color: black;
    border-right: 3px solid black;
    animation: typing 10s steps(30) infinite;
  }
  @keyframes typing {
    0%{
      width:0%;
    }
    50%{
      width:100%;
    }
    100%{
      width:0%;
    }
  }
`;

function Home () {
  return (
    <Container id='home'>
      <Title>Frontend Developer. Siyoon Jeon</Title>
    </Container>
  );
}

export default Home;
