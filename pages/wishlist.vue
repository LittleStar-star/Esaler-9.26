<template>
  <div>
    <div class="cart-area ptb-54">
      <div class="container">
        <form class="cart-controller mb-0">
          <div class="cart-table table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col"></th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                  <th scope="col"></th>
                  <th scope="col">Trash</th>
                </tr>
              </thead>
              <tbody class="content">
                <tr v-for="(item, index) in wishlist" :key="index">
                  <td class="product-thumbnail">
                    <a href="prodetail.html">
                      <img
                        v-lazy="
                          item.imgPath
                            ? URL_IMG + item.imgPath
                            : URL_IMG + item.proes?.smsImg
                        "
                        alt="Image"
                      />
                      <!-- <img
                        v-lazy="item.imgPath ? (item.imgPath=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.imgPath) : (item.proes?.smsImg=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.proes?.smsImg)"
                        alt="Image"
                      /> -->
                    </a>
                  </td>
                  <td class="product-name">
                    <a href="prodetail">{{
                      item.productionNum
                        ? item.productionNum
                        : item.proes?.smsProductionNum
                    }}</a>
                  </td>
                  <td class="product-price">
                    <span class="unit-amount">Inquiry</span>
                  </td>
                  <td class="product-subtotal">
                    <span class="subtotal-amount">Inquiry</span>
                  </td>
                  <td>
                    <nuxt-link
                      :to="{
                        name: 'prodetail',
                        query: {
                          id: item.productionId
                            ? item.productionId
                            : item.proes?.smsProductionId,
                          pro: item.productionNum
                            ? item.productionNum
                            : item.proes?.smsProductionNum,
                          maf: item.manufacturer
                            ? item.manufacturer
                            : item.proes?.smsSupplier,
                        },
                      }"
                      class="default-btn"
                      >Production Info</nuxt-link
                    >
                  </td>
                  <td class="trash">
                    <a
                      href="javascript:void(0)"
                      class="remove"
                      @click="del(index)"
                    >
                      <i class="ri-close-fill"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      URL_IMG: "https://image.lkrelec.com/img/",
      imgAvailable: "/_nuxt/static/images/imgAvailable.jpg",
      smsImg: "",
      proes: "",
    };
  },

  mounted() {
    console.log(5+656)
    // 去除BootStrap遮罩层
    if (document.getElementsByClassName("modal-backdrop")[0]) {
      document.getElementsByClassName("modal-backdrop")[0].remove();
    }
    // 解除滚动
    if (document.getElementsByClassName("modal-open")[0]) {
      document.getElementsByClassName("modal-open")[0].style.overflow =
        "inherit";
    }
    this.getUrl();
  },
  methods: {
    del(index) {
      this.$store.commit("wishlist/del", index);
      this.$message({
        message: "success!",
        type: "success",
      });
    },
    getUrl() {
      let geturl = window.location.href;
      let getqyinfo = geturl.split("/")[3].split("?")[0];
      this.title = getqyinfo;
    },
  },
  computed: {
    wishlist() {
      return this.$store.state.wishlist.wishlist;
    },
  },
};
</script>