<script>
import Vue from "vue";
import TabNav from "./tab-nav.vue";

export default Vue.extend({
  name: "VfTabs",
  components: {
    TabNav,
  },
  props: {
    activeName: String,
    closable: {
      type: Boolean,
      default: false,
    },
    addable: Boolean,
    value: {},
    beforeLeave: Function,
  },
  provide() {
    return {
      rootTabs: this,
    };
  },
  data() {
    return {
      currentName: this.value || this.activeName,
      panes: [],
    };
  },
  watch: {
    value(value) {
      this.setCurrentName(value);
    },
  },
  methods: {
    calcPaneInstances() {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter(
          (vnode) =>
            vnode.tag &&
            vnode.componentOptions &&
            vnode.componentOptions.Ctor.options.name === "VfTabsPane"
        );
        const panes = paneSlots.map(
          ({ componentInstance }) => componentInstance
        );
        const panesChanged = !(
          panes.length === this.panes.length &&
          panes.every((pane, index) => pane === this.panes[index])
        );
        if (panesChanged) {
          this.panes = panes;
        }
      } else if (this.panes.length !== 0) {
        this.panes = [];
      }
    },
    handleTabClick(tab, tabName, event) {
      if (tab.disabled) return;
      this.setCurrentName(tabName);
      this.$emit("tab-click", tab, event);
    },
    handleTabRemove(pane, ev) {
      if (pane.disabled) return;
      ev.stopPropagation();
      this.$emit("edit", pane.name, "remove");
      this.$emit("tab-remove", pane.name);
    },
    handleTabAdd() {
      this.$emit("edit", null, "add");
      this.$emit("tab-add");
    },
    setCurrentName(value) {
      const changeCurrentName = () => {
        this.currentName = value;
        this.$emit("input", value);
      };
      if (this.currentName !== value && this.beforeLeave) {
        const before = this.beforeLeave(value, this.currentName);
        if (before && before.then) {
          before.then(() => {
            changeCurrentName();
          });
        } else if (before !== false) {
          changeCurrentName();
        }
      } else {
        changeCurrentName();
      }
    },
  },
  render() {
    let {
      handleTabClick,
      handleTabRemove,
      currentName,
      panes,
      addable,
      handleTabAdd,
    } = this;
    const newButton = addable ? (
      <span on-click={handleTabAdd} class="vf-tabs__new-tab">
        +
      </span>
    ) : null;
    const navData = {
      props: {
        currentName,
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
        panes,
      },
      ref: "nav",
    };
    const header = (
      <div class="vf-tabs__header">
        <TabNav {...navData}>{newButton}</TabNav>
      </div>
    );
    const panels = <div class="vf-tabs__content">{this.$slots.default}</div>;

    return (
      <div
        class={{
          "vf-tabs": true,
        }}>
        <div>{[header, panels]}</div>
      </div>
    );
  },
  created() {
    if (!this.currentName) {
      this.setCurrentName("0");
    }
  },
  mounted() {
    this.calcPaneInstances();
  },
  updated() {
    this.calcPaneInstances();
  },
});
</script>
