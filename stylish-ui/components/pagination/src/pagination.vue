<template>
  <div class="s-pagination">
    <ul class="s-pagination-list">
      <li
        class="s-pagination-pre s-icon icon-arrow-left-bold s-pagination-item"
        :style="{
          cursor: firstPage === currentPage ? 'not-allowed' : 'pointer',
          color: firstPage === currentPage ? '#ccc' : null,
        }"
        @click="handlePageGo('retreat', 1)"
      ></li>
      <li
        class="s-pagination-item"
        :class="{
          's-pagination-item__active': firstPage === props.currentPage,
        }"
        @click="handleChangeCurrentPage(firstPage)"
      >
        {{ firstPage }}
      </li>
      <li
        :class="`s-pagination-item s-icon ${frontIcon}`"
        v-if="showFrontEllipsis"
        @mouseenter="handleMouseOver('left')"
        @mouseleave="handleMouseLeave('left')"
        @click="handlePageGo('retreat', 5)"
      ></li>
      <li
        v-for="page in centerPages"
        class="s-pagination-item"
        :class="{ 's-pagination-item__active': page === props.currentPage }"
        @click="handleChangeCurrentPage(page)"
      >
        {{ page }}
      </li>
      <li
        :class="`s-pagination-item s-icon ${endIcon}`"
        v-if="showEndEllipsis"
        @mouseenter="handleMouseOver('right')"
        @mouseleave="handleMouseLeave('right')"
        @click="handlePageGo('forward', 5)"
      ></li>
      <li
        class="s-pagination-item"
        :class="{ 's-pagination-item__active': lastPage === props.currentPage }"
        @click="handleChangeCurrentPage(lastPage)"
      >
        {{ lastPage }}
      </li>
      <li
        class="s-pagination-next s-icon icon-arrow-right-bold s-pagination-item"
        :style="{
          cursor: lastPage === currentPage ? 'not-allowed' : 'pointer',
          color: lastPage === currentPage ? '#ccc' : null,
        }"
        @click="handlePageGo('forward', 1)"
      ></li>
    </ul>
    <div class="s-pagination__jump" v-if="showJump">
      <span>跳转到</span>
      <input
        type="number"
        v-model="goToNum"
        class="s-pagination__editor"
        @keydown.enter="handleGoToPage"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { PaginationProps, PaginationEmits } from "./pagination";

defineOptions({
  name: "s-pagination",
});

const props = defineProps(PaginationProps);
const emit = defineEmits(PaginationEmits);

// 根据总数和每页数量计算出页数
const pageCount = computed(() => {
  return [...Array(Math.ceil(props.total / props.pageSize)).keys()].map(
    (i) => i + 1
  );
});
const showFrontEllipsis = ref(false); //是否显示前面省略号
const showEndEllipsis = ref(false); //是否显示后面省略号

const firstPage = 1; //第一页
const lastPage = computed(() => pageCount.value.length); //最后一页

// 中间页码
const centerPages = computed(() => {
  const center = pageCount.value.slice(1, pageCount.value.length - 1);
  if (pageCount.value.length > 7) {
    if (props.currentPage === 1) {
      showFrontEllipsis.value = false;
      showEndEllipsis.value = true;
      return center.slice(0, 5);
    } else if (props.currentPage === lastPage.value) {
      showFrontEllipsis.value = true;
      showEndEllipsis.value = false;
      return center.slice(-5);
    } else if (center.indexOf(props.currentPage) < 3) {
      showFrontEllipsis.value = false;
      showEndEllipsis.value = true;
      return center.slice(0, 5);
    } else if (center.indexOf(props.currentPage) > center.length - 4) {
      showFrontEllipsis.value = true;
      showEndEllipsis.value = false;
      return center.slice(-5);
    } else {
      showEndEllipsis.value = true;
      showFrontEllipsis.value = true;
      const center = [
        props.currentPage - 2,
        props.currentPage - 1,
        props.currentPage,
        props.currentPage + 1,
        props.currentPage + 2,
      ];
      return center;
    }
  } else {
    return center;
  }
});
const handleChangeCurrentPage = (page) => {
  emit("update:current-page", page);
};

const frontIcon = ref("icon-elipsis");
const endIcon = ref("icon-elipsis");

const handleMouseOver = (direction) => {
  if (direction === "left") {
    frontIcon.value = "icon-arrow-double-left";
  } else {
    endIcon.value = "icon-arrow-double-right";
  }
};

const handleMouseLeave = (direction) => {
  if (direction === "left") {
    frontIcon.value = "icon-elipsis";
  } else {
    endIcon.value = "icon-elipsis";
  }
};

const goToNum = ref(null);
const handlePageGo = (direction, num) => {
  if (
    (direction === "forward" && props.currentPage === lastPage.value) ||
    (direction === "backward" && props.currentPage === firstPage)
  ) {
    return;
  }
  if (direction === "forward") {
    emit(
      "update:current-page",
      props.currentPage + num > lastPage.value
        ? lastPage.value
        : props.currentPage + num
    );
  } else {
    emit(
      "update:current-page",
      props.currentPage - num < firstPage ? firstPage : props.currentPage - num
    );
  }
};

const handleGoToPage = () => {
  if (goToNum.value) {
    const targetPageNum =
      goToNum.value < 0
        ? 1
        : goToNum.value > lastPage.value
        ? lastPage.value
        : goToNum.value;
    goToNum.value = targetPageNum;
    emit("update:current-page", targetPageNum);
  }
};
</script>

<style scoped></style>
