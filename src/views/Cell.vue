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
  </div>
</template>

<style lang="less" scoped>
#cell{
  padding-top: 30px;
}
</style>


