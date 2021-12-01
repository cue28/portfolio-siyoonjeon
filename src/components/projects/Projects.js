import React from 'react';
import styled from 'styled-components';

import pointer from '../../images/1.png';
import issueHere from '../../images/issueHere.gif';
import bucketbingo from '../../images/bucketbingo.gif';
import codehigh from '../../images/codehigh.gif';

const ProjectsContainer = styled.section`
  width: 100%;
  height: 100%;
  min-width: 375px;
  border: none;
  padding-top:70px;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  height:auto;
  flex-direction:column;
`;

const Project = styled.div`
  background-color:white;
  width:1200px;
  height:auto;
  display: flex;
  justify-content:space-between;
  margin-bottom:20px;
  padding:25px;
  border-radius:10px;
  @media ${(props) => props.theme.mobile} {
    width:450px;
    flex-direction:column-reverse;
    justify-content:center;
    align-items:center;
    padding:15px;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction:column;
  background:none;
  margin-left:20px;
`;

const ProjectSubTitle = styled.div`
  font-size:13px;
  background:none;
  text-align:left;
  font-family: "Avenir Next", Helvetica, sans-serif;
  padding-bottom:10px;
`;

const ProjectImg = styled.img`
  width:350px;
  height:200px;
  margin:0 50px;
  @media ${(props) => props.theme.mobile} {
    margin-bottom:10px;
  }
`;

const ProjectTitle = styled.h3`
  background:none;
  text-align:left;
  font-family: "Avenir Next", Helvetica, sans-serif;
  font-weight:300;
  font-size:30px;
  margin-bottom:5px;
  text-decoration:underline;
  @media ${(props) => props.theme.mobile} {
    font-size:25px;
  }
`;

const ProjectCategory = styled.div`
  background:none;
  text-align:left;
  font-family: "Avenir Next", Helvetica, sans-serif;
  font-weight:300;
  font-size:20px;
  margin-bottom:5px;
  @media ${(props) => props.theme.mobile} {
    font-size:15px;
  }
`;

const ProjectStacks = styled.p`
  background:none;
  font-family: "Avenir Next", Helvetica, sans-serif;
  font-weight:300;
  margin-top:5px;
  @media ${(props) => props.theme.mobile} {
    font-size:13px;
  }
`;

const ProjectContents = styled.p`
  background:none;
  line-height:25px;
  font-family: 'Noto Sans KR';
  @media ${(props) => props.theme.mobile} {
    font-size:13px;
  }
`;

const ProjectLink = styled.a`
   text-decoration:none;
   background:none;
   color:black;
   cursor: url(${pointer}), default;
   :hover{
    color:gray;
    }
`;

