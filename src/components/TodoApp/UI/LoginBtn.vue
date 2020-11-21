<template>
  <div>
    <button
      class="btn"
      :class="btnStyle"
      v-bind="$attrs"
      v-on="$listeners"><slot /></button>
  </div>
</template>
<script>
export default {
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    background: #6A9D67;
    min-width: 130px;
    padding: 8px 16px;
    margin: 0;
    text-align: center;
    font-size: 14pt;
    font-weight: bold;
    color: #FFF;
    transition: background .15s ease, border .15s ease;
    cursor: pointer;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border: 2px solid #6A9D67;
    border-radius: 4px;
    outline: 0;
    &:hover{
      background: #588757;
      border-color: #588757;
  }
  .cancel {
    background-color: red;
    color: white;
    border: 1px solid transparent;
  }
}

</style>
