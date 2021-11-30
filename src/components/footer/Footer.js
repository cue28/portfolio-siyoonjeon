import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer () {
  return (
    <FooterWrapper>
      Copyrightⓒ2021 Siyoon Jeon All rights reserved.
    </FooterWrapper>
  );
}

export default Footer;
