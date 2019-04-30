<template>
  <div class="hello">
      <!-- 使用router-link 组件来导航 -->
      <!-- 通过传入`to` 属性指定链接 -->
      <!-- <router-link> 默认会被渲染成一个`<a>` 标签-->
      <router-link to="/helloworld/123">Go To HelloWorld</router-link>
      <router-link to="home">home</router-link>
      <!-- 通过路由设置的name 跳转 -->
      <router-link :to="{name:'view1',params:{'name':'张三'}}">view1</router-link>
      <div @click="goto">Go To HelloWorld</div>
      <div @click="test">跳转到home</div>
      <!-- 两个路由的情况 -->
      <router-view name="a"></router-view>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'vueRouter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goto() {
      //编程式的导航
      this.$router.push('/helloworld/456');
    },
    test() {
      this.$router.push({name:'home',query:{'num':1}});
    }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
