<template>
  <button
    class="s-button"
    :class="[
      `s-button__${type}`,
      `${size && 's-button--' + size}`,
      { 'is-round': round },
      { 's-button--icon': icon },
      { 'is-disabled': disabled || loading },
    ]"
    :disabled="disabled || loading"
  >

    <div class="s-button__inner">
      <i v-if="loading" class="s-icon icon-loading"></i>
      <i v-if="icon" :class="['s-icon', `icon-${icon}`]"></i>
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

defineProps(ButtonProps);
</script>
