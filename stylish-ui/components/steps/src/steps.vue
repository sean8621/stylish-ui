<template>
  <div class="s-steps">
    <slot></slot>
  </div>
</template>

<script setup>
import { StepsProps } from "./steps";
import { onMounted, provide, ref, getCurrentInstance, computed } from "vue";

const props = defineProps(StepsProps);

defineOptions({ name: "s-steps" });

const stepsUids = ref([]);
onMounted(() => {
  getStepUids();
});

const getStepUids = () => {
  const instance = getCurrentInstance();
  const defaultSlots = instance.subTree.children.find(
    (t) => t.key === "_default"
  );
  if (defaultSlots) {
    stepsUids.value = defaultSlots.children
      .filter((vnode) => vnode.type.name === "s-step")
      .map((v) => v.component.uid);
  }
};

const active = computed(() => props.active);

provide("active", active);
provide("align", props.align);
provide("stepsUids", stepsUids);
provide("getStepUids", getStepUids);
</script>
