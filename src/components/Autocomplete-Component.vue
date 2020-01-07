<template>
  <div class="autocomplete-component">
    <div class="autocomplete-wrapper">
      <Autocomplete
        :items="[
          'Apple',
          'Banana',
          'Orange',
          'Mango',
          'Pear',
          'Peach',
          'Grape',
          'Tangerine',
          'Pineapple'
        ]"
        type="text"
        placeholder="Left icon with text..."
        inputStyle="box"
        icon="fa-search"
        iconType="left"
        isError="false"
      ></Autocomplete>
      <Autocomplete
        :items="[
          'Apple',
          'Banana',
          'Orange',
          'Mango',
          'Pear',
          'Peach',
          'Grape',
          'Tangerine',
          'Pineapple'
        ]"
        type="text"
        placeholder="Left icon with text..."
        inputStyle="vanity"
        icon="fa-search"
        iconType="left"
        isError="false"
      ></Autocomplete>
    </div>
  </div>
</template>

<script>
import Autocomplete from "./common-components/Autocomplete";

export default {
  name: "autocomplete-component",
  components: {
    Autocomplete
  },
  methods: {
    handleButtonClick: function(event) {
      // eslint-disable-next-line no-console
      console.log(event + " Button Clicked");
    }
  }
};
</script>

<style lang="scss">
.autocomplete-wrapper {
  display: flex;
  padding-top: 2%;
  margin: 0 auto;
  width: 70%;
}
</style>
