<template>
    <div>
        <section class="cart-area ptb-54">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <form class="cart-controller">
                        <div class="cart-table table-responsive">
                            <table class="table table-bordered">
                                <thead style="border-bottom:1px solid #ebebeb">
                                    <tr>
                                        <th scope="col">Product Num <span class="required">*</span></th>
                                        <th scope="col">Manufacturer</th>
                                        <th scope="col">Quantity <span class="required">*</span></th>
                                        <th scope="col">Target Price</th>
                                        <th scope="col">Packaging</th>
                                        <th scope="col">Trash</th>
                                    </tr>
            
                                </thead>
                                <tbody class="content">
                                    <!-- 默认第一行内容 -->
                                    <tr id="Tr0" class="Tr" ref="Tr">
                                        <td><input type="text" id="P0"  ref="Product0"></td>
                                        <td><input type="text" id="M0"  ref="Manufacturer0"></td>
                                        <td><input type="number" id="Q0"  ref="Quantity0"></td>
                                        <td><input type="number" id="T0"  ref="Price0"></td>
                                        <td><input type="text" id="Pa0"  ref="Packaging0"></td>
                                        <td class="trash"></td>
                                    </tr>
                                    <!-- 后续手动添加内容 -->

                                    <tr v-for="(item,i) in item" :key="item" :id="'Tr'+[item]" class="Tr" >
                                        <td><input  type="text" :id="'P'+[item]"  ref=Product required></td>
                                        <td><input type="text" :id="'M'+[item]"  ref=Manufacturer required></td>
                                        <td><input type="number" :id="'Q'+[item]"  ref=Quantity required></td>
                                        <td><input type="number" :id="'T'+[item]"  ref=Price required></td>
                                        <td><input type="text" :id="'Pa'+[item]"  ref=Packaging	 required></td>
                                        <td class="trash" @click="del(i)"> 
                                            <span >X</span>
                                        </td>
                                    </tr>    


                                </tbody>
                            </table>
                        </div>
                    </form>
                    <div class="coupon-cart">
                        <div class="row">
                            <div class="col-lg-8 col-md-8">
                                <a href="javascript:void(0)" class="default-btn add" @click="Add">
                                    add
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <!-- <nuxt-link to="checkout" class="default-btn update-cart" @click="RFQ">
                                    RFQ
                                </nuxt-link> -->
                                <a  class="default-btn update-cart" @click="RFQ">
                                    RFQ
                                </a>
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
    data(){
        return{
            proData:'',//
            item:[],//获取内容数组
            id:1
        }
    },
    mounted(){
        this.productDetails()
            // 去除BootStrap遮罩层
        if(document.getElementsByClassName("modal-backdrop")[0]){
            document.getElementsByClassName("modal-backdrop")[0].remove()
        }
        // 解除滚动
        if(document.getElementsByClassName("modal-open")[0]){
            document.getElementsByClassName("modal-open")[0].style.overflow="inherit"
        }
    },
    methods:{

        RFQ(){
            // console.log(this.$refs);
            if(this.$refs.Product0.value!=="" && this.$refs.Quantity0.value!==""){
        // 邮箱
        var listarr=[]
        var listnewarr=[]
        // 订单
        var ERP_item=[]
        var ERP_itemnewarr=[]
        //第1行 
        let Product0=this.$refs.Product0
        let Manufacturer0=this.$refs.Manufacturer0
        let Quantity0=this.$refs.Quantity0
        let Price0=this.$refs.Price0
        let Packaging0=this.$refs.Packaging0
            listnewarr.push(
               {
                ProductionNum:Product0.value,
                Manufacturer:Manufacturer0.value,

                Quantity:Quantity0.value,
                TargetPrice:Price0.value,
                Packaging:Packaging0.value,
                
               }
            )
            ERP_itemnewarr.push(
               {
                model:Product0.value,
                factory:Manufacturer0.value,
                quantity:Quantity0.value,
                targetPrice:Price0.value,
                Package:Packaging0.value,
                quality:'',
                batchNumber:'',
                remark:''                
               }
            )


        // 第2-n行

        let Product=this.$refs.Product
        let Manufacturer=this.$refs.Manufacturer
        let Quantity=this.$refs.Quantity
        let Price=this.$refs.Price
        let Packaging=this.$refs.Packaging
        // 邮箱
        for(let i=0;i<this.item.length;i++){
            if(Product[i].value=='' || Quantity[i].value==''){
                console.log("填完再来(ノ｀Д)ノ");
            }else{
                  listarr={
                    ProductionNum:Product[i].value,
                    Manufacturer:Manufacturer[i].value,
                    Quantity:Quantity[i].value,
                    TargetPrice:Price[i].value,
                    Packaging:Packaging[i].value, 
                }
                ERP_item={
                    model:Product[i].value,
                    factory:Manufacturer[i].value,
                    quantity:Quantity[i].value,
                    targetPrice:Price[i].value,
                    Package:Packaging[i].value,
                    quality:'',
                    batchNumber:'',
                    remark:''
                }
                listnewarr.push(
                    listarr
                )
                ERP_itemnewarr.push(
                    ERP_item
                )
            }
            }

            localStorage.setItem("item",JSON.stringify(listnewarr))//邮箱参数
            localStorage.setItem("ERP_item",JSON.stringify(ERP_itemnewarr))//订单参数
            console.log(localStorage.getItem("ERP_item",JSON.stringify(ERP_itemnewarr)));
            console.log(localStorage.getItem("item",JSON.stringify(listnewarr)));
            this.$router.push({
                    path: `/Checkout`
                })
            }else{
                console.log("填完在来");

            }
        
        },

        // 获取外部传递参数
         productDetails(){
            this.proData=$nuxt.$route.query
            localStorage.setItem("proData",JSON.stringify(this.proData))
            if(this.proData.pro!==undefined){
                console.log("有数据");
                console.log(localStorage.getItem("proData"));
                this.$refs.Product0.value=this.proData.pro
                this.$refs.Manufacturer0.value=this.proData.maf
                this.$refs.Quantity0.value=this.proData.num
            }else{
                

            }
            
        },
        // 添加
        Add(){
            this.item.push(this.id++)

        },
        // 删除
        del(key){
            console.log(key)
             this.item.splice(key,1)
        },
    }
    
}
</script>
<style scoped>

        td,
        th {
            text-align: center;
        }

        .trash {
            border-right: none;
        }

        .add {
            width: 100px;
            height: 55px;
            line-height: 25px;
            font-size: 18px;
        }

        .table input {
            width: 100%;
            border: none;
            border-bottom: 1px solid #bdbdbd;
            text-align: center;
        }

        .required {
            color: red;
        }


</style>