<template>
  <div
    :class="`s-collapse-item ${
      opened.includes(name) ? 's-collapse-item--active' : ''
    }`"
  >
    <div class="s-collapse-item__header" @click="handleClickColllapse">
      <div class="s-collapse-item__header-title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div>
        <slot name="icon" :isActive="opened.includes(name)">
          <i class="s-icon icon-arrow-right"></i>
        </slot>
      </div>
    </div>
    <div class="s-collapse-item__content">
      <div class="s-collapse-item__reference">
        <div class="s-collapse-item__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { CollapseItemProps } from "./collapse-item";
defineOptions({
  name: "s-collapse-item",
});
const props = defineProps(CollapseItemProps);

const opened = inject("opened");
const changeOpened = inject("changeOpened");

const handleClickColllapse = () => {
  changeOpened(props.name);
};
</script>

<style scoped></style>
