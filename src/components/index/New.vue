<template>
    <div class="new" 
    v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"  >

      <el-card class="box-card" style="border:none;border-radius:0;margin-top:10px;">
        <div slot="header" class="clearfix">
          <span style="float:left;line-height:10px;font-size:14px;font:simhei;color:#4D555D;">最新</span>
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
</template>

<script>

export default {
  name: 'new',
  data () {
    return {
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
    this.getList()
  },
  methods:{
    getList:function(){
      const getUrl = this.Config.server+'/course/1' 
      this.$http.get( getUrl ).then(response => {
        this.list= response.data;
        this.loading2 =false
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
.grid-content img{
  box-sizing: border-box;box-shadow: 0 0 10px 1px rgba(7,17,27,.3);
  height:70px;
  width:125px;
}
</style>
