import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    SViewSquare:true,
    sepet:[],
    total:Number
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
        var a=parseFloat(state.total);
        proid.serial_market_price !== undefined ? a += Number(proid.serial_market_price) : a +=  Number(proid.min_price)
        state.total = a.toFixed(2)
        localStorage.setItem("urun",JSON.stringify(state))
    },
    changeTotal(state,price){
        state.total += price;
    },
    windowload(state){
        this.replaceState(Object.assign(state,JSON.parse(localStorage.getItem('urun'))))
        console.log("asdasdasd")
    },
    deleteProduct(state,proid){
            state.total = 0;
            var a=0;
            state.sepet=(state.sepet).filter(function(elem){
                if(elem.serial_productid !== proid){
                elem.serial_market_price !== undefined ? a += Number(elem.serial_market_price) : a +=  Number(elem.min_price)
                return elem.serial_productid !== proid
                }
            })
            state.total = a.toFixed(2)
            localStorage.clear();
            localStorage.setItem("urun",JSON.stringify(state))
    },
    deleteProductAll(state){
        state.total = 0;
        state.sepet=[];
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