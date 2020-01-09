<template>
  <div class="radio-component">
    <Radio :radioData="radioData1" @onRadioSelect="onRadioSelect"></Radio>
  </div>
</template>

<script>
import Radio from "./common-components/Radio";

export default {
  name: "radio-component",
  components: {
    Radio
  },
  data() {
    return {
      radioData1: [
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
    onRadioSelect(selectedBox) {
      // eslint-disable-next-line no-console
      console.log(selectedBox);
    }
  }
};
</script>

<style lang="scss">
.radio-component {
  padding-top: 1%;
  margin: 0 auto;
  width: 70%;
}
</style>
