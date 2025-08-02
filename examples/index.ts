import { createApp } from "vue";
import App from "./app.vue";
import StylishUI from "@stylish-ui/components";

const app = createApp(App);
app.use(StylishUI);
app.mount("#app");
