/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import carrier1 from 'assets/images/carrier1.png'
import carrier2 from 'assets/images/carrier2.png'
import AlertDialog from 'components/common/AlertDialog';

function Carriers() {

  const swAdpiaConstents = [
    {
      title: 'ERP 사이트 1.5v 프로젝트',
      period: '2024.05 ~ 진행중',
      role: [
        '인사관리 담당: 연차관리(결재프로세스, 일정목록 및 캘린더 구현, 연차 강제 차감), 근태관리(외근현황 구현 및 프록시 설정), 수당관리(초과근무프로세스), 사원관리(사원 조회 및 명세서 수정), 근무조관리(근무조 변경 및 조회) 등을 담당하였습니다.',
      ],
      result: [
        '개발일정 준수율: 개발완료일 준수건 / 개발완료건, 43/43을 유지하여 프로젝트를 100% 성공적으로 완료하였습니다.',
        '배포당 결함 수: 테스트 코드를 적극적으로 활용하여 배포당 결함 수를 최소화하였고, 결함 건수/배포 건수는 5/43로 유지되었습니다.',
        '장애 해결률: 공식문서, CHAT-GPT, 페어 프로그래밍 등을 적극적으로 활용하여 장애 해결률을 100%로 높여 개발 안정성을 향상시켰습니다.',
        '테스트 코드 도입: react-testing library 및 jest를 도입하여 단위 테스트를 적용하였습니다.',
        '팀 교육: 주기적으로 팀원에게 교육을 진행하여 TDD, 객체지향, KPI 산출, 리팩토링 등의 전반적인 개발 스킬을 향상시켰습니다.'
      ],
      technology: [
        'FRONT: JAVASCRIPT, TYPESCRIPT, REACT, NEXT.JS(PAGE ROUTER), RECOIL, REACT-QUERY, MUI.'
      ],
    },
  ]

  const plateerConstents = [
    {
      title: 'x2bee 이커머스 솔루션 v2(react) 프로젝트',
      period: '2023.01 ~ 2024.05',
      role: [
        '클레임 담당: 취소 상세, 교환 상세, 보낸 선물함 상세, 받은 선물함 상세 등을 담당하였습니다.',
        '회원 담당: 아이디 찾기, 환불계좌 관리, 환불계좌 변경 등을 담당하였습니다.'
      ],
      result: [
        '개발일정 준수율: 개발완료일 준수건 / 개발완료건, 161/161을 유지하여 프로젝트를 100% 성공적으로 완료하였습니다.',
        '배포당 결함 수: 테스트 코드를 적극적으로 활용하여 배포당 결함 수를 최소화하였고, 결함 건수/배포 건수는 18/161로 유지되었습니다.',
        '장애 해결률: 공식문서, CHAT-GPT, 페어 프로그래밍, 소나 큐브 등을 적극적으로 활용하여 장애 해결률을 100%로 높여 개발 안정성을 향상시켰습니다.',
        'uml 도입: PlantUML tool을 이용하여 프로젝트에 sequence diagram으로 소통하는 방식을 도입하였습니다. 또한, 코드로 다이어그램을 작성하여 개발자들과 관리자들이 쉽게 수정 및 보완 할 수 있게 하였습니다.',
        '마이그레이션: vue.js(nuxt) -≫ react.js(next)로 진행하였습니다.',
        '팀 교육: 주기적으로 팀원에게 교육을 진행하여 TDD, 객체지향, KPI 산출, 리팩토링 등의 전반적인 개발 스킬을 향상시켰습니다.',
      ],
      technology: [
        'FRONT: JAVASCRIPT, TYPESCRIPT, REACT, NEXT.JS(APP ROUTER), ZUSTAND.'
      ],
    },
    {
      title: 'x2bee 이커머스 솔루션 v1(vue) 프로젝트',
      period: '2022.01 ~ 2022.12',
      role: [
        '주문 담당: 상품 주문, 교환, 환불, 택배사 연동, SMS 등을 주문 파트에서 책임지고 개발하였습니다.',
      ],
      result: [
        '개발일정 준수율: 개발완료일 준수건 / 개발완료건, 46/46을 유지하여 프로젝트를 100% 성공적으로 완료하였습니다.',
        '배포당 결함 수: 테스트 코드를 적극적으로 활용하여 배포당 결함 수를 최소화하였고, 결함 건수/배포 건수는 15/46로 유지되었습니다.',
        '장애 해결률: 공식문서, 페어 프로그래밍, 코드 리뷰 등을 활용하여 장애 해결률을 100%로 높여 개발 안정성을 향상시켰습니다.',
        '환경 세팅 문서화: vue 환경 세팅 문서화를 통해 업무 효율을 향상시켰습니다.',
      ],
      technology: [
        'FRONT: JAVASCRIPT, VUE.JS, VUETIFY, VUEX'
      ],
    }
  ]

  return (
    <div className="carriers" css={carriersStyle}>
        <h2>Carriers</h2>
        <div className="carrier-cards">
            <AlertDialog company="성원애드피아" contents={swAdpiaConstents} >
              <div className="card">
                  <img src={carrier1} alt="carrier 1" />
                  <h3>성원애드피아(클릭)</h3>
              </div>
            </AlertDialog>
            
            <AlertDialog company="플래티어" contents={plateerConstents} >
              <div className="card">
                  <img src={carrier2} alt="carrier 2" />
                  <h3>플래티어(클릭)</h3>
              </div>
            </AlertDialog>
        </div>
    </div>
  );
}

const carriersStyle = css`
  .carrier-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .card {
    background-color: #f4f4f4;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-width: 250px;
    & img {
      width: 90%;
      aspect-ratio: 2/1;
    }
  }
`;

export default Carriers;