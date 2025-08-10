export const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    app.component(comp.name, comp);
  };
  return comp;
};
