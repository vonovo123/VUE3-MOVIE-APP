import { shallowMount } from "@vue/test-utils";
import store from '~/store'
import router from '~/routes'
import loadImage from '~/plugins/loadImage'
import Movie from '~/routes/Movie'

describe('routes/Movie.vue', () => {
  let wrapper;
  
  beforeEach(async () => {
    window.scrollTo = jest.fn();
    router.push('/movie/tt1234567')
    await router.isReady();
    wrapper = shallowMount(Movie,{
      global:{
        plugins: [
          store,
          router,
          loadImage
        ]
      }
    })
  })

  test('최초접속한 URL을 확인합니다.', () => {
    expect(wrapper.vm.$route.params.id).toBe('tt1234567')
  })

  test('지정한 이미지의 크기로 url을 변경합니다.', () => {
    const url = "https://google.com/sample_image_SX300.jpg"
    expect(wrapper.vm.requestDiffSizeImage(url,700)).toContain("SX700")
    expect(wrapper.vm.requestDiffSizeImage(url,900)).toContain("SX900")
  })

  test('정상적인 이미지경로가 아닌경우 빈 문자열을 반환합니다.', () => {
    const url = "N/A";
    expect(wrapper.vm.requestDiffSizeImage(url,700)).toContain("")
  })
})
