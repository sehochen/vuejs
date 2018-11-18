<template>
    <div class="toolbar">
      <el-main style="background-color: #fff;margin-top:10px;">
        <el-row :gutter="20">
          <el-col :span="6">
            <i class="el-icon-mobile-phone"></i> <br>
            <span style="font-size:10px;font:simhei;color:#4D555D;">web前端</span>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-menu"></i> <br>
            <span style="font-size:10px;font:simhei;color:#4D555D;">PHP工程师</span>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-edit"></i> <br>
            <span style="font-size:10px;font:simhei;color:#4D555D;">运维工程师</span>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-sold-out"></i> <br>
            <span style="font-size:10px;font:simhei;color:#4D555D;">网络安全</span>
          </el-col>
        </el-row>
      </el-main>
    </div>
</template>

<script>

export default {
  name: 'toolbar',
  data () {
    return {
      msg: '111'
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
