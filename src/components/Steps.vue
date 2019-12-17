<template>
<div>
    <form>

        <section v-if="step == 1">
            <h3>Step 1</h3>
            <input type="text" placeholder="Whatis your name"
            class="form-control form-control-lg">
        </section>

        <section v-if="step == 2">
            <h3>Step 2</h3>
             <input type="email" placeholder="Whatis your email"
            class="form-control form-control-lg">
             <input type="tel" placeholder="Whatis your phone number"
            class="form-control form-control-lg">
        </section>

        <section v-if="step == 3">
            <h3>Step 3</h3>
             <textarea placeholder="Type your message"
            class="form-control form-control-lg"></textarea>
        </section>

        <button v-if="step != totalsteps" @click.prevent="nextStep">Next Step</button>
        <button v-if="step != 1" @click.prevent="prevStep">Previous Step</button>
    </form>

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