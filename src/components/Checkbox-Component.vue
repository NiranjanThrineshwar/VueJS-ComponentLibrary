<template>
  <div class="checkbox-component">
    <Checkbox
      :checkboxData="checkboxData1"
      @onCheckboxSelect="onCheckboxSelect"
    ></Checkbox>
    <Checkbox
      :checkboxData="checkboxData2"
      @onCheckboxSelect="onCheckboxSelect"
    ></Checkbox>
  </div>
</template>

<script>
import Checkbox from "./common-components/Checkbox";

export default {
  name: "checkbox-component",
  components: {
    Checkbox
  },
  data() {
    return {
      checkboxData1: [
        {
          primaryLabel: "I agree to the terms",
          secondaryLabel:
            "You might like to read our full <a href='#'>  terms & conditions.</a>",
          isChecked: false,
          isdisbaled: false,
          additionalClasses: ""
        }
      ],
      checkboxData2: [
        {
          primaryLabel: "Apples",
          secondaryLabel: "",
          isChecked: false,
          isdisbaled: false,
          additionalClasses: ""
        },
        {
          primaryLabel: "Bananas",
          secondaryLabel: "",
          isChecked: true,
          isdisbaled: false,
          additionalClasses: ""
        },
        {
          primaryLabel: "Oranges",
          secondaryLabel: "",
          isChecked: false,
          isdisbaled: true,
          additionalClasses: ""
        },
        {
          primaryLabel: "Pears",
          secondaryLabel: "",
          isChecked: false,
          isdisbaled: false,
          additionalClasses: ""
        }
      ]
    };
  },
  methods: {
    onCheckboxSelect(selectedBox) {
      // eslint-disable-next-line no-console
      console.log(selectedBox);
    }
  }
};
</script>

<style lang="scss">
.checkbox-component {
  padding-top: 1%;
  margin: 0 auto;
  width: 70%;
}
</style>
