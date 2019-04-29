import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
        count:1,
        num:100,
        text:''
    },
    getters:{
        add:state =>{
            return state.count += 100;
        }
    },
    mutations:{
        //接收state作为第一个参数
        // add(state) {
        //     state.num += 1;
        // },
        // reduce(state) {
        //     state.num -= 1;
        // }

        // add(state,n) {
        //     state.num += n;
        // },
        // reduce(state) {
        //     state.num -= 1;
        // }

        add(state,playload) {
            // state.num += playload.amount;
            // state.text += playload.text;
            state.num += 1;
        },
        reduce(state) {
            state.num -= 1;
        }
    },
    actions:{
        addAction(context) {
            //异步执行，先打印“首先打印”，3秒后再执行
            setTimeout(() => {
                context.commit('add',{amount:10,text:'增加10'}) 
            },3000);
            console.log('首先打印');
        },
        //es6语法，直接把commit对象传递过来
        reduceAction({commit}){
            commit('reduce');
        }
    }
})

export default store