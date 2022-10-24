<template>
    <div>
        <prodetail ref="child"></prodetail>
                <!-- 广告轮播图 -->
            <div class="ptb3">
                            <div class="container">
                        <div class="row align-items-center">
                <h2 class="RelatedProducts">Related Products</h2>
                <ptb3 :data="data"></ptb3>
                
                    
                </div>
                </div>
            </div>
            <Template_Show :medium="params"></Template_Show>
    </div>
</template>
<script>

import prodetail from '@/components/prodetail/prodetail.vue'
import ptb3 from '@/components/index/ptb3.vue'
import Template_Show from '@/components/Template_Show.vue'
export default {
    name:"pro",
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

        }
    },
    components:{
        prodetail,
        ptb3,
        Template_Show
    },
    mounted(){
    },
    methods:{
        //小眼睛弹窗 
    transfer(item){
      console.log(2);
      this.params=item
    //   console.log(this.params);
    },
            TOP(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        },
    },
     watch: {
        // 监听路由变化
        '$route'(to, from) {
            if(to.fullPath !== from.fullPath) {
                 this.$refs.child.productDetails()
                 this.scrollTop===0
            }
        }
    },
    // 底部轮播广告
        async asyncData({ $axios }) {
                let str = await $axios.post("api/GetProductiones/RandomShowPro?PageSize=100");
                let res = JSON.parse(JSON.stringify(str.data));
                return {data:res}
        },

}
</script>