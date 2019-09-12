<template>
  <div class="tabbar">
    <Tabbar v-model="active" :activeColor="'text-green'" :bgColor="'bg-black'">
      <TabbarItem icon="icon-homefill" to="/">首页</TabbarItem>
      <TabbarItem icon="icon-similar" to="/about">分类</TabbarItem>
      <TabbarItem icon="icon-cart">购物车</TabbarItem>
      <TabbarItem icon="icon-my">我的</TabbarItem>
    </Tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    }
  }
}
</script>


