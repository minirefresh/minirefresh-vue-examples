import Vue from 'vue'
import Router from 'vue-router'
import Features from '@/pages/features'
import Examples from '@/pages/examples'
import BaseList from '@/pages/examples/baselist'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Features
    }, {
        path: '/examples',
        component: Examples,
        children: [{
            path: 'base-list',
            component: BaseList
        }]
    }]
})
