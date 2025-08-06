import * as components from "./components";

const FUNCTION_COMP = ["SMessage"];

export default {
  install(app: any) {
    Object.entries(components).forEach(([key, value]) => {
      if (!FUNCTION_COMP.includes(key)) app.component(key, value);
    });
  },
};

export const SMessage = components.SMessage;