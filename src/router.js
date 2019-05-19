import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '介绍'
            }
        },
        {
            path: '/demo',
            name: 'demo',
            meta: {
                title: 'demo'
            },
            component: () => import ('./views/Demo.vue')
        },
        {
            path: '/demo/tabbar',
            name: 'tabbar',
            meta: {
                title: 'tabbar'
            },
            component: () => import ('./views/Tabbar.vue')
        },
        {
            path: '/demo/time-line',
            name: 'TimeLine',
            meta: {
                title: '时间轴'
            },
            component: () => import ('./views/TimeLine.vue')
        },
        {
            path: '/demo/card',
            name: 'Card',
            meta: {
                title: '卡片'
            },
            component: () => import ('./views/Card.vue')
        },
        {
            path: '/demo/button',
            name: 'Button',
            meta: {
                title: '按钮'
            },
            component: () => import ('./views/Button.vue')
        },
        {
            path: '/demo/tag',
            name: 'Tag',
            meta: {
                title: '标签'
            },
            component: () => import ('./views/Tag.vue')
        },
        {
            path: '/demo/swipe',
            name: 'Swipe',
            meta: {
                title: '轮播'
            },
            component: () => import ('./views/Swipe.vue')
        },
        {
            path: '/demo/loading',
            name: 'Loading',
            meta: {
                title: 'loading'
            },
            component: () => import ('./views/Loading.vue')
        },
        {
            path: '/demo/cell',
            name: 'Cell',
            meta: {
                title: '单元格'
            },
            component: () => import ('./views/Cell.vue')
        },
        {
            path: '/demo/nav-bar',
            name: 'NavBar',
            meta: {
                title: '导航栏'
            },
            component: () => import ('./views/NavBar.vue')
        },
        {
            path: '/about',
            name: 'About',
            meta: {
                title: '关于'
            },
            component: () => import ('./views/About.vue')
        },
        {
            path: '/log',
            name: 'Log',
            meta: {
                title: '日志'
            },
            component: () => import ('./views/Log.vue')
        },
        {
            path: '/Introduce',
            name: 'Introduce',
            meta: {
                title: ''
            },
            component: () => import ('./views/Introduce.vue')
        },
        {
            path: '/demo/switchs',
            name: 'Introduce',
            meta: {
                title: ''
            },
            component: () => import ('./views/Switchs.vue')
        },
        {
            path: '/Feedback',
            name: 'Feedback',
            meta: {
                title: '留言'
            },
            component: () => import ('./views/Feedback.vue')
        },
        {
            path: '/demo/dialog',
            name: 'Dialog',
            meta: {
                title: '确认框'
            },
            component: () => import ('./views/Dialog.vue')
        },
        {
            path: '/demo/picker',
            name: 'Picker',
            meta: {
                title: '选择框'
            },
            component: () => import ('./views/Picker.vue')
        }
    ]
})