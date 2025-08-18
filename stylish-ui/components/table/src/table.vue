<template>
  <div
    :class="[
      's-table',
      border ? 's-table--border' : '',
      verticalOverflow ? 's-table__has_scroll' : '',
      `t-table__scroll-${scrollStatus}`,
    ]"
    ref="tableRef"
  >
    <div
      class="s-table__thead-wrapper"
      style="overflow: hidden"
      ref="theadWrapperRef"
    >
      <table class="s-table__thead">
        <colgroup>
          <col
            v-for="colItem in actualRenderColumns"
            :key="'table_col_' + colItem.key"
            :width="colItem.width || averageWidth"
          />
          <col width="8" v-if="verticalOverflow" />
        </colgroup>
        <thead>
          <tr>
            <th
              v-for="(theadItem, theadIndex) in actualRenderColumns"
              :key="theadItem.key"
              :class="{
                's-table__fixed-column': theadItem.fixed,
                's-table__fixed-column--left': theadItem.fixed === 'left',
                's-table__fixed-column--right': theadItem.fixed === 'right',
                's-table__fixed-column--first': queryFixedColumnIndex(
                  theadItem.fixed,
                  theadItem.key,
                  'first'
                ),
                's-table__fixed-column--last': queryFixedColumnIndex(
                  theadItem.fixed,
                  theadItem.key,
                  'last'
                ),
              }"
              :style="{
                left:
                  theadItem.fixed === 'left'
                    ? calcPosition(theadItem.fixed, theadIndex) + 'px'
                    : 'auto',
                right:
                  theadItem.fixed === 'right'
                    ? calcPosition(theadItem.fixed, theadIndex, 'thead') + 'px'
                    : 'auto',
              }"
            >
              <div
                class="cell"
                :style="{
                  textAlign: theadItem.align || 'left',
                }"
              >
                {{ theadItem.label }}
              </div>
            </th>
            <th
              v-if="verticalOverflow"
              :class="{
                's-table__fixed-column': fixedRightColumns.length,
              }"
              style="right: 0"
            ></th>
          </tr>
        </thead>
      </table>
    </div>
    <div
      class="s-table__tbody-wrapper"
      :style="{
        height: height ? height + 'px' : 'auto',
        overflow: height ? 'auto' : 'hidden',
      }"
      ref="tbodyWrapperRef"
    >
      <table class="s-table__tbody">
        <colgroup>
          <col
            v-for="colItem in actualRenderColumns"
            :key="'table_col_' + colItem.key"
            :width="colItem.width || averageWidth"
          />
        </colgroup>
        <tbody>
          <tr
            v-for="(rowItem, index) in tableData"
            :key="'table_row_' + index"
            :class="{
              's-table__tbody--stripe': stripe && index % 2 === 1,
            }"
          >
            <td
              v-for="(colItem, i) in actualRenderColumns"
              :key="'table_col_' + i"
              :class="{
                's-table__fixed-column': colItem.fixed,
                's-table__fixed-column--left': colItem.fixed === 'left',
                's-table__fixed-column--right': colItem.fixed === 'right',
                's-table__fixed-column--first': queryFixedColumnIndex(
                  colItem.fixed,
                  colItem.key,
                  'first'
                ),
                's-table__fixed-column--last': queryFixedColumnIndex(
                  colItem.fixed,
                  colItem.key,
                  'last'
                ),
              }"
              :style="{
                left:
                  colItem.fixed === 'left'
                    ? calcPosition(colItem.fixed, i) + 'px'
                    : 'auto',
                right:
                  colItem.fixed === 'right'
                    ? calcPosition(colItem.fixed, i) + 'px'
                    : 'auto',
              }"
            >
              <div
                class="cell"
                :style="{
                  textAlign: colItem.align || 'left',
                  justifyContent: colItem.align
                    ? justifyContentMap[colItem.align]
                    : 'flex-start',
                }"
              >
                <slot
                  :name="colItem.key"
                  v-bind="{ scoped: rowItem, $index: index }"
                >
                  {{ rowItem[colItem.key] }}
                </slot>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { TableProps } from "./table";
