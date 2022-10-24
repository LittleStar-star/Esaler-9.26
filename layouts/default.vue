<template>
  <div>
    <Header></Header>
    <crumbs class="demno"></crumbs>
    <nuxt  keep-alive :keep-alive-props="{ include: includeArr }" />
    <Footer></Footer>
  </div>
</template>
<script>
export default {

}
</script>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import crumbs from '@/components/crumbs.vue'
export default {
  components: {
    Footer,
    Header,
    crumbs,
  },
      data() {
        return {
            includeArr: [
            'products',
            "index",
            
        ]
      }
    }
}
</script>
