import {double} from './example'
//test Group
// matcher tobe : 원시형 데이터 비교
// matcher toEqual: 객체형 데이터 비교
describe('그룹1',() => {
  beforeAll(() =>{
    //테스트 그룹 실행 전에
    console.log('beforeAll') 
  })
  afterAll(() => {
    //테스트 그룹 실행 후에 
    console.log('afterAll')
  })
  beforeEach(() =>{
    //각각의 테스트가 실행되기 전에
    console.log('beforeEach')
  })
  afterEach(() => {
    //각각의 테스트가 실행된 후에
    console.log('afterEach')
  })
  test('첫 테스트', () => {
    console.log('첫 테스트')
    expect(double(1)).toBe(2);
  })
  
  test('인수가 숫자 데이터 입니다', () => {
    console.log('인수가 숫자 데이터 입니다')
    expect(double(3)).toBe(6);
    expect(double(10)).toBe(20);
    
  })
  
  test('인수가 없습니다', () => {
    console.log('인수가 없습니다')
    expect(double()).toBe(0)
  })
})
