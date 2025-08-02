const BUTTON_TYPE = ["primary", "success", "warning", "info", "danger"];
const BUTTON_SIZE = ["", "large", "medium", "small", "mini"];

export const ButtonProps = {
  // 类型
  type: {
    type: String,
    default: "default",
    validator(value: string) {
      return BUTTON_TYPE.includes(value);
    },
  },
  // 尺寸
  size: {
    type: String,
    default: "",
    validator(value: string) {
      return BUTTON_SIZE.includes(value);
    },
  },
  // 圆角
  round: {
    type: String,
    default: "",
  },
  // 禁用
  disabled: {
    type: Boolean,
    default: false,
  },
};
