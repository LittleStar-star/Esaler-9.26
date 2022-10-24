<template>
<client-only>
    <div>
                <section class="product-details-area ptb-54">
            <div class="container">
                        <div class="row align-items-center">
                    <!-- 商品详情 -->
                    <div class="product-view-one">
                        <div class="modal-content p-0">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="product-view-one-image">
                                        <div id="big" class="owl-carousel owl-theme owl-loaded owl-drag">
                                        <div class="owl-stage-outer" style="overflow: hidden;">
                                            <div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0.25s ease 0s; width: 100%; display:flex">
                                                <div class="owl-item cloned" style="width: 582px;">
                                                    <div class="item" style="display:flex">
                                            <img v-lazy="URL_IMG + (imgPath?imgPath:'imgAvailable.jpg')" alt style="width:522px;height:522px" />
                                            <!-- <img v-lazy="imgPath=='imgAvailable.jpg'||' '?imgAvailable:URL_IMG + imgPath" alt /> -->
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"></button><button type="button" role="presentation" class="owl-next"></button></div><div class="owl-dots disabled"></div></div>
                                        <div id="thumbs" class="owl-carousel owl-theme owl-loaded owl-drag">
                                            
                                        <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 117px;"><div class="owl-item active current" style="width: 116.4px;"><div class="item">
                                            <img v-lazy="URL_IMG + (imgPath?imgPath:'imgAvailable.jpg')" alt />
                                                <!-- <img v-lazy="imgPath=='imgAvailable.jpg'||' '?imgAvailable:URL_IMG + imgPath" alt /> -->
                                            </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"></button><button type="button" role="presentation" class="owl-next"></button></div><div class="owl-dots disabled"></div></div>
                                    </div>
                                </div>
                                <div class="col-lg-6" style="margin-top: 20px;">
                                    <div class="product-content ml-15">
                                        <h3>{{GoodsDetails.proes?.smsProductionNum}}</h3>
                                        <div class="product-review">
                                            <div class="rating">
                                                <i class="ri-star-fill" v-for="(item,index ) in 5" :key="index"></i>

                                            </div>
                                            <a href="# Reviews" class="rating-count">44  Reviews</a>
                                        </div>
                                        <div class="price" v-if="!priceShow">
                                            <span>Price:</span>
                                                <nuxt-link
                                            :to="{name:'RFQ'}">
                                                RFQ
                                            </nuxt-link>

                                        </div>
                                        <ul class="product-info">
                                            <li>
                                                <p>{{GoodsDetails.proes?.smsIntroduce}}</p>
                                            </li>
                                            <li><span>SKU:</span>{{GoodsDetails.proes?.smsProductionId}}</li>
                                            <li>
                                                <span>Availability:</span>
                                                Availability
                                            </li>
                                            <li>
                                                <span>Manufacturer：</span>
                                        {{GoodsDetails.proes?.smsProducer||GoodsDetails.proes?.smsSupplier}}</li>
                                            <li>
                                                <p style="white-space:nowrap">
                                                <span>Categories:</span>
                                                <nuxt-link :to="{name:'products',query:{cateId:GoodsDetails.proes?.smsCategory} }"
                                                style="font-size:16px"
                                            >
                                                {{GoodsDetails.categoryName}}
                                                </nuxt-link>
                                                </p>
                                            </li>
                                        </ul>
                                        <div class="product-add-to-cart">
                                            <div class="input-counter">
                                                <span class="minus-btn" @click="reduce">
                                                    <i class="ri-subtract-line"></i>
                                                </span>
                                                <input type="text" class="number" :value=num readonly="">
                                                <span class="plus-btn" @click="add">
                                                    <i class="ri-add-line" ></i>
                                                </span>
                                            </div>
                                            <!-- <a href="javascript:void(0)" class="default-btn">
                                                <i class="ri-align-justify"></i>
                                                Add To List
                                            </a> -->
                                            <!-- <a href="/RFQ" style="margin-left: 10px;" class="RFQ">
                                                RFQ
                                            </a> -->

                                            <nuxt-link :to="{name:'RFQ',query:{num:num,pro:GoodsDetails.proes?.smsProductionNum,maf:GoodsDetails.proes?.smsProducer}}"
                                            style="margin-left: 10px;" class="RFQ">
                                                RFQ
                                            </nuxt-link>

                                        </div>
                                        <div class="wishlist-btn">
                                            <nuxt-link to="/wishlist" class="default-btn">
                                                <i class="ri-heart-line"></i>
                                                Wishlist
                                            </nuxt-link>
                                        </div>
                                        <div class="share-this-product">
                                            <ul>
                                                <li>
                                                    <span>Share</span>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank">
                                                        <i class="ri-facebook-fill"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;" target="_blank">
                                                        <i class="ri-instagram-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.cn/incareer/in/%E4%BC%9F%E5%9F%8E-%E8%94%A1-a588a621a/" target="_blank">
                                                        <i class="ri-linkedin-fill"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/LUKELECTRONICS" target="_blank">
                                                        <i class="ri-twitter-fill"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- 阶梯价格 -->
                                        <div id="Pricing" style="width: 500px; margin-top: 5px;" v-if="priceShow">
                                            <!-- <ul class="Pricing_ul">
                                                <li>Quantity</li>
                                                <li style="width:27%">Unit Price</li>
                                                <li>Extension proce</li>
                                            </ul> -->
                                            <table class="Pricing_table">
                                                <tr>
                                                    <th>Number</th>
                                                    <th>Quantity</th>
                                                    <th>Unit Price</th>
                                                </tr>
                                                <!-- <tr style="text-align: center; color:#4b4799" v-for="(item,index) in 6" :key="index" > -->
                                                <tr style="text-align: center; color:#4b4799" >
                                                    <td style="color:#111111">1</td>
                                                    <td>{{price.quantity1Usd}}</td>
                                                    <td>{{price.price1Usd!==0||null?"$"+price.price1Usd:"-"}}</td>
                                                </tr>
                                                <tr style="text-align: center; color:#4b4799" >
                                                    <td style="color:#111111">2</td>
                                                    <td>{{price.quantity2Usd}}</td>
                                                    <td>{{price.price2Usd!==0||null?"$"+price.price2Usd:"-"}}</td>
                                                </tr>
                                                <tr style="text-align: center; color:#4b4799" >
                                                    <td style="color:#111111">3</td>
                                                    <td>{{price.quantity3Usd}}</td>
                                                    <td>{{price.price3Usd!==0||null?"$"+price.price3Usd:"-"}}</td>
                                                </tr>
                                                <tr style="text-align: center; color:#4b4799" >
                                                    <td style="color:#111111">4</td>
                                                    <td>{{price.quantity4Usd}}</td>
                                                    <td>{{price.price4Usd!==0||null?"$"+price.price4Usd:"-"}}</td>
                                                </tr>
                                                <tr style="text-align: center; color:#4b4799" >
                                                    <td style="color:#111111">5</td>
                                                    <td>{{price.quantity5Usd}}</td>
                                                    <td>{{price.price5Usd!==0||null?"$"+price.price5Usd:"-"}}</td>
                                                </tr>
                                                <tr style="text-align: center; color:#4b4799" >
                                                    <td style="color:#111111">6</td>
                                                    <td>{{price.quantity6Usd}}</td>
                                                    <td>{{price.price6Usd!==0&&null?"$"+price.price6Usd:"-"}}</td>
                                                </tr>


                                            </table>
                                            <ul style="margin-left: -30px; margin-top:5px;" class="Usability">
                                                <li>
                                                    <span>
                                                        inStock:
                                                    </span>
                                                    <span>
                                                        {{price?.inStock}}
                                                    </span>
                                                </li>
                                                <li style="display:none">
                                                    <span>
                                                        Minimum order quantity：:
                                                    </span>
                                                    <span>
                                                        20 pieces
                                                    </span>
                                                </li>
                                                <li style="display:none">
                                                    <span>
                                                        Order increment：:
                                                    </span>
                                                    <span>
                                                        8 pcs
                                                    </span>
                                                </li>
                                                <li>
                                                    <p style="white-space:nowrap">*The above price does not include tax and freight, which will be calculated on the order page</p>
                                                </li>
                                            </ul>

                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- 产品描述 -->
                    <div class="col-lg-12 col-md-12" style="margin-top: 20px;">
                        <div id=" Reviews" class="tab products-details-tab">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <ul class="tabs active">
                                        <li class="current">
                                            Description
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="tab_content">
                                        <div class="tabs_item">
                                            <div class="products-details-tab-content">
                                                <h3>Product Description</h3>
                                                <p class="det">{{GoodsDetails.proes?.smsIntroduce}}</p>
                                                <h3>Specification</h3>
                                                <div class="info">


                                                    <ul class="additional-information" v-if="show">
                                                        <li  >
                                                            <template >
                                                                <li v-if="index%2==0"  v-for="(item,index) in GoodsDetails.attribute" :key="index" style="display:flex">
                                                                <span>{{item.proAttributes}}</span>
                                                                <span>{{item.proValues}}</span>
                                                                </li>
                                                            </template>

                                                        </li>
                                                    </ul>
                                                    <ul class="additional-information" v-if="show">
                                                        <li>
                                                            <template >
                                                                <li v-if="index%2!==0"  v-for="(item,index) in GoodsDetails.attribute" :key="index" style="display:flex">
                                                                <span>{{item.proAttributes}}</span>
                                                                <span>{{item.proValues}}</span>
                                                                </li>
                                                            </template>
                                                        </li>
                                                        </ul>
                                                <!-- 相关类似产品 -->
                                                    <div class="shop">
                                                        <div class="shop—1">
                                                            <div>Image</div>
                                                            <div>Part Number</div>
                                                            <div>Manufacturer</div>
                                                            <div>Description</div>
                                                        </div>
                                                        <div v-for="(item,index) in adProduct" :key="index">
                                                            <div @click="TOP">
                                                                <nuxt-link 
                                                                :to="{name:'prodetail',query:{id:item.smsProductionId,pro:item.smsProductionNum,maf:item.smsProducer}}"
                                                                
                                                                >
                                                                <img  v-lazy="URL_IMG + item.smsImg" alt  @click="refresh"/>
                                                                <!-- <img v-lazy="item.smsImg=='imgAvailable.jpg'?imgAvailable:URL_IMG + item.smsImg" alt @click="refresh"/> -->
                                                                </nuxt-link>
                                                            </div>
                                                            
                                                            <div>
                                                                {{item.smsPartNum }}
                                                            </div>
                                                            <div class="manu" style="margin-left:10px">{{item.smsProducer?item.smsProducer:item.smsSupplier }}</div>
                                                            <div>{{item.smsIntroduce }}</div>
                                                            <span class="name">{{item.smsProductionNum }}</span>
                                                            <span class="id">{{item.smsProductionId }}</span>
                                                        </div>

                                                    </div>



                                                    <!-- 交付流程 -->
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h4>Delivering Time</h4>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>
                                                                        Regarding in stock parts, orders can generally be
                                                                        ready to ship within 4
                                                                        hours. LKR ships orders once a day at about 5 pm.
                                                                        except Sunday.
                                                                        Once the goods are shipped, estimated delivery time
                                                                        depends on the
                                                                        shipping methods you chose:
                                                                    </p>
                                                                    <p>
                                                                        <strong>DHL Express, 5-7 business days.</strong>
                                                                    </p>
                                                                    <p>
                                                                        <strong>DHL eCommerce, 5-7 business days.</strong>
                                                                    </p>
                                                                    <p>
                                                                        <strong>Fedex International, 5-7 business
                                                                            days.</strong>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h4>Shipping Method</h4>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>
                                                                        We provide
                                                                        <template v-for="(item,index) in img" >
                                                                        <img v-lazy=item width="30" alt="LKR" :key="index">
                                                                        </template>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h4>Shipping Cost</h4>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>
                                                                        USD$35 is within GW of 0.5kg only, please confirm
                                                                        with our sales team
                                                                        when more than 0.5kg.
                                                                        The basic freight (for package ≤1kg or corresponding
                                                                        volume) depends on
                                                                        the time zone and country.
                                                                        It does not include any taxes, insurance, handling,
                                                                        duty (including but
                                                                        not limited to tariffs) or other similar charges,
                                                                        payment of which will
                                                                        be solely your responsibility. The actual freight
                                                                        varies according to
                                                                        specific situations.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h4>Shopping process</h4>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>
                                                                        Register - Add to list - Submit order - Pay -
                                                                        Delivery
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h4>General Rules</h4>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>
                                                                        We offer a 60-day warranty period after delivery.
                                                                        When a customer requests a return due to
                                                                        "non-original/fake/quality problems", a valid
                                                                        quality report from a third-party authoritative
                                                                        organization recognized by our company is required
                                                                        for the return and exchange. We do not accept return
                                                                        or replacement except for product quality reasons,
                                                                        etc. we will not accept COD shipments.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h4>Payment method</h4>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>
                                                                        Note: We do not accept any delayed payments or net
                                                                        terms currently for
                                                                        the on-line shopping. Our Terms of Payment is 100%
                                                                        Prepaid. Currently,
                                                                        we only accept the payment methods below:
                                                                        PayPal
                                                                        Credit Card
                                                                        Wire Transfer/Proforma
                                                                        If your order value is more than $500, you could
                                                                        choose bank transfer to
                                                                        save the paid charge. Please note that customers are
                                                                        responsible for all
                                                                        bank charges(choose OUR mode), such as the wire
                                                                        transfer charges,
                                                                        intermediary bank charges, etc.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tabs_item">
                                            <div class="products-details-tab-content">
                                                <div class="tongji">
                                                    <div>
                                                        <div class="tabs">
                                                            <div>Popularity by Region</div>
                                                            <div>Trend Analysis</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tabs_item">
                                            <div class="products-details-tab-content">
                                                <div class="product-review-form">
                                                    <h3>Customer  Reviews</h3>
                                                    <div class="review-title"> 
                                                        <div class="rating">
                                                            <i class="ri-star-fill" v-for="(item,index) in 5" :key="index"></i>
                                                        </div>
                                                        <p>Based on 3  Reviews</p>
                                                        <a class="btn default-btn">Write A Review</a>
                                                    </div>
                                                    <div class="review-comments">
                                                        <div class="review-item">
                                                            <div class="rating">
                                                                <i class="ri-star-fill" v-for="(item,index) in 5" :key="index"></i>
                                                            </div>
                                                            <h3>Good</h3>
                                                            <span><strong>Admin</strong> on <strong>July 18,
                                                                    2021</strong></span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                quis nostrud exercitation labore et dolore</p>
                                                            <a class="review-report-link">Report as
                                                                Inappropriate</a>
                                                        </div>
                                                        <div class="review-item">
                                                            <div class="rating">
                                                                <i class="ri-star-fill" v-for="(item,index) in 5" :key="index"></i>
                                                            </div>
                                                            <h3>Good</h3>
                                                            <span><strong>Admin</strong> on <strong>July 20,
                                                                    2021</strong></span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                quis nostrud exercitation labore et dolore</p>
                                                            <a class="review-report-link">Report as
                                                                Inappropriate</a>
                                                        </div>
                                                        <div class="review-item">
                                                            <div class="rating">
                                                                    <i class="ri-star-fill" v-for="(item,index) in 5" :key="index"></i>
                                                            </div>
                                                            <h3>Good</h3>
                                                            <span><strong>Admin</strong> on <strong>July 21,
                                                                    2021</strong></span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                quis nostrud exercitation labore et dolore</p>
                                                            <a class="review-report-link">Report as
                                                                Inappropriate</a>
                                                        </div>
                                                    </div>
                                                    <div class="review-form">
                                                        <h3>Write A Review</h3>
                                                        <form>
                                                            <div class="row">
                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Name</label>
                                                                        <input type="text" id="name" name="name" placeholder="Enter your name" class="form-control">
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Email</label>
                                                                        <input type="email" id="email" name="email" placeholder="Enter your email" class="form-control">
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12 col-md-12">
                                                                    <div class="form-group">
                                                                        <label>Review Title</label>
                                                                        <input type="text" id="review-title" name="review-title" placeholder="Enter your review a title" class="form-control">
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12 col-md-12">
                                                                    <div class="form-group">
                                                                        <label>Body of Review (1500)</label>
                                                                        <textarea name="review-body" id="review-body" cols="30" rows="8" placeholder="Write your comments here" class="form-control"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12 col-md-12">
                                                                    <button type="submit" class="btn default-btn">Submit
                                                                        Review</button>
                                                                </div>
                                                            </div>
                                                        </form>
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
                </div>
                </section>
    </div>
    </client-only>
