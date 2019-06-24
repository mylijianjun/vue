import Vue from 'vue'
import Router from 'vue-router'
import Refer from '@/components/page/refer'
import Classify from '@/components/page/classify'
import Person from '@/components/page/person'
import Navs from '@/components/page/nav'
import Layout from '@/components/layout'
import ClassTuijian from '@/components/page/classDetail/classtuijian'
import ClassYule from '@/components/page/classDetail/classyule'
import ClassTiyu from '@/components/page/classDetail/classtiyu'
import ClassJunshi from '@/components/page/classDetail/classjunshi'
import ClassGuonei from '@/components/page/classDetail/classguonei'
import ClassGuowai from '@/components/page/classDetail/classguowai'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/layout'},
    {
      path: '/layout',
      component: Layout,
      redirect: '/Layout/nav',
      children: [{
          path: '/layout/refer',
          component: Refer
        },
        {
          path: '/layout/classify',
          component: Classify,
          redirect: '/layout/classify/tuijian',
          children: [
            {
              path: '/layout/classify/yule',
              component: ClassYule
            },
            {
              path: '/layout/classify/tiyu',
              component:ClassTiyu
            },
            {
              path: '/layout/classify/junshi',
              component:ClassJunshi
            },
            {
              path: '/layout/classify/guonei',
              component:ClassGuonei
            },
            {
              path: '/layout/classify/guowai',
              component:ClassGuowai
            },
            {
              path: '/layout/classify/tuijian',
              component:ClassTuijian
            },
          ]
        },
        {
          path: '/layout/person',
          component: Person
        },
        {
          path: '/layout/nav',
          component: Navs
        }]
    }]
})
// routes: [
//   {
//     path: '/',
//     name: 'HelloWorld',
//     component: Nav
//   },
//   {
//     path: '/boy',
//     name: 'boy',
//     component: Boy
//   },
//   {
//     path: '/girl',
//     name: 'girl',
//     component: Girl
//   },
//   {
//     path: '/food',
//     name: 'food',
//     component: Food
//   }]
// })
