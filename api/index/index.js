const process = require('process')
const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://192.168.2.58:8066' : 'http://192.168.2.58:8066'
export default (axios) => ({
    // 搜索
    Searching(data) {
      return axios({
        url: "/GetProductiones/Searching",
        method: "post",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data,
      });
    },
    // 热门
    RandomShowPro(data) {
      return axios({
        url: "/GetProductiones/RandomShowPro",
        method: "post",
        params:data,
      })
    },
  
    // 分类
    GetAllCategories() {
      return axios({
        url: "/GetProductiones/GetAllCategories",
        method: "post",
  
      })
    },
    // 根据类别获取产品
    GetProByCategory(data) {
      return axios({
        url: "/GetProductiones/GetProByCategory",
        method: "post",
        headers: { "content-type": "application/json" },
        data:data.data,
        params:data.params
      })
    },
  
    // 获取博客内容
    GetBlogInIndex(data) {
      return axios({
        url: "/IndexPage/GetBlogInIndex",
        method: "post",
        data
      })
    },
    // 首页
    GetProductions(data) {
      return axios({
        url: BASE_URL + "/api/GetProductiones/RandomShowPro?PageSize=100",
        method:"post",
        headers: { "content-type": "application/json" },
        data:{
          PageSize:100
        },
        params:data.params
      })
    }
    // let str = await $axios.post("http://192.168.2.58:8066/api/GetProductiones/RandomShowPro?PageSize=100");
  });
  
  
  