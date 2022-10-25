<template>
<div class="main-1">

    <BannerList></BannerList>
    <ptb1></ptb1>
    <ptb2 :data="data" slot="skeleton"></ptb2>
    <h2 class="BestSellers">Best Sellers</h2>
    <ptb3 :data="data" slot="skeleton"></ptb3>
    <ptb4 :data="data" slot="skeleton"></ptb4>
    <ptb5 :data="data"></ptb5>
    <ptb6 :data="data"></ptb6>
    <ptb7 :data="data"></ptb7>
    <ptb8 :data="data"></ptb8>
    <Template_Show :medium="params"></Template_Show>



</div>
</template>
<script>
import BannerList from '@/components/BannerList.vue'
import ptb1 from '@/components/index/ptb1.vue'
import ptb2 from '@/components/index/ptb2.vue'
import ptb3 from '@/components/index/ptb3.vue'
import ptb4 from '@/components/index/ptb4.vue'
import ptb5 from '@/components/index/ptb5.vue'
import ptb6 from '@/components/index/ptb6.vue'
import ptb8 from '@/components/index/ptb8.vue'
import ptb7 from '@/components/index/ptb7.vue'
import Template_Show from '@/components/Template_Show.vue'



export default{
    name:"index",
    data(){
        return{
            params:{},
            data:[],
            test:''
        }
    },
    components:{
        BannerList,
        ptb1,
        ptb2,
        ptb3,
        ptb4,
        ptb5,
        ptb6,
        ptb7,
        ptb8,
        Template_Show
    },
    mounted(){
        // this.demo()
    },
    async asyncData({ $axios }) {
        // if (!process.server) return
        // let str = await $axios.post("http://192.168.2.58:8066/api/GetProductiones/RandomShowPro?PageSize=100");
        let str = await $axios.post("api/GetProductiones/RandomShowPro?PageSize=100");
        let res = JSON.parse(JSON.stringify(str.data));
        return {data:res}
    },
  methods:{
    transfer(item){
      this.params=item
    },
    // demo(){
    //     const isLoaded=sessionStorage.getItem("isLoaded")
    //     if(!isLoaded) {
    //     return  this.data=isLoaded
    //     }
    // }
  }
};
</script>
<style lang="less" scoped>
.BestSellers{
    max-width: 1300px;
    margin: auto;
}
.main-1{
    margin-top: -65px;
}
</style>
<style>


</style>

