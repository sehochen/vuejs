<template>
    <div class="layout">
        <!-- 头部  -->
        <el-header style="position:fixed;top:0;z-index:999;"> 
            <el-row :gutter="10">
                <el-col :span="3">
                    <div class="grid-content">
                        <router-link to="/history">
                            <i class="el-icon-news"></i>
                        </router-link>
                    </div>
                </el-col>
                
                <el-col :span="18">
                    <div class="grid-content">
                        <router-link to="/search">
                            <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content">
                        <router-link to="/msglist">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </div>
                </el-col>
            </el-row>
        </el-header>

        <!-- 底部  -->
        <el-footer style="position:fixed;bottom:0;z-index:999;">
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content">
                    <router-link to="/">
                        <i class="el-icon-mobile-phone"></i>
                    </router-link>
                </div></el-col>
                <el-col :span="6"><div class="grid-content">
                    <router-link to="/category">
                        <i class="el-icon-menu"></i>
                    </router-link>
                </div></el-col>
                <el-col :span="6"><div class="grid-content">
                    <router-link to="/msglist">
                        <i class="el-icon-bell"></i>
                    </router-link>
                </div></el-col>
                <el-col :span="6"><div class="grid-content">
                    <router-link to="/user">
                        <i class="el-icon-sold-out"></i>
                    </router-link>
                </div></el-col>
            </el-row>
        </el-footer>

    </div>
</template>

<script>

export default {
  name: 'layout',
  data () {
    return {
      keyword: 'php从入门到精通',
    }
  },
  methods:{
    msgbox:function(){
        console.log('消息记录');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
    width:100%;
    box-sizing: border-box;
    box-shadow: 0 0 10px 1px rgba(7,17,27,.1);
  }
  .el-footer i{
      font-size:20px;
      color:#2B333B;
  }
  .el-footer .router-link-exact-active  i{
      color: red;
      font-size:26px;
  }
</style>
