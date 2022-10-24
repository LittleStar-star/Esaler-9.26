<template>
  <div>
    <div class="swiper partner-area pb-54">
      <div class="container">
        <div class="partner-wrap mySwiper8">
          <div class="swiper-wrapper partner-slider owl-carousel owl-theme">
            <div class="swiper-slide partner-item aar" v-for="(item,index) in imgList" :key="index">
               <img :src=item alt="ESALER">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 分割 -->
    <section class="special-area pb-30">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>Special Offers</h2>
            </div>
            <ul class="trending-product-list special-product-list two">
              <li
                class="single-list"
                v-for="(item,index) in (data ||'').slice(61, 65)"
                :key="index"
              >
                <img
                  v-lazy="URL_IMG + item.imgPath"
                  alt="PMIC - Voltage Regulators - LinearTPS70950DBVR"
                />
                <!-- <img v-lazy="item.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.imgPath" alt="PMIC - Voltage Regulators - LinearTPS70950DBVR" /> -->
                <div class="product-content">
                  <div class="id">{{item.productionId}}</div>
                  <nuxt-link
                    class="title"
                    :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                  >{{item.productionNum}}</nuxt-link>
                  <ul class="products-rating">
                    <li v-for="(ietm,index) in 5" :key="index">
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                  <div class="category">{{item.category}}</div>
                  <div>{{item.manufacturer}}</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>Popular Products</h2>
            </div>
            <ul class="trending-product-list special-product-list three">
              <li
                class="single-list"
                v-for="(item,index) in (data || '' ).slice(61, 65)"
                :key="index"
              >
                <img
                  v-lazy="URL_IMG + item.imgPath"
                  alt="PMIC - Voltage Regulators - LinearTPS70950DBVR"
                />
                  <!-- <img v-lazy="item.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.imgPath" alt="PMIC - Voltage Regulators - LinearTPS70950DBVR" /> -->
                <div class="product-content">
                  <div class="id">{{item.productionId}}</div>
                  <nuxt-link
                    class="title"
                    :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                  >{{item.productionNum}}</nuxt-link>
                  <ul class="products-rating">
                    <li v-for="(ietm,index) in 5" :key="index">
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                  <div class="category">{{item.category}}</div>
                  <div>{{item.manufacturer}}</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>Top Rated Products</h2>
            </div>
            <ul class="trending-product-list special-product-list four">
              <li
                class="single-list"
                v-for="(item,index) in (data ||'' ).slice(65, 69)"
                :key="index"
              >
                <img
                  v-lazy="URL_IMG + item.imgPath"
                  alt="PMIC - Voltage Regulators - LinearTPS70950DBVR"
                />
                  <!-- <img v-lazy="item.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.imgPath" alt="PMIC - Voltage Regulators - LinearTPS70950DBVR" /> -->
                <div class="product-content">
                  <div class="id">{{item.productionId}}</div>
                  <nuxt-link
                    class="title"
                    :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                  >{{item.productionNum}}</nuxt-link>
                  <ul class="products-rating">
                    <li v-for="(ietm,index) in 5" :key="index">
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                  <div class="category">{{item.category}}</div>
                  <div>{{item.manufacturer}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- 分割 -->
    <section class="services-area pt-0 pb-30">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6" v-for="(item,index) in services" :key="index">
            <div class="single-services">
              <div class="icon">
                <img v-lazy="item.img" alt="Image" />
              </div>
              <h3>{{item.h3}}</h3>
              <p>{{item.p}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  name: "BannerList",
  components: {},
  data() {
    return {
      URL_IMG: "https://image.lkrelec.com/img/",
      imgAvailable:"/_nuxt/static/images/imgAvailable.jpg",
      demo:"~/static/picture/",
      services:[
        {
            img:require("~/static/picture/support.png"),
            h3:"Customer Support",
            p:" 24/7 We are customer care best support"
        },
        {
            img:require("~/static/picture/payment.png"),
            h3:"Secure Payments",
            p:" Pay with the world's top payment methods"
        },
        {
            img:require("~/static/picture/network.png"),
            h3:"Worldwide Delivery",
            p:"What you want, delivered to where you want"
        }
      ],
      imgList:[
        require("~/static/picture/1.jpg"),
        require("~/static/picture/2.jpg"),
        require("~/static/picture/3.jpg"),
        require("~/static/picture/4.jpg"),
        require("~/static/picture/5.jpg"),
        require("~/static/picture/6.jpg")
      ]

    };
  },
  async asyncData(app) {},
  mounted() {
    var swiper = new Swiper(".mySwiper8", {
      slidesPerView: 6,
      autoplay: true,
      spaceBetween: 24,
      freeMode: true,
      loop: true
    });
  }
};
</script>
<style>
.partner-wrap {
  overflow: hidden;
}
</style>