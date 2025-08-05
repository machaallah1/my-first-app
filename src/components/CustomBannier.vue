<template>
    <div class="app">
        <slot name="top"></slot>
        <slot name="default"></slot>
        <slot name="bottom"></slot>
    </div>
</template>

<script>
export default {
  name: 'CustomBannier',
  props: {
    title: {
      type: String,
      default: "Custom Bannier"
    },
    topIcon: {
      type: String,
      default: ""
    },
    bottomIcon: {
      type: String,
      default: ""
    }
  }
}
</script>
<style lang="scss">
.app {
  text-align: center;
  color: #2c3e50;
  background-color: #dcdfd3;
  border-radius: 1rem;
  padding: 1rem;
}
</style>