<template>
    <div class="slider"
      v-loading="loading2"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading" 
      element-loading-background="rgba(0, 0, 0, 0.8)"  
    >
      <!--轮播  -->
      <el-carousel trigger="click" height="150px" :interval="5000" style="background-color: #E9EEF3;">
        <el-carousel-item v-for="(item,index) in carousel" :key="index">
          <img v-lazy="item.logo" > 
        </el-carousel-item>
      </el-carousel>

      <!-- <el-carousel trigger="click" height="150px" :interval="5000" style="background-color: #E9EEF3;">
        <el-carousel-item v-for="item in 3" :key="item">
          <img v-lazy="carousel[1].src" > 
        </el-carousel-item>
      </el-carousel> -->
    </div>
</template>

<script>

export default {
  name: 'slider',
  data () {
    return {
      loading2: true,
      carousel: [
        {'logo': 'https://img1.mukewang.com/szimg/5a051d9d0001545909000300.jpg'},
        {'logo': 'https://img4.mukewang.com/szimg/5a051db20001bb1709000300.jpg'}
      ]
    }
  },
  mounted(){
    this.getList()
  },
  methods:{
    getList:function(){
      const getUrl = this.Config.server+'/slider' 
      this.$http.get( getUrl ).then(response => {
        this.carousel= response.data;
        this.loading2 =false
      }, response => {
        // error callback 
        console.log( response )
      });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item img {
    background-size:cover;
    height:150px; 
  }
  .el-carousel>ul{
    height:100px;
  }
  .el-carousel__indicators{
    height:100px;
  }
</style>
