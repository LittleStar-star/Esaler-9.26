<template>
    <div>
        <section class="faq-area ptb-54">
        <div class="container">
            <div style="background-color: white;">
                <div class="liu">
                    <div class="title2" style="padding-top: 20px;">Purchase Guide</div>
                    <ul>
                        <li>
                            <div>
                                <div class="title">01 Sign in or as a visitor</div>
                                <div class="cont">You can place an order after registration or purchase
                                    products directly
                                    as a visitor.</div>
                                <div class="type">
                                    <div><img src="~/static/images/21.png" alt="ESALER"></div>
                                    <div>
                                        <div>Email: XXXX</div>
                                        <div>Password: XXXX</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li></li>
                        <li>
                            <div>
                                <div class=" title">02 Add to cart</div>
                                <div class="cont">Find the product you need through the search. Then add the
                                    products to your shopping cart directly.
                                </div>
                                <div class="type">
                                    <div><img src="~/static/images/22.png" alt="ESALER"></div>
                                    <div>
                                        <div>Part Number: XXXX</div>
                                        <div>Category: XXXX</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li></li>
                        <li>
                            <div>
                                <div class=" title">03 Place Your Order</div>
                                <div class="cont">Please fill the shipping address and express information
                                    when placing your order.
                                    as a visitor.</div>
                                <div class="type">
                                    <div><img src="~/static/images/23.png" alt="ESALER"></div>
                                    <div>
                                        <div>Contact: XXXX</div>
                                        <div>Address: XXXX</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div class=" title">04 Checkout</div>
                                <div class="cont">You can pay the orders on the website directly or pay by
                                    wire transfer offline. We support: Paypal VISA.
                                </div>
                                <div class="type">
                                    <div><img src="~/static/images/24.png" alt="ESALER"></div>
                                    <div>
                                        <div>Part Number: XXXX</div>
                                        <div>Category: XXXX</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                        </li>
                        <li>
                            <div>
                                <div class="title">05 Tracking Your Order</div>
                                <div class="cont">You can check the order information on the website or
                                    contact our sales to track it.
                                    as a visitor.</div>
                                <div class="type">
                                    <div><img src="~/static/images/25.png" alt="ESALER"></div>
                                    <div>
                                        <div>Contact: XXXX</div>
                                        <div>Address: XXXX</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li></li>
                        <li>
                            <div>
                                <div class=" title">06 Finish</div>
                                <div class="title" style="text-align: center;margin-top: 60px;">Good
                                    Cooperation!!!
                                </div>
                                <div class="type">
                                    <div><img src="~/static/images/26.png" alt="ESALER"></div>
                                    <div></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class=" title2">Shipping &amp; Delivering</div>
                    <div class="col-lg-12">
                        <div class="sp-tab_area" style="padding-top: 20px;">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 info">
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
                                                            Regarding in stock parts, orders can
                                                            generally
                                                            be
                                                            ready to ship within 4
                                                            hours. ESALER ships orders once a day at
                                                            about 5
                                                            pm.
                                                            except Sunday.
                                                            Once the goods are shipped, estimated
                                                            delivery
                                                            time
                                                            depends on the
                                                            shipping methods you chose:
                                                        </p>
                                                        <p>
                                                            <strong>DHL Express, 5-7 business
                                                                days.</strong>
                                                        </p>
                                                        <p>
                                                            <strong>DHL eCommerce, 5-7 business
                                                                days.</strong>
                                                        </p>
                                                        <p>
                                                            <strong>Fedex International, 5-7
                                                                business
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
                                                            <img  v-for="(item,index) in imgList" :key="index" v-lazy=" item.url" width="30" alt="ESALER" >
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
                                                            USD$35 is within GW of 0.5kg only, please confirm with our
                                                            sales team when more than 0.5kg. The basic freight (for
                                                            package ≤1kg or corresponding volume) depends on the time
                                                            zone and country. It does not include any taxes, insurance,
                                                            handling, duty (including but not limited to tariffs) or
                                                            other similar charges, payment of which will be solely your
                                                            responsibility. The actual freight varies according to
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
                                                            Register - Add to cart - Submit order - Pay -
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
                                                            We offer a 60-day warranty period after delivery. When a
                                                            customer requests a return due to "
                                                            non-original/fake/quality problems",
                                                            a valid quality report from a
                                                            third-party authoritative
                                                            organization recognized by our
                                                            company is required for the return
                                                            and exchange. We do not accept
                                                            return or replacement except for
                                                            product quality reasons, etc. we
                                                            will not accept COD shipments. </p>
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
                                                            Note: We do not accept any delayed
                                                            payments or net terms
                                                            currently for the on-line shopping. Our
                                                            Terms of Payment is
                                                            100% Prepaid. Currently, we only accept
                                                            the payment methods
                                                            below: PayPal Credit Card Wire
                                                            Transfer/Proforma If your
                                                            order value is more than $500, you could
                                                            choose bank
                                                            transfer to save the paid charge. Please
                                                            note that customers
                                                            are responsible for all bank
                                                            charges(choose OUR mode), such
                                                            as the wire transfer charges,
                                                            intermediary bank charges,
                                                            etc.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="feedback">
                    <div class="title2">Feedback</div>
                    <div class="col-lg-12" style="padding-top: 20px;">
                        <div>
                            Thank you for your interest in ESALER products and services. We care
                            about what
                            you
                            think. Please fill out the following form so that we can continue to
                            provide you
                            with the outstanding service you deserve.
                        </div>
                        <div class="top">What is the subject of the suggestion:</div>
                        <!-- 单选 -->
                        <form class="form">
                            <template>
                            <el-radio-group v-model="radio" @change="getsuggestion">
                                <template v-for="(item) in suggestion" >
                                     <el-radio :label="item" >{{item}}</el-radio><br>
                                </template>
                            </el-radio-group>
                            </template>

                        <!-- 邮箱 -->
                            <div class="top">Email Address:</div>
                            <div class="ema">
                                <el-input v-model="input" placeholder="Email Address"></el-input>
                            </div>
                        <!-- 文本 -->
                            <span class="text"></span>
                            <div class="top">Comments:</div>
                            <div class="textarea">
                                <el-input
                                id="comm"
                                    type="textarea"
                                    cols="30"
                                    :rows="10"
                                    placeholder="Comments"
                                    v-model="textarea">
                                </el-input>
                            </div>
                            <div class="sub">
                                <button class="submit" type="button" @click="submit">SUBMIT</button>
                            </div>
                        </form>
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
    data(){
        return{
            radio: '',
            value:'',
            suggestion:[
                "Product Information",
                "Catalog",
                "Customer Service",
                "Feature or Tool(BOM)",
                "Search",
                "Order",
                "Product Returns, Shipping or Credit",
            ],
            imgList:[
                {url:require("~/static/images/DHL.jpg")},
                {url:require("~/static/images/Fedex.png")},
                {url:require("~/static/images/UPS.png")},
                {url:require("~/static/images/shunfeng.png")},
                {url:require("~/static/images/TNT.png")},
            ],
           
            RadioValue:'',//单选值
            input:'',//邮箱
            textarea: ''//文本框

        }

    },
    methods:{
        // 获取单选框内容
        getsuggestion(){
            this.RadioValue=this.radio 
        },
        submit(){
            let item=[]
            let data={
                message :this.textarea,
                email: this.input,
                subject :this.RadioValue
            }
            item.push(data)
            console.log(item);
        }

    }
}
</script>
<style lang="less" scoped>
 .ptb-54 {
            padding: 0;
        }

        .liu ul {
            text-align: center;
        }

        .liu ul li {
            display: inline-block;
            height: 250px;
            margin: 20px;
            vertical-align: middle;
            line-height: 250px;
        }

        .liu ul li:nth-child(2),
        .liu ul li:nth-child(4),
        .liu ul li:nth-child(7),
        .liu ul li:nth-child(9) {
            margin: 0;
        }

        .liu ul li div {
            line-height: normal;
            text-align: left;
        }

        .liu ul li>div {
            padding: 20px;
        }

        .liu ul li:nth-child(1),
        .liu ul li:nth-child(3),
        .liu ul li:nth-child(5),
        .liu ul li:nth-child(6),
        .liu ul li:nth-child(8),
        .liu ul li:nth-child(10) {
            width: 360px;
            background: url("~/static/images/20.jpg") no-repeat;
            box-shadow: 1px 1px 12px #f5f5f5;
        }

        .liu ul li:last-child {
            position: relative;
        }

        .title {
            margin-bottom: 20px;
            font-weight: 700;
            font-size: 18px;
            color: #111;
        }

        .cont {
            margin-bottom: 20px;
            line-height: 26px !important;
            font-size: 14px;
        }

        .type>div {
            display: inline-block;
        }

        .type>div:last-child {
            vertical-align: top;
            font-size: 16px;
            margin-left: 20px;
        }

        .type>div:first-child {
            width: 80px;
            height: 80px;
            background-color: white;
        }

        .type>div:last-child div {
            margin: 12px 0;
        }

        .liu ul li:last-child .type>div:first-child {
            position: absolute;
            bottom: 0px;
        }

        .title2 {
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            color: #111;
        }

        .feedback {
            padding: 20px;
            display: none;
        }

        .feedback label {
            cursor: pointer;
        }

        .top {
            margin-top: 10px;
            font-weight: 700;
            font-size: 16px;
            color: #111;
        }

        .form>div {
            margin: 10px 0;
        }

        .ema input,
        .textarea textarea {
            width: 20%;
            border: 1px solid #e9e9e9;
            border-radius: 2px;
        }

        .textarea textarea {
            width: 30%;
        }

        .ema ::-webkit-input-placeholder,
        .textarea ::-webkit-input-placeholder {
            font-size: 14px;
            padding-left: 10px;
        }

        .sub {
            margin-top: 20px;
        }

        .sub button {
            background-color: #4b4799;
            color: white;
            width: 100px;
            text-align: center;
            border-radius: 4px;
            height: 36px;
            line-height: 36px;
        }

        .info table {
            margin-top: 20px;
        }

        .info table tr {
            border-bottom: 1px solid #ddd;
        }

        .info table h4 {
            padding-top: 10px;
            padding: 10px 0;
        }
        .info table p {
            padding: 10px 0;
        }
        .info table tr:nth-child(2) p {
            padding: 0;
        }

        .text {
            color: red;
            display: none;
        }
        :deep(.feedback label[data-v-52f8ff2d]){
            padding: 10px;
        }
        :deep(.el-input){
            width: 20%!important;
        }
        :deep(.el-textarea){
            width: 30%!important;
        }
</style>