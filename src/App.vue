<template>
  <div id="app">
    <nav-bar :title="'首页'" :left-arrow="isBack" @left-click="back"/>
    <!-- <router-view/> -->
    <tabbar v-if="show" v-model="active" fixed :activeColor="'text-green'" :bgColor="'bg-black'">
      <tabbar-item icon="icon-homefill" to="/">介绍</tabbar-item>
      <tabbar-item icon="icon-similar" to="/demo">Demo</tabbar-item>
      <tabbar-item icon="icon-profile" url="http://www.baidu.com">关于</tabbar-item>
    </tabbar>

    <cell-group class="margin-top">
        <cell title="关于组件库" color="text-green" to="/Introduce" icon="icon-tagfill" arrow></cell>
        <cell title="github" color="text-blue" url="https://github.com/martin-yin/Pipi-Dinosaur" icon="icon-github" arrow></cell>
        <cell title="掘金" color="text-blue" url="https://juejin.im/user/5a0aa433f265da432002c33c/posts" arrow></cell>
        <cell title="意见反馈" color="text-cyan" icon="icon-writefill" to="/feedback" arrow></cell>
    </cell-group>
  </div>
</template>
<script>
const tabbarRoute = ['/', '/demo', '/about'];
export default {
  data() {
    return {
      active: 0,
      show: true,
      shows: true,
      isBack: false
    }
  },
  watch: {
    $route(val) {
      const path = val.path;
      const active = tabbarRoute.indexOf(path);
      if(active < 0){
        this.isBack = true;
        this.show = false;
        return;
      }
      this.isBack = false;
      this.active = active;
      this.show = true;
    }
  },
  computed: {
  },
  methods: {
    back() {
      window.history.back(-1);
    },
    open() {
      this.shows = true;
    },
    closess() {
      this.shows = false;
    },
  }
}
</script>
<style lang="scss">
body{
  background: #f1f1f1;
  margin: 0px;
  padding: 0px;
}

#app{
  margin-bottom: 80px
}

@import '../packages/index.scss';

</style>
