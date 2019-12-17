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
  data () {
    return {};
  }
}
</script>