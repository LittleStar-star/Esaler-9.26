<template>
                    <!-- 展示模板-->
            <div class=" modal fade product-view-one" id="exampleModal">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <button type="button" class="close" data-bs-dismiss="modal">
                            <span aria-hidden="true">
                                <i class="ri-close-line"></i>
                            </span>
                        </button>
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="product-view-one-image">
                                    <div id="big" class="owl-carousel owl-theme">
                                        <div class="item">
                                            <img v-lazy="URL_IMG + medium.imgPath" alt="Embedded - MicrocontrollersSTM32F103VCT6"/>
                                             <!-- <img v-lazy="medium.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + medium.imgPath" alt="Embedded - MicrocontrollersSTM32F103VCT6" /> -->
                                        </div>
                                    </div>
                                    <div id="thumbs" class="owl-carousel owl-theme">
                                        <div class="item">
                                            <img v-lazy="URL_IMG + medium.imgPath" alt="Image">
                                            <!-- <img v-lazy="medium.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + medium.imgPath" alt="Image" /> -->
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="product-content">
                                    <h3>
                                        {{medium.productionNum}}
                                    </h3>
                                    <div class="product-review">
                                        <div class="rating">
                                            <i class="ri-star-fill" v-for="(ietm,index) in 5" :key="index"></i>
                                        </div>
                                        <a href="#" class="rating-count">4  Reviews</a>
                                    </div>
                                    <ul class="product-info">
                                        <li>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                At
                                                magnam ad
                                                reprehenderit fuga nam, non odit necessitatibus facilis
                                                beatae
                                                temporibus</p>
                                        </li>
                                        <li>
                                            <span>SKU:</span>
                                           {{medium.productionId}}
                                        </li>
                                        <li>
                                            <span>Availability:</span>
                                            Available
                                        </li>
                                        <li>
                                            <span>Manufacturer:</span>
                                           {{medium.manufacturer}}
                                        </li>
                                        <li>
                                            <span>Categories:</span>
                                             <NuxtLink to="/products">{{medium.category}}</NuxtLink>  
                                        </li>
                                    </ul>
                                    <div class="product-add-to-cart">
                                        <div class="input-counter">
                                            <span class="minus-btn" @click="subtract">
                                                <i class="ri-subtract-line"></i>
                                            </span>
                                            <input type="text" readonly v-model="num" min="1">
                                            <span class="plus-btn" @click="add">
                                                <i class="ri-add-line"></i>
                                            </span>
                                        </div>
                                        <nuxt-link :to="{name:'RFQ',query:{num:this.num,pro:medium.productionNum,maf:medium.manufacturer}}"
                                            class="RFQ default-btn">
                                                RFQ
                                            </nuxt-link>
                                    </div>
                                    <div class="wishlist-btn" >
                                        <nuxt-link to="/wishlist" class="default-btn" @click="add_wishlist(item)">
                                            <i class="ri-heart-line"></i>
                                            Wishlist
                                        </nuxt-link>
                                    </div>
                                    <div class="share-this-product">
                                        <ul>
                                            <li>
                                                <span>Share</span>
                                            </li>
                                            <li v-for="(item,index) in Share" :key="index">
                                                <a href="javascript:;" target="_blank">
                                                    <i :class="item"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>
<script>
export default {
    props:{
        medium:Object,
        required:true,
    },
    data(){
        return{
            URL_IMG:'https://image.lkrelec.com/img/',
            imgAvailable:"/_nuxt/static/images/imgAvailable.jpg",
            arguments_1:'',
            productionNum:'',
            Share:[
                "ri-facebook-fill",
                "ri-instagram-line",
                "ri-linkedin-fill",
               " ri-twitter-fill",
            ],
            num:'1',
            classList:''

        }
    },
    mounted(){
        // this.demo()
    },
    methods:{
        add(){
        ++this.num
        },
        subtract(){
            if(this.num>0){
                --this.num
            }
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
    
}
</script>
<style lang="less" scoped>
#thumbs{
    width: 68px;
}
</style>