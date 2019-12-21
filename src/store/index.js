import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const state={
    SViewSquare:true,
    sepet:new Array(),
    total:0,
    token:0,
    nsname:0
};
const getters={
    getGridState(state){
        console.log(state.SViewSquare)
        return state.SViewSquare
    },
    getCartPro(state){
        return state.sepet;
    },
    getCartlen(state){
        return (state.sepet).length;
    },
    getTotal(state){
        return state.total;
    }
};
const mutations={
    changensname(state,nm){
        state.nsname = nm;
    },
    setToken(state,token){
        state.token=token;
    },
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
        localStorage.setItem("urun",JSON.stringify(state.sepet))
        localStorage.setItem("total",state.total)
        if(state.token !==0 ){
                axios
                .post("https://cepte.herokuapp.com/setBasket",{
                      token:state.token,
                      bucket:JSON.stringify(state.sepet)
                }).then(resp=> {
                   console.log(resp)
                    });
                }
    },
    changeTotal(state,price){
        console.log(price)
        state.total += price;
    },
    windowload(state){
        if(localStorage.getItem('urun') !== null){
            state.total=localStorage.getItem("total")
            state.sepet=JSON.parse(localStorage.getItem('urun'));
        }
        if(localStorage.getItem('token') !== null) state.token=localStorage.getItem('token')
        if(localStorage.getItem('nsname') !== null) state.nsname=localStorage.getItem('nsname')
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
            localStorage.removeItem("urun");
            localStorage.setItem("total",state.total)
            localStorage.setItem("urun",JSON.stringify(state.sepet))
            axios
                .post("https://cepte.herokuapp.com/setBasket",{
                      token:state.token,
                      bucket:JSON.stringify(state.sepet)
                }).then(resp=> {
                   console.log(resp)
                    });
                
    },
    deleteProductAll(state){
        state.total = 0;
        state.sepet = [];
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