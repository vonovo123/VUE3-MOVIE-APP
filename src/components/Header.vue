<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        class="nav-item"
        v-for="nav in navigations"
        :key="nav.name">
        <RouterLink
          class="nav-link"
          active-class="active"
          :class="{active: isMatch(nav.path)}"
          :to="nav.href">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: {
    Logo
  },
  data(){
    return{
      navigations: [
        {
          name : 'Search',
          href : '/'
        },
        {
          name : 'Movie',
          href : '/movie/tt4520988',
          path : /^\/movie/ // ^(시작)`\(escape)/movie`
        },
        {
          name : 'About',
          href : '/about'
        },
      ]
    }
  },
  methods: {
    isMatch(path){
      console.log(this.$route.fullPath)
      if(!path) return;
      console.log(path.test(this.$route.fullPath));
      return path.test(this.$route.fullPath);
    }
  }
}
</script>

<style lang="scss" scoped >
header {
  height : 70px;
  padding : 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right :40px;
  }
}
</style>