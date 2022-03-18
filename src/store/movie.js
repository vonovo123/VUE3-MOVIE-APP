import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'
const _defaultMessage = 'Search for the movie title!';
export default {  
  namespaced: true,
  state: () => ({
      movies : [],
      message: _defaultMessage,
      loading : false,
      theMovie : {}
  }),
  getters : {
    movieIds(state){
      return state.movies.map(m => m.imdbID)
    }
  },
  mutations: {
    updateState(state, payload){
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      })
    },
    resetMovies(state){
      state.movies = [];
      state.message = _defaultMessage
      state.loading = false;
    }
  },
  actions : {
    async searchMovies({state, commit}, payload){
      if(state.loading) return;
      commit('updateState',{
        message : '',
        loading : true
      })
      try{
        const res = await _fetchMovie({...payload, page : 1})
        const {Search, totalResults} = res.data;
        console.log(res.data);
        commit('updateState', {
          movies : _uniqBy(Search, 'imdbID')
        });
        const total = parseInt(totalResults, 10);
        const pageLength = Math.ceil(total / 10);
        console.log('pageLength', pageLength)
        //추가 요청!
        if(pageLength > 1){
          for(let page = 2; page <= pageLength; page +=1){
            if(page > payload.number / 10){
              break;
            }
            const res = await _fetchMovie({...payload, page})
            const {Search} = res.data;
            commit('updateState', {
              movies: [...state.movies, ..._uniqBy(Search, 'imdbID')]
            })
          }
        }
      } catch(message){
        console.log(message);
        commit('updateState',{
          movies:[],
          message
        })
      } finally{
        commit('updateState',{
          loading : false
        })
      }
    },
    async searchMovieWithId({state, commit}, payload){
      if(state.loading) return;
      commit('updateState',{
        theMovie : {},
        loading : true
      })
      const {id} = payload;
      try {
        const res = await _fetchMovie({id})
        console.log(res.data);
        commit('updateState', {
          theMovie : res.data
        })
      } catch (error) {
        commit('updateState', {
          theMovie : {},
          message : ''
        })
      }finally {
        commit('updateState', {
          loading:false
        })
      }
    }
  }
}

function _fetchMovie(payLoad){
  const {title, type, year, page, id} = payLoad;
  const API_KEY = '4af0b287';
  const url = id
   ?`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}` 
   :`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
  //const url = `https://www.omdbapi.com/?&apikey=${API_KEY}`;
  return new Promise((rs, rj)=>{
    axios.get(url)
    .then(res => {
      console.log(res);
      if(res.data.Error){
        rj(res.data.Error);
      }
      rs(res)
    })
    .catch(err => {
      rj(err.message);
    })
  })
}