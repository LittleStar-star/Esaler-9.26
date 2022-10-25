<template>
  <div>
    <section class="checkout-area ptb-54">
      <div class="container">
        <div class="row product-details-area">
          <div class="col-lg-8 col-md-12">
            <div id=" Reviews" class="tab products-details-tab">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="tab_content" style="border: 0;">
                    <form>
                      <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="RFQ" name="first">
                          <div class="tabs_item">
                            <div class="billing-details">
                              <div class="row">
                                <div class="col-lg-6 col-md-6">
                                  <div class="form-group">
                                    <label>
                                      Name
                                      <span class="required">*</span>
                                    </label>
                                    <input type="text" class="form-control" ref="name" id="name" />
                                  </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <div class="form-group">
                                    <label>
                                      Email
                                      <span class="required">*</span>
                                    </label>
                                    <input type="email" class="form-control" ref="email" id="email" />
                                    <span class="text"></span>
                                  </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <div class="form-group">
                                    <label>
                                      Phone
                                      <span class="required">*</span>
                                    </label>
                                    <input type="text" class="form-control" ref="phone" id="phone" />
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <div class="form-group">
                                    <label>
                                      Company Name
                                      <span class="required">*</span>
                                    </label>
                                    <input type="text" class="form-control" ref="cName" id="cName" />
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <div class="form-group">
                                    <label>
                                      Country
                                      <span class="required">*</span>
                                    </label>
                                    <div class="select-box">
                                      <input
                                        type="text"
                                        class="form-control"
                                        ref="country"
                                        id="country"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <div class="form-group">
                                    <label>Order Notes (Optional)</label>
                                    <textarea
                                      name="notes"
                                      ref="notes"
                                      id="notes"
                                      cols="30"
                                      rows="8"
                                      class="form-control"
                                    ></textarea>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <a href="#" class="default-btn" @click="rSubmit">submit</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </el-tab-pane>
                        <el-tab-pane label="BOM" name="second">
                          <div class="tabs_item">
                            <div class="billing-details">
                              <div class="row">
                                <div class="col-lg-12 col-md-12">
                                  <div class="form-group">
                                    <label>
                                      Please write down your
                                      <b>email</b>,we will reply you
                                      as
                                      quick as we can.
                                      <span class="required">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="ContentPlaceHolder1_TbEmail"
                                      ref="BOMemail"
                                    />
                                    <span class="text2"></span>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <div class="form-group">
                                    <label>
                                      Your Request
                                      <span class="required">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="ContentPlaceHolder1_TbRequest"
                                      ref="BOMmessage"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <div class="form-group">
                                    <label>
                                      Contact Us
                                      <span class="required">*</span>
                                      <br />Part Number and quantity are required. You can also fill
                                      in the manufacturer and target price (if any). If you
                                      need more materials, you can directly upload BOM file.
                                      In addition, your contact information is also necessary,
                                      we will reply you as soon as possible!
                                    </label>
                                    <!-- 文件上传 -->
                                    <el-upload
                                      class="upload-demo"
                                      action="https://jsonplaceholder.typicode.com/posts/"
                                      :on-change="handleChange"
                                      :http-request="modeUpload"
                                      accept=".xls"
                                      limit:1
                                      multiple:false
                                    >
                                      <div style="display:flex">
                                        <el-button
                                          size="small"
                                          type="primary"
                                          class="but"
                                        >Upload file</el-button>
                                        <div
                                          slot="tip"
                                          class="el-upload__tip fName"
                                        >We only accept excel</div>
                                      </div>
                                    </el-upload>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <div href="#" class="default-btn" @click="bSubmit">submit</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </el-tab-pane>
                        <el-tab-pane label="Another" name="third">
                          <div class="tabs_item">
                            <div class="billing-details">
                              <div class="row">
                                <div class="col-lg-12 col-md-12">
                                  <h3 style="text-align: center;">
                                    Contact us by
                                    another way
                                  </h3>
                                  <table style="width: 100%;text-align:center" cellpadding="10">
                                    <tbody>
                                      <tr>
                                        <td>Send email to us:</td>
                                        <td>info@elecsaler.com</td>
                                      </tr>
                                      <tr>
                                        <td>Call us:</td>
                                        <td>(0755) 8271 7003</td>
                                      </tr>
                                      <tr>
                                        <td>Fax:</td>
                                        <td>(0755) 8271 7003</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </el-tab-pane>
                      </el-tabs>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="order-details ml-15">
              <div class="cart-totals mb-0">
                <h3>Cart Totals</h3>
                <ul>
                  <li>
                    Subtotal
                    <span>$00.00</span>
                  </li>
                  <li>
                    Shipping
                    <span>$00.00</span>
                  </li>
                  <li>
                    Coupon
                    <span>$00.00</span>
                  </li>
                  <li>
                    Total
                    <span>$00.00</span>
                  </li>
                  <li>
                    <b>Payable Total</b>
                    <span>
                      <b>$00.00</b>
                    </span>
                  </li>
                </ul>
                <div class="faq-accordion">
                  <h3>Payment method</h3>
                  <ul class="accordion">
                    <li class="accordion-item active">
                      <a
                        class="accordion-title active"
                        href="javascript:void(0)"
                      >Direct bank transfer</a>
                      <p class="accordion-content show">
                        Make your payment directly into our bank account. Please use your Order
                        ID
                        as the payment reference. Your order won’t be shipped until the funds
                        have
                        our account.
                      </p>
                    </li>
                    <li class="accordion-item">
                      <a class="accordion-title" href="javascript:void(0)">PayPal</a>
                      <p class="accordion-content">
                        Pay via PayPal; you can pay with your credit card if you don’t have a
                        PayPal
                        account.
                      </p>
                    </li>
                    <li class="accordion-item">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="ship-differents-address"
                        />
                        <label class="form-check-label" for="ship-differents-address">
                          I’ve read
                          and
                          accept the
                          <a href="#">
                            terms &amp;
                            conditions
                          </a>*
                        </label>
                      </div>
                    </li>
                    <li class="place-order">
                      <a href="#" class="default-btn two">Place order</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: "default",
  data() {
    return {
      activeName: "first",
        // 文件上传
      mode: {},
    };
  },
  mounted() {
    let item = JSON.parse(localStorage.getItem("item"));
    let ERP_item = JSON.parse(localStorage.getItem("ERP_item"));
    console.log(item);
    console.log(ERP_item);
  },

  methods: {
    // 文件提交
    modeUpload: function(item) {
        console.log(item);
      this.mode = item.file
},

    // 提交RFQ
    rSubmit() {
      if (
        this.$refs.name.value !== "" &&
        this.$refs.email.value !== "" &&
        this.$refs.phone.value !== "" &&
        this.$refs.cName.value !== "" &&
        this.$refs.country.value !== "" &&
        this.$refs.notes.value !== "" &&
        this.$refs.email.value.indexOf("@") !== -1
      ) {
        let item = JSON.parse(localStorage.getItem("item"));
        let ERP_item = JSON.parse(localStorage.getItem("ERP_item"));
        // 邮箱参数
        var list = {
          CustomerName: this.$refs.name.value,
          CustomerEmail: this.$refs.email.value,
          PhoneNumber: this.$refs.phone.value,
          CompanyName: this.$refs.cName.value,
          Country: this.$refs.country.value,
          Message: this.$refs.notes.value,
          CompanyAddress: "",
          FromWebsite: 2,
          orderNum: "orderNum", //订单提交返回数据
          items: item
        };
        console.log(list);

        // 订单参数
        var ERP_data = {
          country: this.$refs.country.value, //国家
          name: this.$refs.cName.value, //客户名字
          mailbox: this.$refs.email.value, //邮件地址
          phone: this.$refs.phone.value, //电话号码
          companyName: this.$refs.name.value, //公司名称
          remark: this.$refs.notes.value, //留言信息
          CompanyAddress: "", //公司地址
          source: 2, //来自网站      本地地址：1      线上地址：2
          suffix:
            localStorage.getItem("from") != null
              ? localStorage.getItem("from") != "google"
                ? "W"
                : "Y"
              : "W",
          isES: 2,
          isNoLog: 2,
          demandInquiries: ERP_item
        };
        console.log(ERP_data);

        let res = this.$axios({
          url: "api/WebSite/demand/add",
          method: "POST",
          data: JSON.stringify(ERP_data),
          headers: { "Content-type": "application/json" }
        }).then(res=>{
          console.log(res)
          this.list.orderNum = res.data
          this.$axios({
            url: "api/RFQ/RfqResult",
            method: "POST",
            data: JSON.stringify(list),
            headers: { "Content-type": "application/json" }
          })
        }).then(
          this.$router.push({
            path:`/success`
          })
        )
      }
    },
    // 提交BOM
    bSubmit(){
      console.log(this.mode);
        if(this.$refs.BOMmessage.value!==''&& this.$refs.BOMemail.value!==''|| this.$refs.BOMemail.value.indexOf("@") !== -1){
        let file = new FormData()
         file.append('file', this.mode)
        let res=this.$axios({
            url:"api/RFQ/RfqByBom/UploadFile?Message=" + this.$refs.BOMemail.value + "&Email=" + this.$refs.BOMmessage.value + "&FromWebSite=2",
            method:"POST",
            data: file,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(
          //   this.$router.push({
          //   path:`/success`
          // })
            )
        console.log("有数据啊");
        }else{
            console.log("没数据啊");
        }
    },
    // 选项卡切换
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //文件上传限制
    handleChange(file, fileList) {
    if (fileList&&fileList.length>=2) {
        fileList.shift();
    }
},
  }
};
</script>
<style lang="less" scoped>
.but {
  border: none;
  padding: 10px;
  background-color: #4b4799;
  color: white;
}

.fName {
  width: 86%;
  border: 1px solid #ebebeb;
  border-left: none;
  padding: 10px;
}

.text,
.text2 {
  color: red;
  display: none;
}
:deep(.el-tabs__nav-scroll) {
  display: flex;
  justify-content: center;
}
:deep(.el-upload) {
  width: 100%;
  border: 1px solid #ebebeb;
  text-align: left;
}
:deep(.fName[data-v-2c040842]) {
  border: none;
}
:deep(.el-upload__tip) {
  margin-top: 4px;
  margin-bottom: 4px;
}
:deep(.el-tabs__nav-wrap::after) {
  display: none;
}
:deep(.el-tabs__content) {
  box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%) !important;
  background-color: #ffffff !important;
}
:deep(.product-details-area .products-details-tab .tab_content) {
  padding:0 ;
}
:deep(.el-tabs__nav-scroll) {
  padding-bottom:30px ;
}
</style>