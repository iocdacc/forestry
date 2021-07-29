<template>
  <div id="dynamicIndex" class="g-box g-grid">
    <div class="m-topMenu" style="grid-area: a">
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        @select="handleSelect"
        style="padding: 0 20px;background-color: rgba(13, 204, 108, 1);"
        active-text-color="#fff"
      >
        <el-menu-item style="float: left;font-weight: bold;font-size: 20px;color: #fff;background-color: #00000000;">
          <i class="el-icon-s-opportunity" style="font-size: 22px;color: #fff;top: -2px;position: relative;"></i>
          林业资源动态监管系统
        </el-menu-item>

        <el-submenu index="1" class="title2">
          <template slot="title"><span style="color:#fff;"><i class="el-icon-user-solid"></i>彭曾</span></template>
          <el-menu-item index="2-1">修改密码</el-menu-item>
          <el-menu-item index="2-2">退出系统</el-menu-item>
        </el-submenu>
        <el-submenu index="2" class="title2">
          <template slot="title"><span style="color:#fff;"><i class="el-icon-s-home"></i>系统切换</span></template>
          <el-menu-item index="2-1">林业资源动态监管子系统</el-menu-item>
          <el-menu-item index="2-2">林长制网格化管理子系统</el-menu-item>
          <el-menu-item index="2-3">林业综合执法子系统</el-menu-item>
          <el-menu-item index="2-4">灾害预防监管子系统</el-menu-item>
          <el-menu-item index="2-5">林业政务服务子系统</el-menu-item>
          <el-menu-item index="2-6">时空大数据管理与共享子系统</el-menu-item>
          <el-menu-item index="2-7">运维管理平台</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="m-leftMenu" style="grid-area: b;border-right: 1px solid #f0f0f0;overflow-y: auto;">
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="100"
            class="el-menu"
            @open="handleOpen"
            @close="handleClose"
            style="border-right: 0;"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>专题图展示</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>监测数据管理与预警</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>分析核实</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>任务管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">案件跟踪</span>
            </el-menu-item>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>比对分析</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>统计分析</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="8">
              <i class="el-icon-menu"></i>
              <span slot="title">考核管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="" style="grid-area: c"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.g-box {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  min-width: 800px;
}

.g-grid {
  display: grid;
  grid-template-rows: 70px 1fr;
  grid-template-columns: 220px 1fr;
  grid-template-areas:
    "a a"
    "b c";
  grid-row-gap: 0px;
  grid-column-gap: 0px;
}

#dynamicIndex .el-menu--horizontal > .el-menu-item {
  height: 69px;
  line-height: 69px;
}

#dynamicIndex .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 69px;
  line-height: 69px;
}

#dynamicIndex .el-menu--horizontal > .el-menu-item {
  float: right;
}

#dynamicIndex .el-menu--horizontal > .el-submenu {
  float: right;
}

#dynamicIndex .title2 .el-submenu__title:hover{
  background-color: #00000000;
  color: #fff;
}

#dynamicIndex .el-submenu::before{
  display: none;
}

#dynamicIndex .title2 .el-submenu__title i{
  color: #fff;
}

::-webkit-scrollbar {
    width: 5px;
    height: 10px;
}
::-webkit-scrollbar-thumb {
    background: #f0f0f0;
    border-radius: 5px;
}

.el-menu--horizontal>.el-submenu .el-submenu__title {
    color: #fff;
}
</style>
