<template>
  <div id="app">
    <pi-tabbar v-model="active">
      <pi-tabbar-item icon="icon-homefill">
        首页
      </pi-tabbar-item>
      <pi-tabbar-item icon="icon-similar">
        Demo
      </pi-tabbar-item>
      <pi-tabbar-item icon="icon-profile">
        关于我
      </pi-tabbar-item>
    </pi-tabbar>

    <pi-cell-group>
      <pi-cell title="关于组件库"  color="text-green" to="http://www.baidu.com" icon="icon-tagfill" arrow></pi-cell>
      <pi-cell title="github" color="text-blue" url="https://github.com/martin-yin/Pipi-Dinosaur" icon="icon-github" arrow></pi-cell>
      <pi-cell title="掘金" color="text-blue" url="https://juejin.im/user/5a0aa433f265da432002c33c/posts" arrow></pi-cell>
      <pi-cell title="意见反馈" color="text-cyan" value="打他一顿" icon="icon-writefill" to="/feedback" arrow></pi-cell>
    </pi-cell-group>
    <!-- <pi-tag>123</pi-tag> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style lang="less">

.text-green {
  color: #39b54a;
}

.bg-white {
  background: #ffffff;
}
body {
  background: #eee;
}
@import "../packages/index.less";

</style>
