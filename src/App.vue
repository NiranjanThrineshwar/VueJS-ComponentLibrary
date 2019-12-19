<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>{{ count }}</div>
    <div>{{ doneTodosCount }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["doneTodos", "doneTodosCount", "getTodoById"]),
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
