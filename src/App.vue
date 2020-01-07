<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <div>{{ count }}</div>
    <div>{{ doneTodosCount }}</div> -->
    <!-- <button @click="actionA">+</button>
    <button @click="actionB">-</button> -->

    <!-- Button Component -->
    <h2>Button Component</h2>
    <ButtonComponent></ButtonComponent>

    <!-- Input component -->
    <h2>Input text Component</h2>
    <InputComponent></InputComponent>

    <!-- Auto-Complete component -->
    <h2>Auto-complete Component</h2>
    <AutocompleteComponent></AutocompleteComponent>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import ButtonComponent from "./components/Button-Component";
import InputComponent from "./components/Input-Component";
import AutocompleteComponent from "./components/Autocomplete-Component";

export default {
  name: "app",
  components: {
    ButtonComponent,
    InputComponent,
    AutocompleteComponent
  },
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  margin: 15px 0px 0px 0px;
}
</style>
