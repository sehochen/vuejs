<template>
<div>
  <layout></layout>
  <div class="wrapper" ref="wrapper"> 
    <div class="index content">

      <!--轮播  -->
      <slider></slider>
      <!-- 菜单工具条 -->
      <toolbar></toolbar>
      <!-- 最新 -->
      <new></new>

    </div>
  </div>

</div>
</template>

<script>
import BScroll from 'better-scroll'
import Layout from '@/components/Layout'
import New from '@/components/index/New'
import Slider from '@/components/index/Slider'
import Toolbar from '@/components/index/Toolbar'

export default {
  name: 'Index',
  data(){
    return {
      msg: 'Welcome to Your Vue.js App',
    }
    
  },
  mounted(){
    this._initScroll()
  },
  methods: {
    _initScroll:function(){
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper,{click: true})
        this.scroll.on('touchend',function(pos) {
          // 下拉动作
          if (pos.y > 50) {
            console.log('下拉')
          }
        })
      } else {
        this.scroll.refresh()
      }
    }

  },
  components: {
    Layout,
    New,
    Slider,
    Toolbar
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>