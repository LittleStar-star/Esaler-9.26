<template>
            <section class="popular-categories-area pt-54 pb-30">
            <div class="container">
                <div class="section-title">
                    <h2>Popular Categories</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-sm-6" v-for="(item,index) in imgList" :key="index">
                        <div class="single-categories bg-f3f1ff">
                            <NuxtLink to="/categories?attr=value#6">
                                <img v-lazy=item.img alt="Image">
                            </NuxtLink>
                            <h3>
                                <NuxtLink to="/categories?attr=value#6">
                                    {{item.title}}
                                </NuxtLink>
                            </h3>
                            <NuxtLink to="/categories?attr=value#6" class="read-more">
                                Shop Now
                            </NuxtLink>
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

            imgList:[
                {img:require('~/static/picture/product-25.png'),
                 title:"Integrated Circuits (ICs)",
                },
                {img:require('~/static/picture/product-26.png'),
                 title: "Discrete Semiconductors",
                },
                {img:require('~/static/picture/product-27.png'),
                 title:"Computer Equipment",
                },
                {img:require('~/static/picture/product-28.png'),
                 title: "Test and Measurement",
                },
                {img:require('~/static/picture/product-29.png'),
                 title:  "Capacitors",
                },
                {img:require('~/static/picture/product-30.png'),
                 title:  "Embedded Computers"
                }
            ]


        
        }
    }
}
</script>