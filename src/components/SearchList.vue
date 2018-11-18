<template>
  <div class="SearchList">

      <el-header style="position:fixed;top:0;z-index:1;"> 
        <el-row :gutter="1">
          <el-col :span="21">
            <div class="grid-content">
              <!-- <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="keyword" @keyup.enter="searchRes()"></el-input> -->
              <div data-v-d9499c90="" class="el-input el-input--medium el-input--suffix">

                <input autocomplete="off" placeholder="请输入内容" size="medium" type="text" rows="2" 
                validateevent="true" suffixicon="el-icon-search" class="el-input__inner" 
                v-model="keyword" @keyup.enter="searchRes()">

                <span class="el-input__suffix">
                  <span class="el-input__suffix-inner"><i class="el-input__icon el-icon-search"></i></span>
                </span>
              </div>
            </el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content">
              <!-- <router-link to="/">  -->
              <span onclick="history.go(-1)">取消</span> 
              <!-- </router-link> -->
            </div>
          </el-col>
        </el-row>
      </el-header>

      <!-- 主体内容  -->
      <el-main style="padding:0;background-color:#fff;" > 

        <!-- list -->
        <div style="background-color:#fff;"
        v-loading="loading2"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading" 
        element-loading-background="rgba(0, 0, 0, 0.8)" 
        >

          <el-card class="box-card" style="border:none;border-radius:0;">
            <div slot="header" class="clearfix">
              <span style="float:left;line-height:10px;font-size:14px;font:simhei;color:#4D555D;">查找结果</span>
            </div>

              <div v-for="(item,index) in list" :key="index" class="text item" >
              <router-link  :to="{path:'/detail/' + item.id}" >  
                <el-row :gutter="20" style="margin-bottom:10px;">
                  <el-col :span="9">
                    <div class="grid-content">
                      <img v-lazy="Config.static+item.logo">
                    </div>
                  </el-col>
                  <el-col :span="15" style="background-color:#E9EEF3;height:70px;box-shadow: 0 0 10px 1px rgba(7,17,27,.1);">
                    <div class="grid-content" style="text-align:left;">
                      <strong> <span style="line-height:.3rem;font-size:12px;font:simhei;color:#4D555D;" v-text="item.title">--</span> </strong>  <br>
                      <span style="line-height:.3rem;font-size:10px;font:simhei;color:#71777D;" v-text="item.difficulty">--</span> 
                      <span style="line-height:.3rem;font-size:10px;font:simhei;color:#71777D;" v-text="item.count+'课' ">--</span> 
                      <span style="line-height:.3rem;font-size:10px;font:simhei;color:#71777D;" v-text="item.user_see+'人看过' ">--</span>  <br>
                      <span style="line-height:.3rem;font-size:12px;font:simhei;color:#4D555D;" v-text=" '￥'+item.price">--</span>
                    </div>
                  </el-col>
                </el-row>
                <!-- {{'列表内容 ' + item}} -->
              </router-link>
              </div>

            

          </el-card>


        </div>  

      </el-main>


  </div>
</template>

<script>
import Bodybox from '@/components/search/Bodybox'

export default {
  name: 'SearchList',
  data () {
    return {
      keyword: this.$route.params.keyword,
      list:[
        {
          logo:"upload/58f85fb20001139f06000338-240-135.jpg",
          title:"PHP工程师",
          difficulty:"初级",
          count:29,
          user_see:100,
          price:99
        }
      ],
      loading2:true
    }
  },  
  mounted(){
    this.searchRes()
  },
  methods:{
    searchRes:function(){
      //获取分类下课程
      const getUrl = this.Config.server+'/course/search/'+this.keyword+'/1' 
      this.$http.get( getUrl ).then(response => {
        this.list= response.data;
        this.loading2 = false
      }, response => {
        console.log( 'error' )
        // console.log( response )
      });
    }
  }
    
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-tag{
  margin:5px 0;
}
.grid-content img{
  box-sizing: border-box;box-shadow: 0 0 10px 1px rgba(7,17,27,.3);
  height:70px;
  width:125px;
}
</style>
