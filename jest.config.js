module.exports = {
  //Jest 가 검색할 확장자 목록
  moduleFileExtensions : [
    'js',
    'vue'
  ],
  //'~'와 같은 경로 별칭을 매핑합니다.
  moduleNameMapper: {
    '^~/(.*)$' : '<rootDir>/src/$1'
  },
  //테스트 제외할 디렉토리
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/cypress'
  ],
  //정규식과 일치하는 파일의 변환 모듈을 지정합니다.
  testURL:'http://localhost',
  transform : {
    '^.+\\.vue$':'vue-jest',
    '^.+\\.js$':'babel-jest',
  }
}