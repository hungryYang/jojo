<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted () {
      let nodes = this.$el.children
      for (let node of nodes) {
        if (node.nodeName.toLowerCase() !== 'button') {
          console.warn('jo-button-group子元素应全为jo-button')
        }
      }
    }
  }
</script>
<style lang="scss">
.button-group {
  display: inline-flex;
  vertical-align: middle;
  border-radius: var(--border-radius);
  .jo-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
}
</style>
