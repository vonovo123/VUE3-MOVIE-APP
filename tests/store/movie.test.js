
import movieStore from '~/store/movie'
import _cloneDeep from 'lodash/cloneDeep'
import axios from 'axios';
describe('store/movie.js', () => {
  let store = null;
  beforeEach(() => {
    store = _cloneDeep(movieStore);
    //store은 함수이기때문에 실행/반환/재할당 해야함
    store.state = store.state();
    store.commit = (name, payload) => {
      store.mutations[name](store.state, payload);
    }
    store.dispatch = (name, payload) => {
      const context = {
        state : store.state,
        commit : store.commit,
        dispatch : store.dispatch
      }
      return store.actions[name](context, payload)
    }
  })
  test('영화 데이터를 초기화 합니다.', () => {
    store.commit('updateState', {
      movies : [{imdbId: '1'}],
      message : 'Hello world',
      loading : true
    })
    store.commit('resetMovies')
    expect(store.state.movies).toEqual([]);
    expect(store.state.message).toBe(`Search for the movie title!`);
    expect(store.state.loading).toBe(false);
  })
  test('영화 목록을 잘 가져온 경우 데이터를 확인합니다.', async () => {
    const mock_res = {
                      data : {
                        totalResults : '1',
                        Search: [
                          {
                            imdbId : '1',
                            Title : 'Hello',
                            Poster: 'Hello.jpg',
                            Year : '2021'
                          }
                        ]
                      }
                    } 
      //mockResolvedValue(param) 비동기로 param을 반환한다.
      //mockRejectedValue() 비동기로  거부값을 반환한다.
      //mockReturnValue(param) 동기값을 반환한다
      axios.post = jest.fn().mockResolvedValue(mock_res);
      await store.dispatch('searchMovies')
      expect(store.state.movies).toEqual(mock_res.data.Search);
  })

  test('영화 목록을 가져오지 못한 경우 에러 메세지를 확인합니다.', async () => {
    const errorMessage = 'Network Error.'
    axios.post = jest.fn().mockRejectedValue(new Error(errorMessage));
    await store.dispatch('searchMovies');
    expect(store.state.message).toBe(errorMessage);
  })

  test('영화의 아이템이 중복된 경우 고유하게 처리합니다.', async () => {
    const mock_res = {
      data : {
        totalResults : '1',
        Search: [
          {
            imdbId : '1',
            Title : 'Hello',
            Poster: 'Hello.jpg',
            Year : '2021'
          },
          {
            imdbId : '1',
            Title : 'Hello',
            Poster: 'Hello.jpg',
            Year : '2021'
          },
          {
            imdbId : '1',
            Title : 'Hello',
            Poster: 'Hello.jpg',
            Year : '2021'
          }
        ]
      }
    } 
    axios.post = jest.fn().mockResolvedValue(mock_res);
    await store.dispatch('searchMovies',mock_res)
    expect(store.state.movies.length).toBe(1);
  })

  test('단일 영화의 상세 정보를 잘 가져온 경우 데이터를 확인합니다', async () => {
    const res = {
      data : {
        imdbId : '1',
        Title : 'Hello',
        Poster: 'Hello.jpg',
        Year : '2021'
      }
    }
    axios.post = jest.fn().mockResolvedValue(res)
    await store.dispatch('searchMovieWithId', 1)
    expect(store.state.theMovie).toEqual(res.data)
  })

})