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
    closable: Boolean,
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
  methods: {},
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
});
</script>
