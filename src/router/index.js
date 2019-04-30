import Vue from 'vue'
import Router from 'vue-router'
import Vuex from '@/components/Vuex'
import vueRouter from '@/components/vueRouter'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import view1 from '@/components/view1'

Vue.use(Router)
export default new Router({
  //定义路由
  //每个路由应该映射一个组件。其中"component"可以是通过Vue.extend()创建的组件构造器，或者，只是一个组件配置对象。
  routes: [
    {
      path: '/',
      name: 'Vuex',
      component: Vuex
    },
    {
      path: '/router',
      name: 'vueRouter',
      component: vueRouter,
      children:[
        //空子路由
        {
          path:'',
          components:{
            default:view1,
            a:home
          }
        },
        {
          //当/router/home匹配成功，
          //home会被渲染在vueRouter的<router-view>中
          path:'home',
          name:'home',
          component:home
        },
        {
          //当/router/view1匹配成功，
          //view1会被渲染在vueRouter的<router-view>中
          path:'view1',
          name:'view1',
          component:view1
        },
      ]
    },
    {
      //动态路径参数 以冒号开头
      path:'/helloworld/:id',
      //可以不通过this.$router获取:id,直接当做组件的props使用
      props:true,
      //通过name进行跳转
      name:'HelloWorld',
      component:HelloWorld
    }
  ]
})
