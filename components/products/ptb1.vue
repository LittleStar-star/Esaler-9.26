<template>
  <div class="Product">
    <!-- 列表 -->
    <div class="Categories">
      <h3>Product Categories</h3>
      <client-only>
        <el-tree 
          :data="data" 
          :props="defaultProps" 
          node-key="groupName"
          :default-expanded-keys="['Audio Products']"
          accordion 
          @node-click="handleNodeClick"
        ></el-tree>
      </client-only>
      <!--展示区 -->
      <div class="trendingss">
        <ul class="trending-product-list">
          <li>
            <h3>Products</h3>
          </li>
          <li class="single-list" v-for="(item, index) in btr.slice(0, 6)" :key="index">
            <img v-lazy="URL_IMG + item.imgPath" alt="Logic - Translators, Level ShiftersSN74LVC1T45DCKR"
              width="80px" />
            <!-- <img v-lazy="item.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.imgPath" alt="Logic - Translators, Level ShiftersSN74LVC1T45DCKR"  width="80px"/> -->
            <div class="id">{{ item.productionId }}</div>
            <div class="product-content">
              <a href="#" class="title">{{ item.productionNum }}</a>
              <ul class="products-rating">
                <li v-for="(item, index) in 5" :key="index">
                  <i class="ri-star-fill"></i>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 商品展示 -->
    <div>
      <div class="right">
        <div class="sale-offer-bg product-page">
          <h5>
            Sale offer -
            <span>30% off</span>
          </h5>
          <h3>All Types Of Premium Quality Semiconducto</h3>

          <nuxt-link to="products" class="default-btn">
            <i class="ri-shopping-cart-line"></i>
            Shop Now
          </nuxt-link>
        </div>
        <div class="showing-result">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="products-filter-options">
                <div class="view-list-row">
                  <div class="view-column">
                    <a href="#" class="view-grid-switch">
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="showing-result-count">
                <p>Showing 16 of 60 products</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="showing-top-bar-ordering">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Default Sorting</option>
                  <option value="1">Drill</option>
                  <option value="2">Core Dills</option>
                  <option value="3">Power Dills</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div id="products-filter" class="products-collections-listing row justify-content-center products-row-view">
          <div class="col-lg-6 col-md-6" v-for="(item, index) in productList" :key="index">
            <div class="single-products">
              <div class="product-img">
                <nuxt-link
                  :to="{ name: 'prodetail', query: { id: item.proes.smsProductionId, pro: item.proes.smsProductionNum, maf: item.proes.smsSupplier } }">
                  <img v-lazy="URL_IMG + item.proes.smsImg" alt />
                  <!-- <img v-lazy="item.proes.smsImg=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.proes.smsImg" alt /> -->
                </nuxt-link>

                <div class="id">{{ item.proes.ProductionId }}</div>
                <span class="hot new">New</span>
              </div>
              <div class="product-content">
                <nuxt-link
                  :to="{ name: 'prodetail', query: { id: item.proes.smsProductionId, pro: item.proes.smsProductionNum, maf: item.proes.smsSupplier } }"
                  class="title">{{ item.proes.smsProductionNum }}</nuxt-link>

                <ul class="products-rating">
                  <li v-for="(item, index) in 5" :key="index">
                    <i class="ri-star-fill"></i>
                  </li>
                  <nuxt-link
                    :to="{ name: 'prodetail', query: { id: item.proes.smsProductionId, pro: item.proes.smsProductionNum, maf: item.proes.smsSupplier } }">
                    (47 Review)</nuxt-link>

                  <div style="height:45px">{{ item.categoryName }}</div>
                  <div>{{ item.proes.smsSupplier }}</div>
                </ul>
                <ul class="products-cart-wish-view">
                  <li>
                    <nuxt-link
                      :to="{ name: 'RFQ', query: { num: 1, pro: item.proes.smsProductionNum, maf: item.proes.smsSupplier } }"
                      class="RFQ default-btn">RFQ</nuxt-link>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="wish-btn" @click="add_wishlist(item)">
                      <i class="ri-heart-line"></i>
                    </a>
                  </li>
                  <li>
                    <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                      @click="TransferRrequest(item)">
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 分页器 -->
          <div class="col-12">
            <div class="pagination-area">
              <div class="block">
                <el-pagination background layout="prev, pager, next" :total="pagesize * 10"
                  @current-change="handleCurrentChange"></el-pagination>
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
  props: {
    data: {
      type: Array,
      required: true
    },
    btr: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      URL_IMG: "https://image.lkrelec.com/img/",
      imgAvailable: "/_nuxt/static/images/imgAvailable.jpg",
      productList: "",
      defaultProps: {
        children: "children",
        label: "groupName"
      },
      pagesize: "",
      cateId: ""
    };
  },
  mounted() {
    console.log($nuxt.$route.query.cateId);
    if ($nuxt.$route.query !== null || "" || undefined) {
      console.log(123);
      let id = $nuxt.$route.query.cateId;
      this.getGOS(id);
    } else {
      console.log(456);
    }
    // 首次进入默认获取Audio Products下面的Accessories产品
    this.handleNodeClick({
      id: 49
    })
  },
  methods: {
    // 查看详情
    TransferRrequest(item) {
      this.$parent.transfer(item);
      console.log(item, "123");
    },
    // 添加至愿望清单
    add_wishlist(data) {
      console.log(data);
      this.$store.commit("wishlist/changName", data);
      this.$message({
        message: 'ok!',
        type: 'success'
      });
    },



    // 点击列表获取二级商品详情
    async handleNodeClick(data) {
      //  let index=index||1,
      if (data.id > 48) {
        localStorage.setItem("id", data.id);
        let dataJson = {
          PageIndex: 1,
          PageSize: 8
        };
        let res = await this.$axios({
          url:
            "api/GetProductiones/GetProByCategory?cateId=" +
            data.id,
          headers: { "Content-type": "application/json" },
          method: "post",
          data: dataJson
        });
        this.productList = res.data;
        this.pagesize = res.data[0].pageCount;
        console.log(this.productList, data)
        return this.productList.pageCount;
      }
    },
    // 分页器
    async handleCurrentChange(val) {
      let id = localStorage.getItem("id");
      if (id > 48) {
        let dataJson = {
          PageIndex: val,
          PageSize: 8
        };
        let res = await this.$axios({
          url:
            "api/GetProductiones/GetProByCategory?cateId=" +
            id,
          headers: { "Content-type": "application/json" },
          method: "post",
          data: dataJson
        });
        console.log(res);
        this.productList = res.data;
        console.log(this.productList);
        this.pagesize = res.data[0].pageCount;
        return this.productList.pageCount;
      }
    },
    // 外部id获取商品
    async getGOS(id) {
      if (id > 48) {
        let dataJson = {
          PageIndex: 1,
          PageSize: 8
        };
        let res = await this.$axios({
          url:
            "api/GetProductiones/GetProByCategory?cateId=" +
            id,
          headers: { "Content-type": "application/json" },
          method: "post",
          data: dataJson
        });
        console.log(res);
        this.productList = res.data;
        console.log(this.productList);
        this.pagesize = res.data[0].pageCount;
        return this.productList.pageCount;
      }
    },

  }
};
</script>
<style scoped>
.el-tree-node__content {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  font-size: 15px;
  position: relative;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
  font-family: "Rubik", sans-serif;
  color: #111111;
}

h3 {
  padding-left: 20px;
  padding-right: 20px;
  display: block;
  /* border: 1px solid #ebebeb; */
  padding-bottom: 10px;
  padding-top: 10px;
}

.Categories {
  flex: 0 0 auto;
  width: 33.33333333%;
  margin-bottom: 30px;
  padding-right: 14px;
}

.Product {
  padding-top: 54px;
  padding-bottom: 54px;
  max-width: 1320px;
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
}

.el-tree {
  height: 530px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: auto;
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  border-top: 1px solid #ebebeb;
}

.right {
  width: 100%;
  padding-left: 14px;
}

.trendingss {
  padding-top: 30px;
}
</style>