function Projects () {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsWrapper>
        <Project>
          <ProjectContainer>
            <ProjectSubTitle>2021 - Toy project (solo)</ProjectSubTitle>
            <ProjectTitle><ProjectLink href='https://github.com/cue28/issueHere'>Issue Here</ProjectLink></ProjectTitle>
            <ProjectContents>
              Repository 검색 및 issue 모아보기 서비스 <br />
              <br />
              <ProjectCategory>feature</ProjectCategory>
              1. 검색창에 Repository명을 입력해서 Repository를 검색할 수 있습니다.  <br />
              2. 검색된 Public Repository를 최대 4개까지 등록할 수 있습니다. <br />
              3. 등록된 Repository를 삭제할 수 있습니다. <br />
              4. 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있습니다. <br />
              <br />
              <ProjectCategory>Works</ProjectCategory>
              · Semistandard 및 redux-saga 환경 설정<br />
              · Github API 사용 <br />
              · 라이브러리없이 페이지네이션 및 무한 스크롤 구현 <br />
              · 좋은 사용자 경험을 위한 자동 Notice 구현 <br />
              <br />
              <ProjectCategory>Stacks</ProjectCategory>
              <ProjectStacks>TypeScript, Styled-components, React, Redux</ProjectStacks>
            </ProjectContents>
          </ProjectContainer>
          <ProjectImg src={issueHere} alt='issuehere' />
        </Project>
        <Project>
          <ProjectContainer>
            <ProjectSubTitle>2021 - Toy project ( 진행중 ) </ProjectSubTitle>
            <ProjectTitle><ProjectLink href='https://bucketbingo.world/'>Bucket Bingo</ProjectLink></ProjectTitle>
            <ProjectContents>
              빙고 게임을 활용한 목표 달성 웹 서비스 <br />
              <br />
              <ProjectCategory>feature</ProjectCategory>
              1. 빙고는 3 * 3으로 제작이 가능합니다.<br />
              2. 빙고의 한 칸을 사용자가 이번년도 이루고 싶은 목표로 설정할 수 있습니다.<br />
              3. 달성도를 10단위로 체크하며, 본인 버킷 리스트의 달성도를 확인 가능합니다.<br />
              4. 커뮤니티 기능을 활용하여 전체 랭킹을 확인할 수 있습니다.<br />
              <br />
              <ProjectCategory>Works</ProjectCategory>
              · redux-toolkit 환경 설정  <br />
              · 풀 스크린 슬라이드, 드롭 다운 구현  <br />
              · 웹, 모바일 뷰 toggle형 사이드바 반응형 구현<br />
              · 링크 공유 기능, 지도 API 위치 표시 구현 <br />
              · Bucket 클릭 시, 목표 및 달성도 설정  <br />
              <br />
              <ProjectCategory>Stacks</ProjectCategory>
              <ProjectStacks>TypeScript, SCSS, React, Redux</ProjectStacks>
            </ProjectContents>
          </ProjectContainer>
          <ProjectImg src={bucketbingo} alt='bucketbingo' />
        </Project>
        <Project>
          <ProjectContainer>
            <ProjectSubTitle>2021 - Team project</ProjectSubTitle>
            <ProjectTitle><ProjectLink href='https://codehigh.club/'>Code High</ProjectLink></ProjectTitle>
            <ProjectContents>
              알고리즘 학습을 돕고 더 나은 코드를 작성할 수 있도록 돕는 코드 저장 플랫폼 <br />
              <br />
              <ProjectCategory>feature</ProjectCategory>
              1. 알고리즘 문제 풀이 코드를 업로드할 수 있습니다.<br />
              2. 칸반보드 드래그 앤 드랍을 통해 이해도에 따라 분류가 가능합니다.<br />
              3. 공개/비공개 설정으로 코드에 대한 의견을 주고 받을 수도 있고, 개인적으로 보관이 가능합니다.<br />
              4. 검색 기능을 통해 작성한 코드를 찾을 수 있습니다.<br />
              5. 스스로 공부한 코드, 코드 리뷰 댓글 등을 확인하며, 관리할 수 있습니다.<br />
              <br />
              <ProjectCategory>Works</ProjectCategory>
              · Semistandard <br />
              · Webpack 모듈 및 redux-thunk 환경 설정  <br />
              · 자주 사용할 Alert(경고창) Button(버튼) Search(검색)을 모듈화 함으로써 코드를 줄임.<br />
              · Error 코드에 맞는 페이지를 만들고, 다음 단계를 위한 버튼(링크)을 구현하여 사용자에게 편리함을 제공함.<br />
              · 렌딩페이지 Scroll 이벤트 및 반응형 웹 <br />
              · Oauth 회원가입, 로그인 및 이메일 회원 비밀번호 찾기 기능 구현 <br />
              · 비회원 및 게스트 계정 저장 기능 사용 제한 Alert를 띄움으로 회원가입을 유도함.<br />
              · 칸반 보드 드래그 앤 드랍, 무한 스크롤, 태그 선택 이벤트 구현 <br />
              · 검색 기능 (useEffect를 사용해 값이 변경될 때마다 필터링되게 함.) <br />
              <br />
              <ProjectCategory>Stacks</ProjectCategory>
              <ProjectStacks>JavaScript, SCSS, React, Redux, Webpack</ProjectStacks>
            </ProjectContents>
          </ProjectContainer>
          <ProjectImg src={codehigh} alt='codehigh' />
        </Project>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}

export default Projects;
