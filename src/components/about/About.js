import React from 'react';
import styled from 'styled-components';

import { Container } from '../../style/GlobalStyle';
import pointer from '../../images/1.png';
import profile from '../../images/profile.jpg';

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 90vh;
  flex-direction: column;
  margin: 0 115px;
  @media ${(props) => props.theme.mobile} {
    margin: 0 20px;
  }
`;

const AboutTitle = styled.h1`
  font-size: 20px;
  @media ${(props) => props.theme.mobile} {
    font-size: 15px;
  }
`;

const ProfileImg = styled.img`
  width: 200px;
  margin-bottom:10px;
  @media ${(props) => props.theme.mobile} {
    width: 150px;
  }
`;

const Introduce = styled.p`
  margin-bottom: 20px;
  @media ${(props) => props.theme.mobile} {
    font-size: 13px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom:10px;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right:30px;
`;

const Skill = styled.span`
  margin-right: 10px;
  font-size: 17px;
  font-weight: 400;
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-right:30px;
`;

const Education = styled.span`
  margin-right: 10px;
  font-size: 17px;
  font-weight: 400;
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;

const ExperiencesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Experiences = styled.span`
  margin-right: 10px;
  font-size: 17px;
  font-weight: 400;
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;

const Link = styled.a`
  font-size: 25px;
  font-weight: 400;
  text-decoration: underline;
  border: none;
  color: black;
  margin-right:10px;
  cursor: url(${pointer}), default;
  :hover{
    color:gray;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
  }
`;

function About () {
  return (
    <Container id='about'>
      <AboutWrapper>
        <ProfileImg src={profile} alt='profileimg' />
        <div>
          <RowContainer>
            <Link href='https://github.com/cue28'>Github</Link>
            <Link href='https://heycue.tistory.com/'>Blog</Link>
          </RowContainer>
          <Introduce>
            ????????? ????????? ?????? ???????????? ?????? ???????????? ?????????, '?????? ????????? ???????????? ????????????'??? ???????????? ????????? ????????????.
            <br />
            ????????? ??? ???????????????, ???????????? ??????????????? ??????????????? ?????????????????? ?????? ????????? ???????????????.
            <br />
            ?????? ??????????????? ????????? ?????????, ????????? ????????? ???????????? ????????????.
          </Introduce>
          <RowContainer>

            <SkillContainer>
              <AboutTitle>Skills</AboutTitle>
              <Skill>HTML</Skill>
              <Skill>Styled-Component</Skill>
              <Skill>JavaScript</Skill>
              <Skill>TypeScript</Skill>
              <Skill>React</Skill>
              <Skill>Redux</Skill>
              <Skill>Git</Skill>
            </SkillContainer>
            <EducationContainer>
              <AboutTitle>Education</AboutTitle>
              <Education>Dream Coding - TypeScript & OOP ??????</Education>
              <Education>
                ?????????????????? (Code States) Immersive-course 30???
              </Education>
              <Education>??????????????? ?????????????????? ??????</Education>
            </EducationContainer>
            <ExperiencesContainer>
              <AboutTitle>works & experiences</AboutTitle>
              <Experiences>?????????????????? ????????????</Experiences>
              <Experiences>???????????? ????????? ????????????</Experiences>
              <Experiences>
                ????????????????? ?????? (????????? ????????????, ????????? ?????? ??? ??????)
              </Experiences>
            </ExperiencesContainer>
          </RowContainer>
        </div>
      </AboutWrapper>
    </Container>
  );
}

export default About;
