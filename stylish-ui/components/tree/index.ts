import Tree from "./src/tree.vue";

Tree.install = (app: any) => {
  app.component(Tree.name, Tree);
};
export const STree = Tree;

export default STree;
