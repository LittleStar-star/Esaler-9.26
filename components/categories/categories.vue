<template>
    <div>
        <section class="categories-area pt-54">
        <div class="container">
            <div class="categories-wrap tab products-details-tab" style="margin-bottom: 20px;">
                <div class="row">
                    <div class="col-lg-12">

                        <div class="card-body" v-for="(item,index) in TEE" :key="index"> <!-- 单位 -->
                            <!-- 一级标题 -->
                            <h4 class="card-title"  >{{item.groupName}}</h4>
                            <div class="table-responsive">
                                <table class="table">
                                    <tbody>
                                        <template>
                                        <tr style="display:flex;flex-wrap:wrap">
                                            <!-- 二级标题 -->
                                            <template >
                                                <td v-for="(item,index) in (TEE[index].children || '')" :key="index" style="width:33%">
                                                    <div style="display:none">{{item.id}}</div>
                                                    <nuxt-link :to="{name:'products',query:{cateId:item.id}}">
                                                        <div >{{item.groupName}}</div>
                                                    </nuxt-link>
                                                    
                                                </td>
                                            </template>
                                        </tr>
                                        </template>
                                    </tbody>
                                </table>
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
  props: {
    data: {
      type: Array,
      required: true
    },
  },
  data() {

    return {
        device:this.data,
        TEE:"1",
    };
  },
  mounted(){
    this.demodevice(this.device)

  },
  methods:{
    demodevice(device){

        this.TEE=JSON.parse(JSON.stringify(device))
        console.log(this.TEE[1].children);
    },
    // async demoAas(data){
    //     console.log(data.id);
    //     localStorage.setItem("id",data.id)
    //     window.location.href = 'products'
    // }
  }
};
</script>
<style>
.table td{
    padding: 0.75rem;
    color: #333;
    cursor: pointer;
}
</style>