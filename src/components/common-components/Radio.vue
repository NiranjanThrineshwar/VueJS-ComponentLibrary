<template>
  <div class="form-radio">
    <div
      :class="['form-radio--container', item.additionalClasses]"
      v-for="(item, index) in radioData"
      :key="index"
    >
      <label class="form-radio__label--container" :disabled="item.isdisbaled">
        {{ item.primaryLabel }}
        <input
          type="radio"
          :checked="item.isChecked"
          :disabled="item.isdisbaled"
          name="radio"
          @click="handleRadioClick(item, $event)"
        />
        <span class="form-radio__checkmark"></span>
        <label
          v-if="item.secondaryLabel"
          class="form-radio__label--secondary"
          v-html="item.secondaryLabel"
        >
        </label>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "radio",
  props: {
    radioData: Array[Object]
  },
  methods: {
    handleRadioClick(item, event) {
      item = { ...item, isChecked: event.target.checked };
      this.$emit("onRadioSelect", item);
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/base.scss";

.form-radio__label--container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;

  .form-radio__label--secondary {
    display: flex;
    font-size: $small;
    padding-top: 2px;

    a {
      padding-left: 4px;
      color: $color--secondary-anchor;

      &:hover {
        color: $color--grey;
        text-decoration: none;
      }
    }
  }
}

/* Hide the browser's default radio */
.form-radio__label--container {
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
}

/* Create a custom radio */
.form-radio__checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid $color--grey-light;
  background-color: $color--white;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.form-radio__label--container {
  input ~ .form-radio__checkmark {
    &:hover {
      border: 1px solid $color--grey;
    }
  }
  /* When the radio is checked, add a blue background */
  input {
    &:checked ~ .form-radio__checkmark {
      border: 2px solid $color--secondary-border;

      &:hover {
        border: 1px solid $color--grey-light;
      }
    }

    &:disabled ~ .form-radio__checkmark {
      cursor: not-allowed;
      background-color: $color--grey-secondary;
      border-color: $color--disabled-light;
    }
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .form-radio__checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input {
    &:checked ~ .form-radio__checkmark {
      &::after {
        display: block;
      }
    }
  }
}

/* Create the checkmark/indicator (hidden when not checked) */
.form-radio__checkmark {
  &::after {
    top: 6px;
    left: 6px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: $color--secondary-border;
  }
}
</style>
