<template>
  <div
    :class="[
      's-table',
      border ? 's-table--border' : '',
      verticalOverflow ? 's-table__has_scroll' : '',
    ]"
    ref="tableRef"
  >
    <div class="s-table__thead-wrapper" style="overflow: hidden">
      <table class="s-table__thead">
        <colgroup>
          <col
            v-for="colItem in columnData"
            :key="'table_col_' + colItem.key"
            :width="colItem.width || averageWidth"
          />
          <col width="8" v-if="verticalOverflow" />
        </colgroup>
        <thead>
          <tr>
            <th
              v-for="theadItem in columnData"
              :key="theadItem.key"
              :class="{
                't-table__fixed-column': theadItem.fixed,
                't-table__fixed-column--left': theadItem.fixed === 'left',
                't-table__fixed-column--right': theadItem.fixed === 'right',
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
            v-for="colItem in columnData"
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
              v-for="(colItem, i) in columnData"
              :key="'table_col_' + i"
              :class="{
                't-table__fixed-column': colItem.fixed,
                't-table__fixed-column--left': colItem.fixed === 'left',
                't-table__fixed-column--right': colItem.fixed === 'right',
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
const MIN_COLUMN_WIDTH = 50; //自动分配的最小列宽
const horizontalOverflow = ref(false);

const listenScroll = (e) => {
  theadWrapperRef.value.scrollLeft = e.target.scrollLeft;
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

watch(
  () => props.columnData,
  () => {
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
