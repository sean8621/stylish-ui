import Step from "./src/step.vue";

Step.install = (app: any) => {
  app.component(Step.name, Step);
};
export const SStep = Step;

export default SStep;
