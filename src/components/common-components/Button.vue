<template>
  <div
    v-if="!isLink"
    :class="[
      'button',
      buttonType ? 'button--' + buttonType : '',
      buttonSize ? 'button--' + buttonSize : '',
      disabled ? 'button--' + disabled : '',
      clicked === true ? 'button-clicked' : 'not-clicked'
    ]"
    @click="handleButtonClick"
    v-click-outside="onButtonBlur"
  >
    <div v-if="icon" :class="'button--' + buttonType + '-text'">
      <i v-if="iconType === 'left'" :class="['icon--left fas', iconClass]"></i>
      <span>{{ buttonText }}</span>
      <i
        v-if="iconType === 'right'"
        :class="['icon--right fas', iconClass]"
      ></i>
    </div>
    <div v-else :class="'button--' + buttonType + '-text'">
      <span>{{ buttonText }}</span>
    </div>
  </div>
  <div
    v-else-if="isLink"
    :class="['button button--link', disabled ? 'button--' + disabled : '']"
    @click="handleButtonClick"
  >
    <span>{{ buttonText }}</span>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "button",
  data() {
    return {
      clicked: this.isClicked === "true" ? true : false
    };
  },
  props: {
    buttonType: String,
    buttonSize: String,
    buttonText: String,
    icon: String,
    iconType: String,
    iconClass: String,
    disabled: String,
    isLink: String,
    isClicked: String
  },
  methods: {
    handleButtonClick: function() {
      if (this.disabled) {
        return;
      }
      this.$data.clicked = true;
      this.$emit("handleButtonClick", this.$props.buttonType);
    },
    onButtonBlur: function() {
      this.$data.clicked = false;
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style lang="scss">
.button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 2px;
  border: 3px solid #00233d;
  cursor: pointer;

  .button--primary-text,
  .button--secondary-text,
  .button--tertiary-text {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon--right {
      padding-left: 2%;
    }
    .icon--left {
      padding-right: 2%;
    }
  }

  .button--primary-text {
    background: #00233d;
  }
  .button--secondary-text {
    background: #42b0d5;
  }

  .button--tertiary-text {
    background: #b80012;
  }

  &:hover {
    .button--primary-text {
      background: rgba(0, 35, 61, 0.8);
    }
    .button--secondary-text {
      background: rgba(66, 176, 213, 0.8);
    }

    .button--tertiary-text {
      background: rgba(184, 0, 18, 0.8);
    }
  }
}

.button.button-clicked {
  div {
    width: 98%;
    height: 43px;
  }
}

.button--primary {
  color: white;
  border: 3px solid #00233d;
}

.button--secondary {
  color: white;
  border: 3px solid #42b0d5;
}

.button--tertiary {
  color: white;
  border: 3px solid #b80012;
}

.button--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  .button--primary-text {
    background: rgba(0, 35, 61, 0.8);
  }
  .button--secondary-text {
    background: rgba(66, 176, 213, 0.8);
  }

  .button--tertiary-text {
    background: rgba(184, 0, 18, 0.8);
  }
}

.button--small {
  min-height: 40px;

  .button--primary-text,
  .button--secondary-text,
  .button--tertiary-text {
    height: 40px;
  }
}

.button.button-clicked.button--small {
  div {
    width: 98%;
    height: 32px;
  }
}

.button.button--link {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  border: none;
  border-radius: 0px;
  border: none;
  cursor: pointer;

  span {
    color: #42b0d5;
    border-bottom: 1px solid #42b0d5;

    &:hover {
      color: rgba(0, 35, 61, 0.8);
      border-bottom: 1px solid rgba(0, 35, 61, 0.8);
    }
  }
}

.button.button--link.button--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  span {
    color: #706c6ce1;
    border-bottom: 1px solid #706c6ce1;
  }
}
</style>
