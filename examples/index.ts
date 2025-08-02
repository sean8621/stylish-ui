import { createApp } from "vue";
import App from "./app.vue";
import StylishUI from "@stylish-ui/components";
import "@stylish-ui/theme-chalk/index.less";// 引入样式文件
// import StylishUI from "../dist/es.js"; //测试打包后的组件
const app = createApp(App);
app.use(StylishUI);
app.mount("#app");
