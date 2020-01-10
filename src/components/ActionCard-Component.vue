<template>
  <div class="action-card-wrapper">
    <ActionCard>
      <div class="action-card--slot">
        <i class="fas fa-search"></i>
        <span>Ipsum ducimus incidunt</span>
      </div>
      <div class="action-dropdown--wrapper">
        <Dropdown
          :dropdownData="dropdownData1"
          defaultValue="India"
          dropdownType="vanity"
          @onSelect="onDropdownSelect"
        ></Dropdown>
      </div>
      <div class="action-button-wrapper">
        <Button
          buttonType="primary"
          buttonText="Primary Button"
          @handleButtonClick="handleButtonClick"
        ></Button>
      </div>
    </ActionCard>
  </div>
</template>

<script>
import ActionCard from "./common-components/ActionCard";
import Dropdown from "./common-components/Dropdown";
import Button from "./common-components/Button";

export default {
  name: "action-card-component",
  components: {
    ActionCard,
    Dropdown,
    Button
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
    },
    handleButtonClick: function(event) {
      // eslint-disable-next-line no-console
      console.log(event + " Button Clicked");
    }
  }
};
</script>

<style lang="scss">
.action-card-wrapper {
  display: flex;
  padding-top: 1%;
  margin: 0 auto;
  width: 70%;
  justify-content: left;
  text-align: left;

  .action-card--slot {
    padding-bottom: 10px;

    i {
      padding-right: 10px;
    }
  }

  .action-dropdown--wrapper {
    padding-bottom: 20px;
  }

  .action-button-wrapper {
    width: 20%;
  }
}
</style>
