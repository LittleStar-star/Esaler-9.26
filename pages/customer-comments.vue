<template>
    <div>
        <section class="testimonials-area ptb-54">
        <div class="container">
            <div class="section-title">
                <h2>Personnel Introduction</h2>
            </div>
            <div class="info">
                <div class="row justify-content-center" v-if="isShow">
                    <div class="col-lg-4 col-sm-6">
                        <div class="single-customer single-card">
                            <div class="avatar">
                                <img src="~/static/picture/customer-1.png" class="customer" alt="ESALER">
                                <div class=" avatar-name">
                                    <h3>Ola</h3>
                                </div>
                            </div>
                            <p>"Hola, I am Ola.My slogan is Born to win.Nice to meet you."</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="single-customer single-card">
                            <div class="avatar">
                                <img src="~/static/picture/customer-2.png" class="customer" alt="ESALER">
                                <div class=" avatar-name">
                                    <h3>Leo</h3>
                                </div>
                            </div>
                            <p>"Only by grasping today can we not lose tomorrow. Nice to meet you!"</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="single-customer single-card">
                            <div class="avatar">
                                <img src="~/static/picture/customer-3.png" class="customer" alt="ESALER">
                                <div class=" avatar-name">
                                    <h3>Maggie</h3>
                                </div>
                            </div>
                            <p>"Do what you say,say what you do.The best is yet to come."</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="single-customer single-card">
                            <div class="avatar">
                                <img src="~/static/picture/customer-4.png" class="customer" alt="ESALER">
                                <div class=" avatar-name">
                                    <h3>Cecilia</h3>
                                </div>
                            </div>
                            <p>"I would like to provide my best service to you as the best as i can do, find me at any
                                time
                                when you need pls, hope we all good luck and stay happy everyday! "</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="single-customer single-card">
                            <div class="avatar">
                                <img src="~/static/picture/customer-5.png" class="customer" alt="ESALER">
                                <div class=" avatar-name">
                                    <h3>Jamillon</h3>
                                </div>
                            </div>
                            <p>"I am a very optimistic and cheerful person in life, I like music, movies, travel. I am
                                also
                                a very patient and hard-working person at work. I hope to have the opportunity to
                                communicate and cooperate with you."</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="single-customer single-card">
                            <div class="avatar">
                                <img src="~/static/picture/customer-6.png" class="customer" alt="ESALER">
                                <div class=" avatar-name">
                                    <h3>Neo</h3>
                                </div>
                            </div>
                            <p>"This is Neo from HONG KONG ES ELECTRONICS CO., Ltd ,years of experience in the
                                electronics
                                business.I would like to provide you with high-quality services,any chips you need ,I
                                will
                                searching it for you."</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center hid" v-else>
                    <div class="col-lg-4 col-sm-6">
                        <div class="single-customer single-card">
                            <div class="avatar">
                                <img src="~/static/picture/customer-7.png" class="customer" alt="ESALER">
                                <div class=" avatar-name">
                                    <h3>Eva</h3>
                                </div>
                            </div>
                            <p>"I adhere to provide the most satisfactory service for the customer by the specialty
                                standard, the rigorous attitude and the responsible manner to thank customers for our
                                trust. Our success depend on client's satisfaction. "</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="single-customer single-card">
                            <div class="avatar">
                                <img src="~/static/picture/customer-3.png" class="customer" alt="ESALER">
                                <div class=" avatar-name">
                                    <h3>Michele</h3>
                                </div>
                            </div>
                            <p>"I'm Michele, to strive, to seek, to find, and not to yield."</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="single-customer single-card">
                            <div class="avatar">
                                <img src="~/static/picture/customer-5.png" class="customer" alt="ESALER">
                                <div class=" avatar-name">
                                    <h3>Jack</h3>
                                </div>
                            </div>
                            <p>"The best gift in life is a short setback! It's not about falling, it's about getting
                                up."</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="single-customer single-card">
                            <div class="avatar">
                                <img src="~/static/picture/customer-8.png" class="customer" alt="ESALER">
                                <div class=" avatar-name">
                                    <h3>Kimi</h3>
                                </div>
                            </div>
                            <p>"Customer satisfaction is my greatest hope, timely response, timely solution."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
          <div class="pagination-area text-center">
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :total="20">
          </el-pagination>
        </div>
    </div>
    </section>
    </div>
</template>
<script>
export default {
    layout: "default",
    data(){
        return{
            isShow:true
        }
    },
    methods:{
        handleCurrentChange(val){
         if(val==1){
            this.isShow=true
         }else{
            this.isShow=false
         }
        },
    }
    
}
</script>
<style lang="less" scoped>
:deep(.btn-prev){
    display: none;
}
:deep(.btn-next){
    display: none;
}
:deep(.el-pagination.is-background .el-pager li:not(.disabled).active){
  color: #ffffff!important;
  border-color: #4b4799!important;
  background-color: #4b4799!important;
}
:deep(.el-pagination.is-background .el-pager li){
 min-width: 45px!important;
 height: 45px!important;
 font-size: 17px!important;
 line-height: 45px!important;
border: 1px solid #ebebeb!important;
background-color: white!important;
}
</style>