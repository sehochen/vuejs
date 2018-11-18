<template>
  <div class="play">

    <!-- 头部  -->
    <el-header style="position:fixed;top:0;z-index:999;"> 
        <el-row :gutter="10">
            <el-col :span="3">
                <router-link :to="{path:'/detail/'+ info.cid}" >
                    <i class="el-icon-arrow-left"></i>
                </router-link>
            </el-col>
            <el-col :span="18" v-text="info.title"> </el-col>
            <el-col :span="3"><i class="el-icon-share" onclick="console.log('分享');"></i></el-col>
        </el-row>
    </el-header>

    <!-- play -->
    <el-main style="padding:0 15px;">
        <el-row :gutter="28">
            <div id="video" style="width:100%; "></div>
        </el-row>
    </el-main>

    <!-- 章节 -->
    <el-main style="padding:5px 10px;">
        <el-card class="box-card" style="border:none;border-radius:0;">
            <div v-for="(item,index) in chapterList" :key="index" class="text item">
                <el-row :gutter="24">
                    <el-col :span="24" style="text-align:left;font-size:12px;margin-bottom:10px;">
                        <router-link  
                        :to="{path:'/play/' + item.id}" 
                        :class="[ item.id==$route.params.id ?'active': '']"
                        @click.native="flushCom" > 
                            <i class="el-icon-caret-right"></i>
                            <span v-text=" '第'+ (index+1) +'节' "></span>
                            <span v-text="item.title"></span>
                        </router-link>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </el-main>


  </div>
</template>

<script>

import Cookies from 'js-cookie'

export default {
  name: 'play',
  data () {
    return {
        info:{
            title: "--",
            url:''
        },
        chapterList:[
            {id:1,title:'--',url:'111'}
        ],
        cookie: Cookies.getJSON('history')
    }
  },
  mounted(){
      this.getInfoChapter()
    //   this._initPlay()
    //   this.getChapter()
  },
  methods: {
    _initPlay:function(){
        var videoObject = {
            container: '#video', //容器的ID或className
            variable: 'player',//播放函数名称
            poster:'./assets/material/poster.jpg',//封面图片
            autoplay:true,//自动播放
            live:false, //是否是直播视频
            adfrontlink:"", //置广告的链接地址
            adfronttime:0, //前置广告每个广告的播放时长
            next:"", //在html5环境中点击下一集按钮触发的函数名称
            duration:1, //显示总时间
            seek:0,//跳转时间
            // promptSpot:[
            //     {words:'提示点文字01',time:16},
            //     { words:'提示点文字02',time:60}
            // ],
            video: [//视频地址列表形式
                [ this.Config.static+this.info.url, 'video/mp4', '标清', 0]
            ]
        };
        var player = new ckplayer(videoObject); 
    },
    getInfoChapter:function(){
        //chapter/info/5
        const getUrl = this.Config.server+'/chapter/info/'+this.$route.params.id
        this.$http.get( getUrl ).then(response => {
            this.info = response.data
            this._initPlay()
            this.getChapter(this.info.cid)
            this.addHistory()
        }, response => {
            // console.log( response )
        });
    },
    getChapter:function(cid){
        //chapter/get/5
        const getUrl = this.Config.server+'/chapter/get/'+cid
        this.$http.get( getUrl ).then(response => {
            this.chapterList = response.data
            // console.log( response.data)
        }, response => {
            // console.log( response )
        });
    },
    flushCom:function(){
        this.$router.go(0)
    },
    addHistory:function(){
        const getUrl = this.Config.server+'/history/cache'
        this.$http.post(getUrl, {
            "id":this.$route.params.id,
            "time":new Date().getTime(),
            "cid":this.info.cid
        })
        .then(function (response) {
            // console.log(response);
        })
        .catch(function (error) {
            // console.log(error);
        });     
    }


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-exact-active,.item .active{
    color:#ccc;
}
</style>
