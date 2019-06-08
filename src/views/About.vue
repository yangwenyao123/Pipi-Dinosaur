<template>
    <div id="about">
        <img src="../assets/logo.png" class="logo"/>
        <div class="name">
            <span class="text-xl text-green">Pipi Dinosaur</span>
        </div>

        <CellGroup class="margin-top">
            <Cell title="关于组件库" color="text-green" to="/Introduce" icon="icon-tagfill" arrow></Cell>
            <Cell title="github" color="text-blue" url="https://github.com/martin-yin/Pipi-Dinosaur" icon="icon-github" arrow></Cell>
            <Cell title="掘金" color="text-blue" url="https://juejin.im/user/5a0aa433f265da432002c33c/posts" arrow></Cell>
            <Cell title="意见反馈" color="text-cyan" icon="icon-writefill" to="/feedback" arrow></Cell>
        </CellGroup>
    </div>
</template>
<style lang="less" scoped>
#about{
    .logo{
        display: block;
        margin: 0 auto;
    }
    .name{
        width: 100%;
        text-align: center;
    }
}
</style>

