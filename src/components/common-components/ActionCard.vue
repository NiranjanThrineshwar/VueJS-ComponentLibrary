<template>
  <div class="action-card-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ActionCard"
};
</script>

<style lang="scss">
@import "../../styles/base.scss";
.action-card-container {
  width: 100%;
  display: block;
  background-color: $color--grey-secondary;
  padding: 20px;
}
</style>
