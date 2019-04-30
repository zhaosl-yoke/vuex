<template>
  <div class="hello">
    hello world{{param}}
    <router-link to="/helloworld/123">Go To HelloWorld123</router-link>
    <router-link to="/helloworld/456">Go To HelloWorld456</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //props:['id'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      param:''
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    this.param = this.$route.params.id
    //console.log(this.id)
  },
  //方式一：导航守卫
  // beforeRouteUpdate(to,from,next){
  //   //具体逻辑代码
  //   console.log('Update');
  //   next();
  // },
  //方式二：wacth（检测变化）
  watch:{
    $route(to,from){
      console.log('路由参数变化');
      //具体逻辑代码
    }
  },
  methods: {
    
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
