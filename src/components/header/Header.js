import React from 'react';
import styled from 'styled-components';

import pointer from '../../images/1.png';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-width: 375px;
  border: none;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  height:70px;
  position:fixed;
  top:0;
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding:0 20px;
  z-index:100;
`;

const HeaderLogo = styled.h4`
  font-family: "Adobe Caslon Pro",Georgia,serif;
  font-weight:400;
`;

const HeaderMenu = styled.ul`
  display: flex;
`;

const HeaderItem = styled.li`
   font-family: "Adobe Caslon Pro",Georgia,serif;
   padding: 0 30px;
  list-style:none;
`;

const HeaderItemLink = styled.a`
   font-family: "Adobe Caslon Pro",Georgia,serif;
   text-decoration:none;
   color:black;
   cursor: url(${pointer}), default;
`;

function Header () {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogo>
          <HeaderItemLink href='#home'>portfolio - 2021</HeaderItemLink>
        </HeaderLogo>
        <HeaderMenu>
          <HeaderItem>
            <HeaderItemLink href='#projects'>projects</HeaderItemLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemLink href='#about'>about</HeaderItemLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemLink href='mailto:siyoonjeonn@gmail.com'>contact</HeaderItemLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemLink href='https://drive.google.com/file/d/1dlKzGIy_QnJrCWi0PJBVB1Q9lbTk43CU/view'>Resume</HeaderItemLink>
          </HeaderItem>
        </HeaderMenu>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
