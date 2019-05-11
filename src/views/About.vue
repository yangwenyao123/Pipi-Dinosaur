<template>
    <div id="about">
        <img src="../assets/logo.png" class="logo"/>
        <div class="name">
            <span class="text-xl text-green">Pipi Dinosaur</span>
        </div>
        <!-- <div class="cu-list menu card-menu margin-top-sm margin-bottom-xl shadow-lg">
            <div class="cu-item arrow">
                <div class='content'>
                <span class='icon-github text-grey'></span>
                <span class='span-grey'>Github</span>
                </div>
            </div>
            <div class="cu-item arrow">
                <a class='content' url='/about/about' hover-class='none'>
                <img src="../assets/logo.png" class='png'/>
                <span class='span-grey'>关于组件库</span>
                </a>
            </div>

            <div class="cu-item arrow">
                <button class='cu-btn content' open-type='feedback'>
                <span class='icon-writefill text-cyan'></span>
                <span class='span-grey'>意见反馈</span>
                </button>
            </div>
        </div> -->

        <CellGroup class="margin-top">
            <Cell title="关于组件库" color="text-green" to="/Introduce" icon="icon-tagfill" arrow></Cell>
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

