<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import buildcss from './assets/css/build.css'
import sehircss from './assets/css/sehir.css'


export default {
  name: 'app',
  created(){
    this.$store.commit('windowload')
  },
  watch:{
     $route(to, from){
       document.body.className="indicator-container indicator-loading"
         setTimeout(this.changebody, 3500);
     }
  },
  methods:{
      changebody:function(){
        document.body.className=""
      }
  },
  data () {
    return {};
  }
}
</script>