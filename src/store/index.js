import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    SViewSquare:true,
    sepet:[],
    total:0
};
const getters={
    getGridState(state){
        console.log(state.SViewSquare)
        return state.SViewSquare
    },
    getCartPro(state){
        return state.sepet;
    },
    getTotal(state){
        return state.total;
    }
};
const mutations={
    changeGrid(state,eventN){
        if(eventN.path[0].className=="grid-icon"){
            state.SViewSquare = false
            eventN.path[0].className = "grid-icon active"
        }else{
            state.SViewSquare = true
            eventN.path[0].className +=" active"
        }
    },
    addProduct(state,proid){
        state.sepet.push(proid)
        state.total+=  parseFloat(proid.serial_market_price)
    },
    changeTotal(state,price){
        state.total += price;
    }
};
const actions={};


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})

export default store;