<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <!-- Button Component -->
    <h2>Button Component</h2>
    <ButtonComponent></ButtonComponent>
    <br />

    <!-- Input component -->
    <h2>Input text Component</h2>
    <InputComponent></InputComponent>
    <br />

    <!-- Auto-Complete component -->
    <h2>Auto-complete Component</h2>
    <AutocompleteComponent></AutocompleteComponent>
    <br />

    <!-- Checkbox component -->
    <h2>Checkbox Component</h2>
    <CheckboxComponent></CheckboxComponent>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import ButtonComponent from "./components/Button-Component";
import InputComponent from "./components/Input-Component";
import AutocompleteComponent from "./components/Autocomplete-Component";
import CheckboxComponent from "./components/Checkbox-Component";

export default {
  name: "app",
  components: {
    ButtonComponent,
    InputComponent,
    AutocompleteComponent,
    CheckboxComponent
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
@import "./styles/base.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color--grey;
  margin-top: 60px;
}

h2 {
  margin: 15px 0px 0px 0px;
}
</style>
