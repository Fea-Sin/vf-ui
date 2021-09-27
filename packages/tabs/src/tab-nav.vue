<script>
import Vue from "vue";
// import { addResizeListener, removeResizeListener } from "@/utils/resize-event";

// eslint-disable-next-line
function noop() {}

export default Vue.extend({
  name: "TabNav",
  inject: ["rootTabs"],
  props: {
    panes: Array,
    currentName: String,
    onTabClick: {
      type: Function,
      default: noop,
    },
    onTabRemove: {
      type: Function,
      default: noop,
    },
  },
  data() {
    return {
      scrollable: false,
      navOffset: 0,
      isFocus: false,
      focusable: true,
    };
  },
  computed: {},
  methods: {},
  updated() {
    // when updated run
  },
  render() {
    const { panes, onTabClick, onTabRemove } = this;
    const tabs = this._l(panes, (pane, index) => {
      let tabName = pane.name || pane.index || index;
      const closable = pane.isClosable;

      pane.index = `${index}`;
      const btnClose = closable ? (
        <div class="vf-tabs-tab-close">
          <span
            class="el-icon-close"
            on-click={(ev) => onTabRemove(pane, ev)}></span>
        </div>
      ) : null;
      const tabLabelContent = pane.$slots.label || pane.label;
      return (
        <div
          class={{
            "vf-tabs__item": true,
            "is-active": pane.active,
            "is-disable": pane.disabled,
            "is-closable": closable,
          }}
          id={`tab-${tabName}`}
          key={`tab-${tabName}`}
          role="tab"
          ref="tabs"
          on-click={(ev) => onTabClick(pane, tabName, ev)}>
          <div class="vf-tabs-tab-icon">
            <img src="https://jestjs.io/img/favicon/favicon.ico" alt="" />
          </div>
          {tabLabelContent}
          {btnClose}
          <div class="vf-tabs-tab-line"></div>
        </div>
      );
    });
    return (
      <div class="vf-tabs__nav" role="tablist">
        {tabs}
      </div>
    );
  },
});
</script>
