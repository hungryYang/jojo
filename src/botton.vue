<template>
  <button class="jo-button">按钮</button>
</template>
<script>
  export default {}
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
