<template>
  <div class="hello">
    view1页面展示
  </div>
</template>

<script>
export default {
  name: 'view1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      param:''
    }
  },
  methods: {
    
  },
  mounted() {
    console.log(this.$route.params.name)
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
