<template>
  <input class="test" />
</template>
<script>
export default {
  name: "Input",

  props: {
    type: {
      type: String,
      default: "default",
    },
    size: String,
    icon: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },

  computed: {
    _pFormItemSize() {
      return (this.pFormItem || {}).pFormItemSize;
    },
    buttonSize() {
      return this.size || this._pFormItemSize || (this.$pEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.pForm || {}).disabled;
    },
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style lang="less" scoped>
@import "./input.less";
</style>
