import {shallowMount} from '@vue/test-utils'
import router from '~/routes/index.js'
import store from '~/store/index.js'
import Header from '~/components/Header'
describe('components/Header.vue', () => {
  let wrapper = null;
  beforeEach(async () => {
    window.scrollTo = jest.fn();
    router.push('/movie/tt1234567')
    await router.isReady();
    wrapper =   shallowMount(Header, {
      global:{
        plugins: [
          router,
          store
        ]
      }
    })
  })

  test('경로 정규표현식이 없는경우 일치하지않습니다.', () => {
    const regExp = undefined;
    expect(wrapper.vm.isMatch(regExp)).toBe(undefined);
  })

  test('경로 정규표현식와 일치해야합니다.', () => {
    const regExp = /^\/movie/;
    expect(wrapper.vm.isMatch(regExp)).toBe(true);

  })

  test('경로 정규표현식과 일치하지않아야합니다.', () => {
    const regExp = /^\/heropy/;
    expect(wrapper.vm.isMatch(regExp)).toBe(false);
  })

})