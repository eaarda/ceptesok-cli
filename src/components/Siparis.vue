<template>
    <div>
        <a href="#"><img alt="Yukarı Çık" class="yukarikaydir" src="../img/yc.png" style="display: block;"></a>
        <div id="messenger-container" class="fixed"></div>
        <div id="checkout_app">
            <div>
                <header class="checkout">
                    <div class="wrapper header-wrap"><a href="/siparis/#/sepet" class="header-control header-backlink"><i class="control-icon icon-arrow-left"></i> Sepete Geri Dön</a>
                    <a href="/" class="header-logo"><img src="../img/logo.svg"></a>
                    </div>
                    <a href="#"><img alt="Yukarı Çık" class="yukarikaydir" src="../img/yc.png" style="display: block;"></a>
                </header>
                <div class="section wrapper checkout-wrap checkout-cart">
                    <div>
                        <main class="section checkout-section cart-items">
                            <div class="section checkout-head">
                                <h1 class="head-title">Sepet</h1>
                                <p class="head-subtitle"><span class="basket-quantity">{{getProCo}}</span> Adet Ürün Bulunuyor</p>
                            </div>
                           <ul class="items-list">
                            <sepette-urunler v-for="product in products" :product="product" :key="product.serial_productid"/>
                           </ul>
                            <button class="cart-clear btn smaller hollow darkgray"><i class="icon-trash"></i> Sepeti boşalt</button>
                        </main>
                        <aside class="section checkout-section checkout-sum">
                            <!---->
                            <!---->
                            <div class="sum-total">
                                <p class="total-title">
                                    KDV Dahil
                                    <br>Toplam Tutar:
                                </p>
                                <div class="pricebox {'plain': true}">
                                    <div class="pricebox-content"><span class="currency pricebox-currency"></span> {{$store.state.total}}</div>
                                </div>
                            </div>
                            <!---->
                            <div class="sum-controls">
                                <button class="btn big block green text-big"><router-link to="/steps"> Alışverişi Tamamla </router-link> <i class="icon-arrow-right"></i></button>
                            </div>
                            <!---->
                            <div id="modal_installment_direct" class="modal">
                                <div class="modal-element">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div class="modal-header">
                                                <button class="modal-close" style="margin-right: 50px;"><i class="icon-close"></i></button>
                                            </div>
                                            <div class="crossProduct">
                                                <center>
                                                    <p>Sepetinizde hem taksit yapılabilir, hem de taksit yapılamaz ürünler olduğundan peşin işlem yapabileceksiniz.</p>
                                                    <p>Tercihinize göre sepetinizi yeniden düzenleyip, devam edebilirsiniz.</p>
                                                    <button class="btn small">TAMAM</button>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="section checkout-section checkout-howitworks">
                        <h3 class="howitworks-title">CEPTE ŞOK nasıl çalışır?</h3>
                        <ul class="howitworks-terms">
                            <li class="terms-item">
                                İnternet sitesi veya mobil uygulama üzerinden alışverişinizi tamamlayın.
                            </li>
                            <li class="terms-item">
                                Ürünlerini teslim almak istediğiniz, sana en yakın Şok Market’i ve zamanı seçiniz.
                            </li>
                            <li class="terms-item">
                                Ürünlerinizi seçtiğiniz Şok Market’ten, kasada sıra beklemeden teslim alabilirsiniz.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="carousel-wrap" style="">
                    <div id="showcase_slider_1_subject_121" data-dots="false" data-type="carousel" data-items="5" data-items-large="3" data-margin="1" class="carousel-slider sliderelement clickshow-subject noanim enable show type-carousel slider-items-5 slider-inited owl-carousel owl-loaded owl-drag">
                        <div class="owl-stage-outer">
                            <div class="owl-stage" style="transform: translate3d(-1901px, 0px, 0px); transition: all 0s ease 0s; width: 7368px;">
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_163" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_166" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/9b36f_power-bulasik-sivisi-675-ml-yag-cozucu-540-ml.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">19</span><span class="pricebox-decimal">00</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/tost-peyniri-400-gr-15811">Her 25 TL alışverişinize İçim Tost Peyniri 400 Gr sadece 12,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_169" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/tost-peyniri-400-gr-15811" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/398d7_tost-peyniri-400-gr.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">19</span><span class="pricebox-decimal">00</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/tost-peyniri-400-gr-15811">Her 25 TL alışverişinize İçim Tost Peyniri 400 Gr sadece 12,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_172" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_175" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/9b36f_power-bulasik-sivisi-675-ml-yag-cozucu-540-ml.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sampuan-kepege-karsi-360-ml">Her 25 TL alışverişinize Blendax Şampuan Kepeğe Karşı 360 Ml sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_178" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sampuan-kepege-karsi-360-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/0fb48_Sampuan_Kepege_KarSI_360_Ml.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sampuan-kepege-karsi-360-ml">Her 25 TL alışverişinize Blendax Şampuan Kepeğe Karşı 360 Ml sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_181" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/9b36f_power-bulasik-sivisi-675-ml-yag-cozucu-540-ml.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">16</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">9</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/2-si-1-arada-klasik-bakim-sampuan-300-ml">Her 25 TL alışverişinize Head &amp; Shoulders 2 si 1 Arada Klasik Bakım Şampuan 300 ml sadece 9,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_184" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/2-si-1-arada-klasik-bakim-sampuan-300-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/ab1b1_headshoulders-2si-1-arada-klasik-bakim.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">16</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">9</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/2-si-1-arada-klasik-bakim-sampuan-300-ml">Her 25 TL alışverişinize Head &amp; Shoulders 2 si 1 Arada Klasik Bakım Şampuan 300 ml sadece 9,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_142" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg" src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg" style="opacity: 1;"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_145" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/9b36f_power-bulasik-sivisi-675-ml-yag-cozucu-540-ml.jpg" src="https://cdnd.ceptesok.com/product/420x420/9b36f_power-bulasik-sivisi-675-ml-yag-cozucu-540-ml.jpg" style="opacity: 1;"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">34</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/natural-extracts-aktif-komur-dis-macunu75-ml">Her 25 TL alışverişinize Colgate Natural Extracts Aktif Kömür Diş Macunu75 ml sadece 10,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_148" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/natural-extracts-aktif-komur-dis-macunu75-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/2bf0d_natural-extracts-aktif-komur-dis-macunu75-ml.jpg" src="https://cdnd.ceptesok.com/product/420x420/2bf0d_natural-extracts-aktif-komur-dis-macunu75-ml.jpg" style="opacity: 1;"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">34</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/natural-extracts-aktif-komur-dis-macunu75-ml">Her 25 TL alışverişinize Colgate Natural Extracts Aktif Kömür Diş Macunu75 ml sadece 10,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_151" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg" src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg" style="opacity: 1;"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sampuan-kepege-karsi-360-ml">Her 25 TL alışverişinize Blendax Şampuan Kepeğe Karşı 360 Ml sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_154" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sampuan-kepege-karsi-360-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/0fb48_Sampuan_Kepege_KarSI_360_Ml.jpg" src="https://cdnd.ceptesok.com/product/420x420/0fb48_Sampuan_Kepege_KarSI_360_Ml.jpg" style="opacity: 1;"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sampuan-kepege-karsi-360-ml">Her 25 TL alışverişinize Blendax Şampuan Kepeğe Karşı 360 Ml sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_157" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_160" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_163" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_166" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/9b36f_power-bulasik-sivisi-675-ml-yag-cozucu-540-ml.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">19</span><span class="pricebox-decimal">00</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/tost-peyniri-400-gr-15811">Her 25 TL alışverişinize İçim Tost Peyniri 400 Gr sadece 12,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_169" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/tost-peyniri-400-gr-15811" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/398d7_tost-peyniri-400-gr.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">19</span><span class="pricebox-decimal">00</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/tost-peyniri-400-gr-15811">Her 25 TL alışverişinize İçim Tost Peyniri 400 Gr sadece 12,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_172" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_175" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/9b36f_power-bulasik-sivisi-675-ml-yag-cozucu-540-ml.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sampuan-kepege-karsi-360-ml">Her 25 TL alışverişinize Blendax Şampuan Kepeğe Karşı 360 Ml sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_178" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sampuan-kepege-karsi-360-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/0fb48_Sampuan_Kepege_KarSI_360_Ml.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sampuan-kepege-karsi-360-ml">Her 25 TL alışverişinize Blendax Şampuan Kepeğe Karşı 360 Ml sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_181" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/9b36f_power-bulasik-sivisi-675-ml-yag-cozucu-540-ml.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">16</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">9</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/2-si-1-arada-klasik-bakim-sampuan-300-ml">Her 25 TL alışverişinize Head &amp; Shoulders 2 si 1 Arada Klasik Bakım Şampuan 300 ml sadece 9,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_184" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/2-si-1-arada-klasik-bakim-sampuan-300-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/ab1b1_headshoulders-2si-1-arada-klasik-bakim.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">16</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">9</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/2-si-1-arada-klasik-bakim-sampuan-300-ml">Her 25 TL alışverişinize Head &amp; Shoulders 2 si 1 Arada Klasik Bakım Şampuan 300 ml sadece 9,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_142" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg" src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg" style="opacity: 1;"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_145" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/9b36f_power-bulasik-sivisi-675-ml-yag-cozucu-540-ml.jpg" src="https://cdnd.ceptesok.com/product/420x420/9b36f_power-bulasik-sivisi-675-ml-yag-cozucu-540-ml.jpg" style="opacity: 1;"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">29</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">20</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/power-bulasik-sivisi-653-ml-yag-cozucu-540-ml">Her 25 TL alışverişinize Pril Power Bulaşık Sıvısı 653 Ml + Yağ Çözücü 540 Ml sadece 20,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">34</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/natural-extracts-aktif-komur-dis-macunu75-ml">Her 25 TL alışverişinize Colgate Natural Extracts Aktif Kömür Diş Macunu75 ml sadece 10,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_148" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/natural-extracts-aktif-komur-dis-macunu75-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/2bf0d_natural-extracts-aktif-komur-dis-macunu75-ml.jpg" src="https://cdnd.ceptesok.com/product/420x420/2bf0d_natural-extracts-aktif-komur-dis-macunu75-ml.jpg" style="opacity: 1;"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">34</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/natural-extracts-aktif-komur-dis-macunu75-ml">Her 25 TL alışverişinize Colgate Natural Extracts Aktif Kömür Diş Macunu75 ml sadece 10,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_151" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg" src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg" style="opacity: 1;"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sampuan-kepege-karsi-360-ml">Her 25 TL alışverişinize Blendax Şampuan Kepeğe Karşı 360 Ml sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_154" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sampuan-kepege-karsi-360-ml" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/0fb48_Sampuan_Kepege_KarSI_360_Ml.jpg" src="https://cdnd.ceptesok.com/product/420x420/0fb48_Sampuan_Kepege_KarSI_360_Ml.jpg" style="opacity: 1;"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">10</span><span class="pricebox-decimal">90</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sampuan-kepege-karsi-360-ml">Her 25 TL alışverişinize Blendax Şampuan Kepeğe Karşı 360 Ml sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_157" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_160" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item cloned" style="width: 236.667px; margin-right: 1px;">
                                    <div>
                                        <div class="productbox">
                                            <div class="product-cartcontrols">
                                                <button class="cartcontrols-close"><i class="icon-close"></i></button>
                                                <div class="cartcontrols-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description cartcontrols-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                </div>
                                                <div class="cartcontrols-controls">
                                                    <!---->
                                                    <div class="controls-amount numberbox white">
                                                        <button class="numberbox-button number-increase"></button>
                                                        <button class="numberbox-button number-decrease"></button>
                                                        <input type="text" id="product_control_box_163" max="10" min="1" data-after="adet" data-step="1">
                                                    </div>
                                                    <!---->
                                                    <button type="button" class="controls-addtocart btn block yellow small">Sepete Ekle
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-label">
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <div>25 TL üzeri indirimli</div>
                                                </div>
                                                <div class="product-image-wrap">
                                                    <a href="/sivi-sabun-okyanus-18-lt" class="product-image imagefit fit"><img class="imagefit-img abs owl-lazy" data-src="https://cdnd.ceptesok.com/product/420x420/6b66e_sivi-sabun-okyanus-18-lt.jpg"></a>
                                                </div>
                                                <div class="product-price">
                                                    <div class="pricebox discount">
                                                        <div class="pricebox-content">
                                                            <div class="old"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                                                            <div class="current"><span class="currency pricebox-currency"></span><span class="pricebox-main">7</span><span class="pricebox-decimal">00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-description">
                                                    <h3 class="product-title"><a href="/sivi-sabun-okyanus-18-lt">Her 25 TL alışverişinize Fax Sıvı Sabun Okyanus 1.8 Lt sadece 7,00 TL.</a></h3>
                                                    <p class="product-subtitle">1 adet</p>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                                <button type="button" class="product-controlbutton addtocart btn green small">
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="owl-nav disabled">
                            <div class="owl-prev"><i class="icon-nav-menu-prev"></i></div>
                            <div class="owl-next"><i class="icon-nav-menu-next"></i></div>
                        </div>
                        <div class="owl-dots disabled"></div>
                    </div>
                </div>
            </div>
        </div>
        <altkisim/>
        <div id="modal_stores" class="modal stores">
            <div class="modal-element">
                <div data-beforeshow="$('#setQuery').data('selectBox-selectBoxIt').close();" class="modal-content">
                    <div class="select-city-bg"></div>
                    <div class="stores-map-wrap">
                        <button class="modal-close"><i class="icon-close"></i></button>
                        <button class="stores-findnearest btn small narrow yellow"><i class="icon-nav-2"></i> En Yakın
                        </button>
                        <div class="stores-map google-map" id="map_defaultid_0" style="position: relative; overflow: hidden;">
                            <div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);">
                                <div style="overflow: hidden;"></div>
                                <div class="gm-style" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;">
                                    <div tabindex="0" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: url(&quot;https://maps.gstatic.com/mapfiles/openhand_8_8.cur&quot;), default; touch-action: pan-x pan-y;">
                                        <div style="z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);">
                                            <div style="position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;">
                                                <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                                                    <div style="position: absolute; z-index: 1000; transform: matrix(1, 0, 0, 1, 0, -128);">
                                                        <div style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px;">
                                                            <div style="width: 256px; height: 256px;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"></div>
                                            <div style="position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"></div>
                                            <div style="position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;">
                                                <div style="position: absolute; left: 0px; top: 0px; z-index: -1;">
                                                    <div style="position: absolute; z-index: 1000; transform: matrix(1, 0, 0, 1, 0, -128);">
                                                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 0px;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="position: absolute; left: 0px; top: 0px; z-index: 0;"></div>
                                        </div>
                                        <div class="gm-style-pbc" style="z-index: 2; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; opacity: 0;">
                                            <p class="gm-style-pbt"></p>
                                        </div>
                                        <div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;">
                                            <div style="z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);">
                                                <div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div>
                                                <div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div>
                                                <div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"></div>
                                                <div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <iframe aria-hidden="true" frameborder="0" style="z-index: -1; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; border: none;"></iframe>
                                </div>
                            </div>
                        </div>
                        <div class="select-city">
                            <div class="wrapper">
                                <h2>Marketleri Listelemek için şehir seçmelisiniz.</h2>
                                <select id="setQuery" style="display: none;">
                                    <option value="">Şehir Seçiniz</option>
                                    <option id="city2" value="2">İstanbul</option>
                                    <option id="city3" value="3">İzmir</option>
                                    <option id="city4" value="4">Ankara</option>
                                    <option id="city5" value="5">Adana</option>
                                    <option id="city6" value="6">Adıyaman</option>
                                    <option id="city7" value="7">Afyonkarahisar</option>
                                    <option id="city8" value="8">Ağrı</option>
                                    <option id="city9" value="9">Aksaray</option>
                                    <option id="city10" value="10">Amasya</option>
                                    <option id="city11" value="11">Antalya</option>
                                    <option id="city12" value="12">Ardahan</option>
                                    <option id="city13" value="13">Artvin</option>
                                    <option id="city14" value="14">Aydın</option>
                                    <option id="city15" value="15">Balıkesir</option>
                                    <option id="city76" value="76">Sivas</option>
                                    <option id="city16" value="16">Bartın</option>
                                    <option id="city17" value="17">Batman</option>
                                    <option id="city18" value="18">Bayburt</option>
                                    <option id="city19" value="19">Bilecik</option>
                                    <option id="city20" value="20">Bingöl</option>
                                    <option id="city21" value="21">Bitlis</option>
                                    <option id="city22" value="22">Bolu</option>
                                    <option id="city23" value="23">Burdur</option>
                                    <option id="city24" value="24">Bursa</option>
                                    <option id="city25" value="25">Çanakkale</option>
                                    <option id="city26" value="26">Çankırı</option>
                                    <option id="city27" value="27">Çorum</option>
                                    <option id="city28" value="28">Denizli</option>
                                    <option id="city29" value="29">Diyarbakır</option>
                                    <option id="city30" value="30">Düzce</option>
                                    <option id="city31" value="31">Edirne</option>
                                    <option id="city32" value="32">Elazığ</option>
                                    <option id="city33" value="33">Erzincan</option>
                                    <option id="city34" value="34">Erzurum</option>
                                    <option id="city35" value="35">Eskişehir</option>
                                    <option id="city36" value="36">Gaziantep</option>
                                    <option id="city37" value="37">Giresun</option>
                                    <option id="city39" value="39">Gümüşhane</option>
                                    <option id="city41" value="41">Hakkari</option>
                                    <option id="city42" value="42">Hatay</option>
                                    <option id="city43" value="43">Iğdır</option>
                                    <option id="city44" value="44">Isparta</option>
                                    <option id="city46" value="46">Kahramanmaraş</option>
                                    <option id="city47" value="47">Karabük</option>
                                    <option id="city48" value="48">Karaman</option>
                                    <option id="city49" value="49">Kars</option>
                                    <option id="city50" value="50">Kastamonu</option>
                                    <option id="city51" value="51">Kayseri</option>
                                    <option id="city52" value="52">Kırıkkale</option>
                                    <option id="city53" value="53">Kırklareli</option>
                                    <option id="city54" value="54">Kırşehir</option>
                                    <option id="city55" value="55">Kilis</option>
                                    <option id="city56" value="56">Kocaeli</option>
                                    <option id="city57" value="57">Konya</option>
                                    <option id="city58" value="58">Kütahya</option>
                                    <option id="city61" value="61">Malatya</option>
                                    <option id="city62" value="62">Manisa</option>
                                    <option id="city77" value="77">Şanlıurfa</option>
                                    <option id="city78" value="78">Şırnak</option>
                                    <option id="city63" value="63">Mardin</option>
                                    <option id="city64" value="64">Mersin</option>
                                    <option id="city65" value="65">Muğla</option>
                                    <option id="city66" value="66">Muş</option>
                                    <option id="city67" value="67">Nevşehir</option>
                                    <option id="city68" value="68">Niğde</option>
                                    <option id="city69" value="69">Ordu</option>
                                    <option id="city70" value="70">Osmaniye</option>
                                    <option id="city71" value="71">Rize</option>
                                    <option id="city72" value="72">Sakarya</option>
                                    <option id="city73" value="73">Samsun</option>
                                    <option id="city74" value="74">Siirt</option>
                                    <option id="city75" value="75">Sinop</option>
                                    <option id="city79" value="79">Tekirdağ</option>
                                    <option id="city80" value="80">Tokat</option>
                                    <option id="city81" value="81">Trabzon</option>
                                    <option id="city82" value="82">Tunceli</option>
                                    <option id="city83" value="83">Uşak</option>
                                    <option id="city84" value="84">Van</option>
                                    <option id="city85" value="85">Yalova</option>
                                    <option id="city86" value="86">Yozgat</option>
                                    <option id="city87" value="87">Zonguldak</option>
                                </select><span id="setQuerySelectBoxItContainer" class="selectboxit-container selectboxit-container" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" aria-owns="setQuerySelectBoxItOptions"><span id="setQuerySelectBoxIt" class="selectboxit  selectboxit-enabled selectboxit-btn" name="" tabindex="0" unselectable="on" style="width: 97px;"><span class="selectboxit-option-icon-container"><i id="setQuerySelectBoxItDefaultIcon" class="selectboxit-default-icon selectboxit-option-icon selectboxit-container" unselectable="on"></i></span><span id="setQuerySelectBoxItText" class="selectboxit-text" unselectable="on" data-val="" aria-live="polite" style="max-width: 59px;">Şehir Seçiniz</span><span id="setQuerySelectBoxItArrowContainer" class="selectboxit-arrow-container" unselectable="on"><i id="setQuerySelectBoxItArrow" class="selectboxit-arrow selectboxit-default-arrow" unselectable="on"></i></span></span>
                                <ul id="setQuerySelectBoxItOptions" class="selectboxit-options selectboxit-list" tabindex="-1" style="min-width: 78px;" role="listbox" aria-hidden="true">
                                    <li data-id="0" data-val="" data-disabled="false" class="selectboxit-option  selectboxit-option-first selectboxit-selected" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Şehir Seçiniz</a></li>
                                    <li data-id="1" data-val="2" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>İstanbul</a></li>
                                    <li data-id="2" data-val="3" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>İzmir</a></li>
                                    <li data-id="3" data-val="4" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Ankara</a></li>
                                    <li data-id="4" data-val="5" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Adana</a></li>
                                    <li data-id="5" data-val="6" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Adıyaman</a></li>
                                    <li data-id="6" data-val="7" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Afyonkarahisar</a></li>
                                    <li data-id="7" data-val="8" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Ağrı</a></li>
                                    <li data-id="8" data-val="9" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Aksaray</a></li>
                                    <li data-id="9" data-val="10" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Amasya</a></li>
                                    <li data-id="10" data-val="11" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Antalya</a></li>
                                    <li data-id="11" data-val="12" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Ardahan</a></li>
                                    <li data-id="12" data-val="13" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Artvin</a></li>
                                    <li data-id="13" data-val="14" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Aydın</a></li>
                                    <li data-id="14" data-val="15" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Balıkesir</a></li>
                                    <li data-id="15" data-val="76" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Sivas</a></li>
                                    <li data-id="16" data-val="16" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Bartın</a></li>
                                    <li data-id="17" data-val="17" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Batman</a></li>
                                    <li data-id="18" data-val="18" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Bayburt</a></li>
                                    <li data-id="19" data-val="19" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Bilecik</a></li>
                                    <li data-id="20" data-val="20" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Bingöl</a></li>
                                    <li data-id="21" data-val="21" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Bitlis</a></li>
                                    <li data-id="22" data-val="22" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Bolu</a></li>
                                    <li data-id="23" data-val="23" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Burdur</a></li>
                                    <li data-id="24" data-val="24" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Bursa</a></li>
                                    <li data-id="25" data-val="25" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Çanakkale</a></li>
                                    <li data-id="26" data-val="26" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Çankırı</a></li>
                                    <li data-id="27" data-val="27" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Çorum</a></li>
                                    <li data-id="28" data-val="28" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Denizli</a></li>
                                    <li data-id="29" data-val="29" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Diyarbakır</a></li>
                                    <li data-id="30" data-val="30" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Düzce</a></li>
                                    <li data-id="31" data-val="31" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Edirne</a></li>
                                    <li data-id="32" data-val="32" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Elazığ</a></li>
                                    <li data-id="33" data-val="33" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Erzincan</a></li>
                                    <li data-id="34" data-val="34" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Erzurum</a></li>
                                    <li data-id="35" data-val="35" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Eskişehir</a></li>
                                    <li data-id="36" data-val="36" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Gaziantep</a></li>
                                    <li data-id="37" data-val="37" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Giresun</a></li>
                                    <li data-id="38" data-val="39" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Gümüşhane</a></li>
                                    <li data-id="39" data-val="41" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Hakkari</a></li>
                                    <li data-id="40" data-val="42" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Hatay</a></li>
                                    <li data-id="41" data-val="43" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Iğdır</a></li>
                                    <li data-id="42" data-val="44" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Isparta</a></li>
                                    <li data-id="43" data-val="46" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Kahramanmaraş</a></li>
                                    <li data-id="44" data-val="47" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Karabük</a></li>
                                    <li data-id="45" data-val="48" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Karaman</a></li>
                                    <li data-id="46" data-val="49" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Kars</a></li>
                                    <li data-id="47" data-val="50" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Kastamonu</a></li>
                                    <li data-id="48" data-val="51" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Kayseri</a></li>
                                    <li data-id="49" data-val="52" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Kırıkkale</a></li>
                                    <li data-id="50" data-val="53" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Kırklareli</a></li>
                                    <li data-id="51" data-val="54" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Kırşehir</a></li>
                                    <li data-id="52" data-val="55" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Kilis</a></li>
                                    <li data-id="53" data-val="56" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Kocaeli</a></li>
                                    <li data-id="54" data-val="57" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Konya</a></li>
                                    <li data-id="55" data-val="58" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Kütahya</a></li>
                                    <li data-id="56" data-val="61" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Malatya</a></li>
                                    <li data-id="57" data-val="62" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Manisa</a></li>
                                    <li data-id="58" data-val="77" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Şanlıurfa</a></li>
                                    <li data-id="59" data-val="78" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Şırnak</a></li>
                                    <li data-id="60" data-val="63" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Mardin</a></li>
                                    <li data-id="61" data-val="64" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Mersin</a></li>
                                    <li data-id="62" data-val="65" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Muğla</a></li>
                                    <li data-id="63" data-val="66" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Muş</a></li>
                                    <li data-id="64" data-val="67" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Nevşehir</a></li>
                                    <li data-id="65" data-val="68" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Niğde</a></li>
                                    <li data-id="66" data-val="69" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Ordu</a></li>
                                    <li data-id="67" data-val="70" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Osmaniye</a></li>
                                    <li data-id="68" data-val="71" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Rize</a></li>
                                    <li data-id="69" data-val="72" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Sakarya</a></li>
                                    <li data-id="70" data-val="73" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Samsun</a></li>
                                    <li data-id="71" data-val="74" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Siirt</a></li>
                                    <li data-id="72" data-val="75" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Sinop</a></li>
                                    <li data-id="73" data-val="79" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Tekirdağ</a></li>
                                    <li data-id="74" data-val="80" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Tokat</a></li>
                                    <li data-id="75" data-val="81" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Trabzon</a></li>
                                    <li data-id="76" data-val="82" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Tunceli</a></li>
                                    <li data-id="77" data-val="83" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Uşak</a></li>
                                    <li data-id="78" data-val="84" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Van</a></li>
                                    <li data-id="79" data-val="85" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Yalova</a></li>
                                    <li data-id="80" data-val="86" data-disabled="false" class="selectboxit-option" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Yozgat</a></li>
                                    <li data-id="81" data-val="87" data-disabled="false" class="selectboxit-option  selectboxit-option-last" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>Zonguldak</a></li>
                                </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="stores-content inputform">
                        <h3 class="content-title">Alışverişe devam etmek için market seçmelisiniz</h3>
                        <label class="label">
                            İstanbul
                            <button type="button" onclick="storesmodal.reset();$('#setQuery').data('selectBox-selectBoxIt').close();"><i class="icon-close"></i></button>
                        </label>
                        <div class="content-search inputwrap light type-text">
                            <button class="input-icon icon-search"></button>
                            <input type="text" placeholder="Semt veya Market Ara" class="search-input">
                        </div>
                        <div class="content-laststore">
                            <h4 class="laststore-title">Son Seçtiğiniz Mağaza:</h4>
                            <p class="lastsore-store">Beşiktaş Serencebey</p>
                            <button type="button" onclick="storesmodal.reset();$('#setQuery').data('selectBox-selectBoxIt').close();" class="btn smaller white">Değiştir</button>
                        </div>
                        <div class="content-results scrollbar mCustomScrollbar _mCS_2 mCS_no_scrollbar scrollbar-initialized">
                            <div id="mCSB_2" class="mCustomScrollBox mCS-custom mCSB_vertical mCSB_inside" style="max-height: 0px;" tabindex="0">
                                <div id="mCSB_2_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" style="position:relative; top:0; left:0;" dir="ltr"></div>
                                <div id="mCSB_2_scrollbar_vertical" class="mCSB_scrollTools mCSB_2_scrollbar mCS-custom mCSB_scrollTools_vertical" style="display: none;">
                                    <div class="mCSB_draggerContainer">
                                        <div id="mCSB_2_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 50px; top: 0px;">
                                            <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                        </div>
                                        <div class="mCSB_draggerRail"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-storedetail">
                            <button class="storedetail-back icon-arrow-left"></button>
                            <div class="storedetail-title"></div>
                            <div class="storedetail-info">
                                <div class="info-field address">
                                    <h3 class="field-title">Adres</h3>
                                    <div class="field-content"></div>
                                </div>
                                <div class="info-field phone">
                                    <h3 class="field-title">Telefon</h3>
                                    <div class="field-content"></div>
                                </div>
                                <div class="info-field workinghours">
                                    <h3 class="field-title">Açılış - Kapanış</h3>
                                    <div class="field-content"></div>
                                </div>
                            </div>
                            <div class="storedetail-controls">
                                <button data-modal="modal_deliverytime" onclick="storesmodal.showDeliveryTimes()" class="btn block hollow white control-small modaltrigger">Teslimat Saatleri</button>
                                <button class="btn block hollow white control-small stores-pathfind">Buraya yol tarifi
                                </button>
                                <button onclick="storesmodal.selectStore()" class="btn block yellow">Seç</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_rateorder" class="modal rateorder">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body rateorder-body-form">
                        <div class="modal-header">
                            <button class="modal-close"><i class="icon-close"></i></button>
                            <h3 class="header-title">
                        Ne Ters Gitti?
                    </h3></div>
                        <div class="modal-inner">
                            <form class="grid-container narrow-horizontal narrow-vertical inputform">
                                <div class="grid-row">
                                    <div class="grid-col x6 xs-x12">
                                        <div class="checkbutton text-big block light type-checkbox">
                                            <input type="checkbox" id="rate_input_dummy_12" name="dummy_rateorder" value="cargo_problem_detail">
                                            <label for="rate_input_dummy_12">Teslimat</label>
                                        </div>
                                    </div>
                                    <div class="grid-col x6 xs-x12">
                                        <div class="checkbutton text-big block light type-checkbox">
                                            <input type="checkbox" id="rate_input_dummy_13" name="dummy_rateorder" value="product_problem_detail">
                                            <label for="rate_input_dummy_13">Ürün</label>
                                        </div>
                                    </div>
                                    <div class="grid-col x6 xs-x12">
                                        <div class="checkbutton text-big block light type-checkbox">
                                            <input type="checkbox" id="rate_input_dummy_14" name="dummy_rateorder" value="client_feedback_detail">
                                            <label for="rate_input_dummy_14">Personel</label>
                                        </div>
                                    </div>
                                    <div class="grid-col x6 xs-x12">
                                        <div class="checkbutton text-big block light type-checkbox">
                                            <input type="checkbox" id="rate_input_dummy_15" name="dummy_rateorder" value="store_problem_detail">
                                            <label for="rate_input_dummy_15">Mağaza</label>
                                        </div>
                                    </div>
                                    <div class="grid-col x6 xs-x12">
                                        <div class="checkbutton text-big block light type-checkbox">
                                            <input type="checkbox" id="rate_input_dummy_16" name="dummy_rateorder" value="service_problem_detail">
                                            <label for="rate_input_dummy_16">Poşetleme</label>
                                        </div>
                                    </div>
                                    <div class="grid-col x6 xs-x12">
                                        <div class="checkbutton text-big block light type-checkbox">
                                            <input type="checkbox" id="rate_input_dummy_17" name="dummy_rateorder" value="order_problem_detail">
                                            <label for="rate_input_dummy_17">Zamanlama</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col gap-top-high gap-bottom-high">
                                        <div class="inputwrap light type-textarea">
                                            <textarea id="rate_input_dummy_18" placeholder="Eklemek istediğin bir şey var mı?"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col x6 gap-top-high nogap-bottom">
                                        <button type="button" class="btn green block">Gönder
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="modal-body rateorder-body-complete" style="display: none;">
                        <div class="modal-inner">
                            <h3 class="rateorder-complete-title">Teşekkürler!</h3>
                            <p class="rateorder-complete-text">Geri bildirimin için teşekkür ederiz.
                                <br>Yorumların bizim için çok önemli.
                            </p>
                            <button class="btn green wide modal-closetrigger">Kapat</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_memberactivate" class="modal modal-mini password-recovery">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body passwordrecovery-body-form">
                        <div class="modal-header">
                            <button class="modal-close"><i class="icon-close"></i></button>
                            <h3 class="header-title">
							Hesap aktivasyonu
						</h3></div>
                        <div class="modal-inner">
                            <form class="passwordrecovery-form grid-container inputform">
                                <div class="grid-row">
                                    <div class="grid-col nogap-t"> </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col nogap-t">
                                        <p class="validation-hideonerror">Cep telefonunuza gelen aktivasyon mesajını giriniz.</p>
                                        <p class="validation-message">Sisteme kayıtlı olmayan bir aktivasyon kodu girdiniz. Lütfen geçerli bir kod ile tekrar deneyiniz.</p>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <div class="inputwrap type-text">
                                            <input type="text" id="activation_code" placeholder="Aktivasyon Kodu">
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <button type="button" class="btn green block">Hesabımı aktive et</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_passwordrecovery" class="modal modal-mini password-recovery">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body passwordrecovery-body-form">
                        <div class="modal-header">
                            <button onclick="closeRegisterTerms()" class="modal-close"><i class="icon-close"></i></button>
                            <h3 class="header-title">
                        Şifremi Unuttum
                    </h3></div>
                        <div class="modal-inner">
                            <form class="passwordrecovery-form grid-container inputform">
                                <div class="grid-row">
                                    <div class="grid-col nogap-t">
                                        <p class="validation-hideonerror">Hesabınızla bağlantılı cep telefonunuzu girdiğinizde, şifrenizi sıfırlamanız için bir link göndereceğiz.</p>
                                        <p class="validation-message">Sisteme kayıtlı olmayan bir telefon numarası girdiniz. Lütfen geçerli bir cep telefonu ile tekrar deneyin.</p>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <div class="inputwrap type-text">
                                            <input type="text" maxlength="11" id="mobile_number" placeholder="Telefon Numaranız">
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <button type="button" class="btn green block">Sıfırlama Bağlantısı Gönder</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_passwordreset" class="modal modal-mini password-recovery">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body passwordrecovery-body-form">
                        <div class="modal-header">
                            <button onclick="closeRegisterTerms()" class="modal-close"><i class="icon-close"></i></button>
                            <h3 class="header-title">
						Şifremi Sıfırla
					</h3></div>
                        <div class="modal-inner">
                            <form autocomplete="password-reset" class="passwordrecovery-form grid-container inputform">
                                <div class="grid-row">
                                    <div class="grid-col nogap-t">
                                        <p class="validation-hideonerror">
                                            Cep telefonunuza gelen kodu girerek şifrenizi sıfırlayabilirsiniz.
                                        </p>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <div class="inputwrap type-text">
                                            <input type="text" maxlength="11" id="reset-new-phone" name="reset-new-phone" autocomplete="section-pwreset tel" placeholder="Telefon Numaranız">
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <div class="inputwrap type-text">
                                            <input type="text" data-mask="0000" id="reset-new-code" name="reset-new-code" autocomplete="off" placeholder="Onaylama Kodunuz">
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <div class="inputwrap type-password">
                                            <input type="password" id="reset-new-password" name="reset-new-password" autocomplete="section-pwreset new-password" placeholder="Yeni Şifreniz">
                                            <button type="button" class="password-peek"></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <button type="button" class="btn green block">
                                            Parolamı Sıfırla
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_selectshoppinglist" class="modal modal-mini password-recovery">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body passwordrecovery-body-form">
                        <div class="modal-header">
                            <button class="modal-close"><i class="icon-close"></i></button>
                            <h3 class="header-title">
                        Alışveriş Listeleri
                    </h3></div>
                        <div class="modal-inner">
                            <form class="passwordrecovery-form grid-container inputform">
                                <div class="grid-row">
                                    <!---->
                                </div>
                                <div class="status-controls grid-container narrow-vertical">
                                    <div class="grid-row">
                                        <div class="grid-col">
                                            <button type="button" class="btn yellow block">Yeni Liste Oluştur</button>
                                        </div>
                                        <div class="grid-col">
                                            <button type="button" class="btn green block">Kaydet</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_newshoppinglist" class="modal modal-mini password-recovery">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body passwordrecovery-body-form">
                        <div class="modal-header">
                            <button class="modal-close"><i class="icon-close"></i></button>
                            <h3 class="header-title">
                        Alışveriş Listesi Oluştur
                    </h3></div>
                        <div class="modal-inner">
                            <form class="passwordrecovery-form grid-container inputform">
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <div class="inputwrap type-text">
                                            <input type="text" id="shopping_list_name" placeholder="Liste Adı">
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col nogap-bottom">
                                        <button type="button" class="btn green block">Kaydet</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_changepickup" class="modal modal-mini changepickup">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-header">
                            <button class="modal-close"><i class="icon-close"></i></button>
                            <h3 class="header-title">
                        Farklı Biri Alacak
                    </h3></div>
                        <div class="modal-inner">
                            <div class="grid-container narrow-vertical inputform">
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <div class="inputwrap type-text">
                                            <input type="text" placeholder="Ad Soyad">
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <div class="inputwrap type-text">
                                            <input type="text" data-mask="(100) 000 00 00" placeholder="Cep Telefonu*" maxlength="15" autocomplete="off">
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col alcenter">
                                        <!---->
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col alcenter"><span class="form-note">*Teslimat bilgileri bu telefonu gönderilecek</span></div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col nogap-bottom">
                                        <button type="button" class="btn green block">Kaydet
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_masterpass_otp" class="modal modal-mini password-recovery">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body passwordrecovery-body-form">
                        <div class="modal-header">
                            <button onclick="closeRegisterTerms()" class="modal-close">Vazgeç</button>
                            <h3 class="header-title">

                    </h3></div>
                        <div class="modal-inner">
                            <form class="passwordrecovery-form grid-container inputform">
                                <div class="grid-row">
                                    <div class="grid-col nogap-t">
                                        <p class="validation-hideonerror">Hesabınızla bağlantılı cep telefonunuza,masterpass doğrulama kodu gönderildi.</p>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <div class="inputwrap type-text">
                                            <input type="text" id="validation_code" placeholder="Doğrulama Kodu">
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <button type="button" class="btn green block">Gönder</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_registerterms" class="modal modal-midi register-terms">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-header">
                            <button onclick="closeRegisterTerms()" class="modal-close">Kapat</button>
                            <h3 class="header-title">
                        Yeni Kullanıcı Sözleşmesi
                    </h3></div>
                        <div class="modal-inner">
                            <div class="terms-container white">
                                <div class="terms-wrap scrollbar mCustomScrollbar _mCS_3 mCS_no_scrollbar scrollbar-initialized">
                                    <div id="mCSB_3" class="mCustomScrollBox mCS-custom mCSB_vertical mCSB_inside" style="max-height: 0px;" tabindex="0">
                                        <div id="mCSB_3_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" style="position:relative; top:0; left:0;" dir="ltr">
                                            <div class="textarea">
                                                <div id="user_terms">
                                                    <h4>1. Taraflar</h4>
                                                    <p><b>a)</b> CEPTE ŞOK internet sitesi ve aynı siteye erişim sağlayan CEPTE ŞOK mobil uygulamasının faaliyetlerini yürüten Kısıklı Mahallesi Hanımseti Sokak No:35 B/1 Üsküdar İstanbul adresinde mukim. (Bundan böyle “ŞOK” olarak anılacaktır).</p>
                                                    <p><b>b)</b> CEPTE ŞOK internet sitesine site üzerinden veya CEPTE ŞOK mobil uygulaması üzerinden üye olan internet kullanıcısı ("Üye")
                                                    </p>
                                                    <h4>2. Sözleşmenin Konusu</h4>
                                                    <p>ŞOK’un satışa arz ettiği mal ve ürünlerin elektronik ortamda ve mesafeli satış kurallarına göre satışının yapılacağı ve ŞOK’un sahip olduğu internet sitesi&nbsp;&nbsp;…….. veya aynı siteye erişim sağlayan CEPTE ŞOK mobil uygulamasının kullanılması, bu site ve uygulamadan faydalanma şartlarının belirlenmesidir. (söz konusu internet sitesi ve CEPTE ŞOK mobil uygulaması birlikte “WebSitesi”) olarak anılacaktır.</p>
                                                    <h4>3. Tarafların Hak ve Yükümlülükleri</h4>
                                                    <h4>3.1 Şok’un hak ve yükümlülükleri</h4>
                                                    <p><b>3.1.2</b> WebSitesi’ne ilişkin her türlü fikri ve sınai mülkiyet hakkı ŞOK mülkiyetinde olup, bunlara ilişkin telif hakkı ve/veya diğer fikri mülkiyet hakları ilgili kanunlarca korunmaktadır. Bunlar&nbsp;üye tarafından izinsiz kullanılamaz, iktisap edilemez ve değiştirilemez. Bu web sitesinde adı geçen başkaca şirketler ve ürünleri sahiplerinin ticari markalarıdır ve ayrıca fikri mülkiyet hakları kapsamında korunmaktadır.</p>
                                                    <p><b>3.1.3</b> ŞOK tarafından&nbsp;&nbsp;WebSitesi’nin iyileştirilmesi, geliştirilmesine yönelik olarak ve/veya yasal mevzuat çerçevesinde siteye erişmek için kullanılan İnternet servis sağlayıcısının adı ve Internet Protokol (IP) adresi, Siteye erişilen tarih ve saat, sitede bulunulan sırada erişilen sayfalar ve siteye doğrudan bağlanılmasını sağlayan Web sitesinin Internet adresi gibi birtakım bilgiler toplanabilir.</p>
                                                    <p><b>3.1.4</b> ŞOK kullanıcılarına daha iyi hizmet sunmak, ürünlerini ve hizmetlerini iyileştirmek, sitenin kullanımını kolaylaştırmak için kullanımını kullanıcılarının özel tercihlerine ve ilgi alanlarına yönelik çalışmalarda üyelerin kişisel bilgilerini kullanabilir. ŞOK, üyenin&nbsp;&nbsp;WebSitesi üzerinde yaptığı hareketlerin kaydını bulundurma hakkını saklı tutar.
                                                    </p>
                                                    <p><b>3.1.5</b> ŞOK, üyenin kişisel bilgilerini yetkili resmi mercilerin talebine binaen resmi mercilere iletebilecek ve yasal mevzuatın izin verdiği ölçüde üçüncü kişilerle paylaşabilecektir.</p>
                                                    <p><b>3.1.6</b> ŞOK web sitesinin virus ve benzeri amaçlı yazılımlardan arındırılmış olması için mevcut imkanlar dahilinde tedbir alınmıştır. Bunun yanında nihai güvenliğin sağlanması için kullanıcının, kendi virus koruma sistemini tedarik etmesi ve gerekli korunmayı sağlaması gerekmektedir. Bu bağlamda üye ŞOK web sitesi'ne girmesiyle, kendi yazılım ve işletim sistemlerinde oluşabilecek tüm hata ve bunların doğrudan ya da dolaylı sonuçlarından kendisinin sorumlu olduğunu kabul etmiş sayılır.</p>
                                                    <p><b>3.1.7</b> ŞOK, sitenin içeriğini dilediği zaman değiştirme, kullanıcılara sağlanan herhangi bir hizmeti değiştirme ya da sona erdirme veya ŞOK web sitesi'nde kayıtlı kullanıcı bilgi ve verilerini silme hakkını saklı tutar.</p>
                                                    <p><b>3.1.8</b> ŞOK, üyelik sözleşmesinin koşullarını hiçbir şekil ve surette ön ihbara ve/veya ihtara gerek kalmaksızın her zaman değiştirebilir, güncelleyebilir veya iptal edebilir. Değiştirilen, güncellenen ya da yürürlükten kaldırılan her hüküm, yayın tarihinde tüm üyeler bakımından hüküm ifade edecektir.</p>
                                                    <h4>3.2 Üye’nin hak ve yükümlülükleri</h4>
                                                    <p><b>3.2.1</b> Üye, WebSitesi’ne üye olurken verdiği kişisel ve diğer sair bilgilerin kanunlar önünde doğru olduğunu, bu bilgilerin gerçeğe aykırılığı nedeniyle ŞOK'nın uğrayacağı zararları tazmin ile mükellef olduğunu beyan ve taahhüt eder.
                                                    </p>
                                                    <p><b>3.2.2</b> Üye, WebSitesi’ne üye olurken temin etmiş olduğu adres ve diğer iletişim bilgilerinin Websitesi üzerinden yapacağı her türlü alışveriş ve satış sözleşmesinde ALICI’ya ait adres ve iletişim bilgisi olarak aktarılmasına ve geçerli adres ve iletişim bilgisi olarak kullanılmasına muvafakat eder. </p>
                                                    <p><b>3.2.3</b> Üye, ŞOK tarafından kendisine verilmiş olan şifreyi başka kişi ya da kuruluşlara veremez, üyenin söz konusu şifreyi kullanma hakkı bizzat kendisine aittir. Bu sebeple doğabilecek tüm sorumluluk ile üçüncü kişiler veya yetkili merciler tarafından ŞOK'ya karşı ileri sürülebilecek tüm iddia ve taleplere karşı, ŞOK'nın sözkonusu izinsiz kullanımdan kaynaklanan her türlü tazminat ve sair talep hakkı saklıdır.</p>
                                                    <p><b>3.2.4</b> Üye, Websitesi üzerinden yapacağı alışverişlerde malın doğru kişiye teslim edilmesini güvence altına alınmak için Üye’nin belirttiği cep telefonuna gönderilecek olan 4 haneli işlem kodunu gizli tutmayı ve sadece satın aldığı malı kendisi adına teslim almak üzere yetkilendirdiği kişi ile paylaşmayı kabul ve taahhüt eder. Üye, söz konusu işlem kodunu mağaza personeline beyan edip ürünü teslim almaya gelen kişilerin ürünleri kendisi adına teslim almaya yetkili olduğunu ve bu şekilde yapılan teslimatın kendisine yapılmış sayılacağını kabul beyan ve taahhüt eder.</p>
                                                    <p><b>3.2.5</b> Üye WebSitesi’ni kullanırken yasal mevzuat hükümlerine riayet etmeyi ve bunları ihlal etmemeyi baştan kabul ve taahhüt eder. Aksi takdirde, doğacak tüm hukuki ve cezai yükümlülükler tamamen ve münhasıran üyeyi bağlayacaktır.</p>
                                                    <p><b>3.2.6</b> Üye, başkalarının WebSitesi üzerinden temin edilen hizmetleri kullanmasını önleyici veya zorlaştırıcı faaliyet (spam, virus, truva atı, vb.) ve işlemlerde bulunamaz.</p>
                                                    <p><b>3.2.7</b> Üye, diğer internet kullanıcılarının yazılımlarına ve verilerine izinsiz olarak ulaşmamayı veya bunları kullanmamayı kabul etmiştir. Aksi takdirde, bundan doğacak hukuki ve cezai sorumluluklar tamamen üyeye aittir.</p>
                                                    <p><b>3.2.8</b> Üye, Websitesinde kendisine tanınacak olan alanlarda beyan edeceği görüş ve hizmet kalitesine ilişkin kanaatlerinin, üçüncü kişilerin manevi hakları ile fikri mülkiyet haklarını ihlal etmemesine dikkat etmekle mükellef olup, buna aykırı kullanımların hukuki ve cezai sorumluluğunun münhasıran kendisine ait olacağını kabul beyan ve taahhüt eder. </p>
                                                    <h4>3.3 Üye ile elektronik iletişime geçilmesi, Kişisel verilerin işlenmesi, paylaşılması ve silinmesi</h4>
                                                    <p><b>3.3.1</b> Websitesi’ne üye olan kişi, yürürlükte bulunan ve/veya yürürlüğe alınacak uygulamalar kapsamında ŞOK veya iştiraki olan şirketler tarafından&nbsp;ŞOK’un faaliyet alanın olan perakende ticaret kapsamında kendisine ürün ve hizmet tanıtımları, reklamlar, kampanyalar, avantajlar, anketler &nbsp;ve diğer müşteri memnuniyeti uygulamaları sunulmasına izin verdiğini beyan ve kabul eder. &nbsp;Üye ayrıca aksini bildirmediği yahut gönderilecek iletilerde tanınacak olan çıkma hakkını kullanmadığı sürece ŞOK veya iştiraklerinin kendisi ile, üyelik formunda belirttiği elektronik posta, telefon, SMS, vb iletişim kanalları kullanarak irtibata geçmesine izin verdiğini beyan ve kabul eder.</p>
                                                    <p><b>3.3.2</b> Üye, Websitesi’ne üye olurken ve/veya başka yollarla geçmişte vermiş olduğu ve/veya gelecekte vereceği kişisel ve alışveriş bilgilerinin ve alışveriş ve/veya tüketici davranış bilgilerinin&nbsp;yukarıdaki amaçlarla toplanmasına, kullanılmasına ve arşivlenmesine izin verdiğini beyan ve kabul eder.</p>
                                                    <p><b>3.3.3</b> Üye, yukarıda bahsi geçen bilgilerin toplanması,&nbsp;ŞOK iştirakleri ile paylaşılması, kullanılması, arşivlenmesi ve kendisi ile iletişime geçilmesi nedeniyle herhangi bir zarara uğradığı konusunda talepte bulunmayacağını ve ŞOK ve iştiraklerini sorumlu tutmayacağını beyan ve kabul eder. Üye veri paylaşım tercihlerini değiştirmek isterse, bu talebini ŞOK’nın müşteri hizmetleri çağrı merkezlerine iletebileceği gibi, Websitesinde yer alan “Benim Sayfam” bölümündeki “Tercihlerim” kısmından mail ve/veya SMS gönderim iptal işlemini gerçekleştirebilir veya kendisine gönderilen iletilerde sağlanacak olan çıkma hakkını kullanarak da bu iletişime son verebilecektir.</p>
                                                    <p><b>3.3.4</b> Üyeliğin son bulması halinde Üye aksini bildirmediği sürece kişisel verileri en fazla bir yıl boyunca muhafaza edilecek olup, akabinde otomatik olarak silinecektir.</p>
                                                    <h4>4. Sözleşmenin Feshi, Üyeliğin askıya alınması</h4>
                                                    <p><b>4.1</b> İşbu sözleşme Üyenin üyeliğini iptal etmesi veya ŞOK tarafından üyeliğinin iptal edilmesine kadar yürürlükte kalacaktır. ŞOK üyenin üyelik sözleşmesinin herhangi bir hükmünü ihlal etmesi durumunda üyenin üyeliğini iptal ederek sözleşmeyi tek taraflı olarak feshedebilecektir. ŞOK'un her zaman tek taraflı olarak gerektiğinde üyenin üyeliğini askıya alma, silme, müşteriye ait dosya, belge ve bilgileri silme hakkı vardır. Üye işbu tasarrufu önceden kabul eder. Bu durumda, ŞOK'nın hiçbir sorumluluğu yoktur.</p>
                                                    <p><b>4.2</b> Buna mukabil Üye’de her zaman üyeliğin iptalini ve ŞOK nezdindeki tüm elektronik kayıtların silinmesini talep ederek işbu sözleşmeyi tek taraflı olarak fesih edebilir. Ancak bu durumda üye, Websitesi kanalıyla alışveriş yapma olanağını kaybeder.</p>
                                                    <p><b>5</b> Taraflar, ŞOK'ya ait tüm bilgisayar kayıtlarının tek ve gerçek münhasır delil olarak, HUMK madde 193'ye uygun şekilde esas alınacağını ve söz konusu kayıtların bir delil sözleşmesi teşkil ettiği hususunu kabul ve beyan eder.</p>
                                                    <h4>6. İhtilafların Halli</h4>
                                                    <p>İşbu sözleşmeye ilişkin ihtilaflarda İstanbul Çağlayan Mahkemeleri ve İcra Daireleri yetkilidir.</p>
                                                    <h4>7. Yürürlük</h4>
                                                    <p>Üye üyelik kaydı yaparken işbu Sözleşmeye elektronik ortamda teyit vermiş olmakla işbu üyelik sözleşmesinde yer alan tüm maddeleri okuduğunu ve burada yer alan maddeleri kabul ettiğini beyan ve taahhüt eder. İşbu Sözleşme üyenin üye olması anında akdedilmiş ve karşılıklı olarak yürürlüğe girmiştir.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="mCSB_3_scrollbar_vertical" class="mCSB_scrollTools mCSB_3_scrollbar mCS-custom mCSB_scrollTools_vertical" style="display: none;">
                                            <div class="mCSB_draggerContainer">
                                                <div id="mCSB_3_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 50px; top: 0px;">
                                                    <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                                </div>
                                                <div class="mCSB_draggerRail"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_cart_product_unavailable" class="modal modal-mini cart-status">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-header">
                            <button class="modal-close">Vazgeç</button>
                            <h3 class="header-title">
                        Aşağıdaki ürünler seçtiğin markette bulunmuyor.
                    </h3></div>
                        <div class="modal-inner">
                            <ul class="status-list">
                                <li class="list-product">
                                    <div class="product-image-wrap">
                                        <a href="/html/index.php?id=detail" class="product-image imagefit fit"><img src="/assets/img/dummy/product-thumb-5.jpg" class="imagefit-img abs"></a>
                                    </div>
                                    <div class="product-description">
                                        <h3 class="product-title"><a href="/html/index.php?id=detail">Domates Salkım</a></h3>
                                        <p class="product-subtitle">1 kg</p>
                                    </div>
                                </li>
                                <li class="list-product">
                                    <div class="product-image-wrap">
                                        <a href="/html/index.php?id=detail" class="product-image imagefit fit"><img src="/assets/img/dummy/product-thumb-5.jpg" class="imagefit-img abs"></a>
                                    </div>
                                    <div class="product-description">
                                        <h3 class="product-title"><a href="/html/index.php?id=detail">Domates Salkım</a></h3>
                                        <p class="product-subtitle">1 kg</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="status-controls grid-container narrow-vertical">
                                <div class="grid-row">
                                    <div class="grid-col">
                                        <button class="btn block yellow">Market Değiştir</button>
                                    </div>
                                    <div class="grid-col">
                                        <button class="btn block green">Ürünleri Çıkartarak Devam Et</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_whatnext" class="modal modal-midi whatnext">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-header">
                            <button class="modal-close">Vazgeç</button>
                            <h3 class="header-title">
                        Bundan Sonra Ne Olacak?
                    </h3></div>
                        <div class="modal-inner">
                            <div class="whatnext-text textarea">
                                <ul>
                                    <li>Siparişinde bulunan tüm ürünler Şok personeli tarafından özenle seçilir ve en uygun saklama koşullarında teslim edilmek üzere hazır bekletilir.
                                    </li>
                                    <li>Siparişin hazırlandığında ürünlerinin teslim almaya hazır olduğuna dair bilgilendirme mesajı alırsın.
                                    </li>
                                    <li>Sipariş onay mailinde gönderilen teslimat kodu ile belirtmiş olduğun saatler arasında ürünlerini seçtiğin Şok Market'ten teslim alabilirsin.
                                    </li>
                                    <li>Teslimat kodun önemli, çünkü siparişini teslim alırken bu kodu CEPTE ŞOK görevlisine göstermelisin.
                                    </li>
                                    <li>Siparişini teslim aldıktan sonra bizi değerlendirmeyi unutma. Değerlendirmelerin bizim için önemli.
                                    </li>
                                    <li>Belirtmiş olduğun tarihte teslim alınmayan siparişler iptal edilir. Dilersen ertesi gün siparişini tekrar verebilirsin.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---->
        <div id="modal_installment_direct" class="modal">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-header">
                            <button class="modal-close" style="margin-right: 50px;"><i class="icon-close"></i></button>
                        </div>
                        <div class="crossProduct">
                            <center>
                                <p>Sepetinizde hem taksit yapılabilir, hem de taksit yapılamaz ürünler olduğundan peşin işlem yapabileceksiniz.</p>
                                <p>Tercihinize göre sepetinizi yeniden düzenleyip, devam edebilirsiniz.</p>
                                <button class="btn small">TAMAM</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="paymentAgreement" class="modal">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-header">
                            <button class="modal-close" style="margin-right: 50px;"><i class="icon-close"></i></button>
                        </div>
                        <div class="crossProduct">
                            <center>
                                <p>Ödeme işlemini tamamlayabilmeniz için Ön bilgilendirme ve mesafeli satış sözleşmesi'ni okuyarak, onaylamanız gerekmektedir.
                                </p>
                                <button class="btn small">TAMAM</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="failModal" class="modal">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-header">
                            <button class="modal-close" style="margin-right: 50px;"><i class="icon-close"></i></button>
                        </div>
                        <div class="crossProduct">
                            <center>
                                <h1> X Üzgünüz</h1>
                                <p>Ödeme Alınamamıştır.</p>
                                <button class="btn small">TAMAM</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal_fix_status" class="modal">
            <div class="modal-element">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-header">
                            <button class="modal-close" style="margin-right: 50px;"><i class="icon-close"></i></button>
                        </div>
                        <div class="crossProduct">
                            <center>
                                <p>Sepetinizde hem depodan sevkiyat ürünleri hem Mağaza ürünleri var, aynı anda sadece depodan sevkiyat veya mağazadan teslim ürünler alabilirsiniz.</p>
                                <p>Tercihinize göre sepetinizi yeniden düzenleyip, devam edebilirsiniz.</p>
                                <button class="btn small">TAMAM</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
import Altkisim  from './Altkisim.vue'
import SepetteUrunler from './SepetteUrunler.vue'

export default {
    name: 'Siparis',
    components:{
    Altkisim,
    SepetteUrunler,
   },
    data () {
    return {
        active:false,
        show:false,
        products:"",
    }
    },
    methods:{
          go:function(e){
            if(this.active == true){
                this.active=false; this.show=false;
            }else{
                 this.active=true; this.show=true;
            }
         },
         getPro:function(){
            this.products=this.$store.state.sepet;
            console.log(this.$store.state.sepet)
          }
    },
    computed:{
         getProCo:function(){
             return this.$store.state.sepet.length
         },
         totalf:function(){
             return this.$store.state.total;
          }
     },
     watch:{
        '$store.state.sepet'(){
           this.getPro();
        }
     },
      mounted() {
            this.getPro();
    },
    created(){
        this.products=this.products=this.$store.state.sepet;
    },
>>>>>>> 2286be4e944c586110945e77d6a3c4ab0406513b
}
</script>

<style>

</style>