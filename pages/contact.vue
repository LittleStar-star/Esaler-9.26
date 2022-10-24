<template>
<!-- Leave A Message -->
    <div>
        <section class="contact-area pb-54" style="margin-top: 20px;">
        <div class="container">
            <div class="contact-form">
                <h2>Leave A Message</h2>
                <form id="contactForm">
                    <div class="row">
                        <div class="col-lg-6 col-sm-6">
                            <div class="form-group">
                                <label>Name <span class="required">*</span></label>
                                <input type="text" name="name" id="name" class="form-control" required="" data-error="Please enter your name" v-model="Name">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <div class="form-group">
                                <label>Email <span class="required">*</span></label>
                                <input type="email" name="email" id="email" class="form-control" required="" data-error="Please enter your email" v-model="Email">
                                <span class="text"></span>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <div class="form-group">
                                <label>Phone</label>
                                <input type="text" name="phone_number" id="phone_number" required="" data-error="Please enter your number" class="form-control" v-model="Phone">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <div class="form-group">
                                <label>Subject <span class="required">*</span></label>
                                <input type="text" name="msg_subject" id="msg_subject" class="form-control" required="" data-error="Please enter your subject"  v-model="Subject">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label>Message <span class="required">*</span></label>
                                <textarea name="message" class="form-control" id="message" cols="30" rows="6" required="" data-error="Write your message" v-model="Message"></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="form-group checkboxs">
                                <input type="checkbox" class="chb2">
                                <p>
                                    Accept <a href="#">Terms &amp; Conditions</a> And <a href="#">Privacy Policy.</a>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <button type="button" class="default-btn submit" @click="demo">
                                <span>Send Message</span>
                            </button>
                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </form>
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
                Name:'',
                Email:'',
                Phone:'',
                Subject:'',
                Message:'',

        }
    },
    updated(){
        // this.demo()
    },
    methods:{
        demo(){
            let arr={
                Name:this.Name,
                Email:this.Email,
                Phone:this.Phone,
                Subject:this.Subject,
                Message:this.Message,
            }
            console.log(arr);



        }
    }
    
}
</script>
<style lang="less" scoped>

</style>