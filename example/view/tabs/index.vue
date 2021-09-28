<script>
import Vue from "vue";
import { Tabs, TabPane, Button, Icon, Input } from "@/index";

export default Vue.extend({
  components: {
    Tabs,
    TabPane,
    Button,
    Icon,
  },
  data() {
    return {
      activeName: "3",
      paneBox: [
        {
          name: "1",
          label: "用户管理",
          myInput: "",
          image: "https://jestjs.io/img/favicon/favicon.ico",
        },
        {
          name: "2",
          label: "权限管理",
          myInput: "",
          icon: "printer",
        },
        {
          name: "3",
          label: "设置管理",
          myInput: "",
          image: "https://github.com/fluidicon.png",
        },
        {
          name: "4",
          label: "定时任务运行补偿管理",
          myInput: "",
        },
      ],
      tabIndex: "4",
    };
  },
  methods: {
    handleEditor(targetName, action) {
      let tabs = this.paneBox;
      let activeName = this.activeName;
      if (action === "remove") {
        if (targetName === activeName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.activeName = activeName;
        this.paneBox = tabs.filter((tab) => tab.name !== targetName);
      }
      if (action === "add") {
        const title = "新增标签";
        this.customAdd(title, "collection-tag");
      }
    },
    handleClick() {
      this.activeName = "1";
    },
    handleCustomAdd() {
      this.customAdd("设计任务", "price-tag", "666");
    },
    customAdd(title, icon, input = "") {
      let newTabName = String(++this.tabIndex);
      this.paneBox.push({
        name: newTabName,
        label: title,
        myInput: input,
        icon: icon,
      });
      this.activeName = newTabName;
    },
  },
  render(h) {
    const { handleEditor } = this;
    const tabs = this.paneBox.map((tab) => (
      <TabPane label={tab.label} name={tab.name} key={tab.name}>
        {tab.label}
        <div class="boxa">
          <Input class="inputa" v-model={tab.myInput} />
        </div>
        <template slot="decor">
          {tab.image && <img src={tab.image} alt="" />}
          {tab.icon && <Icon name={tab.icon} />}
        </template>
      </TabPane>
    ));

    return (
      <div class="con">
        <div>TEST TABS</div>
        <Tabs
          v-model={this.activeName}
          vOn:edit={handleEditor}
          addable={true}
          closable>
          {tabs}
        </Tabs>
        <div class="boxb">
          <Button vOn:click={this.handleClick}>HELLO</Button>
          <Button type="primary" vOn:click={this.handleCustomAdd}>
            新增
          </Button>
        </div>
      </div>
    );
  },
  mounted() {
    // this.paneBox[0] = Taba;
  },
});
</script>
<style lang="less" scoped>
.con {
  color: #545454;
  padding: 16px;
}
.boxa {
  width: 800px;
  height: 350px;
  border: 1px solid #e3e2e1;
  padding: 10px;
  margin-top: 10px;
}
.inputa {
  margin-top: 16px;
}
.boxb {
  margin-top: 16px;
}
</style>
