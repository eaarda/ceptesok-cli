<template>
<div>
    <header class="checkout">
        <div class="wrapper header-wrap"><a href="/siparis/#/sepet" class="header-control header-backlink"><i class="control-icon icon-arrow-left"></i> Sepete Geri Dön</a>
        <a href="/" class="header-logo"><img src="../img/logo.svg"></a>
        </div>
        <a href="#"><img alt="Yukarı Çık" class="yukarikaydir" src="../img/yc.png" style="display: block;"></a>
        <button v-if="step != totalsteps" @click.prevent="nextStep">Next Step</button>
        <button v-if="step != 1" @click.prevent="prevStep">Previous Step</button>
    </header>
    
<nav class="section checkout-nav">
   <div class="wrapper"> 
       
       <form>
           
           <section v-if="step == 1">
            <a href="#"  class="list-item active"> Teslimat Zamanı </a>
            <a href="#" class="list-item"> Ödeme İşlemleri </a> 
            <a href="#" class="list-item"> Sipariş Özeti </a>
            
            <div class="section wrapper checkout-wrap checkout-order"><div>
            <main class="section checkout-section checkout-deliverytime">
            <div class="section checkout-head">
                <h1 class="head-title">Teslimat Zamanı</h1>
                <p class="head-subtitle">Siparişinizi teslim almak istediğiniz saat aralığını seçiniz.</p>
            </div>
            <div class="deliverytime-daypicker">
                <div class="daypicker-opt checkbutton hollowgreen fixed narrow">
                    <input type="radio" id="delivery_today" checked="checked" name="dummy_daypicker">
                    <label for="delivery_today">Bugün<br></label>
                </div>
                <div class="daypicker-opt checkbutton hollowgreen fixed narrow">
                    <input type="radio" id="delivery_tomorrow" name="dummy_daypicker">
                    <label for="delivery_tomorrow">Yarın<br></label>
                </div>
            </div>
            <ul class="deliverytime-slots">
                <li class="slots-group">
                    <h3 class="group-title">Sabah</h3>
                    <ul class="group-slots">
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input type="radio" name="deliverytime_slot" id="825646824" value="825646824">
                                <label for="825646824"><span></span>10:00 - 11:00</label>
                            </div>
                            <div class="slot-status">Müsait</div>
                            <div class="slot-availability">
                                <div class="availability-bar" style="width: 53.3333%;"></div>
                            </div>
                        </li>
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input type="radio" name="deliverytime_slot" id="825654222" value="825654222">
                                <label for="825654222"><span></span>11:00 - 12:00</label>
                            </div>
                            <div class="slot-status">Müsait</div>
                            <div class="slot-availability">
                                <div class="availability-bar" style="width: 50%;"></div>
                            </div>
                        </li>
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input disabled="disabled" type="radio" name="deliverytime_slot" id="notSelectable" value="notSelectable">
                                <label for="notSelectable"><span></span>9:00 - 10:00</label>
                            </div>
                            <div class="slot-status">Market Hizmet Veremiyor</div>
                            <div class="slot-availability full">
                                <div class="availability-bar" style="width: 100%;"></div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="slots-group">
                    <h3 class="group-title">Öğlen</h3>
                    <ul class="group-slots">
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input type="radio" name="deliverytime_slot" id="825661620" value="825661620">
                                <label for="825661620"><span></span>12:00 - 13:00</label>
                            </div>
                            <div class="slot-status">Müsait</div>
                            <div class="slot-availability">
                                <div class="availability-bar" style="width: 50%;"></div>
                            </div>
                        </li>
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input type="radio" name="deliverytime_slot" id="825669018" value="825669018">
                                <label for="825669018"><span></span>13:00 - 14:00</label>
                            </div>
                            <div class="slot-status">Müsait</div>
                            <div class="slot-availability">
                                <div class="availability-bar" style="width: 50%;"></div>
                            </div>
                        </li>
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input type="radio" name="deliverytime_slot" id="825676416" value="825676416">
                                <label for="825676416"><span></span>14:00 - 15:00</label>
                            </div>
                            <div class="slot-status">Müsait</div>
                            <div class="slot-availability">
                                <div class="availability-bar" style="width: 50%;"></div>
                            </div>
                        </li>
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input type="radio" name="deliverytime_slot" id="825683814" value="825683814">
                                <label for="825683814"><span></span>15:00 - 16:00</label>
                            </div>
                            <div class="slot-status">Müsait</div>
                            <div class="slot-availability">
                                <div class="availability-bar" style="width: 50%;"></div>
                            </div>
                        </li>
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input type="radio" name="deliverytime_slot" id="825691212" value="825691212">
                                <label for="825691212"><span></span>16:00 - 17:00</label>
                            </div>
                            <div class="slot-status">Müsait</div>
                            <div class="slot-availability">
                                <div class="availability-bar" style="width: 50%;"></div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="slots-group">
                    <h3 class="group-title">Akşam</h3>
                    <ul class="group-slots">
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input id="825698610" type="radio" value="825698610">
                                <label for="825698610"><span></span>17:00 - 18:00</label>
                            </div>
                            <div class="slot-status">Müsait</div>
                            <div class="slot-availability">
                                <div class="availability-bar" style="width: 50%;"></div>
                            </div>
                        </li>
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input id="825706008" type="radio" value="825706008">
                                <label for="825706008"><span></span>18:00 - 19:00</label>
                            </div>
                            <div class="slot-status">Müsait</div>
                            <div class="slot-availability">
                                <div class="availability-bar" style="width: 50%;"></div>
                            </div>
                        </li>
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input id="825713406" type="radio" value="825713406">
                                <label for="825713406"><span></span>19:00 - 20:00</label>
                            </div>
                            <div class="slot-status">Müsait</div>
                            <div class="slot-availability">
                                <div class="availability-bar" style="width: 50%;"></div>
                            </div>
                        </li>
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input id="notSelectable" disabled="disabled" type="radio" value="notSelectable">
                                <label for="notSelectable"><span></span>20:00 - 21:00</label>
                            </div>
                            <div class="slot-status">Market Hizmet Veremiyor</div>
                            <div class="slot-availability full">
                                <div class="availability-bar" style="width: 100%;"></div>
                            </div>
                        </li>
                        <li class="slots-slot">
                            <div class="checkwrap big square slot-time">
                                <input id="notSelectable" disabled="disabled" type="radio" value="notSelectable">
                                <label for="notSelectable"><span></span>21:00 - 22:00</label>
                            </div>
                            <div class="slot-status">Market Hizmet Veremiyor</div>
                            <div class="slot-availability full">
                                <div class="availability-bar" style="width: 100%;"></div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            </main>
            <div>
            <aside class="section checkout-section checkout-sum">
                <div class="section checkout-head">
                    <h1 class="head-title">Sipariş Bilgileri</h1>
                    <p class="head-subtitle"><span class="basket-quantity">{{getProCo}}</span> Adet Ürün Bulunuyor</p>
                </div>
                <ul class="sum-list initialized">
                    <li class="list-item">
                    <div class="productbox-mini ">
                        <div class="product-image-wrap">
                            <a href="javascript:;" class="product-image imagefit fit"><img src="https://cdnd.ceptesok.com/product/420x420/939bb_sivi-sabun-lavanta-18-lt.jpg" class="imagefit-img abs"></a> 
                            <!-- <router-link :to="{name: 'Urun',path: '/urun/'+product.link_name, params:{id:product.serial_productid}}"><img :src="'https://cdnd.ceptesok.com/product/420x420/'+ getPicture(product.files[0])" class="imagefit-img abs mCS_img_loaded"></router-link> -->
                        </div>
                        <div class="product-description">
                            <h3 class="product-title"><a href="javascript:;">Fax Sıvı Sabun Lavanta 1.8 Lt</a></h3>
                            <p class="product-subtitle">1 adet</p>
                        </div>
                        <div class="product-price">
                            <div class="pricebox basket">
                                <div class="pricebox-content"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                            </div>
                        </div>
                    </div>
                    </li>
                </ul>
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
                    <button disabled="disabled" class="btn big block green text-big"><i class="icon-security-2"></i> Güvenli Ödemeye Geç <i class="icon-arrow-right"></i></button>
                </div>
                <div class="daypicker-opt checkbutton" style="width: 100%; border-color: rgb(225, 8, 23) !important; color: rgb(225, 8, 23) !important; margin-top: 20px;">
                    <input type="radio" name="dummy_daypicker">
                    <label style="width: 100%; padding: 20px; color: rgb(225, 8, 23) !important; border-color: rgb(225, 8, 23) !important;">Ödemeye Geçmek İçin Teslimat Saati Seçmelisiniz.</label>
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
            </div>
            </div>

           </section>
           
           <section v-if="step == 2">
            <a href="#"  class="list-item"> Teslimat Zamanı </a>
            <a href="#" class="list-item active"> Ödeme İşlemleri </a> 
            <a href="#" class="list-item"> Sipariş Özeti </a>

            <div data-v-059bbdad="" class="section wrapper checkout-wrap checkout-order">
            <main data-v-059bbdad="" class="section checkout-section checkout-payment inputform">
            <div data-v-059bbdad="" class="section checkout-head">
            <h1 data-v-059bbdad="" class="head-title">Ödeme Bilgileri</h1></div>
            <div data-v-059bbdad="" class="section payment-form grid-container">
            <div data-v-059bbdad="" class="grid-row">
                <div data-v-059bbdad="" class="grid-col">
                    <div data-v-059bbdad="" class="inputwrap light big type-text">
                        <label data-v-059bbdad="" for="cardName" class="input-label">Karta İsim Ver (Kişisel, İş, Eşim)</label>
                        <input data-v-059bbdad="" type="text" id="cardName">
                    </div>
                </div>
            </div>
            <div data-v-059bbdad="" class="grid-row">
                <div data-v-059bbdad="" class="grid-col">
                    <div data-v-059bbdad="" class="inputwrap light big type-text">
                        <label data-v-059bbdad="" for="cardHolder" class="input-label">Kart Üzerindeki İsim</label> <i data-v-059bbdad="" class="input-icon big icon-card-name"></i>
                        <input data-v-059bbdad="" type="text" id="cardHolder">
                    </div>
                </div>
            </div>
            <div data-v-059bbdad="" class="grid-row">
                <div data-v-059bbdad="" class="grid-col">
                    <div data-v-059bbdad="" class="inputwrap light big type-text">
                        <label data-v-059bbdad="" for="cardNumber" class="input-label">Kart Numarası</label> <i data-v-059bbdad="" class="input-icon big icon-card-number"></i>
                        <input data-v-059bbdad="" type="text" id="cardNumber" maxlength="16">
                    </div>
                </div>
            </div>
            <div data-v-059bbdad="" class="grid-row">
                <div data-v-059bbdad="" class="grid-col x8 s-x12">
                    <div data-v-059bbdad="" class="inputwrap light big">
                        <label data-v-059bbdad="" for="cardExpireMonth" class="input-label">Son Kullanma Tarihi</label> <span data-v-059bbdad="" class=""><select data-v-059bbdad="" id="cardExpireMonth" class="form-expiration-select dark" style="display: none;"><option data-v-059bbdad="" value="">AY</option> <option data-v-059bbdad="" value="01">01</option> <option data-v-059bbdad="" value="02">02</option> <option data-v-059bbdad="" value="03">03</option> <option data-v-059bbdad="" value="04">04</option> <option data-v-059bbdad="" value="05">05</option> <option data-v-059bbdad="" value="06">06</option> <option data-v-059bbdad="" value="07">07</option> <option data-v-059bbdad="" value="08">08</option> <option data-v-059bbdad="" value="09">09</option> <option data-v-059bbdad="" value="10">10</option> <option data-v-059bbdad="" value="11">11</option> <option data-v-059bbdad="" value="12">12</option></select><span id="cardExpireMonthSelectBoxItContainer" class="selectboxit-container selectboxit-container form-expiration-select dark" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" aria-owns="cardExpireMonthSelectBoxItOptions" aria-labelledby="" style=""><span id="cardExpireMonthSelectBoxIt" class="selectboxit  selectboxit-enabled selectboxit-btn" name="" tabindex="0" unselectable="on" data-v-059bbdad=""><span class="selectboxit-option-icon-container"><i id="cardExpireMonthSelectBoxItDefaultIcon" class="selectboxit-default-icon selectboxit-option-icon selectboxit-container" unselectable="on" style=""></i></span><span id="cardExpireMonthSelectBoxItText" class="selectboxit-text" unselectable="on" data-val="" aria-live="polite" style="max-width: 5px;">AY</span><span id="cardExpireMonthSelectBoxItArrowContainer" class="selectboxit-arrow-container" unselectable="on" style=""><i id="cardExpireMonthSelectBoxItArrow" class="selectboxit-arrow selectboxit-default-arrow" unselectable="on"></i></span></span>
                        <ul id="cardExpireMonthSelectBoxItOptions" class="selectboxit-options selectboxit-list" tabindex="-1" role="listbox" aria-hidden="true">
                            <li data-id="0" data-val="" data-disabled="false" class="selectboxit-option  selectboxit-option-first selectboxit-selected" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>AY</a></li>
                            <li data-id="1" data-val="01" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>01</a></li>
                            <li data-id="2" data-val="02" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>02</a></li>
                            <li data-id="3" data-val="03" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>03</a></li>
                            <li data-id="4" data-val="04" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>04</a></li>
                            <li data-id="5" data-val="05" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>05</a></li>
                            <li data-id="6" data-val="06" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>06</a></li>
                            <li data-id="7" data-val="07" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>07</a></li>
                            <li data-id="8" data-val="08" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>08</a></li>
                            <li data-id="9" data-val="09" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>09</a></li>
                            <li data-id="10" data-val="10" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>10</a></li>
                            <li data-id="11" data-val="11" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>11</a></li>
                            <li data-id="12" data-val="12" data-disabled="false" class="selectboxit-option  selectboxit-option-last" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>12</a></li>
                        </ul>
                        </span>
                        </span> <span data-v-059bbdad="" class=""><select data-v-059bbdad="" id="cardExpireYear" class="form-expiration-select dark year" style="display: none;"><option data-v-059bbdad="" value="">YIL</option> <option data-v-059bbdad="" value="2018">2018</option> <option data-v-059bbdad="" value="2019">2019</option> <option data-v-059bbdad="" value="2020">2020</option> <option data-v-059bbdad="" value="2021">2021</option> <option data-v-059bbdad="" value="2022">2022</option> <option data-v-059bbdad="" value="2023">2023</option> <option data-v-059bbdad="" value="2024">2024</option> <option data-v-059bbdad="" value="2025">2025</option> <option data-v-059bbdad="" value="2026">2026</option> <option data-v-059bbdad="" value="2027">2027</option> <option data-v-059bbdad="" value="2028">2028</option> <option data-v-059bbdad="" value="2029">2029</option> <option data-v-059bbdad="" value="2030">2030</option> <option data-v-059bbdad="" value="2031">2031</option> <option data-v-059bbdad="" value="2032">2032</option> <option data-v-059bbdad="" value="2033">2033</option> <option data-v-059bbdad="" value="2034">2034</option> <option data-v-059bbdad="" value="2035">2035</option></select><span id="cardExpireYearSelectBoxItContainer" class="selectboxit-container selectboxit-container form-expiration-select dark year" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" aria-owns="cardExpireYearSelectBoxItOptions" style=""><span id="cardExpireYearSelectBoxIt" class="selectboxit  selectboxit-enabled selectboxit-btn" name="" tabindex="0" unselectable="on" data-v-059bbdad=""><span class="selectboxit-option-icon-container"><i id="cardExpireYearSelectBoxItDefaultIcon" class="selectboxit-default-icon selectboxit-option-icon selectboxit-container" unselectable="on" style=""></i></span><span id="cardExpireYearSelectBoxItText" class="selectboxit-text" unselectable="on" data-val="" aria-live="polite" style="max-width: 7px;">YIL</span><span id="cardExpireYearSelectBoxItArrowContainer" class="selectboxit-arrow-container" unselectable="on" style=""><i id="cardExpireYearSelectBoxItArrow" class="selectboxit-arrow selectboxit-default-arrow" unselectable="on"></i></span></span>
                        <ul id="cardExpireYearSelectBoxItOptions" class="selectboxit-options selectboxit-list" tabindex="-1" role="listbox" aria-hidden="true">
                            <li data-id="0" data-val="" data-disabled="false" class="selectboxit-option  selectboxit-option-first selectboxit-selected" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>YIL</a></li>
                            <li data-id="1" data-val="2018" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2018</a></li>
                            <li data-id="2" data-val="2019" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2019</a></li>
                            <li data-id="3" data-val="2020" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2020</a></li>
                            <li data-id="4" data-val="2021" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2021</a></li>
                            <li data-id="5" data-val="2022" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2022</a></li>
                            <li data-id="6" data-val="2023" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2023</a></li>
                            <li data-id="7" data-val="2024" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2024</a></li>
                            <li data-id="8" data-val="2025" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2025</a></li>
                            <li data-id="9" data-val="2026" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2026</a></li>
                            <li data-id="10" data-val="2027" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2027</a></li>
                            <li data-id="11" data-val="2028" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2028</a></li>
                            <li data-id="12" data-val="2029" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2029</a></li>
                            <li data-id="13" data-val="2030" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2030</a></li>
                            <li data-id="14" data-val="2031" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2031</a></li>
                            <li data-id="15" data-val="2032" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2032</a></li>
                            <li data-id="16" data-val="2033" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2033</a></li>
                            <li data-id="17" data-val="2034" data-disabled="false" class="selectboxit-option" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2034</a></li>
                            <li data-id="18" data-val="2035" data-disabled="false" class="selectboxit-option  selectboxit-option-last" data-v-059bbdad="" role="option"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon  selectboxit-container"></i></span>2035</a></li>
                        </ul>
                        </span>
                        </span>
                    </div>
                </div>
                <div data-v-059bbdad="" class="grid-col x4 s-x12">
                    <div data-v-059bbdad="" class="inputwrap light big type-text">
                        <label data-v-059bbdad="" for="cardCvv" class="input-label">Güvenlik Kodu</label>
                        <button data-v-059bbdad="" data-tip="Kartın arka kısmında en sağda bulunan 3 haneli sayı." class="input-icon big icon-tooltip" title=""></button>
                        <input data-v-059bbdad="" type="text" id="cardCvv" data-mask="000" autocomplete="off">
                    </div>
                </div>
            </div>
            <div data-v-059bbdad="" class="grid-row">
                <div data-v-059bbdad="" class="grid-col type-checkbox">
                    <input data-v-059bbdad="" type="checkbox" id="is_card_save">
                    <label data-v-059bbdad="" for="is_card_save"><span data-v-059bbdad=""></span>Kart bilgilerimi Masterpass altyapısında saklamak ve bir sonraki alışverişimde tekrar kullanmak istiyorum. <a data-v-059bbdad="">Masterpass Kullanım Koşulları</a>'nı kabul ediyorum.</label>
                </div>
            </div>
            </div>
            <div data-v-059bbdad="" class="payment-masterpass"><img data-v-059bbdad="" src="/assets/img/payment/masterpass.png" class="masterpass-logo">
            <p data-v-059bbdad="">Ödeme altyapımız Mastercard uygulaması olan Masterpass tarafından sağlanmaktadır ve işlem güvenliğiniz Mastercard güvencesi altındadır.</p>
            </div>
        
            </main>
    
            <div data-v-059bbdad="">
            <aside data-v-059bbdad="" class="section checkout-section checkout-sum">
            <div class="section checkout-head">
                <h1 class="head-title">Sipariş Bilgileri</h1>
                <p class="head-subtitle">1 Adet Ürün Bulunuyor</p>
            </div>
            <ul class="sum-list initialized">
                <li class="list-item">
                    <div class="productbox-mini ">
                        <div class="product-image-wrap">
                            <a href="javascript:;" class="product-image imagefit fit"><img src="https://cdnd.ceptesok.com/product/420x420/939bb_sivi-sabun-lavanta-18-lt.jpg" class="imagefit-img abs"></a>
                        </div>
                        <div class="product-description">
                            <h3 class="product-title"><a href="javascript:;">Fax Sıvı Sabun Lavanta 1.8 Lt</a></h3>
                            <p class="product-subtitle">1 adet</p>
                        </div>
                        <div class="product-price">
                            <div class="pricebox basket">
                                <div class="pricebox-content"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="sum-total">
                <p class="total-title">
                    KDV Dahil
                    <br>Toplam Tutar:
                </p>
                <div class="pricebox {'plain': true}">
                    <div class="pricebox-content"><span class="currency pricebox-currency"></span><span class="pricebox-main">12</span><span class="pricebox-decimal">95</span></div>
                </div>
            </div>
            <!---->
            <!---->
            <!---->
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
             <section data-v-059bbdad="" class="section checkout-section checkout-terms">
                <div data-v-059bbdad="" id="terms_1">
            <div data-v-059bbdad="" class="terms-head">
                <h3 data-v-059bbdad="" class="head-title">Ön Bilgilendirme Formu</h3>
                <button data-v-059bbdad="" onclick="printElement('Ön Bilgilendirme Formu','pre_info')" class="head-print"><i data-v-059bbdad="" class="icon-print"></i> Yazdır</button>
            </div>
            <div data-v-059bbdad="" class="terms-container">
                <div data-v-059bbdad="" class="terms-wrap scrollbar mCustomScrollbar _mCS_10 scrollbar-initialized">
                    <div id="mCSB_10" class="mCustomScrollBox mCS-custom mCSB_vertical mCSB_inside" tabindex="0" style="max-height: 80px;">
                        <div id="mCSB_10_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
                            <div data-v-059bbdad="" class="textarea">
                                <div id="pre_info">
                                    <p><b>1-</b> İşbu Mesafeli Satış Sözleşmesi Ön Bilgilendirme Formu (“Ön Bilgilendirme) ŞOK MARKETLER TİCARET A.Ş (“SATICI”)’nin ………………. .adresi veya aynı adrese erişim sağlayan CEPTE ŞOK mobil uygulaması üzerinden ürün satın alan ve aşağıda bilgileri yazılı alıcının (“ALICI”) satış sözleşmesinin koşulları, ürünün/ürünlerin temel nitelikleri, satış fiyatı, ödeme şekli ve ürünlerin teslimi ve cayma hakkına ilişkin ön bilgi edinmesi amacıyla hazırlanmıştır. İşbu Ön Bilgilendirme, 28 Kasım 2013 tarih ve 28835 sayılı Resmi Gazete ile yayımlanarak, 28.05.2014 tarihinde yürürlüğe giren 6502 sayılı Tüketicinin Korunması Hakkındaki Kanun ve 27.11.2014 tarih ve 29188 sayılı Resmi Gazete’de yayımlanan Mesafeli Sözleşmeler Yönetmeliği hükümleri uyarınca ön bilgilendirme formu niteliğindedir.</p>
                                    <h4>2- Alıcı ve Satıcı’ ya Ait Bilgiler:</h4>
                                    <p>İşbu Ön Bilgilendirme Formunda ALICI ile SATICI kısaca ayrı ayrı “Taraf” ve birlikte “Taraflar” olarak anılacaklardır.</p>

                                    <table border="1" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td colspan="2"><b>SATICI</b></td>
                                            </tr>
                                            <tr>
                                                <td>Unvanı</td>
                                                <td>ŞOK MARKETLER TİCARET A.Ş</td>
                                            </tr>
                                            <tr>
                                                <td>Adresi</td>
                                                <td>Kısıklı Mahallesi Hanımseti Sok.No:35 B-1 Üsküdar/İstanbul</td>
                                            </tr>
                                            <tr>
                                                <td>Telefon</td>
                                                <td>0850 221 11 00</td>
                                            </tr>
                                            <tr>
                                                <td>E Posta</td>
                                                <td>musterihizmetleri@sokmarketler.com.tr</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><b>ALICI</b></td>
                                            </tr>
                                            <tr>
                                                <td>Adı-Soyadı/Unvanı</td>
                                                <td>Elif Berkay</td>
                                            </tr>
                                            <tr>
                                                <td>Adresi</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Şehir</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Posta Kodu</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Ülke</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Telefon</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h4>3- Ürünlerin Özellikleri:</h4>
                                    <p>Ürün/ürünlerin türü, miktarı, marka/modeli, rengi, adedi, satış bedeli, ödeme şekli, aşağıda belirtildiği gibidir.</p>
                                    <table border="1" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td>Ürün Markası</td>
                                                <td>Ürün Adı</td>
                                                <td>Ürün Miktarı</td>
                                                <td>Ürün Fiyatı</td>
                                            </tr>
                                            <tr>
                                                <td>Fax</td>
                                                <td>Sıvı Sabun Lavanta 1.8 Lt</td>
                                                <td>1 Adet</td>
                                                <td>12.95 TL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h4>4- Teslimat Şekli</h4>
                                    <p>SATICI, 3. maddede yer alan ürünlere ilişkin ödeme işleminin tamamlanmasını takiben söz konusu ürünleri ALICI tarafından teslim alınmaya hazır şekilde poşetleyecek ve/veya hazır ambalajlı haliyle SATICI’nın CIHANNUMA MAH. MAZHARPASA SOK. NO:5-7/A BESIKTAS/ISTANBUL adresindeki mağazasının uygun bir bölümünde bulunduracaktır.</p>
                                    <p>SATICI, ALICI’nın yukarıda 2. maddede belirttiği cep telefonuna bir işlem kodu gönderecektir.</p>
                                    <p>ALICI, 3 maddede yer alan ürünlere ilişkin ödeme işleminin tamamlanmasını takiben söz konusu ürünleri aynı gün içinde en geç saat 22.00’ye kadar SATICI’nın CIHANNUMA MAH. MAZHARPASA SOK. NO:5-7/A BESIKTAS/ISTANBUL adresindeki mağazasına gelmek suretiyle teslim alacak veya aldıracaktır.</p>
                                    <p>ALICI, söz konusu ürünleri bizzat almaya gelebileceği gibi, yukarıda 2. Maddede belirttiği kişi/kişiler veya işlem kodunu mağaza personeline beyan edip ürünü teslim almaya gelen kişilerin ürünleri kendisi adına teslim almaya yetkili olduğunu ve bu şekilde yapılan teslimatın kendisine yapılmış sayılacağını kabul beyan ve taahhüt eder.</p>
                                    <p>ALICI’nın cep telefonuna gönderilecek olan işlem kodu gizli olup, bu kodu korumak, yetkisiz üçüncü kişilere ifşa etmemek ve sadece malları kendi adına teslim almaya yetkili kıldığı kişilere iletmek, tamamen kendi sorumluluğudur.</p>
                                    <p>ALICI veya bu maddede yazılı esaslara göre yetkilendirdiği kişiler, teslim anında yukarıda yazılı ürünlerin bilgilerini içerir satış fişinin Mağaza nüshasını imzalamakla yükümlüdür. Teslimat, teslim almaya gelen kişinin 2. maddede belirtilen ad soyadının ibraz ettiği kimlikle örtüşmesi veya başka bir kişinin işlem kodu bilgisiyle gelmesi halinde kişinin ibraz ettiği kimlikteki ad soyadı ile işlem kodunun Mağaza fişine derç edilmesi şartıyla yapılacaktır. ALICI, bu şartların karşılanmaması halinde teslimatın yapılmamasına, karşılanması halinde ise bu usulde yapılmasına peşinen muvafakat eder.</p>
                                    <p>Herhangi bir şüpheye mahal vermemek üzere, SATICI’nın satın alınan ürünleri ALICI’nın adresine teslim etmek gibi bir yükümlülüğü bulunmamaktadır. Bu anlamda ALICI’nın ödemekle yükümlü olduğu bir teslimat gideri de bulunmamaktadır.</p>
                                    <p>ALICI veya bu maddede yazılı esaslara göre yetkilendirdiği kişilerin, satış işlemine konu malları aynı gün en geç saat 22.00’ye kadar teslim almaması halinde SATICI satış işlemi iptal ederek tahsil etmiş olduğu bedeli ALICI’nın ödeme yaptığı kredi kartına iade edecek ve malları teslim etme yükümlülüğü sona erecektir.</p>
                                    <p>ALICI, bu yöntemle yapılan satışın malın kendisi veya tarafından aynı gün en geç saat 22.00’ye kadar teslim teslim alınması şartına bağlı olarak yapıldığı, SATICI’nın yalnızca aynı gün en geç saat 22.00’ye kadar malı teslime hazır şekilde tutmakla yükümlü olduğunu beyan ve kabul eder.</p>
                                    <h4>5- Ödeme Şekli, ölçü veya tartıda farklılıklar:</h4>
                                    <p><b>5.1</b> ALICI tarafından söz konusu ürünlerin bedeli, her koşulda kredi kartı veya aynı benzer nitelikteki banka kartları ile elektronik ortamda SATICI’ya ödenecektir. Mağazaya ürünleri teslim almaya gelmeden önce ödemenin başarılı bir şekilde tamamlanmış olması şarttır. Aksi halde ALICI’ya ürün teslimatı yapılmaz.</p>
                                    <p><b>5.2</b> ALICI, kg veya miktar ile satılan tartılı mallardan alım yaptığı takdirde, SATICI mağazada teslim anında ALICI’nın satın alam ve ödeme esnasında talep ettiği miktara uymak için azami gayret gösterilecektir. Buna rağmen, teslime hazırlanan ile talep edilen miktar, gramaj farklılık gösterebileceği için toplam alışveriş tutarı, teslimat anındaki mağaza fişinde daha az olabilecek, fakat daha yüksek olmayacaktır. Mağaza fişinde yazılan toplam alışveriş tutarının ödenen tutardan daha düşük olması halinde aradaki fark ALICI’nın ödeme yaptığı kredi kartına aynı gün iade edilecektir. Buna karşın daha fazla miktar ve gramajda teslimat yapılacağı veya yapılmış olduğu iddiasıyla ALICI’dan ilave bedel talep edilmeyecek, bu husus SATICI’nın sorumluluğunda olacaktır.</p>
                                    <h4>6- Cayma Hakkı:</h4>
                                    <p>ALICI, herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşme konusu ürünün/ürünlerin kendisi tarafından mağazada teslim alınmasını takiben 14 (ondört) gün içinde cayma hakkına sahiptir.</p>
                                    <p>Cayma hakkının kullanıldığına dair bildirimin SATICI’nın 2. maddede bildirilen posta adresi, telefon numarası, faks numarası ve e-mail adresine, ürünlerin mağazadan teslim alınmasını takiben 14 (ondört) gün içinde yönlendirilmesi yeterlidir. Cayma hakkının kullanılmasında ALICI mesafeli satış sözleşmesi ekinde yer alan formu kullanabileceği gibi cayma kararını bildiren açık bir beyanda da bulunabilir.</p>
                                    <p>ALICI, cayma hakkını kullandığına ilişkin bildirimi SATICI’YA yönelttiği tarihten itibaren en geç on gün içinde malı teslim aldığı SATICI’nın mağazasına, satış fişinin aslı ile birlikte iade etmek zorundadır. ALICI, cayma süresi içinde malı işleyişine, teknik özelliklerine ve kullanım talimatlarına uygun bir şekilde kullanmadığı takdirde malda meydana gelen değişiklik ve bozulmalardan sorumlu olacaktır.</p>
                                    <p>Teslim alınmış olan malın değerinin azalması veya iadeyi imkânsız kılan bir nedenin varlığı cayma hakkının kullanılmasına engel değildir. Ancak değer azalması veya iadenin imkânsızlaşması tüketicinin kusurundan kaynaklanıyorsa ALICI, SATICI’ya malın değerini veya değerindeki azalmayı tazmin etmeyi kabul ve beyan eder.</p>
                                    <p>SATICI, tüketicinin cayma hakkını kullandığına ilişkin bildirimin kendisine ulaştığı tarihten itibaren on dört gün içinde, malın yukarıda belirtildiği şekilde kendisine iade edilmiş olması şartıyla, ALICI’dan tahsil ettiği bedelleri ALICI’nın ürünleri satın alırken kullandığı ödeme aracına ve ALICI’ya herhangi bir masraf veya yükümlülük getirmeden tek seferde iade edecektir.</p>
                                    <h4>7- Cayma Hakkı Kullanılamayacak Ürünler:</h4>
                                    <p>Mesafeli Sözleşmeler Yönetmeliği uyarınca ALICI aşağıdaki sözleşmelerde cayma hakkını kullanamaz:</p>
                                    <p><b>a)</b> Fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak değişen ve SATICI’nın kontrolünde olmayan mallar.</p>
                                    <p><b>b)</b> ALICI’nın istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan mallar.</p>
                                    <p><b>c)</b> Çabuk bozulabilen mallar, yiyecek, içecek gibi günlük tüketim maddeleri veya son kullanma tarihi geçebilecek mallar.
                                    </p>
                                    <p><b>ç)</b> Sağlık veya hijyen açısından iadesi uygun olmayan mallar.</p>
                                    <p><b>d)</b> Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan mallar.</p>
                                    <p><b>e)</b> Tesliminden sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan mallar.</p>
                                    <p><b>f)</b> Malın tesliminden sonra ambalajın açılmış olması halinde maddi ortamda sunulan kitap, dijital içerik ve bilgisayar sarf malzemeleri.</p>
                                    <p><b>g)</b> Gazete, dergi gibi süreli yayınlar.</p>
                                    <p><b>e)</b> Elektronik ortamda ALICI’ya anında teslim edilen gayrimaddi mallar.</p>
                                    <p>Satılan malın yazılım, DVD, VCD, CD, kaset, bilgisayar, kırtasiye malzemesi, kozmetik ürünler vb. gibi ürünler olması halinde, cayma hakkının kullanılabilmesi için ambalajın açılmamış, bozulmamış ve ürünün kullanılmamış olması şarttır. Aksi halde Alıcı tarafından cayma hakkı kullanılamaz.</p>
                                    <p>Cep telefonları ve sair elektronik ürünler yetkili servis garantisi ile satıldığından, ürün ile ilgili bir ayıp bulunması halinde, ayıbın öncelikle yetkili servis tarafından belgelendirilmesi gerekmektedir. Sonrasında garanti belgesi ile birlikte ürünün kutusu, ambalajı ve diğer tüm aksesuarları eksiksiz olacak biçimde SATICI’ya iade edilmelidir.</p>
                                    <p>ALICI, yapacağı tüm iadeleri orijinal ambalaj ve kutu ile ve ürünün ambalajı bozulmaksızın yapılmalıdır. Cep telefonları kutusu garanti belgesi kaşelenmek suretiyle ambalajsız gelmekte olup, bu husus iade sebebi olarak kabul edilmez.</p>
                                    <h4>Diğer Şartlar</h4>
                                    <p><b>8-</b> ALICI, SATICI’nın mağazasında ürünleri teslim almadan önce muayenesini yapmalı, olağan muayene ile tespit edilebilen ayıplı ve hasarlı ürünleri SATICI yetkilisinden teslim almamalıdır. ALICI malı gözden geçirmeyi ihmal eder ve malı teslim alırsa, ürünün sağlam ve hasarsız olduğunu kabul etmiş sayılır.</p>
                                    <p><b>9-</b> Satış konusu ürünlerin teslimatı için ALICI’nın mal satım sözleşmesine elektronik ortamda teyit vermiş olması ve mal bedelini ödemiş olması şarttır. Herhangi bir nedenle mal bedeli ödenmez, SATICI hesaplarına ulaşmaz veya banka kayıtlarında iptal edilir ise, SATICI’nın malı teslim etme yükümlülüğü sona erer.</p>
                                    <p><b>10-</b> Satın alınmayan bir ürünün teslimi durumunda; SATICI ALICI’ya telefon ya da e-posta yoluyla bilgilendirme yaparak, satın almadığı halde ALICI’ya teslim edilen ürünü iade edilmesini talep edebilir. ALICI bu durumda bedeli ödenmemiş olan malı SATICI’ya iade etmek ve kargoya teslim etmekle yükümlüdür. Bu halde kargo ücreti SATICI’ya aittir.</p>
                                    <p><b>12-</b> …….. sitesinde veya aynı siteye erişim sağlayan CEPTE ŞOK mobil uygulamasında bulunan ürünlerin satışı, ALICI’nın teslimatın yapılmasını talep edeceği yukarıda yazılı …………….mağazanın stokları ile sınırlıdır. SATICI, stokların tükenmiş olması veya benzeri imkânsızlık halleri, mücbir sebepler ve olağanüstü durumlar nedeni ile sözleşme konusu ürünü mağazada aynı gün içinde teslime hazır bulundurmaz ve/veya teslim edemez ise, durumu ALICI’ya bildirecektir. Bu durumda satış işlemi iptal edilerek mal bedeli olarak ödediği tutar aynı gün içinde ALICI’nın kredi kartına iade edilir.</p>
                                    <p><b>13-</b> ALICI, gerek ……. adresi veya aynı siteye erişim sağlayan CEPTE ŞOK mobil uygulamasında yer alan üyelik formunda belirtmiş olduğu ve gerekse işbu Ön Bilgilendirme Formu’nda yer alan bilgilerin doğru ve eksiksiz olduğunu ve bu bilgilerin hatalı veya noksan olmasından doğacak her türlü zarardan sorumlu olduğunu, SATICI’nın bu nedenle bir zarara uğraması halinde SATICI’nın zararını tazmin etmeyi kabul ve beyan eder. ALICI aşağıdaki onaylıyorum butonunu tıklamak suretiyle işbu önbilgilerin tümünü okuduğunu, anladığını kabul eder.</p>
                                    <p><b>14-</b> ALICI, her türlü soru, talep ve şikâyetlerini 1. maddedeki adrese …………. e-posta adresine ve ……….. numaralı ………… hattına yapabilecektir. Ayrıca ALICI, şikâyet ve itirazları konusundaki başvurularını, Bakanlıkça her yıl Aralık ayında belirlenen parasal sınırlar dâhilinde mal veya hizmeti satın aldıkları veya ikametgâhlarının bulunduğu yerdeki tüketici sorunları hakem heyetine veya tüketici mahkemesine yapabilecektir.</p>
                                </div>
                            </div>
                        </div>
                        <div id="mCSB_10_scrollbar_vertical" class="mCSB_scrollTools mCSB_10_scrollbar mCS-custom mCSB_scrollTools_vertical" style="display: block;">
                            <div class="mCSB_draggerContainer">
                                <div id="mCSB_10_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 50px; display: block; height: 1px; max-height: 70px; top: 0px;">
                                    <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                </div>
                                <div class="mCSB_draggerRail"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             </div>
                <div data-v-059bbdad="" id="terms_2">
            <div data-v-059bbdad="" class="terms-head">
                <h3 data-v-059bbdad="" class="head-title">Mesafeli Satış Sözleşmesi</h3>
                <button data-v-059bbdad="" onclick="printElement('Mesafeli Satış Sözleşmesi','distance')" class="head-print"><i data-v-059bbdad="" class="icon-print"></i> Yazdır</button>
            </div>
            <div data-v-059bbdad="" class="terms-container">
                <div data-v-059bbdad="" class="terms-wrap scrollbar mCustomScrollbar _mCS_9 scrollbar-initialized">
                    <div id="mCSB_9" class="mCustomScrollBox mCS-custom mCSB_vertical mCSB_inside" tabindex="0" style="max-height: 80px;">
                        <div id="mCSB_9_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
                            <div data-v-059bbdad="" class="textarea">
                                <div id="distance">
                                    <h4>Madde 1: Sözleşmenin Konusu</h4>
                                    <p>İşbu Mesafeli Satış Sözleşmesi (“Sözleşme)’nin konusu “SATICI”nın ALICI’ya satışını yaptığı, aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 28.05.2014 tarihinde yürürlüğe giren 6502 sayılı Tüketicinin Korunması Hakkındaki Kanun ile 27.11.2014 tarih ve 27866 sayılı Resmi Gazete’de yayımlanan Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin belirlenmesidir.</p>
                                    <h4>Madde 2: Taraflar</h4>
                                    <table border="1" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td colspan="2"><b>SATICI</b></td>
                                            </tr>
                                            <tr>
                                                <td>Unvanı</td>
                                                <td>ŞOK MARKETLER TİCARET A.Ş</td>
                                            </tr>
                                            <tr>
                                                <td>Adresi</td>
                                                <td>Kısıklı Mahallesi Hanımseti Sok.No:35 B-1 Üsküdar/İstanbul</td>
                                            </tr>
                                            <tr>
                                                <td>Telefon</td>
                                                <td>0850 221 11 00</td>
                                            </tr>
                                            <tr>
                                                <td>E Posta</td>
                                                <td>musterihizmetleri@sokmarketler.com.tr</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><b>ALICI</b></td>
                                            </tr>
                                            <tr>
                                                <td>Adı-Soyadı/Unvanı</td>
                                                <td>Elif Berkay</td>
                                            </tr>
                                            <tr>
                                                <td>Adresi</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Şehir</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Posta Kodu</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Ülke</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Telefon</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p><b>Ürünleri Teslim almaya yetkili diğer kişiler</b></p>
                                    <p><b>Elif Berkay</b></p>
                                    <p>ALICI ile SATICI Sözleşme içerisinde kısaca ayrı ayrı <b>“Taraf”</b> ve birlikte <b>“Taraflar”</b> olarak anılacaklardır.</p>
                                    <h4>Madde 3: Sözleşme Konusu Ürünlerin Özellikleri ve ürün bedeli</h4>
                                    <table border="1" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td>Ürün Markası</td>
                                                <td>Ürün Adı</td>
                                                <td>Ürün Miktarı</td>
                                                <td>Ürün Fiyatı</td>
                                            </tr>
                                            <tr>
                                                <td>Fax</td>
                                                <td>Sıvı Sabun Lavanta 1.8 Lt</td>
                                                <td>1 Adet</td>
                                                <td>12.95 TL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h4>Madde 4: Genel Hükümler</h4>
                                    <p><b>4.1.</b> ALICI, işbu Sözleşme’nin akdinden evvel İşbu Sözleşmenin 3. Maddesinde yazılı ürünlerin temel nitelikleri, satış fiyatı, ödeme şekli, ürünlerin teslimi ve cayma hakkına ilişkin tüm ön bilgileri içerir Ön Bilgilendirme Formu’nu SATICI'ya ait ………..sitesi veya aynı siteye erişim sağlayan CEPTE ŞOK mobil uygulamasından okuyup bilgi sahibi olduğunu ve ilgili Ön Bilgilendirme Formu’nu elektronik ortamda kabul ederek onayladığını ve bunu müteakip elektronik ortamda Ürünü satın aldığını gayri kabili rücu kabul ve beyan eder.</p>
                                    <p><b>4.2.</b> SATICI, 3. maddede yer alan ürünlere ilişkin ödeme işleminin tamamlanmasını takiben söz konusu ürünleri ALICI tarafından teslim alınmaya hazır şekilde poşetleyecek ve/veya hazır ambalajlı haliyle SATICI’nın CIHANNUMA MAH. MAZHARPASA SOK. NO:5-7/A BESIKTAS/ISTANBUL adresindeki mağazasının uygun bir bölümünde bulunduracaktır.</p>
                                    <p><b>4.3.</b> SATICI, ALICI’nın yukarıda 3. maddede belirttiği cep telefonuna bir işlem kodu gönderecektir.</p>
                                    <p><b>4.4.</b> ALICI, 3 maddede yer alan ürünlere ilişkin ödeme işleminin tamamlanmasını takiben söz konusu ürünleri aynı gün içinde en geç saat 22.00’ye kadar SATICI’nın CIHANNUMA MAH. MAZHARPASA SOK. NO:5-7/A BESIKTAS/ISTANBUL adresindeki mağazasına gelmek suretiyle teslim alacak veya aldıracaktır.
                                    </p>
                                    <p><b>4.5.</b> ALICI, söz konusu ürünleri bizzat almaya gelebileceği gibi, yukarıda 2. Maddede belirttiği kişi/kişiler veya işlem kodunu mağaza personeline beyan edip ürünü teslim almaya gelen kişilerin ürünleri kendisi adına teslim almaya yetkili olduğunu ve bu şekilde yapılan teslimatın kendisine yapılmış sayılacağını kabul beyan ve taahhüt eder.</p>
                                    <p><b>4.6.</b> ALICI’nın cep telefonuna gönderilecek olan işlem kodu gizli olup, bu kodu korumak, yetkisiz üçüncü kişilere ifşa etmemek ve sadece malları kendi adına teslim almaya yetkili kıldığı kişilere iletmek, tamamen kendi sorumluluğudur.</p>
                                    <p><b>4.7.</b> ALICI veya bu maddede yazılı esaslara göre yetkilendirdiği kişiler, teslim anında yukarıda yazılı ürünlerin bilgilerini içerir satış fişinin Mağaza nüshasını imzalamakla yükümlüdür. Teslimat, teslim almaya gelen kişinin 2. maddede belirtilen ad soyadının ibraz ettiği kimlikle örtüşmesi veya başka bir kişinin işlem kodu bilgisiyle gelmesi halinde kişinin ibraz ettiği kimlikteki ad soyadı ile işlem kodunun Mağaza fişine derç edilmesi şartıyla yapılacaktır. ALICI, bu şartların karşılanmaması halinde teslimatın yapılmamasına, karşılanması halinde ise bu usulde yapılmasına peşinen ve gayrikabili rücu muvafakat eder.</p>
                                    <p><b>4.8.</b> Herhangi bir şüpheye mahal vermemek üzere, SATICI’nın satın alınan ürünleri ALICI’nın adresine teslim etmek gibi bir yükümlülüğü bulunmamaktadır. Bu anlamda ALICI’nın ödemekle yükümlü olduğu bir teslimat gideri de bulunmamaktadır.</p>
                                    <p><b>4.9.</b> ALICI veya bu maddede yazılı esaslara göre yetkilendirdiği veya yetkilendirmiş sayıldığı kişilerin, satış işlemine konu malları aynı gün en geç saat 22.00’ye kadar teslim almaması halinde SATICI satış işlemi iptal ederek tahsil etmiş olduğu bedeli ALICI’nın ödeme yaptığı kredi kartına iade edecek ve malları teslim etme yükümlülüğü sona erecektir.
                                    </p>
                                    <p><b>4.10.</b> ALICI, bu yöntemle yapılan satışın malın bu sözleşmede öngörüldüğü şekilde aynı gün en geç saat 22.00’ye kadar teslim alınması şartına bağlı olarak yapıldığı, SATICI’nın sadece bu süre zarfında malı teslime hazır şekilde tutmakla yükümlü olduğunu, belirtilen süre zarfında malın teslim alınmaması halinde sözleşmenin herhangi bir bildirim ve ihbara gerek kalmaksızın kendiliğinden münfesih sayılacağını ve bu maddede belirtilen süre içinde mal bedelini iade etmek dışında SATICI’ya karşı hiçbir hak ve talepte bulunmayacağını beyan ve kabul eder.</p>
                                    <p><b>4.11.</b> ALICI ürünü teslim almadan önce muayenesini yapmalı, olağan muayene ile edilebilen ayıplı ve hasarlı ürünü SATICI yetkilisinden teslim almamalıdır. Alıcı malı gözden geçirmeyi ihmal eder ve malı teslim alırsa, ürünün sağlam ve hasarsız olduğunu kabul etmiş sayılır.</p>
                                    <p><b>4.12.</b> Malın teslimatı için ALICI’nın Sözleşmeye elektronik ortamda teyit vermiş olması ve bedelini ödemiş olması şarttır. Herhangi bir nedenle mal bedeli ödenmez veya banka kayıtlarında iptal edilir ise, SATICI’nın malın teslimi yükümlülüğü ortadan kalkar.</p>
                                    <p><b>4.13.</b> SATICI, sözleşme konusu ürünün sağlam, eksiksiz, internet sitesi veya mobil uygulamada belirtilen niteliklere uygun olarak teslim edilmesinden sorumludur.</p>
                                    <p><b>4.14.</b> ALICI veya İşbu Sözleşme hükümlerine yetkilendirmiş olduğu yahut yetkilendirmiş sayıldığı kişi, teslim anında yukarıda 3. maddede yazılı ürünlerin bilgilerini içerir satış fişinin Mağaza nüshasını imzalamakla yükümlüdür.</p>
                                    <p><b>4.15.</b> SATICI’nın satın alınan ürünleri ALICI’nın adresine teslim etme yükümlülüğü bulunmamaktadır. Bu anlamda ALICI’nın ödemekle yükümlü olduğu bir teslimat gideri de bulunmamaktadır.</p>
                                    <p><b>4.16.</b> SATICI, stokların tükenmesi, mücbir sebepler vb. gibi olağanüstü durumlar nedeni ile sözleşme konusu ürünün aynı gün mağaza çalışma saatleri içinde teslim edilemeyeceğinin anlaşılması halinde durumu ALICI'ya gecikmeksizin bildirmekle yükümlüdür. Bu takdirde durumu ALICI’ya bildirecektir. Bu durumda satış işlemi iptal edilerek mal bedeli olarak tahsil edilen tutar aynı gün içinde ALICI’nın kredi kartına iade edilir.</p>
                                    <h4>Madde 5: Cayma Hakkı</h4>
                                    <p><b>5.1.</b> ALICI, herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşme konusu ürünün/ürünlerin kendisi tarafından mağazada teslim alınmasını takiben 14 (ondört) gün içinde cayma hakkına sahiptir.</p>
                                    <p><b>5.2.</b> Cayma hakkının kullanıldığına dair bildirimin SATICI’nın 2. maddede bildirilen posta adresi, telefon numarası, faks numarası ve e-mail adresine, ürünlerin mağazadan teslim alınmasını takiben 14 (ondört) gün içinde yönlendirilmesi yeterlidir. Cayma hakkının kullanılmasında ALICI mesafeli satış sözleşmesi ekinde yer alan formu kullanabileceği gibi cayma kararını bildiren açık bir beyanda da bulunabilir.</p>
                                    <p><b>5.3.</b> ALICI, cayma hakkını kullandığına ilişkin bildirimi SATICI’YA yönelttiği tarihten itibaren en geç on gün içinde malı teslim aldığı SATICI’nın herhangi bir mağazasına satış fişinin aslı ile birlikte iade etmek zorundadır.</p>
                                    <p><b>5.4.</b> ALICI, cayma süresi içinde malı işleyişine, teknik özelliklerine ve kullanım talimatlarına uygun bir şekilde kullanmadığı takdirde malda meydana gelen değişiklik ve bozulmalardan sorumlu olacaktır. Teslim alınmış olan malın değerinin azalması veya iadeyi imkânsız kılan bir nedenin varlığı cayma hakkının kullanılmasına engel değildir. Ancak değer azalması veya iadenin imkânsızlaşması tüketicinin kusurundan kaynaklanıyorsa ALICI, SATICI’ya malın değerini veya değerindeki azalmayı tazmin etmeyi kabul ve beyan eder.</p>
                                    <p><b>5.5.</b> SATICI, tüketicinin cayma hakkını kullandığına ilişkin bildirimin kendisine ulaştığı tarihten itibaren on dört gün içinde, malın yukarıda belirtildiği şekilde kendisine iade edilmiş olması şartıyla, ALICI’dan tahsil ettiği bedelleri ALICI’nın ürünleri satın alırken kullandığı ödeme aracına ve ALICI’ya herhangi bir masraf veya yükümlülük getirmeden tek seferde iade edecektir.</p>
                                    <h4>Madde 6: Cayma Hakkı Kullanılamayacak Ürünler</h4>
                                    <p><b>6.1.</b> Mesafeli Sözleşmeler Yönetmeliği uyarınca ALICI aşağıdaki sözleşmelerde cayma hakkını kullanamaz:</p>
                                    <p><b>a)</b> Fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak değişen ve SATICI’nın kontrolünde olmayan mallar.</p>
                                    <p><b>b)</b> ALICI’nın istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan mallar.</p>
                                    <p><b>c)</b> Çabuk bozulabilen mallar, yiyecek, içecek gibi günlük tüketim maddeleri veya son kullanma tarihi geçebilecek mallar.
                                    </p>
                                    <p><b>ç)</b> Sağlık veya hijyen açısından iadesi uygun olmayan mallar.</p>
                                    <p><b>d)</b> Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan mallar.</p>
                                    <p><b>e)</b> Tesliminden sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan mallar.</p>
                                    <p><b>f)</b> Malın tesliminden sonra ambalajın açılmış olması halinde maddi ortamda sunulan kitap, dijital içerik ve bilgisayar sarf malzemeleri.</p>
                                    <p><b>g)</b> Gazete, dergi gibi süreli yayınlar.</p>
                                    <p><b>e)</b> Elektronik ortamda ALICI’ya anında teslim edilen gayrimaddi mallar.</p>
                                    <p><b>6.2.</b> Satılan malın yazılım, DVD, VCD, CD, kaset, bilgisayar, kırtasiye malzemesi, kozmetik ürünler vb. gibi ürünler olması halinde, cayma hakkının kullanılabilmesi için ambalajın açılmamış, bozulmamış ve ürünün kullanılmamış olması şarttır. Aksi halde Alıcı tarafından cayma hakkı kullanılamaz.</p>
                                    <p><b>6.3.</b> Cep telefonları ve sair elektronik ürünler yetkili servis garantisi ile satıldığından, ürün ile ilgili bir ayıp bulunması halinde, ayıbın öncelikle yetkili servis tarafından belgelendirilmesi gerekmektedir. Sonrasında garanti belgesi ile birlikte ürünün kutusu, ambalajı ve diğer tüm aksesuarları eksiksiz olacak biçimde SATICI’YA iade edilmelidir.</p>
                                    <p><b>6.4.</b> ALICI, yapacağı tüm iadeleri orijinal ambalaj ve kutu ile ve ürünün ambalajı bozulmaksızın yapılmalıdır. Cep telefonları kutusu garanti belgesi kaşelenmek suretiyle ambalajsız gelmekte olup, bu husus iade sebebi olarak kabul edilmez.
                                    </p>
                                    <h4>Madde 7: Sözleşme Konusu Ürün Bedellerinin Ödeme Şekli</h4>
                                    <p><b>7.1.</b> ALICI tarafından söz konusu ürünlerin bedeli kredi kartı veya aynı benzer nitelikteki banka kartları ile internetten ödeme yapmak suretiyle ödeme yapılacaktır. Mağazaya ürünleri teslim almaya gelmeden önce ödemenin başarılı bir şekilde tamamlanmış olması şarttır. Aksi halde ALICI’ya ürün teslimatı yapılmaz.</p>
                                    <p><b>7.2.</b> Ürün/ürünlerin türü, miktarı, marka/modeli, rengi, adedi, satış bedeli, ödeme şekli, İşbu Sözleşmenin 3. maddesinde belirtildiği gibidir.</p>
                                    <p><b>7.3.</b> ALICI, kg veya miktar ile satılan tartılı mallardan alım yaptığı takdirde, SATICI mağazada teslim anında ALICI’nın satın alam ve ödeme esnasında talep ettiği miktara uymak için azami gayret gösterilecektir. Buna rağmen, teslime hazırlanan ile talep edilen miktar, gramaj farklılık gösterebileceği için toplam alışveriş tutarı, teslimat anındaki mağaza fişinde daha az olabilecek, fakat daha yüksek olmayacaktır. Mağaza fişinde yazılan toplam alışveriş tutarının ödenen tutardan daha düşük olması halinde aradaki fark ALICI’nın ödeme yaptığı kredi kartına aynı gün iade edilecektir. Buna karşın daha fazla miktar ve gramajda teslimat yapılacağı veya yapılmış olduğu iddiasıyla ALICI’dan ilave bedel talep edilmeyecek, bu husus SATICI’nın sorumluluğunda olacaktır.</p>
                                    <h4>Madde 8: Son Hükümler</h4>
                                    <p><b>8.1.</b> Mal teslimi ancak geçerli bir kimlik kartı göstermek suretiyle, ilgili kimlik bilgilerinin kaydedilmesine izin vermek ve ilgili yerlere imza atmak şartıyla gerçekleştirilecektir. Bu işlemler gerçekleştirilmediği takdirde ürün teslimatı gerçekleşmeyecektir.</p>
                                    <p><b>8.3.</b> SATICI herhangi bir zamanda teknik zorunluluklar, yazılım ve sistemlerin yenilenmesi geliştirilme ve sair sebeplerle ……….sitesi veya aynı siteye erişim sağlayan CEPTE ŞOK mobil uygulamasının çalışmasını geçici bir süre için veya tamamen durdurabilir. Bu durumlarda SATICI'nın, ALICI veya internet sitesi ile mobil uygulama yoluyla sisteme üye olan kişi veya üçüncü şahıslara karşı hiçbir sorumluluğu bulunmayacaktır.</p>
                                    <p><b>8.4.</b> İşbu Sözleşmenin uygulanmasında, Gümrük ve Ticaret Bakanlığınca ilan edile değere kadar Tüketici Hakem Heyetleri ile ALICI'nın veya SATICI'nın yerleşim yerindeki Tüketici Mahkemeleri yetkilidir. Ayrıca ALICI, şikâyet ve itirazları konusundaki başvurularını, Gümrük ve Ticaret Bakanlığınca her yıl Aralık ayında belirlenen parasal sınırlar dâhilinde mal veya hizmeti satın aldıkları veya ikametgâhlarının bulunduğu yerdeki tüketici sorunları hakem heyetine veya tüketici mahkemesine yapabileceklerdir.</p>
                                    <p><b>8.5.</b> ALICI, gerek ……. adresi veya aynı siteye erişim sağlayan CEPTE ŞOK mobil uygulamasında yer alan üyelik formunda belirtmiş olduğu ve gerekse Ön Bilgilendirme Formu’nda yer alan bilgilerin doğru ve eksiksiz olduğunu ve bu bilgilerin hatalı veya noksan olmasından doğacak her türlü zarardan sorumlu olduğunu, SATICI’nın bu nedenle bir zarara uğraması halinde SATICI’nın zararını tazmin etmeyi kabul ve beyan eder.</p>
                                    <p><b>8.8.</b> ALICI, işbu Sözleşme hükümlerini okuyarak incelemiş ve kabul ederek imzalamıştır. Ödeme işlemine elektronik olarak onay vermekle ALICI işbu sözleşmenin tüm koşullarını kabul etmiş sayılır.</p>
                                    <h4>8.9 Süre ve Yürürlük:</h4>
                                    <p>İşbu Sözleşme, ALICI ve SATICI arasında, ALICI tarafından okunduğunun ve kabul edildiğinin beyan edildiği an internet üzerinden akdedilmiş olup, bu andan itibaren hüküm ve sonuçlarını doğuracaktır. İşbu Sözleşme, Tarafların karşılıklı edimlerinin Sözleşmeye uygun şekilde yerine getirilmesi üzerine kendiliğinden sona erecektir.</p>
                                </div>
                            </div>
                        </div>
                        <div id="mCSB_9_scrollbar_vertical" class="mCSB_scrollTools mCSB_9_scrollbar mCS-custom mCSB_scrollTools_vertical" style="display: block;">
                            <div class="mCSB_draggerContainer">
                                <div id="mCSB_9_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 50px; display: block; height: 1px; max-height: 70px; top: 0px;">
                                    <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                </div>
                                <div class="mCSB_draggerRail"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </section>
            <section data-v-059bbdad="" class="section checkout-section checkout-submit">
            <div data-v-059bbdad="" class="submit-check checkwrap">
            <input data-v-059bbdad="" type="checkbox" id="payment_pre_check">
            <label data-v-059bbdad="" for="payment_pre_check"><span data-v-059bbdad=""></span><a data-v-059bbdad="" href="javascript:;" class="scrollto">Ön bilgilendirme</a> ve <a data-v-059bbdad="" href="javascript:;" class="scrollto">mesafeli satış sözleşmesi</a>'ni okudum, onaylıyorum.</label>
            </div>
            <button data-v-059bbdad="" class="submit-button btn green big wide text-big"><i data-v-059bbdad="" class="icon-security-2"></i> Ödeme İşlemini Tamamla</button>
            </section>
            </div>

           </section>
           
           <section v-if="step == 3">
            <a href="#"  class="list-item"> Teslimat Zamanı </a>
            <a href="#" class="list-item"> Ödeme İşlemleri </a> 
            <a href="#" class="list-item active"> Sipariş Özeti </a>

           </section>
           
           
        
        </form>
    </div>
</nav>

<altkisim/>

</div>
  
</template>

<script>

import Altkisim  from './Altkisim.vue'
import SepetteUrunler from './SepetteUrunler'

export default {
    name: 'Steps',
     components:{
         Altkisim,
         SepetteUrunler,
    },
    data() {
    return { 
        step:1,
        totalsteps: 3,
        products:"",
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
    },
    getPro:function(){
        this.products=this.$store.state.sepet;
        console.log(this.$store.state.sepet)
    },
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

}
</script>

<style>

</style>