<template>
  <div class="dropdown-container">
    <Dropdown
      :dropdownData="dropdownData1"
      defaultValue="India"
      @onSelect="onDropdownSelect"
    ></Dropdown>
    <Dropdown
      :dropdownData="dropdownData1"
      dropdownType="vanity"
      @onSelect="onDropdownSelect"
    ></Dropdown>
  </div>
</template>

<script>
import Dropdown from "./common-components/Dropdown";

export default {
  name: "Dropdown-Component",
  components: {
    Dropdown
  },
  data() {
    return {
      dropdownData1: [
        "All regions",
        "Africa",
        "India",
        "North America",
        "Asia Pacific",
        "Europe",
        "West Coast Asia"
      ]
    };
  },
  methods: {
    onDropdownSelect(item) {
      // eslint-disable-next-line no-console
      console.log(item);
    }
  }
};
</script>

<style lang="scss">
.dropdown-container {
  display: flex;
  padding-top: 1%;
  margin: 0 auto;
  width: 70%;
}
</style>
