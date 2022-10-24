<template>
    <div class="footer">
        <!-- 底部内容 -->
        <footer>
            <section class="subscribe-area ptb-54">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-2">
                            <div class="logo">
                                <NuxtLink to="/"><img src="~/static/picture/white-logo.png" alt="Image"></NuxtLink> 
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="subscribe-content">
                                <span>30% Discount For Your First Order</span>
                                <h3>Subscribe To Our Newsletter</h3>
                                <p>Subscribe to the newsletter for all the latest updates</p>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <form class="newsletter-form" data-toggle="validator">
                                <input type="email" class="form-control" placeholder="Your email address" name="EMAIL"
                                    autocomplete="off" required="true">
                                <button class="submit-btn" type="submit">
                                    Subscribe
                                </button>
                                <div id="validator-newsletter" class="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div class="footer-area pt-54 pb-30">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="single-footer-widget">
                                <h3>Quick Information</h3>
                                <ul class="info-list">
                                    <li>
                                        <i class="ri-map-pin-line"></i>
                                        ROOM 2103,21/F HO KING COMMERCIAL CENTRE NO.2-16 FA YUEN STREET MONG KOK,
                                        KOWLOON
                                        HONGKONG
                                    </li>
                                    <li>
                                        <i class="ri-phone-line"></i>
                                        <a href="tel:(0755) 8271 7003">(0755) 8271 7003</a>
                                    </li>
                                    <li>
                                        <i class="ri-mail-send-line"></i>
                                        <a href="javascript:;"><span class="__cf_email__"
                                                data-cfemail="info@elecsaler.com">info@elecsaler.com</span></a>
                                    </li>
                                    <li>
                                        <i class="ri-time-line"></i>
                                        Mon-Fri 9:00AM – 6.30:00PM
                                    </li>
                                </ul>
                                <ul class="social-link">
                                    <li>
                                        <span>Stay connected:</span>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i class="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i class="ri-twitter-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i class="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://rss.com/" target="_blank">
                                            <i class="ri-instagram-fill"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single-footer-widget">
                                <h3>Information</h3>
                                <ul class="import-link">
                                    <li>
                                        <NuxtLink to="/contact">Contact</NuxtLink>                                         
                                    </li>
                                    <li>
                                        <NuxtLink to="/about">About Us</NuxtLink>  
                                    </li>
                                    <li>
                                        <NuxtLink to="/faq">Frequently Questions</NuxtLink>  
                                    </li>
                                    <li>
                                        <NuxtLink to="/store-location">Delivery Information</NuxtLink>  
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single-footer-widget">
                                <h3>Customer Service</h3>
                                <ul class="import-link">
                                    <li>
                                        <NuxtLink to="/RFQ">Cart</NuxtLink>  
                                    </li>
                                    <li>
                                        <NuxtLink to="/wishlist">Wishlist</NuxtLink>  
                                    </li>
                                    <li>
                                        <NuxtLink to="/products">Checkout</NuxtLink>  
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single-footer-widget">
                                <h3>We Accept Payment Via</h3>
                                <ul class="payment-option">
                                    <li v-for="(item,index) in imgList" :key="index">
                                        <img v-lazy=item alt="ESALER">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="go-top" >
                <i class="ri-arrow-up-s-fill"></i>
                <i class="ri-arrow-up-s-fill"></i>
            </div>
            <div>
                <template>    
                <!-- 回到顶部 -->
                <el-backtop/>
                </template>
            </div>
            
        </footer>
    </div>
</template>
<script>
export default {
    name: "Footer",
    
    data(){
        return{
            imgList:[
                require("~/static/picture/payment-1.png"),
                require("~/static/picture/payment-2.png"),
                require("~/static/picture/payment-3.png"),
                require("~/static/picture/payment-4.png"),
            ]
        }
    },
    methods:{

    },
    watch:{

    },
    computed:{

    }
}
</script>

<style scoped>
.ptb-54 {
    padding: 54px;
}
:deep(.el-backtop){
    background-color:#4b4799 ;
    border-radius:0;
    color:white ;
}
:deep( .el-calendar-table td.is-today){
    background-color:white ;

}
</style>

 