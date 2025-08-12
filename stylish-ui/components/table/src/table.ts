export const TableProps = {
  columnData: {
    type: Array,
    default: () => [],
  },
  tableData: {
    type: Array,
    default: () => [],
  },
  stripe: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  height: {
    type: Number,
  },
  align: {
    type: String,
    default: "left",
  },
};
