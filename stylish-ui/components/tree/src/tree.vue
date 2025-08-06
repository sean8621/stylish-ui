<template>
  <div class="s-tree">
    <s-tree-node
      v-for="node in treeData"
      :key="node[props.nodeKey]"
      :node="node"
      v-bind="$attrs"
      @handleClickNode="emit('handleClickNode', $event)"
      @changeCheckStatus="changeCheckStatus"
    />
  </div>
</template>

<script setup>
import { TreeProps, TreeNodeEmits } from "./tree";
import sTreeNode from "./tree-node.vue";
import { ref, watch } from "vue";

const props = defineProps(TreeProps);
const emit = defineEmits(TreeNodeEmits);

defineOptions({
  name: "s-tree",
});

const treeData = ref([]);

watch(
  () => props.data,
  (newValue) => {
    treeData.value = newValue;
  },
  { immediate: true }
);

const changeCheckStatus = (node) => {
  findeNode(treeData.value, node[props.nodeKey], changeAllCheckStatus);
};

const findeNode = (data, id, handleFun) => {
  let obj = null;
  for (let item of data) {
    if (item[props.nodeKey] === id) {
      obj = item;
      handleFun(item);
      break;
    } else if (item.children && item.children.length) {
      const res = findeNode(item.children, id, handleFun);
      if (res) obj = res;
    }
  }
  return obj;
};

const changeAllCheckStatus = (node) => {
  node.isChecked = !node.isChecked;
  if (node.children && node.children.length) {
    changeChildCheckStatus(node.children, node.isChecked);
  }
  changeParentCheckStatus(treeData.value, node[props.nodeKey]);
};

const changeChildCheckStatus = (children, isChecked) => {
  children.forEach((node) => {
    node.isChecked = isChecked;
    if (node.children && node.children.length)
      changeChildCheckStatus(node.children, isChecked);
  });
};

const changeParentCheckStatus = (children, id, parent) => {
  for (let item of children) {
    if (item[props.nodeKey] === id) {
      const result = children.every((item) => item.isChecked === true);
      if (parent && parent.isChecked === result) {
        break;
      } else if (parent && parent.isChecked !== result) {
        parent.isChecked = result;
        parent && changeParentCheckStatus(treeData.value, parent[props.nodeKey]);
      }
    } else if (item.children && item.children.length) {
      changeParentCheckStatus(item.children, id, item);
    }
  }
};

const getCheckedNodes = () => {
  const checkedNodes = [];
  getChecked(treeData.value, checkedNodes);
  return checkedNodes.map((item) => item[props.nodeKey]);
};

const getChecked = (data, checkedNodes) => {
  for (let item of data) {
    if (item.isChecked) {
      checkedNodes.push(item);
    }
    if (item.children && item.children.length) {
      getChecked(item.children, checkedNodes);
    }
  }
};

defineExpose({
  getCheckedNodes,
});

</script>
