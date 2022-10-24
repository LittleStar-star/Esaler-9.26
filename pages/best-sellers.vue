<template>
  <div>
      <section class="best-seller-area ptb-54">
    <div class="container">
            <div class="section-title text-center">
              <h2>Best Sellers</h2>
            </div>
            <bestsellers :data="data"></bestsellers>

  </div>
  </section>
        <Template_Show :medium="params"></Template_Show>

  </div>
</template>
<script>
import bestsellers from "@/components/bestsellers/bestsellers";
import Template_Show from '@/components/Template_Show.vue'



export default {
      layout: "default",
          data(){
        return{
            params:{}
        }
    },
  components: {

    bestsellers,
    Template_Show


  },
    async asyncData({ $axios }) {
        let str = await $axios.post("api/GetProductiones/RandomShowPro?PageSize=100");
        let res = str.data;
        console.log(res);
        return {data:res}
  },
  methods:{
        transfer(item){
      console.log(2);
      this.params=item
      console.log(this.params);
    }
  }
};

</script>
