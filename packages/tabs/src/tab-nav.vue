<script>
import Vue from "vue";

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
    };
  },
  updated() {
    // when updated run
  },
  render() {
    return <div>TABS-NAV</div>;
  },
});
</script>
