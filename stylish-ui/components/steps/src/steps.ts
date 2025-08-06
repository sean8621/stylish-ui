const STEPS_ALIGN = ["start", "center"];

export const StepsProps = {
  active: {
    type: Number,
    default: 0,
  },
  align: {
    type: String,
    default: "start",
    validator(value: string) {
      return STEPS_ALIGN.includes(value);
    },
  },
};
