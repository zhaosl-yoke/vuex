<template>
  <div class="hello">
    <!-- <h3>{{ $store.state.count }}</h3>
    <p>{{count}}</p>
    <p>{{num}}</p> -->
    <!-- <p>{{count}}</p> -->
    <!-- <h3>{{add}}</h3>
    <h3>{{$store.getters.add}}</h3>
    <h3>{{counted}}</h3> -->
    <h3>{{num}}</h3>
    <!-- <div>
      方式1
      <button @click="$store.commit('add')">增加</button>
      <button @click="$store.commit('reduce')">减少</button>
    </div>
    
    <div>
      方式2
      <button @click="add(10)">增加</button>
      <button @click="reduce">减少</button>
    </div> -->
    <!-- <div>
      方式1
      <button @click="$store.commit('add',{amount:10,'text':'增加10'})">增加</button>
      <button @click="$store.commit('reduce')">减少</button>
    </div>
    
    <div>
      方式2
      <button @click="add({amount:10,'text':'增加10'})">增加</button>
      <button @click="reduce">减少</button>
    </div> -->
    <div>
      <button @click="$store.dispatch('reduceAction')">减少</button>
      <button @click="addAction">增加</button>
    </div>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  name: 'Vuex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // },
  //形式1
  // computed: mapState({
  //   count:state=>state.count,
  //   num:state=>state.num
  // })
  //形式2
  // computed: {
  //   ...mapState({
  //     count:state=>state.count,
  //     num:state=>state.num
  //   })
  // }
  // computed: {
  //   ...mapGetters(['add']),
  //   counted() {
  //     return this.$store.getters.add
  //   }
  // },
  computed: {
    ...mapState(['num','text']),
  },
  methods: {
    //...mapMutations(['add','reduce'])
    ...mapActions(['addAction'])
  },
  //或者用这种方式
  //methods:mapMutations(['add','reduce'])
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
