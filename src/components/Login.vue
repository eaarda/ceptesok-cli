<template>
<div>
<div>
   <header><headers/></header>
    <div>
        <nav class="section breadcrumbs bg-white">
            <div class="wrapper breadcrumbs-wrap">
                <div class="breadcrumbs-container">
                    <ul class="breadcrumbs-list">
                        <li><a href="https://www.ceptesok.com">Ana Sayfa</a></li>
                        <li><a href="/uye">Üyelik</a></li>
                        <li><span>Giriş</span></li>
                    </ul>
                </div>
            </div>
        </nav>
        <main class="section login page-whitebg">
            <div class="wrapper">
                <div class="section login-content">
                    <div class="login-right">
                        <div id="member-login-embed" class="login-form login clickshow-subject noanim grid-container narrow-vertical inputform enable show">
                            <div class="grid-row">
                                <div class="grid-col nogap-top form-alternatives">
                                    <div class="col-xs-12 padding-reset clickshow notoggle" data-subject="member-register-embed" data-clickshow-group="member-sections-embed">
                                        <div class="col-xs-6 xs-pl0 xs-pb0"><span class="btn btnFaceBook flexRow xs-textleft" style="background-color: blue; color: white;"><img src="../img/facebook.svg" alt="">
            Facebook ile  giriş yap.
        </span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-row">
                                <div class="grid-col nogap-t"> </div>
                            </div>
                             <div class="grid-row">
                                <div class="grid-col">
                                    <div class="inputwrap type-text">
                                        <input type="text" name="email" autocomplete="email" v-model="email" placeholder="E-Mail">
                                    </div>
                                </div>
                            </div>
                            <div class="grid-row"  v-if="!whereiam">
                                <div class="grid-col">
                                    <div class="inputwrap type-text">
                                        <input type="text" name="phone" autocomplete="tel-national" v-model="mnumber" maxlength="11" placeholder="Cep Telefonu">
                                    </div>
                                </div>
                            </div>
                             <div class="grid-row" v-if="!whereiam">
                                <div class="grid-col">
                                    <div class="inputwrap type-text">
                                        <input type="text" name="name" autocomplete="name" v-model="nsname" placeholder="Ad Soyad">
                                    </div>
                                </div>
                            </div>
                            <div class="grid-row">
                                <div class="grid-col">
                                    <div class="inputwrap type-password">
                                        <input type="password" name="password" autocomplete="current-password" v-model="password" placeholder="Parola">
                                        <button type="button" class="password-peek"></button>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-row" v-if="!whereiam">
                                <div class="grid-col gap-top-high">
                                    <div class="checkwrap type-checkbox">
                                        <input type="checkbox" id="register_agreement21" v-model="checked">
                                        <label for="register_agreement21"><span></span>
                                            <button onclick="checkRegisterModalEnabled()" data-modal="modal_registerterms" class="form-innerlink modaltrigger">Kullanım koşulları</button>'nı okudum,
                                            <br>onaylıyorum</label>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-row" v-if="!whereiam"> 
                                <div class="grid-col">
                                    <div class="checkwrap type-checkbox">
                                        <input type="checkbox" id="register_notification21">
                                        <label for="register_notification21"><span></span> Bana özel kampanyalardan haberdar olmak istiyorum</label>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-row" v-if="whereiam">
                                <div class="grid-col gap-top-high">
                                    <div class="checkwrap type-checkbox">
                                        <input type="checkbox" id="input_dummy_4">
                                        <label for="input_dummy_4"><span></span> Beni hatırla</label>
                                    </div> <a onclick="checkRegisterModalEnabled()" data-modal="modal_passwordrecovery" class="form-innerlink fright modaltrigger">Şifrenizi unuttunuz mu?</a></div>
                            </div>
                            <div class="grid-row">
                                <div class="grid-col gap-top-high">
                                    <button class="btn green block" @click="uye">
                                        Devam
                                    </button>
                                </div>
                            </div>
                             <h3 class="menu-title" style="padding: 10px 10px;">{{result}}</h3>
                            <div class="grid-row">
                                <div class="grid-col">
                                    <div class="form-seperator"></div>
                                </div>
                            </div>
                            <div class="grid-row">
                                <div class="grid-col nogap-top form-alternatives"><span class="alternatives-title">{{hesap}}</span>
                                    <button @click="$router.push(`${whereiam == 1 ? 'Kayit' : 'Giris'}`)" data-subject="member-register-embed" data-clickshow-group="member-sections-embed" class="clickshow notoggle">{{yazi}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="login-left">
                        <a href="/hazir-listeler"><img src="../img/login-banner.jpg" class="login-banner"></a>
                    </div>
                </div>
            </div>
        </main>
    </div>
<altkisim/>
</div>
</div>
</template>

<script>
import Altkisim  from './Altkisim.vue'
import headers from './Headers.vue'
import axios from "axios";

export default {
    name: 'Login',
    components:{
        headers,
        Altkisim,
    },
    computed:{
        whereiam(){
           return this.$route.path.includes("Giris") ? (true >>> (this.hesap = 'Hesabınız yok mu?',this.yazi="Şimdi Kayıt Ol")) : ((this.hesap = 'Hesabınız var mı?',this.yazi="Giriş Yap") >>> false)
        }
    },
    data () {
    return {
            vhesap:"",
            vyazi:"",
            result:""
        }
    },
    methods:{
        uye:function(){
            if(!this.checked && this.$route.path.includes("Kayit")) return this.result = "Kullanım Koşullarını kabul ediniz."
            axios
          .post("https://cepte.herokuapp.com"+this.$route.path,{
                nsname:this.nsname,
                password:this.password,
                mnumber:this.mnumber,
                email:this.email
          })
          .then(response => {
            if(this.$route.path.includes("Giris")) {
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("nsname",response.data.nsname);
                this.$store.state.token = response.data.token;
                this.$store.state.nsname = response.data.nsname;
                  axios
                .post("https://cepte.herokuapp.com/getBasket",{
                      token:response.data.token
                },{headers : {'Content-Type':'application/json'}}).then(resp=> {
                    if(resp.data!== "empty"){
                    (resp.data).forEach(element => {
                        this.$store.commit('addProduct',element)
                    });
                    }
                })
             }
                this.result = this.$route.path.split('/')[1] + " Başarılı";
                setTimeout(function(){ this.$router.go(-1) }, 2000);
          })
          .catch(error => {
            console.log(error)
            this.$route.path.includes("Giris") ? this.result ="E-Mail veya şifreniz yanlış" : this.result = "Bilgiler geçersiz"
            })
            
            }
        }
    }
</script>

<style>

</style>