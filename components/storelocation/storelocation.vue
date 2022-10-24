<template>
    <section class="global-location-area pt-54 pb-30">
        <div class="container">
            <div class="section-title">
                <h2>Europe Country</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6" v-for="(item,index) in CountryList" :key="index">
                    <div class="single-location">
                        <nuxt-link to="/contact">
                            <i class="ri-map-pin-line"></i>
                            <span class="aaa">{{item}}</span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            CountryList:[
            "Austria",
            "Belgium",
            "Bulgaria",
            "Croatia",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Estonia",
            "Finland",
            "France",
            "Germany",
            "Greece",
            "Hungary",
            "Ireland",
            "Italy",
            "Latvia",
            "Luxembourg",
            "Lithuania",
            "Malta",
            "Netherlands",
            "Poland",
            "Portugal",
            "Romania",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
            "United Kingdom",
            ]

        }
    },
    mounted(){

        },
    methods:{
        demo(){
            let list=document.getElementsByClassName("aaa")
            for(let i=0;i<list.length;i++){
                 console.log(list[i].innerText);
            }
           
        }
    }
}
</script>