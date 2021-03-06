import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;

function Footer () {
  return (
    <FooterWrapper>
      Copyrightâ“’2021 Siyoon Jeon All rights reserved.
    </FooterWrapper>
  );
}

export default Footer;
