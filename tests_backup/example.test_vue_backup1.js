import {mount} from '@vue/test-utils'
import Example from './Example.vue'
test('메세지를 변경합니다.',async () => {
  const wrapper = mount(Example)
  //wrapper.vm === this
  //반응성이 이루어질때 까지 기다림
  expect(wrapper.vm.msg).toBe('Hello Vue test utils')
  await wrapper.setData({
    msg : 'Hello Vue test Heropy'
  })
  expect(wrapper.vm.msg).toBe('Hello Vue test Heropy')
  expect(wrapper.find('div').text()).toBe('Hello Vue test Heropy');
})