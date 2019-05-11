<template>
  <div class="demo">
    <div class="cu-bar search bg-white">
      <div class='search-form round'>
        <span class="icon-search round"></span>
        <input type="text" placeholder="搜索组件" />
      </div>
    </div>
    <div class="cu-list grid col-3">
      <div class="cu-item" v-for="(item, index) in componentss" :key="index" @click="goto(item.url)">
        <Icon :icon="item.icon"/>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { gotoUrl } from '../utils/public'
export default {
  data() {
    return {
      componentss: [
        {
          icon: 'icon-cascades',
          name: 'tabbar',
          url: '/demo/tabbar'
        }, {
          icon: 'icon-timefill',
          name: '时间轴',
          url: '/demo/time-line'
        }, {
          icon: 'icon-vipcard',
          name: '卡片',
          url: '/demo/card'
        }, {
          icon: 'icon-tagfill',
          name: '轮播',
          url: '/demo/swipe'
        }, {
          icon: 'icon-cascades',
          name: '标签',
          url: '/demo/tag'
        }, {
          icon: 'icon-btn',
          name: '按钮',
          url: '/demo/button'
        }, {
          icon: 'icon-formfill',
          name: '导航',
          url: '/demo/nav-bar'
        }, {
          icon: 'icon-loading2',
          name: '加载',
          url: '/demo/loading'
        }, {
          icon: 'icon-list',
          name: '单元格',
          url: '/demo/cell'
        }, {
          icon: 'icon-list',
          name: '开关',
          url: '/demo/switchs'
        }, {
          icon: 'icon-question',
          name: '确认框',
          url: '/demo/diglog'
        }, {
          icon: 'icon-pick',
          name: '选择器',
          url: '/demo/picker'
        }
      ]
    }
  },
  methods: {
    goto(url) {
      gotoUrl(url);
    }
  }
}
</script>

<style lang="less" scoped>
.demo{
  background: #f1f1f1 !important;
  .cu-list{
    .cu-item{
      span{
        // color: #8dc63f !important;
      }
    }
  }
}

</style>
