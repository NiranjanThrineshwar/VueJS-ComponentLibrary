<template>
  <div id="button-component">
    <!-- Normal Buttons -->
    <div class="button-wrapper">
      <Button
        buttonType="primary"
        buttonText="Primary Button"
        @handleButtonClick="handleButtonClick"
        isClicked="true"
      ></Button>
      <Button
        buttonType="secondary"
        buttonText="Secondary Button"
        @handleButtonClick="handleButtonClick"
      ></Button>
      <Button
        buttonType="tertiary"
        buttonText="Danger Button"
        @handleButtonClick="handleButtonClick"
      ></Button>
    </div>

    <!-- Buttons with icons -->
    <div class="button-wrapper">
      <Button
        buttonType="primary"
        buttonText="Primary Button Clicked"
        icon="true"
        iconType="right"
        iconClass="fa-coffee"
        @handleButtonClick="handleButtonClick"
      ></Button>
      <Button
        buttonType="secondary"
        buttonText="Secondary Button"
        icon="true"
        iconType="left"
        iconClass="fa-spinner"
        @handleButtonClick="handleButtonClick"
      ></Button>
      <Button
        buttonType="tertiary"
        buttonText="Danger Button"
        icon="true"
        iconType="right"
        iconClass="fa-arrow-circle-right"
        @handleButtonClick="handleButtonClick"
      ></Button>
    </div>

    <!-- Buttons disabled -->
    <div class="button-wrapper">
      <Button
        buttonType="primary"
        buttonText="Primary Button Disabled"
        icon="true"
        iconType="right"
        disabled="disabled"
        iconClass="fa-coffee"
        @handleButtonClick="handleButtonClick"
      ></Button>
      <Button
        buttonType="secondary"
        buttonText="Secondary Button Disabled"
        icon="true"
        iconType="right"
        disabled="disabled"
        iconClass="fa-spinner"
        @handleButtonClick="handleButtonClick"
      ></Button>
      <Button
        buttonType="tertiary"
        buttonText="Danger Button Disabled"
        icon="true"
        iconType="left"
        disabled="disabled"
        iconClass="fa-arrow-circle-right"
        @handleButtonClick="handleButtonClick"
      ></Button>
    </div>

    <!-- Small Buttons -->
    <div class="button-wrapper">
      <Button
        buttonType="primary"
        buttonText="Primary Button small size"
        buttonSize="small"
        @handleButtonClick="handleButtonClick"
      ></Button>
      <Button
        buttonType="secondary"
        buttonText="Secondary Button small size"
        buttonSize="small"
        icon="true"
        iconClass="fa-spinner"
        @handleButtonClick="handleButtonClick"
      ></Button>
      <Button
        buttonType="tertiary"
        buttonText="Danger Button small size"
        buttonSize="small"
        disabled="disabled"
        @handleButtonClick="handleButtonClick"
      ></Button>
    </div>

    <!-- Link Buttons -->
    <div class="button-wrapper">
      <Button
        isLink="true"
        buttonText="Primary button link"
        @handleButtonClick="handleButtonClick"
      ></Button>
      <Button
        isLink="true"
        disabled="disabled"
        buttonText="Primary button link disabled"
        @handleButtonClick="handleButtonClick"
      ></Button>
    </div>
  </div>
</template>

<script>
import Button from "./common-components/Button";

export default {
  name: "button-component",
  components: {
    Button
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
.button-wrapper {
  display: flex;
  padding-top: 2%;
  margin: 0 auto;
  width: 70%;
}
</style>
