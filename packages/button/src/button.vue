<template>
  <button
    class="p-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'p-button--' + type : '',
      buttonSize ? 'p-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="p-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "Button",

  inject: {
    pForm: {
      default: "",
    },
    pFormItem: {
      default: "",
    },
  },

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
@import "./button.less";
</style>
