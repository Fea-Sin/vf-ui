<script>
import Vue from "vue";
import TabNav from "./tab-nav.vue";

export default Vue.extend({
  name: "VfTabs",
  components: {
    TabNav,
  },
  props: {
    type: String,
    activeName: String,
    closable: {
      type: Boolean,
      default: true,
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
  watch: {},
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
      type,
      handleTabClick,
      handleTabRemove,
      handleAdd,
      currentName,
      panes,
      addable,
    } = this;
    const newButton = addable ? (
      <span class="vf-tabs__new-tab" on-click={handleAdd}>
        <i class="el-icon-plus"></i>
      </span>
    ) : null;
    const navData = {
      props: {
        currentName,
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
        type,
        panes,
      },
      ref: "nav",
    };
    const header = (
      <div class="vf-tabs__header">
        {newButton}
        <TabNav {...navData}></TabNav>
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
    console.log("tabs--pane-->", this.$slots.default);
    this.calcPaneInstances();
  },
});
</script>
