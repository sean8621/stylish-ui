const MESSAGE_TYPE = ["success", "warning", "info", "error"];

export const Props = {
  type: {
    type: String,
    default: "",
    validator(value: string) {
      return MESSAGE_TYPE.includes(value);
    },
  },
  message: {
    type: String,
    default: "",
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3000,
  },
};
