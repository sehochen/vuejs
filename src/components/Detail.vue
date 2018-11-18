<template>
  <div class="detail">

    <!-- 头部  -->
    <el-header style="position:fixed;top:0;z-index:999;"> 
        <el-row :gutter="10">
            <el-col :span="3">
                <router-link to="/category">
                    <i class="el-icon-arrow-left"></i>
                </router-link>
            </el-col>
            <el-col :span="18">课程详情</el-col>
            
            <el-col :span="3"><i class="el-icon-share" onclick="console.log('分享');"></i></el-col>
        </el-row>
    </el-header>

    <div>
        <div class="detail-logo-title">
            <span v-text="detail.title"> </span>
            <span style="font-size:30px;"><i class="el-icon-caret-right"></i></span>    
        </div>
        <div class="detail-logo">
            <img v-lazy="Config.static+detail.logo">
        </div>
    </div>

    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">

            <!-- 课程介绍 -->
            <el-tab-pane label="课程介绍 " name="first">
                <div style="padding:0 8px 8px 0;"> 
                    <p style="font-size:12px;color:#717481;padding-bottom:10px;text-align:left;border-bottom:1px solid #ccc;padding:0 5px 8px 8px;"
                    v-text="detail.desc" >
                    </p>
                    <el-row>
                        <el-col :span="8">
                            <span style="color: #717481;font-size:12px;" v-text=" '课程难度：'+detail.difficulty"> </span>
                        </el-col>
                        <el-col :span="8">
                            <span style="color: #717481;font-size:12px;" v-text=" '课程章节：'+detail.count"> </span>
                        </el-col>
                        <el-col :span="8">
                            <span style="color: #717481;font-size:12px;"  v-text=" '观看人数：'+detail.user_see">  </span>
                        </el-col>
                    </el-row>
                </div>
                <div style="box-shadow:0 0 5px 1px rgba(7,17,27,.3)"></div>
                <div style="margin-top:10px;">
                    课程介绍
                    <p style="font-size:12px;color:#717481;padding:0 10px;" v-html="detail.desc">课程介绍</p>
                </div>
            </el-tab-pane>
            
            <!-- 课程章节 -->
            <el-tab-pane label="课程章节" name="second">
                <el-card class="box-card" style="border:none;border-radius:0;">
                <div v-for="(item,index) in chapterList" :key="index" class="text item">
                    <el-row :gutter="24">
                        <el-col :span="24" style="text-align:left;font-size:12px;margin-bottom:10px;">
                            <router-link  :to="{path:'/play/' + item.id}" > 
                                <i class="el-icon-caret-right"></i>
                                <span v-text=" '第'+ (index+1) +'节' "></span>
                                <span style="color:#717481;" v-text="item.title"></span>
                            </router-link>
                        </el-col>
                    </el-row>
                </div>
                </el-card>
            </el-tab-pane>

            <el-tab-pane label="课程评价" name="third">课程评价</el-tab-pane>

            <el-tab-pane label="反馈建议" name="fourth">反馈建议</el-tab-pane>
        </el-tabs>
    
    </div>


    <!-- 底部  -->
    <el-footer style="position:fixed;bottom:0;z-index:999;height:50px;">
        <el-row :gutter="100">
            <el-col :span="15" v-text=" '￥'+detail.price"></el-col>
            <el-col :span="9" style="background-color:#f01414;text-align:left;">
                <router-link to="">
                    <span style="color:#fff;font-size:16px;">购买</span>
                </router-link>
            </el-col>
        </el-row>
    </el-footer>

    <!-- <el-footer style="position:fixed;bottom:0;z-index:999;height:50px;">
        <el-row :gutter="100">
            <el-col :span="24" style="background-color:#f01414;text-align:center;">
                <router-link to="">
                    <span style="color:#fff;font-size:16px;">开始学习</span>
                </router-link>
            </el-col>
        </el-row>
    </el-footer> -->

  </div>
</template>

<script>
import Share from 'share'
export default {
  name: 'detail',
  data () {
    return {
        detail:{
            title:"-- --",
            logo:'upload/58f85fb20001139f06000338-240-135.jpg',
            difficulty:'----',
            desc:'',
            count:0,
            user_see:0,
            price:0,
        },
        chapterList:[
            {id:1,title:'--',url:'111'}
        ],
        activeName: 'first'
    }
  },
  mounted(){
    this.getDetail()
    this.getChapter()
  },
  methods: {
    handleClick:function(tab, event) {
        // console.log(tab, event);
    },
    getDetail:function(){
        //获取默认课程
        //course/get/3
        const getUrl = this.Config.server+'/course/get/'+this.$route.params.id
        this.$http.get( getUrl ).then(response => {
            // console.log( response.data.desc )
            this.detail = response.data
        }, response => {
            // console.log( response )
        });
    },
    getChapter:function(){
        //chapter/get/5
        const getUrl = this.Config.server+'/chapter/get/'+this.$route.params.id
        this.$http.get( getUrl ).then(response => {
            this.chapterList = response.data
        }, response => {
            // console.log( response )
        });
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail-logo-title{
    background-size:cover;
    height:150px;
    line-height:150px;
    margin-top:-10px;
    text-align: center;
    background-color: #000;
    overflow: hidden;
}
.detail-logo-title>span{
    clear: both;
    color:#fff;
    height:30px;
    font-size:20px;
    display: block;
}
.detail-logo{
    float: left;
    width:100%;
    position: relative;
    top:-150px;
    opacity:0.3;
}
.detail-logo>img{
    width:100%;
    height:150px;
}
.detail{
    /* background-color:#ccc; */
}
.el-tabs{
    background-color:#fff;
    clear: both;
    position: relative;
    top:-150px;
    text-align: center;
    width:100%;
}

</style>
