<template>
    <section class="user-area ptb-54">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="user-form-content log-in-50 mr-15">
                        <h3>Log In</h3>
                        <form class="user-form">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Email <span class="required">*</span></label>
                                        <input class="form-control" id="email" type="text" name="email" ref="email">
                                        <span class="text" v-if="isShow" >Please enter the correct email address!</span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Password <span class="required">*</span></label>
                                        <input class="form-control" id="password" type="password" name="password" ref="password">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="default-btn login" type="button" @click="login">
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </form>
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
            isShow:false,
            CmsId:''

        }
    },
    mounted(){

    },
    methods:{
        login(){
            console.log(this.$refs.email.value.indexOf("@"));
        if (this.$refs.email.value.indexOf("@") !== -1) {
            var list={
                Email:this.$refs.email.value,
                password:this.$refs.password.value,
                webSite:1
            }
            let formDate = new FormData();
            const values = Object.values(list);
            Object.keys(list).forEach((v, i) => {
                formDate.append(v, values[i]);
            });
            console.log(list);
            let res=this.$axios({
                url:'api/CustomerHandle/CheckLogin',
                method: "post",
                data:formDate
            }).then((d)=>{ 
            if(d.data==-1){
                this.isShow=true
            }else{
                this.isShow=false
                localStorage.setItem("UserInfo",JSON.stringify(d))
                console.log(JSON.parse(localStorage.getItem("UserInfo")));
                  this.$router.push({
                    path: `/`
                })
            }
                
                }
            )
            this.isShow=false
          
        }else{
             this.isShow=true
             
        }
        
    }
    }
}
</script>
<style lang="less" scoped>
        .required {
            color: red;
        }

        .text {
            color: red;
            // display: none;
        }
</style>