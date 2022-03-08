import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'
export default {  
  namespaced: true,
  state: () => ({
      movies : [],
      message: '',
      loading : false
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
        if(key === 'movies'){
          console.log('movies', payload[key]);
        }
      })
    },
    resetMovies(state){
      state.movies = [];
    }
  },
  actions : {
    async searchMovies({state, getters, commit}, payload){
      const {title, type, number, year} = payload
      const API_KEY = '4af0b287';
      try{
      const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
        const {Search, totalResults} = res.data;
        commit('updateState', {
          movies : _uniqBy(Search, 'imdbID')
        });
        console.log(totalResults); //306 
        console.log(typeof totalResults); //string
        const total = parseInt(totalResults, 10);
        const pageLength = Math.ceil(total / 10);
        console.log('pageLength', pageLength)
        //추가 요청!
        if(pageLength > 1){
          for(let page = 2; page <= pageLength; page +=1){
            if(page > number / 10){
              break;
            }
            const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
            const {Search} = res.data;
            commit('updateState', {
              movies: [...state.movies, ..._uniqBy(Search, 'imdbID')]
            })
          }
        }
      } catch(error){
        console.log(error)
      }
    }
  }
}