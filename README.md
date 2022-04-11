# TODO list

## 1차 개발

```markdown
# 요구조건

1. 입력, 수정 구현하기
3. 리스트 종류: to do, doing, done
```

### setting
설치를 참고한 곳: [Vanilla JS 프로젝트 세팅하기](https://yujo11.github.io/javascript/Vanilla%20JS%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0/)

**Dependencies**
- yarn

**devDependencies** (배포할 때 필요한 패키지 X, 개발할 때 필요한 패키지 O)
- eslint
- prettier
- webpack
- webpack-cli: 터미널에서 명령어로 실행하기 위해 설치
- webpack-dev-server
- babel-loader: 자바스크립트 파일을 바벨과 웹팩을 사용해서 트랜스파일링해줌
- css-loader: @import, url()을 import/require() 과 같은 것을 해석해줌
- mini-css-extract-plugin: CSS를 개별 파일로 추출함. CSS를 포함하는 JS 파일별로 CSS 파일이 생성됨
- html-webpack-plugin: 웹 팩 번들을 처리하는 HTML 파일을 쉽게 만들 수 있음
- @babel/core
- @babel/eslint-parser
- @babel/preset-env

### Process
실행을 위해 webpack dev server를 사용합니다.
```json
{
  "scripts": {
    "prod": "webpack serve --mode=production", // ***
    "dev": "webpack serve --mode=development", // ***
    "build": "webpack --mode=production"
  }
}
```

## index.html

### attachShadow()  [MDN](https://developer.mozilla.org/ko/docs/Web/Web_Components/Using_shadow_DOM)
Shadow Root 생성
- Shadow Root 아래에 생성된 Element 들은 기존의 DOM 영역과 별개로 관리된다.
- Element.attachShadow() 는 매개변수로 하나의 옵션을 포함하는 옵션 객체를 가진다.
   - mode
      - open: 메인 페이지 맥락에서 작성된 Javascript를 사용하여 Shadow DOM에 접근할 수 있음
          ```
          let myShadowDom = myCustomElem.shadowRoot; // 이 코드로 접근 가능
          ```
      - close: 외부로부터 Shadow DOM에 접근할 수 없음
