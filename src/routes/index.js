import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import NotFound from './NotFound'
export default createRouter({
  history : createWebHashHistory(),
  scrollBehavior() {
    return {top : 0}
  },
  routes : [
    {
      path: '/',
      component: Home
    },
    {
      path : '/movie/:id',
      component: Movie
    },
    {
      path : '/about',
      component: About
    },
    //지정한 path 외에 모든 경로
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})