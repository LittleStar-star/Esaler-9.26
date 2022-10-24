<template>
  <div>


    <ptb1 :data="data" :btr="btr"></ptb1>
    <Template_Show1 :medium="params"></Template_Show1>

  </div>
</template>


<script>

import ptb1 from '@/components/products/ptb1.vue'
import Template_Show1 from '@/components/Template_Show1.vue'

export default {
  name: 'products',
  data() {
    return {
      params: {}
    }
  },
  mounted() {
    // 去除BootStrap遮罩层
    if (document.getElementsByClassName("modal-backdrop")[0]) {
      document.getElementsByClassName("modal-backdrop")[0].remove()
    }
    // 解除滚动
    if (document.getElementsByClassName("modal-open")[0]) {
      document.getElementsByClassName("modal-open")[0].style.overflow = "inherit"
    }
  },

  components: {
    Template_Show1,
    ptb1
  },
  methods: {
    transfer(item) {
      console.log(2);
      this.params = item
      console.log(this.params);
    }
  },
  async asyncData({ $axios }) {
    // 请求分类列表
    let str = await $axios.post("api/GetProductiones/GetAllCategories");
    let res = str.data;
    let newArr = [];
    const obj = {};
    for (let i = 0; i < res.length; i++) {
      const ele = res[i];
      obj[ele.id] = ele;
    }
    for (let i = 0; i < res.length; i++) {
      const item = res[i];
      if (item.belongId === 0) { newArr.push(item); continue; }
      let as = item;
      if (!obj[item.belongId].children) { obj[item.belongId].children = [as]; continue; }
      obj[item.belongId].children.push(as);
    }
    var param = newArr;


    // 请求展示列表
    let dtr = await $axios.post("api/GetProductiones/RandomShowPro?PageSize=10");
    let btr = dtr.data

    return { data: param, btr: btr }
  },

}
</script>
<style lang="less" scoped>
:deep(.el-tree-node) {
  white-space: nowrap;
  /* margin-bottom: 8px; */
  margin-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  outline: 0;
  border-bottom: 1px solid #ebebeb;
  color: #111111;
  font-size: 14px;
}
</style>
