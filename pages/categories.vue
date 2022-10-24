<template>
<div>
    <categories :data="data"></categories>
</div>
</template>
<script>
import categories from '@/components/categories/categories.vue'


export default{
      layout: "default",
    components:{

        categories
    },
        async asyncData({$axios}){
        let str =await $axios.post("api/GetProductiones/GetAllCategories")
        let res=str.data
        let newArr=[];
        const obj={};
            for (let i = 0; i < res?.length; i++) {
                const ele = res[i];
                obj[ele.id] = ele
            }
            for (let i = 0; i < res?.length; i++) {
                const item = res[i];
                if (item.belongId === 0) { newArr.push(item); continue }
                if (!obj[item.belongId].children) { obj[item.belongId].children = [item]; continue } 
                obj[item.belongId].children.push(item)
            }
        var param = newArr
        console.log(param);
        return {
            data:param,
        
        }
    },
};
</script>
