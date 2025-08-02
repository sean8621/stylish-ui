import Button from "./src/button.vue";

Button.install = (app: any) => {
  app.component(Button.name, Button);
};
export const SButton = Button;

export default SButton;
