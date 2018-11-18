<template>
  <div class="history">
        <!-- 头部  -->
        <el-header style="position:fixed;top:0;z-index:999;"> 
            <el-row :gutter="10">
                <el-col :span="3">
                <div class="grid-content">
                    <!-- <router-link to="/"> -->
                        <i class="el-icon-arrow-left" onclick="history.go(-1)"></i>
                    <!-- </router-link> -->
                </div>
                </el-col>  
                <el-col :span="18">学习记录</el-col>
            </el-row>
        </el-header>

      <el-card class="box-card" style="border:none;border-radius:0;">
        <!-- <div slot="header" class="clearfix">
          <span style="float:left;line-height:10px;font-size:14px;font:simhei;color:#4D555D;">最新</span>
        </div> -->

        <div v-for="(item,index) in list" :key="index" class="text item">
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
                <span style="line-height:.3rem;font-size:10px;font:simhei;color:#71777D;" v-text="item.level">--</span> 
                <span style="line-height:.3rem;font-size:10px;font:simhei;color:#71777D;" v-text="item.count+'课' ">--</span> 
                <span style="line-height:.3rem;font-size:10px;font:simhei;color:#71777D;" v-text="item.user_see+'人看过' ">--</span>  <br>
                <span style="line-height:.3rem;font-size:12px;font:simhei;color:#4D555D;" v-text=" '￥'+item.price">--</span>
              </div>
            </el-col>
          </el-row>
 </router-link>
          <!-- {{'列表内容 ' + item}} -->
        </div>

      </el-card>

  </div>
</template>

<script>
export default {
  name: 'history',
  data () {
    return {
      list:[
        {
          id:1,
          logo:"upload/58f85fb20001139f06000338-240-135.jpg",
          title:"PHP工程师",
          level:"初级",
          count:29,
          user_see:100,
          price:99
        }
      ]
    }
  },
  mounted(){
      this.history()
  },
  methods: {
    history:function(){
        const getUrl = this.Config.server+'/history/list'
        this.$http.get( getUrl ).then(response => {
            this.chapterList = response.data
            // console.log( response.data)
            this.list = response.data
        }, response => {
            // console.log( response )
        });
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-content img{
  box-sizing: border-box;box-shadow: 0 0 10px 1px rgba(7,17,27,.3);
  height:70px;
  width:125px;
}
</style>
