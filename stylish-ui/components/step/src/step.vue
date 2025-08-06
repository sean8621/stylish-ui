<template>
  <div
    class="s-step"
    :class="{
      is_complete: (currentIndex || 0) <= active - 1,
      is_begining: (currentIndex || 0) === active,
      's-step__center': align === 'center',
      is_last_step: currentIndex === stepsUids.length - 1,
    }"
  >
    <div class="s-step__head">
      <span class="s-step__icon s-icon"> {{ currentIndex + 1 }} </span>
      <div class="s-step__line"></div>
    </div>
    <div class="s-step__content">
      <div class="s-step__title">{{ title }}</div>
      <div class="s-step__description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
import { StepsProps } from "./step";
import { getCurrentInstance, computed, inject, ref } from "vue";

const props = defineProps(StepsProps);
defineOptions({ name: "s-step" });

const instance = getCurrentInstance();
const stepsUids = inject("stepsUids");
const active = inject("active");
const align = inject("align");

const currentIndex = computed(() => {
  return stepsUids.value.findIndex((uid) => uid === instance.uid);
});
</script>
