<template>
  <div class="nav_wrapper">
    <div class="item" v-for="(i, index) in navList" :key="index">
      <router-link :to="i.path">
        <label :class="{ active: selected == index }" @click="chooseThis(index)"
          >{{ i.name }}
        </label>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'history',
  data() {
    return {
      navList: [
        { id: 1, name: "防抖节流" ,path:"/"},
        { id: 2, name: "second" ,path:"/second"},
        { id: 3, name: "third",path:"/third" },
        { id: 4, name: "fourth" ,path:'fourth'},
      ],
      selected: 0,
    };
  },
  methods: {
    chooseThis(params) {
      this.selected = params;
    },
  },
};
</script>

<style lang='less' scoped>
.nav_wrapper {
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  .item {
    .active {
      color: rgb(146, 182, 64);
      
    }
  }
}
</style>