<template>
<div>
    <header class="checkout">
        <div class="wrapper header-wrap"><a href="/siparis/#/sepet" class="header-control header-backlink"><i class="control-icon icon-arrow-left"></i> Sepete Geri Dön</a>
        <a href="/" class="header-logo"><img src="../img/logo.svg"></a>
        </div>
    </header>
    
<nav class="section checkout-nav">
   <div class="wrapper"> 
       
       <form>
           
           <section v-if="step == 1" class="list-item active"> Teslimat Zamanı

           </section>
           
           <section v-if="step == 2" class="list-item"> Ödeme İşlemleri>

           </section>
           
           <section v-if="step == 3" class="list-item"> Sipariş Özeti>

           </section>
           
           <button v-if="step != totalsteps" @click.prevent="nextStep">Next Step</button>
           <button v-if="step != 1" @click.prevent="prevStep">Previous Step</button>
        
        </form>
    </div>
</nav>

</div>
  
</template>

<script>

export default {
    name: 'Steps',
//     components:{
//    },
    data() {
        form: {
            name:null;
            email:null;
            phone:null;
        }
    return { 
        step:1,
        totalsteps: 3,
    };
  },

  methods:{
      nextStep:function()
      {
        this.step++;
    },
      prevStep:function()
      {
          this.step--;
      }
  },
  
  mounted(){

  }

}
</script>

<style>

</style>