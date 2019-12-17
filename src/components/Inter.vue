<template>
     <section class="kısım home-banner-howto expandbanner" v-bind:class="{'collapse':col}">
            <div class="wrapper howto-wrap">
               <div class="howto-miniwrap">
                  <div class="miniwrap-expand"><img src="../img/banner-howto.png" class="howto-image"></div>
                  <h3 class="miniwrap-collapse">İnternetten Öde Marketten Teslim Al</h3>
               </div>
               <button class="howto-expand expandbanner-expand" @click="col=(col==true?false:true)">
                  <div class="expand-inner"></div>
               </button>
            </div>
         </section>
</template>
<script>
export default {
    name: 'Internettenode',
    data () {
    return {
       col:false
    };
  }
}
</script>