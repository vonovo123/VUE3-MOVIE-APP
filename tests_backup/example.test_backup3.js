import * as example from "./example_backup3";
describe('비동기 테스트', () =>{
  // test('done', (done) =>{
  //   asyncFn().then(res => {
  //     expect(res).toBe('Done?')
  //     done();
  //   })
  // })

  // test('then', () => {
  //   return asyncFn().then(res => {
  //     expect(res).toBe('Done?')
  //   })
  // })

  // test('resolves', () => expect(asyncFn()).resolves.toBe('Done?'))
  
  test('asyncAwait', async () => {
    jest.spyOn(example, 'asyncFn')
    .mockResolvedValue('Done?');
    const res = await example.asyncFn();
    expect(res).toBe('Done?');
  }, 7000)
})
