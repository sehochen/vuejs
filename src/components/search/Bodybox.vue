<template>
    <div class="bodybox">
        <h3>热门搜索</h3>
        <router-link :to="{path:'/search/php'}" >  
          <span class="el-tag el-tag--small" >php</span>
        </router-link>
        <router-link :to="{path:'/search/java'}" >  
          <span class="el-tag el-tag--small" >java</span>
        </router-link>
        <router-link :to="{path:'/search/python'}" >  
          <span class="el-tag el-tag--small" >python</span>
        </router-link>
        <router-link :to="{path:'/search/js'}" >  
          <span class="el-tag el-tag--small" >js</span>
        </router-link>

        <!-- <span class="el-tag el-tag--success el-tag--small" @click="tag('java')">java</span>
        <span class="el-tag el-tag--info el-tag--small" @click="tag('python')">python</span>
        <span class="el-tag el-tag--warning el-tag--small" @click="tag('js')">js</span>
        <span class="el-tag el-tag--danger el-tag--small" @click="tag('vue')">vue</span> -->
        <br>
        <router-link to="/category">
          <el-button plain round size="mini" style="margin-top:10px;">查看课程分类</el-button>
        </router-link>
    </div>
</template>

<script>

export default {
  name: 'bodybox',
  methods:{
    tag:function(res){
      this.$emit('keywords',res);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bodybox{
    padding:5px 20px;
}
.bodybox>.el-tag{
  margin-bottom:10px;
}
</style>
