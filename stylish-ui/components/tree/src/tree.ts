export const TreeProps = {
  // 数据
  data: {
    type: Array,
    default: () => [],
  },
  // 唯一标识
  nodeKey: {
    type: String,
    default: "id",
  },
};

export const TreeNodeEmits = ["handleClickNode"];
