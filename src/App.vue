<template>
  <div id="app">
    <div class="hello-title">
      <el-row :gutter="20" class="header_title">
        <el-col :span="6">
          <div class="" style="color:#B50029">
            <span class="circle_title">
              1
            </span>
            客户认证
          </div>
        </el-col>
        <el-col :span="4">
          <div class="division_title">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="">
            <!-- <span :class="show == 'two' ? 'circle_title' : 'height_title'"> -->
            <span :class="show == 'two' ? 'circle_title' : show == 'three' ? 'circle_title' : 'height_title'">
              2
            </span>
            申请信息
          </div>
        </el-col>
        <el-col :span="4">
          <div class="division_title">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="">
            <span :class="show == 'three' ? 'circle_title' : 'height_title'">
              3
            </span>
            申请结果
          </div>
        </el-col>
      </el-row>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    data () {
    return {
      show: '',
      EndSession: ''
    }
  },
  computed: {
    isFtransferShow () {
      return this.$store.state.heightLight
    },
    isEndSessionFun () {
      return this.$store.state.EndSession
    }
  },
  watch: {
    isFtransferShow (newVal, oldVal) {
      this.show = newVal
    },
    isEndSessionFun (newVal, oldVal) {
      this.EndSession = newVal
      if (this.EndSession == true) {
        this.$router.push('/begin')
      }
    },
  },
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
    width: 100%;
    height: 100%;
  }
  .hello-title{
    width: 70%;
    margin: 10px auto;
  }
.header_title{
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle_title{
  width: 50px;
  height: 50px;
  line-height: 50px;
  padding: 8px 8px 8px 10px;
  border: 2px solid #B50029;
  border-radius: 50%;
  color: #ffffff;
  background: #B50029;
  margin-right: 10px;
}
.height_title{
  width: 50px;
  height: 50px;
  line-height: 50px;
  padding: 8px 8px 8px 10px;
  border: 2px solid black;
  border-radius: 50%;
  /* color: #ffffff; */
  /* background: #B50029; */
  margin-right: 10px;
}
.division_title{
  height: 3px;
  width: 100%;
  background: #A6A6A6;
  min-height:1px;
  min-width:100px;
  border: true
}
</style>
