import resolve from "@rollup/plugin-node-resolve";
import vuePlugin from "rollup-plugin-vue";
import tsPlugin from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import copy from "rollup-plugin-copy";
import url from "postcss-url";

export default {
  input: "./stylish-ui/components/index.ts",
  output: {
    file: "dist/es.js",
    name: "StylishUI",
    format: "es",
  },
  plugins: [
    resolve(),
    vuePlugin(),
    tsPlugin(),
    postcss({
      extract: "theme-chalk/style.css", // 提取样式到单独文件
      plugins: [
        autoprefixer(),
        url({
          url: "copy",  //inline 内联 会导致图片等资源被转为base64，造成 css 文件过大，浏览器加载时间过长
          basePath: "fonts",
          assetsPath: "fonts",
        }),
      ],
    }),
    copy({
      targets: [
        {
          src: "stylish-ui/theme-chalk/fonts/*",
          dest: "dist/theme-chalk/fonts/",
        },
      ],
    }),
  ],
  external: ["vue"], // 依赖模块
};
