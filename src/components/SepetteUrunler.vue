<template>
    <li class="list-item">
        <div class="productbox-mini basket has-remove">
            <div class="product-image-wrap">
                <router-link :to="{name: 'Urun',path: '/urun/'+product.link_name, params:{id:product.serial_productid}}"><img :src="'https://cdnd.ceptesok.com/product/420x420/'+ getPicture(product.files[0])" class="imagefit-img abs mCS_img_loaded"></router-link>
            </div>
            <div class="product-description">
                <h3 class="product-title"> <router-link :to="{name: 'Urun',path: '/urun/'+product.link_name, params:{id:product.serial_productid}}">{{product.warranty_description}}</router-link></h3>
                <p class="product-subtitle">1 adet</p>
            </div>
            <div class="product-remove">
                <button class="product-removebutton icon-close" @click="remove(product.serial_productid)"></button>
            </div>
            <div class="product-price">
                <div class="pricebox basket">
                    <div class="pricebox-content"><span class="currency pricebox-currency"></span><span class="pricebox-main">{{product.serial_market_price ? product.serial_market_price : product.min_price }}</span></div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'SepetteUrunler',
    props:{product : Object},
    methods:{
        getPicture(images){
            var imgurl;
            try{
            if(images.document_href.includes(""))
            {
                imgurl= images.document_href   
            }else{
                imgurl= "product-default.png"
            }
            }catch(err){
                imgurl= "product-default.png"
            }
            return  imgurl;
        },
        changetotal(pr){
            this.$store.commit('changeTotal',pr)
            return pr;
        },
        remove(prid){
             this.$store.commit('deleteProduct',prid)
        }
    },
    data () {
    return {
    };
  }
}
</script>