<template>
  <section class="featured-products-area pb-30">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="featured-product-img bg-2">
            <div class="featured-product-content">
              <span class="best">Best Deals</span>
              <h3>Click Here Know More</h3>
              <span class="offer">Up to 30% off</span>
              <NuxtLink to="/products">Shop Now</NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="section-title">
            <h2>Featured Products</h2>
          </div>
  <div>
    <!-- Swiper -->
    <div>
          <div class=" mySwiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in (data ||'').slice(20, 60)" :key="index">
          <!-- 单位op -->
          <div class="single-products" >
            <div class="product-img">
               <nuxt-link
                  :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                >
                <!-- <nuxt-link
                  :to="{name:'prodetail',query:{id:JSON.stringify(item.productionId),pro:JSON.stringify(item.productionNum),maf:JSON.stringify(item.manufacturer)}}"
                > -->
               <img v-lazy="URL_IMG + item.imgPath" alt />
               <!-- <img v-lazy="item.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.imgPath" alt /> -->
               <!-- <img v-lazy="~/static/images/imgAvailable.jpg" alt=""> -->
               <!-- <img v-lazy="imgAvailable" alt=""> -->

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
                  <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="TransferRrequest(item)">
                    <i class="ri-eye-line"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <!-- 单位ed -->
        </div>

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
      imgAvailable:"/_nuxt/static/images/imgAvailable.jpg"
      // imgAvailable:"/_nuxt/static/images/imgAvailable.jpg"

    };
  },
  async asyncData(app) {},
  mounted() {
    var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 3,
      autoplay: true,
      loop: true,
      spaceBetween: 24,
      freeMode: true,
    });
  },
  methods:{
    // 组件传值
    TransferRrequest(item){
      this.$parent.transfer(item)
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
},
 computed: {
    wishlist(){
       return this.$store.state.wishlist.wishlist;
    }
  },

}
</script>


<style scoped>
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
.products-rating{
  text-align: left;
}
.swiper-slide[data-v-5f3bc9a8]{
  text-align: left!important;
  color: #9c9c9c;
  font-size: 15px!important;
}
.product-content{
    text-align: left!important;
  color: #9c9c9c!important;
  font-size: 15px;
}
</style>
