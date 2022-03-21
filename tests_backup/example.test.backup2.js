const userA = {
  name : 'heropy',
  age : 85
}

const userB = {
  name : 'neo',
  age : 32
}

test('데이터가 일치해야합니다.', () => {
  expect(userA.age).toBe(85);
  // expect(userA).toBe({
  //     name : 'heropy',
  //     age : 85
  // });
  expect(userA).toEqual({
    name : 'heropy',
    age : 85
});
})
test('데이터가 일치하지 않아야합니다.', () => {
  expect(userB.name).not.toBe('heropy')
  expect(userB).not.toEqual(userA)
})