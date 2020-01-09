<template>
  <div class="form-checkbox">
    <div
      :class="['form-checkbox--container', item.additionalClasses]"
      v-for="(item, index) in checkboxData"
      :key="index"
    >
      <label
        class="form-checkbox__label--container"
        :disabled="item.isdisbaled"
      >
        {{ item.primaryLabel }}
        <input
          type="checkbox"
          :checked="item.isChecked"
          :disabled="item.isdisbaled"
          :name="['form-checkbox__field--' + index]"
          v-model="item.isChecked"
          @click="handleCheckBoxClick(item, $event)"
        />
        <span class="form-checkbox__checkmark"></span>
        <label
          v-if="item.secondaryLabel"
          class="form-checkbox__label--secondary"
          v-html="item.secondaryLabel"
        >
        </label>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    checkboxData: Array[Object]
  },
  methods: {
    handleCheckBoxClick(item, event) {
      item = { ...item, isChecked: event.target.checked };
      this.$emit("onCheckboxSelect", item);
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/base.scss";

.form-checkbox__label--container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;

  .form-checkbox__label--secondary {
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

/* Hide the browser's default checkbox */
.form-checkbox__label--container {
  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
}

/* Create a custom checkbox */
.form-checkbox__checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 3px;
  border: 1px solid $color--grey-light;
  background-color: $color--white;
}

/* On mouse-over, add a grey background color */
.form-checkbox__label--container {
  input ~ .form-checkbox__checkmark {
    &:hover {
      border: 1px solid $color--grey;
    }
  }
  /* When the checkbox is checked, add a blue background */
  input {
    &:checked ~ .form-checkbox__checkmark {
      background-color: $color--secondary-border;

      &:hover {
        border: 1px solid $color--grey-light;
      }
    }

    &:disabled ~ .form-checkbox__checkmark {
      cursor: not-allowed;
      background-color: $color--grey-secondary;
      border-color: $color--disabled-light;
    }
  }

  /* Show the checkmark when checked */
  input {
    &:checked ~ .form-checkbox__checkmark {
      &::after {
        display: block;
      }
    }
  }
}

/* Create the checkmark/indicator (hidden when not checked) */
.form-checkbox__checkmark {
  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 7px;
    top: 1px;
    width: 5px;
    height: 11px;
    border: solid $color--white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
