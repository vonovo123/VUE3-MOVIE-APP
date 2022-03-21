import {mount, shallowMount}  from '@vue/test-utils'
import Parent from './Parent'

test('Mount',() => {
  //const wrapper = mount(Parent)
  //expect(wrapper.html()).toBe('')
  const wrapper = shallowMount(Parent);
  expect(wrapper.html()).toBe('')
})