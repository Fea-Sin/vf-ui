<script>
import Vue from "vue";
import { Input } from "@/index";

export default Vue.extend({
  components: {
    Input,
  },
  data() {
    return {
      myName: "HELLO JSX",
      mya: "",
      myb: "jsx",
    };
  },
  render() {
    return (
      <div class="box">
        <div>HELLO</div>
        <div>{this.myName}</div>
        <div>
          <Input v-model={this.mya} />
        </div>
        <div>
          <Input v-model={this.myb} />
        </div>
      </div>
    );
  },
  updated() {
    console.log("updated lifestyle--->");
  },
});
</script>
<style lang="less" scoped>
.box {
  width: 350px;
}
</style>
