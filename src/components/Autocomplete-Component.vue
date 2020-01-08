<template>
  <div class="autocomplete-component">
    <div class="autocomplete-wrapper">
      <Autocomplete
        :items="itemList"
        type="text"
        placeholder="Type in to see the list"
        inputStyle="box"
        icon="fa-search"
        iconType="left"
        isError="false"
        @onSelect="getSelectedValue"
      ></Autocomplete>
      <Autocomplete
        :items="itemList"
        type="text"
        placeholder="Type in to see the list"
        inputStyle="vanity"
        icon="fa-search"
        iconType="left"
        isError="true"
        @onSelect="getSelectedValue"
      ></Autocomplete>
    </div>
  </div>
</template>

<script>
import Autocomplete from "./common-components/Autocomplete";

export default {
  name: "autocomplete-component",
  data() {
    return {
      itemList: [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Pear",
        "Peach",
        "Grape",
        "Tangerine",
        "Pineapple"
      ]
    };
  },
  components: {
    Autocomplete
  },
  methods: {
    getSelectedValue: function(value) {
      // eslint-disable-next-line no-console
      console.log(value + " selected dropdown value");
    }
  }
};
</script>

<style lang="scss">
.autocomplete-wrapper {
  display: flex;
  padding-top: 1%;
  margin: 0 auto;
  width: 70%;
}
</style>
