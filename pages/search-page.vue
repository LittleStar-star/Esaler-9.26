<template>
    <div class="tab">
        <div>
            <table class="tab1">
                <tbody>
                    <tr>
                        <td>Select</td>
                        <td>Image</td>
                        <td>Part Number</td>
                        <td>Mfr.</td>
                    </tr>
                <tr v-for="(item,index) in Contents" :key="index">
                    <td><input type="checkbox"></td><td class="id">{{item.proes.smsProductionId }}}</td>
                    <td class="img">
                        <img v-lazy="item.proes.smsImg?URL_IMG + item.proes.smsImg:URL_IMG +'imgAvailable.jpg'"  width="55px">
                        </td>

                    <td class="manu">
                        <nuxt-link
                            :to="{name:'prodetail',query:{id:item.proes.smsProductionId,pro:item.proes.smsProductionNum,maf:item.proes.smsProducer}}"
                        >{{item.proes.smsProductionNum}} 
                        </nuxt-link>
                    </td>
                    <td>
                         {{item.proes.smsProducer}} 
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="aa" style="overflow-x: scroll;">
            <table class="tab2">
                <tbody>
                    <tr>
                        <td>Datasheet</td>
                        <td>ModifyTime</td>
                        <td>Attribute</td>
                        <td>Detial</td>
                        <td>FromCountry</td>
                        <td>Introduce</td>
                        <td>IsNew</td>
                        <td>Model</td>
                        <td>Number</td>
                        <td>OtherType</td>
                        <td>PartNum</td>
                        <td>Producer</td>
                        <td>ProductionNum</td>
                        <td>Quantity</td>
                        <td>Remark</td>
                        <td>StandardTime</td>
                        <td>Type</td>
                    </tr>
                <tr v-for="(item,index) in Contents" :key="index">
                    <td>
                        <a :href="item.proes.smsAttch1" target="_blank"> <img src='~/static/images/LKR_PDF.jpg' alt='{noneimgalt}'> Datasheet</a>
                    </td>
                    <td>{{(item.proes.smsModifyTime == null ? "-" : item.proes.smsModifyTime)}}</td>
                    <td>{{(item.proes.smsAttribute == null ? "-" : item.proes.smsAttribute)}}</td>
                    <td>{{(item.proes.smsDetial == null ? "-" : item.proes.smsDetial)}}</td>
                    <td>{{(item.proes.smsFromCountry == null ? "-" : item.proes.smsFromCountry)}}</td>
                    <td>{{(item.proes.smsIntroduce == null ? "-" : item.proes.smsIntroduce)}}</td>
                    <td>{{(item.proes.smsIsNew == null ? "-" : item.proes.smsIsNew)}}</td>
                    <td>{{(item.proes.smsModel == null ? "-" : item.proes.smsModel)}}</td>
                    <td>{{(item.proes.smsNumber == null ? "-" : item.proes.smsNumber)}}</td>
                    <td>{{(item.proes.smsOtherType == null ? "-" : item.proes.smsOtherType)}}</td>
                    <td>{{(item.proes.smsPartNum == null ? "-" : item.proes.smsPartNum)}}</td>
                    <td>{{(item.proes.smsProducer == null ? "-" : item.proes.smsProducer)}} </td>
                    <td>{{(item.proes.smsProductionNum == null ? "-" : item.proes.smsProductionNum)}} </td>
                    <td>{{(item.proes.smsQuantity == null ? "-" : item.proes.smsQuantity)}}</td>
                    <td>{{(item.proes.smsRemark == null ? "-" : item.proes.smsRemark)}}</td>
                    <td>{{(item.proes.smsStandardTime == null ? "-" : item.proes.smsStandardTime)}}</td>
                    <td>{{(item.proes.smsType == null ? "-" : item.proes.smsType)}}</td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="page">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total=pageCount*10
                  @current-change="handleCurrentChange"
                  >
                </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pageCount:'',//分页
            index:'',//页数
            Tag:'',//关键词
            Contents:'',//内容
            URL_IMG:'https://image.lkrelec.com/img/',
            imgAvailable:"/_nuxt/img/imgAvailable.jpg",
        }
    },
    created(){
        console.log(this.$route.query.search);
        console.log(this.searchdata,"另一种接收方式");
    },
    mounted(){

    this.search()//搜索

    },
    asyncData({query}){
        return{
            searchdata:query.search
        }
    },
    methods:{
        // 搜索
        search(){
            // 获取当前日期
                let nowDate = new Date()
				  let date = {
				    year: nowDate.getFullYear(),
				    month: nowDate.getMonth() + 1,
				    date: nowDate.getDate()
				  }
				 
				   if (parseInt(date.date) < 10) {
				      date.date = '0' + date.date
				    }
				  this.systemTime = date.year + '-' + date.month + '-' + date.date
				  console.log(this.systemTime)
            let pagesData={
                PageSize: 9, // 返回9条数据
                PageIndex: this.index||1, //当前的页数
                Token: "sss",
                Status: 1,
                ErrotMsg: "",
                RequetTime: this.systemTime,//日期
                "RequestModel.SearchKeyword":this.$route.query.search,//关键词
                "RequestModel.SearchType": 1,
            }
            let formDate = new FormData();
            const values = Object.values(pagesData);
            Object.keys(pagesData).forEach((v, i) => {
                formDate.append(v, values[i]);
            });
           let res= this.$axios({
                url:"api/GetProductiones/Searching",
                method: "post",
                data:formDate,
            }).then((d)=>{
                console.log(d.data);
                this.pageCount=d.data[0]?.pageCount//总页数
                this.Contents=d.data
                    this.$message({
                    message: 'success!',
                    type: 'success'
        });
            })
        },
        // 分页
        handleCurrentChange(val){
            this.index=val
            this.search()
        },
    },

    watch: {
    // 监听路由变化
    $route(to, from) {
      if (to.fullPath !== from.fullPath) {
        let search=this.$route.query.search
        console.log(search,"路由变了");
        this.Tag=search
        this.search()
        return (this.Tag=search);
      }
    }
  }
}
</script>
<style lang="less" scoped>
 .tab {
            width: 100%;
            white-space: nowrap;
            margin: 20px 0;
            background-color: white;
            font-size: 14px;
            color: #525252;
        }

        .tab table td {
            border: 1px solid #a3a3a3;
            padding: 10px;
            vertical-align: top;
            height: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .tab table tr:nth-child(2n+1) {
            background-color: #e0d3ff;
        }

        .tab1 tbody tr:first-child,
        .tab2 tbody tr:first-child {
            font-weight: bold;
        }

        .tab2 tbody tr:first-child td,
        .tab1 tbody tr:first-child td {
            position: -webkit-sticky;
            /* Safari */
            position: sticky;
            top: -1;
            padding: 5px 40px 15px 5px;
        }

        .tab1 tr td:first-child {
            text-align: center;
        }

        .tab1 {
            width: 20%;
            float: left;
            box-shadow: 2px 0px 5px #8b8b8b;
            position: relative;
        }

        .tab2 {
            width: 100%;
            float: left;
        }

        .tab2 tr td:first-child a {
            color: #0070bb;
        }

        .tab2 tr td:first-child a:hover {
            text-decoration: underline;
        }

        .tab2 tr td:first-child a img {
            width: 20px;
            vertical-align: middle;
        }

        .page {
            text-align: center;
            margin-top: 15px;
        }

        .page>div>div {
            display: inline-block;
            width: 35px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            margin: 10px 5px;
            cursor: pointer;
            border-radius: 3px;
            border: 1px solid #c4c4c4;
        }

        .page>div {
            display: inline-block;
        }

        .page>div:first-child,
        .page>div:last-child {
            // width: 35px;
            height: 35px;
            line-height: 30px;
            text-align: center;
            margin: 10px 5px;
            cursor: pointer;
            border-radius: 3px;
            // border: 1px solid #c4c4c4;
        }

        .pageColor {
            background-color: #4b4799;
            color: white;
            border: 1px solid #4b4799 !important;
        }

        .aa::-webkit-scrollbar {
            width: 12px;
            height: auto;
        }

        .aa::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            -webkit-border-radius: 10px;
            border-radius: 10px;
            background: rgb(255, 255, 255);
        }

        .aa::-webkit-scrollbar-thumb {
            -webkit-border-radius: 10px;
            border-radius: 10px;
            background: rgba(204, 204, 204, 0.2);
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
        }

        .aa::-webkit-scrollbar-thumb:window-inactive {
            background: rgba(204, 204, 204, 0.4);
        }

        .id {
            display: none;
        }

        .name,
        .img {
            cursor: pointer;
            color: #0070bb;
        }

        .name:hover {
            text-decoration: underline;
        }

        .number {
            width: 50px;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        input[type='number'] {
            -moz-appearance: textfield;
        }
        .manu>a{
            color: #0070bb!important;
        }
        body{
            color: black!important;
        }
        :deep(.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li ){
            min-width:35px;
            background-color:white;
            border:  1px solid #c4c4c4!important;
            min-width: 35px!important;
        }
        :deep(.el-pager li ){
           height:35px;
           line-height: 35px;
        }
        :deep(.el-pagination.is-background .el-pager li:not(.disabled).active ){
            background-color: #4b4799;
        }
        :deep(.el-pagination button, ){
            height:35px;
           line-height: 35px;
        }
        :deep(.el-pagination.is-background .btn-prev){
            height:35px;
           line-height: 35px;
           border:  1px solid #c4c4c4!important;
           min-width: 35px!important;
           background-color:white;
        }
        :deep( .el-pagination.is-background .el-pager li ){
            border:  1px solid #c4c4c4!important;
            background-color:white;
            min-width: 35px!important;
        }


</style>