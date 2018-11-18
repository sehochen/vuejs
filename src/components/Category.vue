<template>
  <div class="category">
    <layout></layout>

    <el-col :span="6" style="" class="menu-list">
        <div v-for="(item,index) in category">
            <el-row :gutter="0">
                <el-col :span="24">
                    <span v-text="item.name" @click="upList(item.id)" >--</span>
                </el-col>
            </el-row>
        </div>

    </el-col>


      <div class="box-card el-col el-col-18" 
      style="border:none;border-radius:0;float:right;z-index:899;height:100%;padding-left:5px;" 
      v-loading="loading2"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"    
      >

        
          <div v-for="(item,index) in list" :key="index" class="text item">
          <router-link :to="{path:'/detail/' + item.id}" >    
            <el-row :gutter="15" style="margin-bottom:10px;">
              <el-col :span="11">
                <div class="grid-content">
                  <img v-lazy="Config.static+item.logo">
                </div>
              </el-col>
              <el-col :span="12" style="background-color:#E9EEF3;height:70px;box-shadow:0 0 10px 1px rgba(7,17,27,.2);margin-left:-11px;">
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
        
      </div>

  </div>
</template>

<script>
import Layout from '@/components/Layout'
export default {
  name: 'category',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
      category:[
        {name:"前端开发",id:1}
      ],
      loading2:true,
    }
  },
  mounted(){
    this.getList()
    this.getCate()
  },
  methods:{
    getList:function(){
      //获取默认课程
      const getUrl = this.Config.server+'/course/1' 
      this.$http.get( getUrl ).then(response => {
        this.list= response.data;
        this.loading2 = false
      }, response => {
        console.log( response )
      });
    },
    getCate:function(){
      //获取分类
      const getUrl = this.Config.server+'/category' 
      this.$http.get( getUrl ).then(response => {
        this.category= response.data;
      }, response => {
        console.log( response )
      });
    },
    upList:function(id){
      this.loading2 = true
      //获取分类下课程
      const getUrl = this.Config.server+'/course/'+id+'/1' 
      this.$http.get( getUrl ).then(response => {
        this.list= response.data;
        this.loading2 = false
      }, response => {
        console.log( response )
      });
    }
  },
  components: {
    Layout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-content img{
  box-sizing: border-box;
  box-shadow: 0 0 10px 1px rgba(7,17,27,.3);
  height:70px;
}


.menu-list{
    position:fixed;
    top:60px;
    z-index:950;
    height:100%;
    background-color:#fff;
    box-shadow: 0 0 10px 1px rgba(7,17,27,.3);
}
.menu-list .el-row{
    height:50px;
    line-height:50px;
    border-bottom:1px solid #ccc;;
    text-align:tenter;
    
}
.menu-list .el-row span{
    line-height:.3rem;
    font-size:12px;
    font:simhei;
    color:#4D555D;
}
</style>
