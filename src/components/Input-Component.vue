<template>
  <div class="input-component">
    <!-- Normal usage of input -->
    <div class="input-wrapper">
      <Input
        type="text"
        placeholder="Text..."
        inputStyle="box"
        isError="false"
        @onInputKeyUp="onInputKeyUp"
        @onInputBlur="onInputBlur"
      />
      <Input
        type="text"
        placeholder="Text..."
        inputStyle="vanity"
        inputData="Default text"
        isError="false"
        @onInputKeyUp="onInputKeyUp"
        @onInputBlur="onInputBlur"
      />
    </div>

    <!-- Input with icons -->
    <div class="input-wrapper">
      <Input
        type="text"
        placeholder="Left icon with text..."
        inputStyle="box"
        icon="fa-search"
        iconType="left"
        isError="false"
      />
      <Input
        type="text"
        placeholder="Left icon with text..."
        inputStyle="vanity"
        icon="fa-search"
        iconType="left"
        isError="false"
      />
      <Input
        type="text"
        placeholder="Right icon with text..."
        inputStyle="box"
        icon="fa-search"
        iconType="right"
        isError="false"
      />
      <Input
        type="text"
        placeholder="Right icon with text..."
        inputStyle="vanity"
        icon="fa-search"
        iconType="right"
        isError="false"
      />
    </div>

    <!-- Input with icon texts -->
    <div class="input-wrapper">
      <Input
        type="text"
        placeholder="Text"
        inputStyle="box"
        label="USD"
        iconType="left"
        isError="false"
        inputData="10,000"
      />
      <Input
        type="text"
        placeholder="Text"
        inputStyle="vanity"
        label="USD"
        iconType="left"
        isError="false"
        inputData="10,000"
      />
      <Input
        type="text"
        placeholder="Text"
        inputStyle="box"
        label="Kg"
        iconType="right"
        isError="false"
        inputData="200"
      />
      <Input
        type="text"
        placeholder="Text"
        inputStyle="vanity"
        label="Kg"
        iconType="right"
        isError="false"
        inputData="200"
      />
    </div>
    <!-- Error State of input -->
    <div class="input-wrapper">
      <Input
        type="text"
        placeholder="Error Text..."
        inputStyle="box"
        isError="true"
      />
      <Input
        type="text"
        placeholder="Text..."
        inputStyle="vanity"
        inputData="Error Default text"
        isError="true"
      />
    </div>
  </div>
</template>

<script>
import Input from "./common-components/Input";
export default {
  name: "input-component",
  components: {
    Input
  },
  methods: {
    onInputKeyUp(value) {
      // eslint-disable-next-line no-console
      console.log(value + " on key up value");
    },
    onInputBlur(value) {
      // eslint-disable-next-line no-console
      console.log(value + " on blur of input component");
    }
  }
};
</script>

<style lang="scss">
.input-wrapper {
  display: flex;
  padding-top: 2%;
  margin: 0 auto;
  width: 70%;
}
</style>