</template>

<script>
export default {
    data(){
        return{
            proData:'',//接收外部传参
            ip:'',//获取用户ip
            GoodsDetails:[],//商品详情
            URL_IMG:'https://image.lkrelec.com/img/',
            imgAvailable:"/_nuxt/static/images/imgAvailable.jpg",
            imgPath:'',//图片地址
            adProduct:'',//类似产品
            num:1,
            show:true,
            classList:'',
            params:{},
            scrollToTop: true,
            img:[
                require("~/static/images/DHL.jpg"),
                require("~/static/images/Fedex.png"),
                require("~/static/images/UPS.png"),
                require("~/static/images/shunfeng.png"),
                require("~/static/images/TNT.png"),
            ],
            price:[],
            priceShow:true
        }
    },
    mounted(){
    this.productDetails()
    document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
    //   console.log("加载中");
    } else {
    //   console.log("加载完成");
    }

  };
    },
    methods:{
        // 点击相似产品图片回滚顶部
        TOP(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        },
        // 数据请求
       async productDetails(){
            // this.proData=JSON.parse($nuxt.$route.query)
            this.proData=$nuxt.$route.query
             let ip=window.returnCitySN.cip;
             let id=this.proData.id
            //  请求商品详情
             let res=await this.$axios({
                url:"api/GetProductiones/GetProDetail?ID=" + id + "&Ipaddress=" + ip,
                // url:"http://192.168.2.58:8066/api/GetProductiones/GetProDetail?ID=" + id + "&Ipaddress=" + ip,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' },
                method: "post",
             })
             console.log(res.data);
             this.GoodsDetails=res.data
             this.imgPath=res.data.proes.smsImg
             let Mfa=res.data.proes.smsSupplier 

            if(res.data.prices!==null){

                    this.price=res.data.prices
                    var obj = this.price; //定义对象（data为获取到的对象，在这里定义）
                    var arr = Object.keys(obj); //对象转化为数组
                    var Brr = Object.values(obj); //对象转化为数组

                    let demoarr=Object.entries(obj)
                    // console.log("数组测试",demoarr);
                    // 处理价格
                    let priceArr=[]
                    for(let i=0;i<demoarr.length;i++){


                    }
                    // console.log(priceArr);

                    let USD="Usd"






                    
                    this.priceShow=true
             }else{
                this.priceShow=false
             }
            
             if(res.data.attribute.length==0){
                this.show = false
             }
            //  请求相关类似商品

            let res1=this.$axios({
                url:"api/GetProductiones/GetRelatedProduction?Mfa="+ Mfa+"&RowsCount=5",
                headers: { 'Content-type': 'application/x-www-form-urlencoded' },
                 method: "post",
            }) .then((d)=>{ 
            console.log(d);
            this.adProduct=d.data
            console.log(this.adProduct);
            })
        },

        // 添加
        add(){
            ++this.num
            console.log(this.num);
        },
        // 减少
        reduce(){
            if(this.num>0){
                --this.num
            }
            //  console.log(this.num);
        },
        // 重新加载页面
        refresh(){
            // console.log("调动父元素");
        },
    },
    computed:{}
    //  watch: {
    //     // 监听路由变化
    //     '$route'(to, from) {
    //         if(to.fullPath !== from.fullPath) {
    //             console.log("路由改变了");
    //              this.productDetails()
    //              this.scrollTop===0
    //         }
    //     }
    

}
</script>
<style lang="less" scoped>
    .id,
        .name {
            display: none;
        }
        .category {
            height: 45px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .info ul {
            display: inline-block;
            width: 49%;
        }

        .info ul:nth-child(2n) {
            float: right;
        }

        .tongji {
            background: white;
        }

        .tongji>div>div:last-child>div {
            display: inline-block;
            width: 49.5%;
            margin-top: 15px;
        }

        .tabs {
            margin: 10px 0;
            position: relative;
        }

        .tabs div {
            display: inline-block;
            height: 36px;
            line-height: 36px;
            padding: 0 16px;
            position: relative;
            top: 3px;
            cursor: pointer;
        }

        .tabs div:first-child {
            border-top: 2px solid #e77910;
            border-right: 1px solid #d4d4d4;
            border-left: 1px solid #d4d4d4;
            background-color: #fff;
        }

        .tabs div:last-child {
            left: -4px;
        }

        .tabs-list>div:last-child {
            margin: auto;
        }

        .tongji>div>div:last-child>div:last-child {
            display: none;
        }

        .shop {
            margin-top: 70px;
            font-size: 13px;
        }

        .shop img {
            cursor: pointer;
            width: 100px;
        }

        .shop>div {
            border-bottom: 1px #ddd solid;
        }

        .shop>div:first-child {
            font-size: 18px;
            border-top: 1px #ddd solid;
            font-weight: bold;
            color: #111111;
        }

        .shop>div>div {
            display: inline-block;
            text-align: center;
            margin: 10px 0;

        }

        .shop>div>div:first-child {
            width: 15%;
        }

        .shop>div>div:nth-child(2) {
            width: 15%;
        }

        .shop>div>div:nth-child(3) {
            width: 20%;
        }

        .shop>div>div:nth-child(4) {
            width: 46%;
        }

        .info table {
            margin-top: 20px;
        }

        .info table tr {
            border-bottom: 1px solid #ddd;
        }

        .info table h4 {
            padding-top: 20px;
        }

        .info table p {
            padding: 10px 0;
        }

        .info table tr:nth-child(2) p {
            padding: 0;
        }

        .submitRFQ {
            margin-top: 40px;
            color: #111111;
            font-weight: 500;
            border: #e67817 1px solid;
        }

        .submitRFQ .required,
        .submitRFQ .text {
            color: red;
        }

        .submitRFQ .text {
            display: none;
        }

        .submitRFQ>div {
            margin-top: 15px;
            padding-left: 30px;
        }

        .submitRFQ>div:first-child {
            margin: 0;
            padding: 0;
            height: 40px;
            line-height: 40px;
            font-size: 20px;
            text-align: center;
            font-weight: 500;
            color: white;
            background-color: #e67817;
        }

        .submitRFQ input {
            font-weight: 500;
            border: 1px solid #ddd;
            margin-right: 10px;
            height: 30px;
        }

        .submitRFQ button {
            background-color: #e67817;
            font-size: 15px;
            color: white;
            font-weight: 400;
            padding: 10px;
            text-align: center;
            margin: 15px 0 10px 30px;
        }

        .submitRFQ textarea {
            border-color: #ddd;
            vertical-align: top;
        }

        .submitRFQ #checkbox {
            vertical-align: middle;
            margin: 0 5px 0 0;
        }
        .ptb3{
            margin-top: 54px;
        }
        .RelatedProducts{
            max-width:1320px ;
            margin: auto;
        }

            ul li {
            list-style: none;
        }
        .Pricing_ul{
            display: flex;
            justify-content: space-around;
            width: 63%;
            margin-left: -55px;
            font-family:Microsoft YaHei;
            font-weight:700;
            color:#111111;
            font-size:14px;
            margin-bottom: 5px;
        }
        .Usability li>span:nth-child(1){
            color: #111111;
            font-family:Microsoft YaHei;
            font-weight:700;
            font-size:14px;
        }
        .Usability li>span:nth-child(2){
            font-family:Microsoft YaHei;
            font-weight:700;
            color:#4b4799;
            font-size:14px;
            margin-left: 4px;
        }
        .Usability li>p{
            font-family:Microsoft YaHei;
color:#848484;
font-size:14px;

        }
        .Usability>li{
            margin-bottom: 8px;
        }
        #big>.owl-stage-outer>.owl-stage>.owl-item>.item>img
        {
            width: 522px;
            height: 522px;
        }
        .Pricing_table{
            width: 100%;
        }
        .Pricing_table>tbody>tr{
            margin-top: 14px;
            height: 35px;
        }
        .Pricing_table>tbody>tr>td:nth-child(1),
        .Pricing_table>tbody>tr>td:nth-child(4){
            color: #111111;
        }
        .Pricing_table>tbody{
            /* padding-left: 20px; */
        }
        #Pricing{
            padding-top: 14px;
        }
        .Pricing_table>tbody>tr>td{
            width: 20%;
            font-size: 14px;
            font-family:Microsoft YaHei;
            color:#4b4799;
        }
        // :deep(.product-view-one .product-view-one-image){
        //     padding:0!important;
        // }
        



        .Pricing_table{
            width: 500px;

            tr{
                width: 100%;
                display: flex;
                justify-content: space-around;
                height: 35px;
                line-height: 35px;
                td,th{
                    width: 33%;
                    text-align: center;
                }
            }
            tr:nth-child(1){
                   background-color: rgba(75, 71, 153, 1);
                    font-family: Microsoft YaHei;
                    font-weight: 700;
                    color: #ffffff;
                    font-size: 14px;
            }
            tr:nth-child(even){
                   background-color:white;
            }
            tr{
                background-color: #f1f1f1;
            }

        }
        li{
            list-style: none;
        }





</style>