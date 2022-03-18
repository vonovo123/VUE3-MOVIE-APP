<template>
  <RouterLink
    to="/"
    class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .logo {
    font-family: "Oswald", sans-serif;
    font-size : 20px;
    text-decoration: none;
    color: $black;
    &:hover {
       color: $black;
    }
    span {
      color : $primary;
    }
  }
</style>