<template>
  <div class="msglist">
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
            
            <el-col :span="18">
                <div class="grid-content">
                    消息中心
                </div>
            </el-col>
        </el-row>
    </el-header>

    <!-- play -->
    <el-main style="padding:0 15px;">
        <el-row :gutter="28">
            <i class="el-icon-info" ></i>
            <span>没有消息</span>
        </el-row>
    </el-main>

  </div>
</template>

<script>
export default {
  name: 'msglist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
