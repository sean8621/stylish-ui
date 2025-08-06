<template>
  <div class="s-tree-node">
    <div class="s-tree-node__content" @click="handleClickNode($event, node)">
      <div
        class="s-icon icon-arrow-right-filling"
        :style="{
          visibility:
            node.children && node.children.length > 0 ? 'visible' : 'hidden',
          transform: showChild ? 'rotateZ(90deg)' : '',
        }"
        @click.stop="showChild = !showChild"
      ></div>
      <span
        :class="`p-tree-node__checkbox ${getCheckType}`"
        @click.stop="changeCheckStatus(node)"
        v-if="props.showCheckbox"
      ></span>
      <span class="s-tree-node__label">{{ node.label }}</span>
    </div>
    <!-- children -->
    <div class="s-tree-node__children" v-if="showChild">
      <s-tree-node
        v-for="child in node.children"
        :key="child[props.nodeKey]"
        :node="child"
        :showCheckbox="showCheckbox"
        :node-key="props.nodeKey"
        :defaultExpandAll="props.defaultExpandAll"
        @handleClickNode="emit('handleClickNode', $event)"
        @changeCheckStatus="emit('changeCheckStatus', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { TreeNodeProps, TreeNodeEmits } from "./tree-node";

const props = defineProps(TreeNodeProps);
const emit = defineEmits(TreeNodeEmits);

defineOptions({
  name: "s-tree-node",
});

const showChild = ref(props.defaultExpandAll);

const handleClickNode = (e, node) => {
  emit("handleClickNode", { ...node, $event: e });
};

const getCheckType = computed(() => {
  let checkType = "";
  if (props.node.isChecked) {
    checkType = "all";
  } else if (
    props.node.children &&
    props.node.children.every((item) => item.isChecked === true)
  ) {
    checkType = "all";
  } else if (
    props.node.children &&
    props.node.children.some((item) => item.isChecked === true)
  ) {
    checkType = "some";
  } else {
    checkType = "none";
  }
  return checkType;
});

const changeCheckStatus = (node) => {
  emit("changeCheckStatus", node);
};
</script>
