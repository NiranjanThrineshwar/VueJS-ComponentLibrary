<template>
  <div class="autocomplete-component">
    <Input
      :type="type"
      :placeholder="placeholder"
      :inputStyle="inputStyle"
      :icon="icon"
      :iconType="iconType"
      :isError="isError"
      @onInputKeyUp="onChange"
      :inputData="search"
    />
    <ul v-show="isOpen" class="autocomplete-results">
      <li
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
import Input from "./Input";

export default {
  name: "Autocomplete",
  components: {
    Input
  },
  props: {
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    type: String,
    inputStyle: String,
    placeholder: String,
    disabled: String,
    icon: String,
    iconType: String,
    inputData: String,
    label: String,
    isError: String
  },
  data() {
    return {
      search: "",
      results: [],
      isOpen: false
    };
  },
  methods: {
    onChange(enteredData) {
      this.isOpen = true;
      this.filterResults(enteredData);
    },
    filterResults(enteredData) {
      this.results = this.items.filter(
        item => item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
      );
    },
    setResult(result) {
      this.search = result;
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss">
.autocomplete-component {
  width: 100%;
  display: block;
  transition: all 0.5s ease-in-out;
  height: 42px;
  margin: 4px;

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid rgba(0, 0, 0, 1);
    border-top: none;
    border-radius: 4px;
    height: 120px;
    overflow: auto;
    padding: 2px;
    margin: -4px 4px 4px 4px;
    width: 100%;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: rgba(0, 35, 61, 0.3);
    color: white;
  }
}
</style>
