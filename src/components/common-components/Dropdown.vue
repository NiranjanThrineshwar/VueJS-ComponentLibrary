<template>
  <div
    :class="[
      'dropdown',
      dropdownType === 'vanity' ? 'input-vanity' : 'input-box'
    ]"
  >
    <select
      :class="['dropdown-select']"
      name="select"
      @change="handleDropdownSelect($event)"
      v-model="selectedValue"
    >
      <option
        :class="['dropdown-select--option']"
        :value="item"
        v-for="(item, index) in dropdownData"
        :key="index"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    dropdownData: Array,
    dropdownType: String,
    defaultValue: String
  },
  data() {
    return {
      selectedValue: this.defaultValue
        ? this.defaultValue
        : this.dropdownData[0]
    };
  },
  methods: {
    handleDropdownSelect(item) {
      this.selectedValue = item.target.value;
      this.$emit("onSelect", this.selectedValue);
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/base.scss";

.dropdown {
  width: 100%;
  display: block;
}

.input-vanity {
  margin-right: 2%;

  select {
    border: none;
    border-bottom: 1px solid $color--black-light;
    width: 100%;
    padding: 6px 30px 6px 6px;
    outline: none;
    height: 40px;
    transition: all 0.5s ease-in-out;
    background: transparent;

    &:hover {
      border-bottom: 3px solid $color--black;
    }
  }
}

.input-box {
  margin-right: 2%;

  select {
    border: 1px solid $color--black-light;
    border-radius: 4px;
    width: 100%;
    padding: 6px 30px 6px 6px;
    outline: none;
    height: 40px;
    transition: all 0.5s ease-in-out;
    background: transparent;

    &:hover {
      border: 1px solid $color--black;
    }
  }
}
</style>
