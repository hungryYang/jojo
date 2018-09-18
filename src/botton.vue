<template>
  <button class="jo-button" @click="$emit('click')">
    <jo-icon class="icon" :name="icon" :class="{[`icon-${iconPosition}`]: true}" v-if="icon && !loading"></jo-icon>
    <jo-icon v-if="loading" name="loading" class="icon icon-loading" :class="{[`icon-${iconPosition}`]: true}"></jo-icon>
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
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style lang="scss">
  .jo-button {
    @keyframes loading {
      0% {
        transform: 0;
      }

      100% {
        transform: rotate(360deg);
      }
    }

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

      &-loading {
        animation: loading 2s infinite linear;
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