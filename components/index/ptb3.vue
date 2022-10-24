<template>
  <section class="best-seller-area pb-30">
    <div class="container">
      <div class="section-title">
      </div>
      <div class="best-product-slider owl-carousel owl-theme" style="overflow: hidden">
        <!-- Swiper -->
        <div class="swiper mySwiper3">
          <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(item,index) in (this.data ||'').slice(0,50)" :key="index">
              <!-- 单位op -->

              <div class="single-products">
                <div class="product-img" @click="TOP">
                <nuxt-link
                  :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                >
               <img v-lazy="URL_IMG + item.imgPath" alt :key="item.imgPath"/>
               <!-- <img v-lazy="item.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.imgPath" alt /> -->
                </nuxt-link>
                  <div class="id">{{item.productionId}}</div>
                  <span class="hot">Hot</span>
                </div>
                <div class="product-content">
                <nuxt-link
                  :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                    class="title"
                  >{{item.productionNum}}
                </nuxt-link>
                  <ul class="products-rating">
                  <li v-for="(item,index) in 5" :key="index">
                    <i class="ri-star-fill"></i>
                  </li>
                  <li>
                  <nuxt-link
                  :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}">
                    ({{ item.reviewsCount }} Review)
                  
                  </nuxt-link>
                  </li>
                    <div class="category">{{item.category}}</div>
                    <div>{{item.manufacturer}}</div>
                  </ul>
                  <ul class="products-cart-wish-view">
                    <li>
                      <!-- <a href="javascript:void(0)" class="default-btn">RFQ</a> -->
                    <nuxt-link :to="{name:'RFQ',query:{num:1,pro:item.productionNum,maf:item.manufacturer}}"
                     class="RFQ default-btn">
                        RFQ
                    </nuxt-link>
                    </li>
                    <li>
                     <a href="javascript:void(0)" class="wish-btn" @click="add_wishlist(item)">
                        <i class="ri-heart-line"></i>
                      </a>
                    </li>
                    <li>
                      <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  @click="TransferRrequest(item)">
                        <i class="ri-eye-line"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Swiper from "swiper";
export default {
    props: {
    data: {
      type: Array,
      required: true
    },
  },
  name: "BannerList",
  components: {},
  data() {
    return {
      URL_IMG:'https://image.lkrelec.com/img/',
      imgAvailable:"/_nuxt/static/images/imgAvailable.jpg",
      classList:'',
      
    };
  },
  async asyncData(app) {},
  mounted() {
    var swiper = new Swiper(".mySwiper3", {
      slidesPerView: 4,
      loop: true,
      autoplay: true,
      spaceBetween: 24,
      freeMode: true,
      loopAdditionalSlides: 3,
      cache:false,
      
    });

  },
  methods:{
    TransferRrequest(item){
      this.$parent.transfer(item)
    },

        TOP(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        },
        // 添加至愿望清单
    add_wishlist(data){
      console.log(data);
      this.$store.commit('wishlist/changName',data)
      this.$message({
          message: 'ok!',
          type: 'success'
        });
    },
    
    // demo(){
    //   console.log('this.datas :>> ', (this.data || '').slice(13, 26));
    //   for(let item in (this.data ||'').slice(13, 26)){
    //     console.log('item :>> ', item);
    //   }
    // }
  }
};
</script>


<style scoped lang="less">
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: white;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 306px;
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
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mySwiper2 {
  flex: 0 0 auto;
  /* width: 75%; */
  position: relative;
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
}
.single-products .product-img img {
  z-index: 1;
}
.best-product-slider .owl-carousel .owl-theme {
  overflow: hidden;
}
/* .swiper-slide{
  text-align: left!important;
} */
.product-content{
    text-align: left!important;
  color: #9c9c9c!important;
  font-size: 15px;
}
.product-img{
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
