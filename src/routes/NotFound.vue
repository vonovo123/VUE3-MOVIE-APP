<template>
  <div class="not-found">
    <div class="status">
      404
    </div>
    <div class="mesage">
      Page Not Found!
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .not-found{
    line-height: 1.2;
    text-align: center;
    font-family: "Osward", sans-serif;
    padding: 80px 20px;
    .status{
      font-size: 160px;
      color : $primary
    }
    .mesage {
      font-size : 50px
    }
  }
</style>