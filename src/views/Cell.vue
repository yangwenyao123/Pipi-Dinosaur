<template>
  <div id="cell">
    <CellGroup>
      <Cell value="内容测试" title="12312" color="text-green" to="/" icon="icon-tagfill" arrow></Cell>
      <Cell title="12312" color="text-green" icon="icon-home" to="/" arrow></Cell>
      <Cell color="text-green" icon="icon-home" arrow>
        <div slot="left-content">
          111
        </div>
        <div slot="right-content">
          aqsdasd
          <Icon icon="icon-right" />
        </div>
      </Cell>
    </CellGroup>

          <CellGroup class="margin-top">
            <Cell title="关于组件库" color="text-green" to="/Introduce" icon="icon-tagfill" arrow></Cell>
            <Cell title="github" color="text-blue" url="https://github.com/martin-yin/Pipi-Dinosaur" icon="icon-github" arrow></Cell>
            <Cell title="掘金" color="text-blue" url="https://juejin.im/user/5a0aa433f265da432002c33c/posts" arrow></Cell>
            <Cell title="意见反馈" color="text-cyan" icon="icon-writefill" to="/feedback" arrow></Cell>
        </CellGroup>
  </div>
</template>

<style lang="scss" scoped>
#cell{
  padding-top: 30px;
}
</style>


