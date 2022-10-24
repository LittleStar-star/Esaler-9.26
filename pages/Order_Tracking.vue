<template>
    <div>
        <div class="order-tracking ptb-54">
        <div class="container">
            <div class="order-tracking">
                <h3>Track Your Order</h3>
                <form>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label>Email Address (Required)</label>
                                <input type="text" class="form-control" ref="Email">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label>Order Number</label>
                                <input type="text" class="form-control" ref="Number">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <button type="submit" class="default-btn" @click="Order">
                                Track
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    
    methods:{
        Order(){
            var list={
                Email:this.$refs.Email.value,
                Number:this.$refs.Number.value,
                
            }
            console.log(list);
        }

    }
    
}
</script>
<style lang="less" scoped>

</style>