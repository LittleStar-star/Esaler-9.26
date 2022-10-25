<template>
  <!-- Swiper -->
  <div class="swiper-container swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in BannerList" :key="item.id"  :style="`background-image:url(${item.img})`" >
      <!-- <div class="swiper-slide" v-for="item in BannerList" :key="item.id"   v-lazy:background-image="{src: item.img}"> -->
        <div class="d-table" >
          <div class="d-table-cell" >
            <div class="container" >
              <div class="hero-slider-content" >
                <span >{{item.span}}</span>
                <h1>{{item.h1}}</h1>
                <p>{{item.p}}</p>
                <div class="banner-btn" >
                  <nuxt-link to="/products" class="default-btn" >
                    <i class="ri-shopping-cart-line" ></i>
                    Shop Now
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
 
<script>
import Swiper from "swiper";
export default {
  name: "BannerList",
  components: {},
  data() {
    return {
            BannerList:[
               {
                id:1,
                 img:require("~/static/images/bg-4.jpg"),
                 span:"Special Offer",
                 h1:"Try Our Best To Satisfy Customers",
                 p:"Free shipping & discount 40% on products"
               },
               {
                id:2,
                 img:require("~/static/images/bg-5.jpg"),
                 span:"Special Offer",
                 h1:"High Quality Products Are Ready Here",
                 p:"Free shipping & discount 40% on products"
               },
               {
                id:3,
                 img:require("~/static/images/bg-6.jpg"),
                 span:"Special Offer",
                 h1:"All Types Of Premium Quality Semiconductor",
                 p:"Free shipping & discount 40% on products"
               }

            ]
    };
  },
  async asyncData(app) {},
  mounted() {
    var swiper_1 = new Swiper(".swiper1", {
      parallax: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      disableOnInteraction: false,
      loopAdditionalSlides: 1,
      loop: true,
      delay: 2000,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
          return '<span class="' + className + '">' + "</span>";
        }
      }
    });
    
  }
}
</script>




<style scoped>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  /* background: url(./static/images/bg-5.jpg); */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding-top: 141px;
  padding-bottom: 141px;
}
</style>

