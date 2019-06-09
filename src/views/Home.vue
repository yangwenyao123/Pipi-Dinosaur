<template>
  <div id="home">
    <div class='margin-xl bg-white padding-xl radius shadow-lg'>
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
        <div class='text-content'>
            <div>欢迎！</div>
            <div class='margin-top-sm'>
              <p>Pipi Dinosaur(皮皮🦖)</p>
            </div>
            <div class='margin-top-sm'>
              <p>这个ui组件是我基于Color-UI二次封装而来的。</p>
            </div>
            <div class='margin-top-sm'>
              <span class="text-green" @click="goto('/demo')">Demo</span>包含了目前已经可以用的组件
            </div>
            <div class='margin-top-sm'>
              第一次编写ui组件还有很多不足的地方，望大家多多包含。如果你有好的点子或者idea。可以留言告诉我。
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { gotoUrl } from '../utils/public'
export default {
  methods: {
    goto(url) {
      gotoUrl(url);
    }
  }
}
</script>
<style lang="scss" scoped>
#home{
  .logo{
    text-align: center
  }
}
</style>
