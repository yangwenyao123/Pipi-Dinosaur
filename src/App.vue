<template>
  <div id="app">
    <NavBar :title="routeInfo.meta.title" :left-arrow="isBack" @left-click="back"/>
    <router-view/>
    <Tabbar v-if="show" v-model="active" fixed :activeColor="'text-green'" :bgColor="'bg-black'">
      <TabbarItem icon="icon-homefill" to="/">介绍</TabbarItem>
      <TabbarItem icon="icon-similar" to="/demo">Demo</TabbarItem>
      <TabbarItem icon="icon-profile" to="/about">关于</TabbarItem>
    </Tabbar>
  </div>
</template>
<script>
import { setInterval } from 'timers';
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
    routeInfo() {
      return this.$store.state.routeInfo;
    },
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
<style lang="sass">
body
  background: #f1f1f1

#app
  margin-bottom: 80px

@import 'assets/app.css'

.swipe-item 
  float: left
  height: 100%

.swipe 
  overflow: hidden
  position: relative
  user-select: none
  &__track 
    height: 100%
  
  &__indicators 
    display: flex
    position: absolute
    left: 50%
    bottom: 10px
    transform: translateX(-50%)
    &--vertical 
      left: 10px
      top: 50%
      bottom: auto
      flex-direction: column
      transform: translateY(-50%)
      .swipe__indicator:not(:last-child) 
        margin-bottom: 6px
      
    

  &__indicator 
    opacity: .3
    border-radius: 100%
    width: 6px
    height: 6px
    transition: opacity .2s
    background-color: #ebedf0
    &:not(:last-child) 
      margin-right: 6px
    
    &.active 
      opacity: 1
      background-color: #1989fa
    
  



</style>
