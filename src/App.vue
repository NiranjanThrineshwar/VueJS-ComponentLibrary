<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div id="nav">
      <router-link to="/">Components</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
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
    ...mapActions(["actionA", "actionB"]),
    handleClickInParent: function(event) {
      // eslint-disable-next-line no-console
      console.log(event + " Button Clicked");
    }
  }
};
</script>

<style lang="scss">
@import "./styles/base.scss";

#app {
  font-family: "Maersk Text";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color--grey;
  margin-top: 60px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
