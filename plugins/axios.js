// export default( {$axios} )=>{
//     $axios.defaults.baseURL = "http://192.168.2.58:8066/api";
    
//     $axios.onRequest(config=>{
//         return config ;
//     })
//     $axios.onResponse(response=>{
//         return response.data;

//     })
// }



// plugins/axios.js
export default function(context) {
    // context.$axios.defaults.baseURL = context.env.baseURL
    context.$axios.defaults.baseURL = "http://192.168.2.58:8066"
    context.$axios.onResponse(res => {
      return res
    })
   context.$axios.onError(error => {
      const code = parseInt(error.response && error.response.status);
      if (code === 400) {
        context.redirect("/400");
      }
    });
  }