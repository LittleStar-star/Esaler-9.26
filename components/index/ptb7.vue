<template>
  <section class="categories-area pb-54">
    <div class="container">
      <div class="categories-wrap tab products-details-tab">
        <div class="row">
          <div class="col-lg-3">
            <div class="section-title">
              <h2>Categories</h2>
            </div>
            <ul class="tabs">
              <li v-for="(item,index) in tabs" :key="index">{{item}}</li>
            </ul>
          </div>
          <div class="col-lg-9">
            <div class="tab_content">
              <!-- Swiper -->
              <div class="swiper mySwiper7">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(item,index) in (data || '').slice(48, 80)"
                    :key="index"
                  >
                    <!-- 单位op -->
                    <div class="single-products">
                      <div class="product-img">
                        <nuxt-link
                          :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                        >
                          <img v-lazy="URL_IMG + item.imgPath" alt />
                          <!-- <img v-lazy="item.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.imgPath" alt /> -->
                        </nuxt-link>
                        <div class="id">{{item.productionId}}</div>
                        <span class="hot">Hot</span>
                      </div>
                      <div class="product-content">
                        <nuxt-link
                          :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                          class="title"
                        >{{item.productionNum}}</nuxt-link>
                        <ul class="products-rating">
                          <li v-for="(item,index) in 5" :key="index">
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <nuxt-link
                              :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                            >({{ item.reviewsCount }} Review)</nuxt-link>
                          </li>
                          <div class="category">{{item.category}}</div>
                          <div>{{item.manufacturer}}</div>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <nuxt-link
                              :to="{name:'RFQ',query:{num:1,pro:item.productionNum,maf:item.manufacturer}}"
                              class="RFQ default-btn"
                            >RFQ</nuxt-link>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              class="wish-btn"
                              @click="add_wishlist(item)"
                            >
                              <i class="ri-heart-line"></i>
                            </a>
                          </li>
                          <li>
                            <button
                              class="eye-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              @click="TransferRrequest(item)"
                            >
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
    }
  },
  name: "BannerList",
  components: {},
  data() {
    return {
      URL_IMG: "https://image.lkrelec.com/img/",
      imgAvailable:"/_nuxt/static/images/imgAvailable.jpg",
      tabs:[
              "Power Tools",
              "Hand Tools",
              "Cordless Tools",
              "Welding & Soldering",
              "Gardening Tools",
              "Safety Tools",
              "Site Lighting Tools",
              "Tools Accessories",
      ]
    };
  },
  async asyncData(app) {},
  mounted() {
    var swiper = new Swiper(".mySwiper7", {
      slidesPerView: 3,
      autoplay: true,
      spaceBetween: 24,
      loop: true,
      freeMode: true
    });
  },
  methods: {
    TransferRrequest(item) {
      this.$parent.transfer(item);
    },
    // 添加至愿望清单
    add_wishlist(data) {
      console.log(data);
      this.$store.commit("wishlist/changName", data);
      this.$message({
          message: 'ok!',
          type: 'success'
        });
    }
  }
};
</script>
<style scoped>
.col-lg-9 {
  overflow: hidden;
}
.product-content {
  text-align: left !important;
  color: #9c9c9c !important;
  font-size: 15px;
}
</style>