<template>
  <div
    :class="[
      'form-input',
      inputStyle === 'vanity' ? 'input--vanity' : 'input--box',
      focused ? 'in-focus' : '',
      isError === 'true' ? 'input--error' : 'input--valid'
    ]"
  >
    <i v-if="icon && iconType === 'left'" :class="['icon--left fas', icon]"></i>
    <span v-if="label && iconType === 'left'">{{ label }}</span>
    <input
      :type="type"
      :placeholder="placeholder"
      :class="[
        'input form-input__field',
        disabled ? 'button--' + disabled : ''
      ]"
      v-model="enteredData"
      @blur="handleInputBlur"
      @focus="handleInputFocus"
      @keyup="handleKeyUp"
    />
    <span v-if="label && iconType === 'right'">{{ label }}</span>
    <i
      v-if="icon && iconType === 'right'"
      :class="['icon--right fas', icon]"
    ></i>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      focused: false,
      enteredData: this.inputData
    };
  },
  props: {
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
  watch: {
    inputData: function(newVal) {
      this.enteredData = newVal;
    }
  },
  methods: {
    handleKeyUp() {
      this.$emit("onInputKeyUp", this.enteredData);
    },
    handleInputFocus() {
      this.focused = true;
      this.$emit("onInputFocus");
    },
    handleInputBlur() {
      this.focused = false;
      this.$emit("onInputBlur", this.enteredData);
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/base.scss";

.form-input {
  width: 100%;
  display: flex;
  transition: all 0.5s ease-in-out;
  height: 42px;
  margin: 4px;
}

.input--box.input--error {
  border: 1px solid $color--error--light;

  &:hover {
    border: 1px solid $color--error;
  }
}

.input--box.input--valid {
  border: 1px solid $color--black--light;

  &:hover {
    border: 1px solid $color--black;
  }
}

.input--box {
  border-radius: 3px;
  padding: 2px;

  input {
    width: 100%;
    height: 40px;
    padding-left: 1%;
    outline: none;
    border: none;
  }

  i,
  span {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0px 6px;
  }
}

.input--box.input--valid.in-focus {
  padding: 0px;
  border: 3px solid $color--black;
}

.input--box.input--error.in-focus {
  padding: 0px;
  border: 3px solid $color--error;
}

.input--vanity.input--error {
  border-bottom: 1px solid $color--error--light;

  &:hover {
    border-bottom: 3px solid $color--error;
  }
}

.input--vanity.input--valid {
  border-bottom: 1px solid $color--black--light;

  &:hover {
    border-bottom: 3px solid $color--black;
  }
}

.input--vanity {
  padding: 1px;

  input {
    width: 100%;
    height: 40px;
    padding-left: 1%;
    outline: none;
    border: none;
  }

  i,
  span {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0px 6px;
  }
}

.input--vanity.in-focus {
  border-bottom: 3px solid $color--black;
}

.input--box.input--error.in-focus {
  padding: 0px;
  border: 3px solid $color--error;
}
</style>
