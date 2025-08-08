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
      <span
        class="s-step__icon s-icon"
        :class="`${icon ? 'icon-' + icon : ''}`"
      >
        <template v-if="!$slots.icon">{{
          icon ? "" : currentIndex + 1
        }}</template>
        <slot name="icon" v-else></slot>
      </span>
      <div
        class="s-step__line"
        v-if="currentIndex !== stepsUids.length - 1"
      ></div>
    </div>
    <div class="s-step__content">
      <div class="s-step__title">{{ title }}</div>
      <div class="s-step__description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
import { StepProps } from "./step";
import {
  inject,
  ref,
  onMounted
} from "vue";

const props = defineProps(StepProps);
defineOptions({ name: "s-step" });

const stepsUids = inject("stepsUids");
const active = inject("active");
const align = inject("align");
const getNextStepIndex = inject("getNextStepIndex");
// 获取当前步骤的索引
const currentIndex = ref(-1);
onMounted(() => {
  if (getNextStepIndex) {
    currentIndex.value = getNextStepIndex();
  }
});
</script>
