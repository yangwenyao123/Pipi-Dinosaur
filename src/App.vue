<template>
  <div id="app">
    <nav-bar :title="'首页'" :left-arrow="isBack" @left-click="back"/>
    <!-- <router-view/> -->
    <tabbar v-if="show" v-model="active" fixed :activeColor="'text-green'" :bgColor="'bg-black'">
      <tabbar-item icon="icon-homefill" to="/">介绍</tabbar-item>
      <tabbar-item icon="icon-similar" to="/demo">Demo</tabbar-item>
      <tabbar-item icon="icon-profile" url="http://www.baidu.com">关于</tabbar-item>
    </tabbar>

    <cell-group class="margin-top-default margin-bottom-default">
        <cell title="关于组件库" color="text-green" to="/Introduce" icon="icon-tagfill" arrow></cell>
        <cell title="github" color="text-blue" url="https://github.com/martin-yin/Pipi-Dinosaur" icon="icon-github" arrow></cell>
        <cell title="掘金" color="text-blue" url="https://juejin.im/user/5a0aa433f265da432002c33c/posts" arrow></cell>
        <cell title="意见反馈" color="text-cyan" icon="icon-writefill" to="/feedback" arrow></cell>
    </cell-group>

    <time-line time="今天">
      <div class="cu-item">
        <div class="content">
          <div class="cu-capsule radius">
            <tag color="cyan">上午</tag>
            <tag :line="true" color="cyan">8:00</tag>
          </div>
          <div class='margin-top-default'>这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</div>
        </div>
      </div>
    </time-line>

    <picker show-toolbar
      title="标题"
      :columns="columns"
      @cancel="onCancel"
      @confirm="onConfirm"  
      @change="onChange"
  ></picker>
  </div>
</template>
<script>
const tabbarRoute = ['/', '/demo', '/about'];
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};

export default {
  data() {
    return {
      active: 0,
      show: true,
      shows: true,
      isBack: false,
      columns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
        }
      ]
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
    onConfirm(value, index) {
        alert(value);
        alert(index);

    },
    onCancel() {
        alert(11);
    }
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
