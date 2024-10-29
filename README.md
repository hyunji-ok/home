# home

## image
- 추후 추가

## description
- 개인 홈페이지

## technology
- node: v18
- typescript: v4
- react: v18
- frame-work: create-react-app
- routing: react-router
- styling: css, emotion, mui
- test: jest, react-testing-library
- deploy: github pages
- ci/cd: github actions

## problem solve
- cra의 기존 testing library는 새로 설치해야 함
- js->ts 마이그레이션
    - js파일은 tsx로 모두 바꿔야 함
    - 타입스크립트 버전을 맞춰줘야 함. 이 product 기준으로는 v4로 바꿔야 했음
- normailize는 내장된 기능이 있음
    - app.css에 @import-normalize 추가함
- 절대경로 설정
    - 다양한 방법이 있지만 cra 공식문서에서 권장하는 방식은 tsconfig에 다음 내용 추가
        - `"baseUrl": "src",`
- css는 전역적으로 설정되기 때문에 나눠서 관리해야 할 필요가 있음
    - css: 글로벌 설정
    - emotion: 각 컴포넌트의 전체적인 설정
    - mui sx props: 세부적인 설정
- mui에서는 styled component 대신 emotion을 권장. 따라서 emotion을 채택함