<script lang="ts">
import Vue, { VNode } from "vue";

// eslint-disable-next-line
function noop() {}

export default Vue.extend({
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
      myName: "hello world",
    };
  },
  updated() {
    // when updated run
  },
  render(h): VNode {
    return h("div", ["先写一些文字", h("h1", this.myName)]);
  },
});
</script>
