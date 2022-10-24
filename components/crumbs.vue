<template>
  <div class="page-title-area">
    <div class="container">
      <div class="page-title-content">
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="active">{{this.title}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  beforeMount(){
        let geturl = window.location.href;
        let getqyinfo = geturl.split("/")[3].split("?")[0];
        this.title=getqyinfo
  },
  methods: {
  },
  watch: {
    // 监听路由变化
    $route(to, from) {
      if (to.fullPath !== from.fullPath) {
        let geturl = window.location.href;
        let getqyinfo = geturl.split("/")[3].split("?")[0];
        return (this.title = getqyinfo);
      }
    }
  }
};
</script>