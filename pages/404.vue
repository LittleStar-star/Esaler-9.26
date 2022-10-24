
<template>
<div>
    <NotFound></NotFound>
</div>
</template>

<script>


// import forbidden from '@/components/error/403.vue'
import NotFound from '@/components/error/404.vue'



export default{
    layout: "default",
    components:{

        // forbidden,

        NotFound

    },
};
</script>