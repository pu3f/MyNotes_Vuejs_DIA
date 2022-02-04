<template>
  <div class="detail">
      Detail {{ $route.params.id }}
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    mounted() {
        console.log(this.$route.params.id);
    }
}
</script>

<style>
.detail {
    margin: auto;
    max-width: 90rem;
    width: 100%;
}
</style>