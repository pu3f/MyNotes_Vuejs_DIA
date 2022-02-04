<template>
  <div class="container">
      <header class="header">
          <slot name="header"></slot>
      </header>
      <main class="main">
          <slot name="main"></slot>
      </main>
      <footer class="footer">
          <slot name="footer"></slot>
      </footer>
  </div>
</template>

<script>
export default {
    name: 'DashboardLayout'
}
</script>

<style scoped>
.container {
    text-align: center;
    position: relative;
    max-width: 50rem;
    margin: auto;
}
.header {
    background: skyblue;
    width: 100%;
    padding: 12px;
}
.main {
    padding: 16px;
}
.footer {
    background: cornflowerblue;
    color: white;
}
</style>