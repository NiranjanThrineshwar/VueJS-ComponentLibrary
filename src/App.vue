<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>{{ count }}</div>
    <div>{{ doneTodosCount }}</div>
    <button @click="actionA">+</button>
    <button @click="actionB">-</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["doneTodos", "doneTodosCount", "getTodoById"]),
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    }
  },
  methods: {
    ...mapMutations(["increment", "decrement"]),
    ...mapActions(["actionA", "actionB"])
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
