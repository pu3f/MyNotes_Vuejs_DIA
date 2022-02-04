<template>
  <div>
    <div class="menu">
      <router-link to="/" v-slot="{ isActive }">
        <button class="btn-link" :class="{active: isActive}">
          Home
        </button> 
      </router-link>
      <router-link to="/about"  v-slot="{ isActive }">
        <button class="btn-link" :class="{active: isActive}">
            About
        </button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    text-align: center;
}
* {
  box-sizing: border-box;
}
.menu {
  background: cornflowerblue;
  max-width: 50rem;
  margin: auto;
}
.btn-link {
  background: cornflowerblue;
  color: skyblue;
  padding: 10px;
  border: 0;
}
.active {
  color: white;
}

</style>
