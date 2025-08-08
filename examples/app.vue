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
</script>

<style scoped></style>
