<template>
  <div class="s-message" :class="`s-message__${type}`">
    <i :class="`s-icon icon-${MESSAGE_ICON_NAME[type]}`"></i>
    <span class="s-message__text">{{ message }}</span>
    <i
      class="s-icon icon-close-bold s-message_close_icon"
      v-if="showClose"
      @click="close"
    ></i>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
import { Props } from "./message";

defineProps(Props);

const MESSAGE_ICON_NAME = {
  success: "minus-bold",
  info: "minus-bold",
  warning: "minus-bold",
  error: "minus-bold",
};

const emit = defineEmits(["close"]);

const instance = getCurrentInstance();
const close = () => {
  emit("close", instance.vnode.el.parentElement);
};
</script>
