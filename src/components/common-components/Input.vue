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
      v-model="inputData"
      @blur="handleKeyUp"
      @focus="handleInputFocus"
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
      focused: false
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
  methods: {
    handleKeyUp() {
      // eslint-disable-next-line no-console
      console.log(`Input Data ${this.inputData}`);
      this.focused = false;
    },
    handleInputFocus() {
      this.focused = true;
    }
  }
};
</script>

<style lang="scss">
.form-input {
  width: 100%;
  display: flex;
  transition: all 0.5s ease-in-out;
  height: 42px;
  margin: 4px;
}

.input--box.input--error {
  border: 1px solid rgba(211, 20, 20, 0.5);

  &:hover {
    border: 1px solid rgba(211, 20, 20, 1);
  }
}

.input--box.input--valid {
  border: 1px solid rgba(0, 0, 0, 0.5);

  &:hover {
    border: 1px solid rgba(0, 0, 0, 1);
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
  border: 3px solid black;
}

.input--box.input--error.in-focus {
  padding: 0px;
  border: 3px solid rgba(211, 20, 20, 1);
}

.input--vanity.input--error {
  border-bottom: 1px solid rgba(211, 20, 20, 0.5);

  &:hover {
    border-bottom: 3px solid rgba(211, 20, 20, 1);
  }
}

.input--vanity.input--valid {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  &:hover {
    border-bottom: 3px solid rgba(0, 0, 0, 1);
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
  border-bottom: 3px solid rgba(211, 20, 20, 1);
}

.input--box.input--error.in-focus {
  padding: 0px;
  border: 3px solid rgba(211, 20, 20, 1);
}
</style>
