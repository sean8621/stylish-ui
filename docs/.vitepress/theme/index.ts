// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import StylishUI from "@stylish-ui/components";
import "@stylish-ui/theme-chalk/index.less";
import Preview from "./preview/index.vue";
import "highlight.js/styles/base16/summerfruit-light.css"; // 主题
import hljsVuePlugin from "@highlightjs/vue-plugin";


export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(StylishUI);
    app.component("preview", Preview);
    app.use(hljsVuePlugin);
  },
} satisfies Theme;
