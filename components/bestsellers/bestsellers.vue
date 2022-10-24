<template>

      <div class="row justify-content-center">
        <template>
          <div class="col-xl-3 col-sm-6" v-for="(item,index) in showData" :key="index">
          <div class="single-products">
            <div class="product-img">
              <nuxt-link
                  :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
              >
              <!-- <img v-lazy="URL_IMG + item.imgPath" alt="Embedded - MicrocontrollersSTM32F103VCT6"/> -->
              <img v-lazy="item.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.imgPath" alt="Embedded - MicrocontrollersSTM32F103VCT6" />

              </nuxt-link>
              <div class="id">{{item.productionId}}</div>
              <span class="hot new" ref="hot">{{Hot_New}}</span>
            </div>
            <div class="product-content">
              <nuxt-link
                  :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
                  class="title"
              >{{item.productionNum}}
              </nuxt-link>
              <ul class="products-rating">
                <li v-for="(item,index) in 5" :key="index"><i class="ri-star-fill"></i></li>
                  <li>
                <nuxt-link
                  :to="{name:'prodetail',query:{id:item.productionId,pro:item.productionNum,maf:item.manufacturer}}"
              >({{ item.reviewsCount }}
                   Review)
              </nuxt-link>
                  </li>
                <div style="height:45px">{{item.category}}</div>
                <div>{{item.manufacturer}}</div>
              </ul>
              <ul class="products-cart-wish-view">
                <li>
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
        </div>
        </template>
        <div class="col-12">
          <div class="pagination-area text-center">
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :total="30">
          </el-pagination>
          </div>
        </div>
      </div>

</template>
<script>
export default {
    props: {
    data: {
      type: Array,
      required: true,
      pagesize:1,
    },
  },
    data() {
    return {
      URL_IMG:'https://image.lkrelec.com/img/',
      imgAvailable:"/_nuxt/static/images/imgAvailable.jpg",
      showData:{},
      Hot_New:'Hot'
    };
  },
  mounted(){
    // 首次展示
    this.showData=this.data.slice(16,32)
    // Hot&New
    if(window.location.href.indexOf("featured")==-1){
      this.Hot_New="New"
         
    }
  },
  components: {},
    methods:{
    //查看详情 
    TransferRrequest(item){
      this.$parent.transfer(item)
    },
    // 分页器
    handleCurrentChange(val){
      this.pagesize=val
      this.showData=this.data.slice(16*val,16*(val+1))
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
};
</script>
<style lang="less" scoped>
:deep(.el-pagination.is-background .el-pager li:not(.disabled).active){
  color: #ffffff!important;
  border-color: #4b4799!important;
  background-color: #4b4799!important;
}
</style>