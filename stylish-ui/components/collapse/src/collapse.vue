<template>
  <div class="s-collapes">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { CollapseProps } from "./collapse";
const props = defineProps(CollapseProps);
defineOptions({
  name: "s-collapse",
});
const opened = defineModel();

const changeOpened = (name) => {
  if (props.accordion) {
    opened.value = opened.value.includes(name) ? [] : [name];
  } else {
    opened.value.includes(name)
      ? (opened.value = opened.value.filter((item) => item !== name))
      : (opened.value = [...opened.value, name]);
  }
};

provide("opened", opened);
provide("changeOpened", changeOpened);
</script>

<style scoped></style>
