<template>
  <div>
    <!-- button -->
    <h2>按钮</h2>
    <h3>Button</h3>
    <div>
      <s-button>default</s-button>
      <s-button type="primary">primary</s-button>
      <s-button type="success">success</s-button>
      <s-button type="info">info</s-button>
      <s-button type="warning">warning</s-button>
      <s-button type="danger">danger</s-button>
    </div>
    <h3>Button size</h3>
    <div style="margin-bottom: 10px">
      <s-button type="primary" size="small">primary</s-button>
      <s-button type="success" size="small">success</s-button>
      <s-button type="info" size="small">info</s-button>
      <s-button type="warning" size="small">warning</s-button>
      <s-button type="danger" size="small">danger</s-button>
    </div>
    <div>
      <s-button type="primary" size="mini">primary</s-button>
      <s-button type="success" size="mini">success</s-button>
      <s-button type="info" size="mini">info</s-button>
      <s-button type="warning" size="mini">warning</s-button>
      <s-button type="danger" size="mini">danger</s-button>
    </div>
    <h3>Button round</h3>
    <div style="margin-bottom: 10px">
      <s-button round>default</s-button>
      <s-button type="primary" round>primary</s-button>
      <s-button type="success" round>success</s-button>
      <s-button type="info" round>info</s-button>
      <s-button type="warning" round>warning</s-button>
      <s-button type="danger" round>danger</s-button>
    </div>

    <h3>Button disabled</h3>
    <div>
      <s-button type="primary" disabled>primary</s-button>
      <s-button type="success" disabled>success</s-button>
      <s-button type="info" disabled>info</s-button>
      <s-button type="warning" disabled>warning</s-button>
      <s-button type="danger" disabled>danger</s-button>
    </div>

    <h3>Button icon</h3>
    <div>
      <s-button type="primary" icon="chart-bar">primary</s-button>
      <s-button type="success" icon="calendar">success</s-button>
      <s-button type="info" icon="data-view"></s-button>
      <s-button type="primary" icon="download"></s-button>
    </div>

    <h3>Button loading</h3>

    <div>
      <s-button type="primary" :loading="loading">加载中</s-button>
    </div>

    <h2>消息</h2>
    <h3>Message</h3>
    <s-button type="success" @click="handleMessage('success')"
      >success</s-button
    >
    <s-button type="info" @click="handleMessage('info')">info</s-button>
    <s-button type="warning" @click="handleMessage('warning')"
      >warning</s-button
    >
    <s-button type="danger" @click="handleMessage('error')">danger</s-button>
    <h3>Message close</h3>
    <s-button type="success" @click="handleMessage('success', true)"
      >success</s-button
    >
    <s-button type="info" @click="handleMessage('info', true)">info</s-button>
    <s-button type="warning" @click="handleMessage('warning', true)"
      >warning</s-button
    >
    <s-button type="danger" @click="handleMessage('error', true)"
      >danger</s-button
    >
    <h3>Message time</h3>
    <s-button type="success" @click="handleMessage('success', true, 1000)"
      >1s</s-button
    >
    <s-button type="success" @click="handleMessage('success', true, 5000)"
      >5s</s-button
    >
    <h2>树形控件</h2>
    <h3>Tree</h3>
    <h3>基础树</h3>
    <s-tree :data="JSON.parse(JSON.stringify(treeData))" />
    <h3>可选择树</h3>
    <s-tree :data="JSON.parse(JSON.stringify(treeData))" showCheckbox />
    <h3>获取选中节点/设置选中节点</h3>
    <s-button type="primary" @click="getCheckedNodes">获取选中节点</s-button>
    <s-button type="primary" @click="setCheckedNodes">设置选中的key</s-button>
    <s-tree
      ref="treeRef"
      :data="JSON.parse(JSON.stringify(treeData))"
      node-key="id"
      showCheckbox
    />
    <h3>默认展开</h3>
    <s-tree
      :data="JSON.parse(JSON.stringify(treeData))"
      node-key="id"
      :default-expand-all="true"
    />
    <h2>步骤条</h2>
    <h3>基础使用</h3>
    <s-button type="primary" @click="handleNextStep" style="margin-bottom: 10px"
      >下一步</s-button
    >
    当前节点{{ active }}
    <s-steps :active="active">
      <s-step title="第一步" description="打开微信扫一扫" />
      <s-step title="第二步" description="添加好友" />
      <s-step title="第三步" description="选择我的头像" />
      <s-step title="第四步" description="转款1000万" />
    </s-steps>
    <h3>居中</h3>
    当前节点{{ active }}
    <s-steps :active="active" :align="'center'">
      <s-step title="第一步" description="打开微信扫一扫" />
      <s-step title="第二步" description="添加好友" />
      <s-step title="第三步" description="选择我的头像" />
      <s-step title="第四步" description="转款1000万" />
    </s-steps>
    <h3>图标</h3>
    <s-steps :active="active">
      <s-step title="起床" icon="notification" />
      <s-step title="炒股" icon="data-view" />
      <s-step title="加仓" icon="good" />
      <s-step title="亏大了" icon="cry" />
    </s-steps>
    <h3>自定义图标</h3>
    <!-- ssss -->
    <s-steps :active="active" :align="'center'">
      <s-step title="起床">
        <template #icon> &#127774; </template>
      </s-step>
      <s-step title="又亏了">
        <template #icon> &#128201;</template>
      </s-step>
      <!-- 添加图标 -->
      <s-step title="继续加仓">
        <!-- 添加图标 -->
        <template #icon> + </template>
      </s-step>
      <s-step title="亏成狗">
        <template #icon> &#128021; </template>
      </s-step>
    </s-steps>
    <h2>日历</h2>
    <h3>基础使用</h3>
    <s-calendar></s-calendar>
    <h3>自定义内容</h3>
    <s-calendar>
      <template #date-cell="{ dateFormated }">
        <div>
          <span>{{ dateFormated }}</span>
        </div>
      </template>
    </s-calendar>
    <h3>待办事项</h3>
    <s-calendar class="todo-demo">
      <template #date-cell="{ dateFormated }">
        <div class="todo-cell">
          <span>{{ dateFormated }}</span>
          <ul v-if="todoList[dateFormated]" class="todo_list">
            <li
              v-for="item in todoList[dateFormated]"
              :key="item.title"
              class="todo_item"
            >
              <span>{{ item.time }}</span>
              <span>{{ item.title }}</span>
            </li>
          </ul>
        </div>
      </template>
    </s-calendar>
    <h3>分页</h3>
    <s-pagination
      :total="100"
      v-model:current-page="currentPage"
    ></s-pagination>
    <h3>跳转功能</h3>
    <s-pagination
      :total="100"
      v-model:current-page="currentPage"
      show-jump
    ></s-pagination>
    <h3>表格</h3>
    <s-table
      :column-data="columnData"
      :table-data="tableData"
      :height="260"
    ></s-table>
    <h3>斑马纹</h3>
    <s-table
      :column-data="columnData"
      :table-data="tableData"
      :stripe="true"
      :height="260"
    ></s-table>
    <h3>边框</h3>
    <s-table
      :column-data="columnData"
      :table-data="tableData"
      :stripe="true"
      :border="true"
      :height="260"
    ></s-table>
    <h3>自定义列</h3>
    <s-table
      :column-data="columnData"
      :table-data="tableData"
      :stripe="true"
      :border="true"
      :height="260"
    >
      <template #address="{ scoped, $index }"
        >这是第{{ $index }}行数据，内容是{{ scoped }}</template
      >
    </s-table>
    <h3>固定表头</h3>
    <s-table :column-data="columnData" :table-data="tableData" :height="260">
      <template #address="{ scoped, $index }"
        >这是第{{ $index }}行数据，内容是{{ scoped }}</template
      >
    </s-table>
    <h3>列对齐</h3>
    <s-table
      :column-data="columnData"
      :table-data="tableData"
      stripe
      :border="true"
    >
      <template #name="{ scoped, $index }">
        <div style="width: 50px; height: 20px; background-color: pink"></div>
      </template>
    </s-table>
    <h3>列固定</h3>
    <s-table
      :column-data="columnData"
      :table-data="tableData"
      stripe
      :border="true"
      :height="360"
    >
    </s-table>
    <h2>折叠面板</h2>
    <s-collapse v-model="activeNames1">
      <s-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </s-collapse-item>
      <s-collapse-item title="Controllability" name="2">
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          blanditiis voluptates est quod, asperiores inventore nesciunt nihil
          similique hic maxime minima ea officia perspiciatis facilis deserunt
          eius? Itaque, obcaecati minima.
        </div>
      </s-collapse-item>
      <s-collapse-item title="标题3" name="3">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          numquam exercitationem quidem eius, rem, cum tempora sapiente
          obcaecati, perspiciatis repellat vel rerum iure placeat alias nihil
          sunt a nemo veniam.
        </div>
      </s-collapse-item>
    </s-collapse>
    <h3>手风琴效果</h3>
    <s-collapse v-model="activeNames2" accordion>
      <s-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </s-collapse-item>
      <s-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
      </s-collapse-item>
      <s-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
      </s-collapse-item>
      <s-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
      </s-collapse-item>
    </s-collapse>
    <h3>自定义面板标题和图标</h3>
    <s-collapse v-model="activeNames2">
      <s-collapse-item name="1">
        <template #title>
          Consistency
          <i class="s-icon icon-email" />
        </template>
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </s-collapse-item>
      <s-collapse-item title="Feedback" name="2">
        <template #icon="{ isActive }">
          <i
            :class="`s-icon ${
              isActive ? 'icon-arrow-down-filling' : 'icon-arrow-right-filling'
            }`"
          />
        </template>
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
      </s-collapse-item>
      <s-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
      </s-collapse-item>
      <s-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
      </s-collapse-item>
    </s-collapse>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SMessage } from "@stylish-ui/components";

const loading = ref(true);

const handleMessage = (type, showClose, time) => {
  SMessage({
    type,
    message: type,
    showClose,
    duration: time,
  });
};

const treeData = [
  {
    id: "1",
    label: "Level one 1",
    children: [
      {
        id: "1-1",
        label: "Level two 1-1",
        children: [
          {
            id: "1-1-1",
            label: "Level three 1-1-1",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Level one 2",
    children: [
      {
        id: "2-1",
        label: "Level two 2-1",
        children: [
          {
            id: "2-1-1",
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        id: "2-2",
        label: "Level two 2-2",
        children: [
          {
            id: "2-2-1",
            label: "Level three 2-2-1",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "Level one 3",
    children: [
      {
        id: "3-1",
        label: "Level two 3-1",
        children: [
          {
            id: "3-1-1",
            label: "Level three 3-1-1",
          },
        ],
      },
      {
        id: "3-2",
        label: "Level two 3-2",
        children: [
          {
            id: "3-2-1",
            label: "Level three 3-2-1",
          },
        ],
      },
      {
        id: "3-3",
        label: "Level two 3-3",
      },
    ],
  },
];

const treeRef = ref(null);
const getCheckedNodes = () => {
  const keys = treeRef.value?.getCheckedNodes();
  console.log("keys: ", keys);
};

const setCheckedNodes = () => {
  treeRef.value?.setCheckedNodes(["1-1", "3-3"]);
};

const active = ref(0);
const handleNextStep = () => {
  active.value += 1;
  if (active.value > 4) {
    active.value = 0;
  }
};
// 待办列表
const todoList = {
  "2025-08-10": [
    { title: "待办1", time: "09:00" },
    { title: "待办2", time: "10:00" },
  ],
  "2025-08-12": [
    { title: "炒股", time: "09:00" },
    { title: "干饭", time: "10:00" },
    { title: "夜生活开始", time: "10:00" },
  ],
};

// 分页
const currentPage = ref(1);

// 表格
const columnData = [
  {
    key: "date",
    label: "Date",
    width: "120",
    fixed: "left",
  },
  {
    key: "name",
    label: "Name",
    width: "220",
    fixed: "left",
  },
  {
    key: "state",
    label: "State",
    width: "220",
  },
  {
    key: "city",
    label: "City",
    width: "520",
  },
  {
    key: "address",
    label: "Address",
    width: "820",
  },
  {
    key: "zip",
    label: "Zip",
    fixed: "right",
  },
  {
    key: "tag",
    label: "Tag",
    fixed: "right",
  },
];

const tableData = [
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
];

// 折叠面板
const activeNames1 = ref([]);
const activeNames2 = ref([]);
</script>

<style scoped>
.todo-cell {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.todo_list {
  flex: 1;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
.todo_item {
  margin: 6px 0;
  padding: 0 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  box-sizing: border-box;
  font-size: 14px;
}
.todo-demo :deep(.s-calendar-table) tbody .s-calendar-day {
  height: 120px;
}
</style>
