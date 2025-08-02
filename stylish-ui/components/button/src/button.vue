<template>
  <button
    class="s-button"
    :class="[
      `s-button--${type}`,
      `${size && 's-button--' + size}`,
      { 'is-round': round },
    ]"
    :disabled="disabled"
  >
    <div class="s-button__inner">
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </div>
  </button>
</template>

<script setup>
import { ButtonProps } from "./button";
defineOptions({
  name: "s-button",
});

const BUTTON_TYPE = ["primary", "success", "warning", "info", "danger"];
const BUTTON_SIZE = ["large", "default", "small", "mini"];

defineProps(ButtonProps);
</script>

<style scoped lang="less">
.s-button {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #fff;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  font-weight: 500;
  line-height: 1;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  min-width: 98px;
  padding: 12px 18px;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  &:hover:not(:disabled) {
    box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  }
}

.s-button > .button__inner {
  display: flex;
  align-items: center;
}

.s-button.s-button--medium {
  min-width: 108px;
  padding: 10px 18px;
}

.s-button.s-button--small {
  min-width: 92px;
  padding: 10px 18px;
}
.s-button.s-button--mini {
  min-width: 80px;
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.s-button.s-button--icon {
  min-width: 40px;
  padding: 8px 15px;
  font-size: 18px;
  border-radius: 4px;
}
.s-button.is-round {
  box-sizing: border-box;
  border-radius: 20px;
}

.s-button.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.s-button__default {
  color: var(--s-primary);
  background-color: transparent;
  &:active:not(:disabled) {
    background: #e6e6e6;
    border-color: #e6e6e6;
    color: var(--s-default);
    box-shadow: 0 0 0 transparent;
  }
}

.s-button__primary {
  color: #fff;
  background-color: var(--s-primary);
  border-color: var(--s-primary);
  &:active:not(:disabled) {
    background: #324cdd;
  }
}
.s-button__success {
  color: #fff;
  background-color: var(--s-success);
  border-color: var(--s-success);
  &:active:not(:disabled) {
    background: #24a46d;
  }
}
.s-button__warning {
  color: #fff;
  background-color: var(--s-warning);
  border-color: var(--s-warning);
  &:active:not(:disabled) {
    background: #fa3a0e;
  }
}

.s-button__info {
  color: #fff;
  background-color: var(--s-info);
  border-color: var(--s-info);
  &:active:not(:disabled) {
    background: #0da5c0;
  }
}

.s-button__danger {
  color: #fff;
  background-color: var(--s-danger);
  border-color: var(--s-danger);
  &:active:not(:disabled) {
    background: #ec0c38;
  }
}
</style>