import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";
defineOptions({ name: "s-table" });
onMounted(() => {
  window.addEventListener("resize", calcColumnWidth);
  tbodyWrapperRef.value?.addEventListener("scroll", listenScroll);
});
onUnmounted(() => {
  window.removeEventListener("resize", calcColumnWidth);
  tbodyWrapperRef.value?.removeEventListener("scroll", listenScroll);
});

const props = defineProps(TableProps);

const tableRef = ref(null);
const averageWidth = ref(0);

const theadWrapperRef = ref(null);
const tbodyWrapperRef = ref(null);

const verticalOverflow = ref(false);
const MIN_COLUMN_WIDTH = 120; //自动分配的最小列宽
const horizontalOverflow = ref(false);

const scrollStatus = ref("start");
const listenScroll = (e) => {
  const scrollLeft = e.target.scrollLeft;
  scrollStatus.value =
    scrollLeft === 0
      ? "start"
      : scrollLeft + e.target.offsetWidth >= e.target.scrollWidth
      ? "end"
      : "center";
  theadWrapperRef.value.scrollLeft = scrollLeft;
};
const calcColumnWidth = () => {
  const tableWrapperWidth = tbodyWrapperRef.value.offsetWidth;
  const tbodyWrapperHeight = tbodyWrapperRef.value.offsetHeight;
  const scrollHeight = tbodyWrapperRef.value.scrollHeight;
  verticalOverflow.value = scrollHeight > tbodyWrapperHeight;

  const columnWidthArrs = props.columnData
    .filter((item) => item.width)
    .map((item) => Number(item.width));
  const sumOfColumnWidth = columnWidthArrs.reduce((x, y) => x + y, 0);

  if (
    sumOfColumnWidth +
      (props.columnData.length - columnWidthArrs.length) * MIN_COLUMN_WIDTH >
    tableWrapperWidth
  ) {
    horizontalOverflow.value = true;
    averageWidth.value = MIN_COLUMN_WIDTH;
  } else {
    horizontalOverflow.value = false;
    averageWidth.value = verticalOverflow.value
      ? (tableWrapperWidth - sumOfColumnWidth - 8) /
        (props.columnData.length - columnWidthArrs.length)
      : (tableWrapperWidth - sumOfColumnWidth) /
        (props.columnData.length - columnWidthArrs.length);
  }
};

const calcPosition = (direction, index, type) => {
  if (direction === "left") {
    const columnWidthArr = props.columnData
      .slice(0, index)
      .map((item) => (item.width ? Number(item.width) : MIN_COLUMN_WIDTH));
    return columnWidthArr.reduce((acc, cur) => acc + cur, 0);
  } else {
    const columnWidthArr = props.columnData
      .slice(index + 1)
      .map((item) => (item.width ? Number(item.width) : MIN_COLUMN_WIDTH));
    const rightDistance = columnWidthArr.reduce((acc, cur) => acc + cur, 0);
    return type === "thead" ? rightDistance + 8 : rightDistance;
  }
};

const fixedLeftColumns = ref();
const fixedRightColumns = ref();
const queryFixedColumnIndex = (direction, key, sequence) => {
  if (direction === "left" && sequence === "last") {
    const index = fixedLeftColumns.value.findIndex((item) => item.key === key);
    return index === fixedLeftColumns.value.length - 1;
  } else if (direction === "right" && sequence === "first") {
    const index = fixedRightColumns.value.findIndex((item) => item.key === key);
    return index === 0;
  } else {
    return false;
  }
};

const actualRenderColumns = ref([]); // 渲染的列
watch(
  () => props.columnData,
  () => {
    fixedLeftColumns.value = props.columnData.filter(
      (item) => item.fixed === "left"
    );
    fixedRightColumns.value = props.columnData.filter(
      (item) => item.fixed === "right"
    );
    const notFixedColumns = props.columnData.filter((item) => !item.fixed);
    actualRenderColumns.value = [
      ...fixedLeftColumns.value,
      ...notFixedColumns,
      ...fixedRightColumns.value,
    ];
    nextTick(() => {
      calcColumnWidth();
    });
  },
  { immediate: true }
);

const justifyContentMap = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};
</script>
