<template>
  <button class="jo-button">
    <jo-icon class="icon" :name="icon" :class="{[`icon-${iconPosition}`]: true}" v-if="icon"></jo-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    props: {
      icon: {
        type: String
      },
      iconPosition: {
        type: String,
        default: 'left'
      }
    }
  }
</script>
<style lang="scss">
  .jo-button {
    vertical-align: middle;
    height: var(--button-height);
    padding: 0 1em;
    font: inherit;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;

    .icon {
      margin-right: .1em;
      &-right {
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }

      .content {
        order: 1;
      }
    }

    &:hover {
      border-color: var(--border-color-hover);
      position: relative;
      z-index: 1;
    }

    &:active {
      background: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }
  }
</style>