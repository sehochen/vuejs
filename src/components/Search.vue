<template>
  <div class="search">

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

        <!-- 搜索关键字 -->
        <bodybox @keywords="upKeyword"></bodybox>

      </el-main>


  </div>
</template>

<script>
import Bodybox from '@/components/search/Bodybox'

export default {
  name: 'search',
  data () {
    return {
      keyword: '',
      loading2:true
    }
  },
  methods:{
    searchRes:function(){
      // console.log( this.$route )
      // console.log( this.keyword )
      this.$router.push({path: '/search/'+this.keyword});
      // this.$router.go({name:'search', params:{keyword:this.keyword}})

      //获取
      // let data=JSON.parse( localStorage.getItem('history') );
      // console.log(data);
      // //设置
      // // let res = [this.keyword]
      // data.push( this.keyword )
      // let res = JSON.stringify( data )
      // localStorage.setItem('history',res )

    },
    upKeyword:function(res){
      this.keyword = res
    }
  },
  components: {
    Bodybox
  }
    
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-tag{
  margin:5px 0;
}
</style>
