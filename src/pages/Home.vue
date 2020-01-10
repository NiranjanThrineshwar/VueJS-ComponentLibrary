<template>
  <div id="home">
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
    <br />

    <!-- Radio component -->
    <h2>Radio Component</h2>
    <RadioComponent></RadioComponent>
    <br />

    <!-- Dropdown component -->
    <h2>Dropdown Component</h2>
    <DropdownComponent></DropdownComponent>
    <br />

    <!-- Action card component -->
    <h2>Action-Card Component</h2>
    <ActionCardComponent></ActionCardComponent>
    <br />
  </div>
</template>

<script>
import ButtonComponent from "../components/Button-Component";
import InputComponent from "../components/Input-Component";
import AutocompleteComponent from "../components/Autocomplete-Component";
import CheckboxComponent from "../components/Checkbox-Component";
import RadioComponent from "../components/Radio-Component";
import DropdownComponent from "../components/Dropdown-Component";
import ActionCardComponent from "../components/ActionCard-Component";

export default {
  name: "home",
  components: {
    ButtonComponent,
    InputComponent,
    AutocompleteComponent,
    CheckboxComponent,
    RadioComponent,
    DropdownComponent,
    ActionCardComponent
  }
};
</script>

<style lang="scss">
@import "../styles/base.scss";

h2 {
  margin: 15px 0px 0px 0px;
}
</style>
