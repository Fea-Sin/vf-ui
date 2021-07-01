declare global {
  import Vue, { VNode } from "vue";

  namespace JSX {
    // eslint-disable-next-line
    interface Element extends VNode {}
    // eslint-disable-next-line
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
