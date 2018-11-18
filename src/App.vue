<template>
  <div id="app">

    <!-- <img src="./assets/logo.png"> -->

    <!-- 容器 -->
    <el-container>
      <!-- main  -->
      <el-main style="padding:8px 0; margin:60px 0;background-color:#fff;z-index:0;" > 
        <router-view/>
      </el-main>
    </el-container>
  
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
  },
  components: {
  },
  watch: {
  }
}
</script>

<style>
  .el-main {
    color: #333;
    text-align: center;
  }
  body{
    margin:0;
  }
  body>.el-container {
    margin-bottom: 40px;
  }
  a{
    text-decoration:none;
    font-size: 14px;
    color: #2B333B;
  }
  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
    width:100%;
    box-sizing: border-box;
    box-shadow: 0 0 10px 1px rgba(7,17,27,.1);
  }
</style>
