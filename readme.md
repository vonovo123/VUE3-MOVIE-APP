

[데모페이지](https://optimistic-brahmagupta-b9ed67.netlify.app/#/movie/tt4520988)


### 환경설정
npm i -D webpack webpack-cli webpack-dev-server@next

## webpack
 - 번들러 동작 핵심 페키지
## webpack-cli
 - 번들러 실행 관련 command line interface 지원

 ## webpack-dev-server
 - 핫디플로이 지원 페키지


webpack.config.js 생성

```javascript
  //node.js 제공 객체
  const path = require('path')
  module.exports = {
    //파일 진입점(상대경로)
    entry: './js/main.js',
    //결과물을 반환하는 설정
    output : {
      //default setting임( path : cur_dir + dist , filename : main.js)
      // path:path.resolve(__dirname, 'dist'),
      // filename:'main.js',
      //설정후 빌드시 기존 빌드 제거 후 빌드

      clean: true
    },

  }
```

## babel 설치
npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime


## vue 설치
npm i vue@next

## vue 의존성
npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc

##  webpack.config.js  수정
프로그램 진입경로 수정 - entry
module 추가 - rules > vue / rules > scss - plugin 추가

## 이미지 로더
npm i -D file-loader

### ESLINT
npm i -D eslint eslint-plugin-vue babel-eslint

저장소
git remote add origin https://github.com/vonovo123/VUE3-WEBPACK-TEMPLATE

### vue-router 설치
npm i vue-router@4

## bootstrap 
 npm i bootstrap@next

 ## npm i axios
 api call

 ##  vuex 설치
 npm i vuex@next

## serverless 함수 사용을 위한 netlify_cli 설치
 npm i -D netlify_cli

## 중요 설정정보 서버단에 감추기위한 프레임웍 설치
npm i -D dotenv-webpack

 ## 호스팅서버(netlify)에서 중요 key 사용할 수 있도록 등록
 netlify site settings - build & deploy - environment - Environment variables 등록


 ## 단위테스트

  ### Unit TEST
    데이터 ,함수, 컴포넌트등의 정의된 프로그램 단위들이 독립적으로 동작하는지 확인하는 방법.
    - Jest
    - Vue Test Utils

  #### 의존성 설치
    npm i -D jest @vue/test-utils@next vue-jest@next babel-jest
  #### test method 사용을 위해 eslint 수정
   - eslint.js env => jest : true

  #### vue-test-utils
  
  ### E2E Test
    애플리케이션의 처음부터 끝까지 실제 사용자의 관점에서 사용 흐름을 테스트하는 방법   
  - Cypress
  - npm install cypress
  - eslint-plugin-cypress
  - eslint.js env => 'cypress/globals' : true
  - eslint.js plugins => cypress
  

  ### OPEN Graph
  웹 페이지의 메타데이터를 사용해 페이지 콘텐츠 표시를 표준화하기위한 페이스북에서 만든 인터넷 프로토콜
  