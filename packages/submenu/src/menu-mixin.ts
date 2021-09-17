const rootMenu: any = {
  inject: ["rootMenu"],
  computed: {
    indexPath(): any {
      const path = [(this as any).index];
      let parent = (this as any).$parent;
      while (parent.$options.componentName !== "ElMenu") {
        if (parent.index) {
          path.unshift(parent.index);
        }
        parent = parent.$parent;
      }
      return path;
    },
    parentMenu(): any {
      let parent = (this as any).$parent;
      while (
        parent &&
        ["ElMenu", "ElSubmenu"].indexOf(parent.$options.componentName) === -1
      ) {
        parent = parent.$parent;
      }
      return parent;
    },
    paddingStyle() {
      if ((this as any).rootMenu.mode !== "vertical") return {};

      let padding = 20;
      let parent = (this as any).$parent;

      if ((this as any).rootMenu.collapse) {
        padding = 20;
      } else {
        while (parent && parent.$options.componentName !== "ElMenu") {
          if (parent.$options.componentName === "ElSubmenu") {
            padding += 20;
          }
          parent = parent.$parent;
        }
      }
      return { paddingLeft: padding + "px" };
    },
  },
};

export default rootMenu;
