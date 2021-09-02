<template>
  <div id="app">
    <keep-alive include="history">
      <div class="nav">
        <Nav></Nav>
      </div>
    </keep-alive>

    <div class="router_view">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "@/views/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>
<style lang="less" scoped>
#app {
  padding: 10px;
  display: flex;
  height: 100%;
  flex-direction: column;
  .nav {
    flex: 0 0 20px;
    background-color: #ccc;
    padding: 10px;
  }
  .router_view {
    flex: 1;
    background-color: rgb(189, 176, 159);
  }
}
</style>
