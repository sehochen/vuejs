<template>
  <div class="user">
      <layout></layout>

        <!-- 头部  -->
        <el-header style="position:fixed;top:0;z-index:999;"> 
            <el-row :gutter="10">
                <el-col :span="3">
                    <i class="el-icon-arrow-left" onclick="history.go(-1)"></i>
                </el-col>
                <el-col :span="18">
                    用户中心
                </el-col>
            </el-row>
        </el-header>

        <div class="head-info">
            <img src="http://img4.mukewang.com/5333a2590001069f02000200-370-370.jpg"> <br>
            <span class="head-name"> bool </span>
            <el-row>
                <el-col :span="8">
                   <span style="font-size:20px;"> 3 </span>
                   <span style="color: #717481;"> 已学 </span>
                </el-col>
                <el-col :span="8">
                   <span style="font-size:20px;"> 3 </span>
                   <span style="color: #717481;"> 收藏 </span>
                </el-col>
                <el-col :span="8">
                   <span style="font-size:20px;"> 3 </span>
                   <span style="color: #717481;"> 购买 </span>
                </el-col>
            </el-row>
        </div>

      <el-main style="background-color: #fff;box-shadow:0 0 10px 1px rgba(7,17,27,.2);">
        <el-row :gutter="5">
          <el-col :span="6">
            <router-link to="/history">
                <i class="el-icon-mobile-phone"></i> <br>
                <span style="font-size:10px;font:simhei;color:#4D555D;">历史记录</span>
            </router-link>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-star-off"></i> <br>
            <span style="font-size:10px;font:simhei;color:#4D555D;">我的收藏</span>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-tickets"></i> <br>
            <span style="font-size:10px;font:simhei;color:#4D555D;">我的订单</span>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-service"></i> <br>
            <span style="font-size:10px;font:simhei;color:#4D555D;">反馈建议</span>
          </el-col>
        </el-row>
      </el-main>

      <el-main class="help-menu-list">
        <el-row :gutter="5">
          <el-col :span="24">
            <i class="el-icon-mobile-phone"></i>
            <span>历史记录</span>
          </el-col>
          <el-col :span="24">
            <i class="el-icon-star-off"></i>
            <span>我的收藏</span>
          </el-col>
          <el-col :span="24">
            <i class="el-icon-tickets"></i>
            <span>我的订单</span>
          </el-col>
          <el-col :span="24">
            <i class="el-icon-service"></i>
            <span>反馈建议</span>
          </el-col>
        </el-row>
      </el-main>

      <el-button type="danger" size="medium" style="margin:30px 0;"> 退出登录  </el-button>  
  </div>
</template>

<script>
import Layout from '@/components/Layout'
export default {
  name: 'user',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Layout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-info{
    background-color:#33384a;;
    width:100%;
    position: relative;
    top:-8px;
    padding:10px 0;
    text-align:center;
}
.head-info>img{
    height:65px;
    border-radius:50px;
}
.head-info span{
    color:#fff;
    font-size:12px;
}
.head-info>.head-name{
    font-family: simhei;
    font-size:16px;
}
.head-info>.el-row{
    margin-top:10px;
}
.head-info>.el-row>.el-col{
    border-right:1px solid #fff;
}
.head-info>.el-row>.el-col:last-child{
    border:none;
}
.help-menu-list{
    background-color: #fff;
    box-shadow:0 0 10px 1px rgba(7,17,27,.2);
    margin-top:10px;
    padding:0;
}
.help-menu-list>.el-row{
    width:100%;
}
.help-menu-list>.el-row>.el-col{
    text-align:left;
    padding:15px 0; 
    border-bottom: 1px solid #ccc;
}
.help-menu-list>.el-row>.el-col:last-child{
    border:none;
}
.help-menu-list>.el-row>.el-col>span{
    font-size:12px;
    font:simhei;
    padding-left:10px; 
    color:#4D555D;
}
.help-menu-list>.el-row>.el-col>i{
    font-size:14px;
    padding-left:10px; 
}
</style>
