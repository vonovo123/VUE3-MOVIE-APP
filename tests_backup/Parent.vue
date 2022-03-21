<template>
  <h1>Parent</h1>
  <child msg="heropy" />
</template>

<script>
import Child from './Child.vue'
export default {
  components:{
    Child
  }
}
</script>

<style>

</style>