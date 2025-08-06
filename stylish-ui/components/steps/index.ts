import Steps from "./src/steps.vue";

Steps.install = (app: any) => {
  app.component(Steps.name, Steps);
};
export const SSteps = Steps;

export default SSteps;
