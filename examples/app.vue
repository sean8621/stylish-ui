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
</script>

<style scoped></style>
