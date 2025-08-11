export const PaginationProps = {
  total: {
    type: Number,
    default: 0,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  showJump: {
    type: Boolean,
    default: false,
  },
};

export const PaginationEmits = ["update:current-page", "current-change"];
