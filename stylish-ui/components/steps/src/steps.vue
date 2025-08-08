<template>
  <!-- 步骤条 -->
  <div class="s-steps">
    <slot></slot>
  </div>
</template>

<script setup>
import { StepsProps } from "./steps";
import { provide, ref, computed } from "vue";

const props = defineProps(StepsProps);

defineOptions({ name: "s-steps" });

const stepsUids = ref([]);
const stepIndexCounter = ref(0);

// 获取下一个步骤的索引
const getNextStepIndex = () => {
  stepsUids.value.push(stepIndexCounter.value)
  return stepIndexCounter.value++;
};

const active = computed(() => props.active);

provide("active", active);
provide("align", props.align);
provide("stepsUids", stepsUids);
provide("getNextStepIndex", getNextStepIndex);
</script>
