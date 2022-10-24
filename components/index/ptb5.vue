    <style>
.id {
  display: none !important;
}

.category {
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<template>
  <section class="new-arrivals-area pb-30">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="section-title">
            <h2>Trending Products</h2>
          </div>
          <ul class="trending-product-list one">
            <li class="single-list" v-for="(item,index) in (data ||'').slice(33, 38)" :key="index">
              <img
                v-lazy="URL_IMG + item.imgPath"
                alt="PMIC - Voltage Regulators - LinearTPS70950DBVR"
              />
              <!-- <img v-lazy="item.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.imgPath" alt /> -->
              <div class="product-content">
                <div class="id">{{item.productionId}}</div>
                <nuxt-link
                  :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                  class="title"
                >{{item.productionNum}}</nuxt-link>

                <ul class="products-rating">
                <li v-for="(item,index) in 5" :key="index">
                  <i class="ri-star-fill"></i>
                </li>
                </ul>
                <div class="category">{{item.category}}</div>
                <div>{{item.manufacturer}}</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div class="col-lg-9">
          <div class="section-title">
            <h2>New Arrivals</h2>
            <NuxtLink to="/new-arrivals" class="read-more">View All</NuxtLink>
          </div>
          <div class="row" id="box">
            <div
              class="col-xl-3 col-sm-6"
              v-for="(item,index) in (data ||'').slice(39, 47)"
              :key="index"
            >
              <div class="single-products new-arrivals str">
                <div class="product-img">
                  <nuxt-link
                    :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                    class="title"
                  >
                    <img v-lazy="URL_IMG + item.imgPath" alt="Digital IsolatorsADM2682EBRIZ" />
                     <!-- <img v-lazy="item.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.imgPath" alt="Digital IsolatorsADM2682EBRIZ" /> -->
                  </nuxt-link>

                  <div class="id">{{item.productionId}}</div>
                  <span class="hot new">New</span>
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
    };
  },
  methods:{
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
  }
};
</script>
<style scoped lang="less">
:deep(.carousel-indicators [data-bs-target]) {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #4b4799;
}

.featured-product-wrap {
  display: inline-block;
  width: 300px;
  margin-right: 10px;
}

.single-products {
  display: inline-block;
  width: 300px;
  margin-right: 10px;
}

#box > div {
  /* width: 217px; */
  height: 452px;
}

.str {
  width: 215px;
}
.aar {
  float: left !important;
  margin-left: 30px;
  margin-right: 30px;
}
.single-products .product-img img {
  z-index: 1;
}
/* .products-rating{
  text-align: left;
}
.swiper-slide[data-v-5f3bc9a8]{
  text-align: left!important;
  color: #9c9c9c;
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

