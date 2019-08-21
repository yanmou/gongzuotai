<template>
  <div class="hello">
    <div class="information">
      <p class="title">个人贷款申请表</p>
      <el-form ref="form" :model="form" label-width="100px" style="">
        <el-form-item label="客户姓名:" class="border-bottom">
          <el-input v-model="form.UserName" disabled></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.IdCard" disabled></el-input>
        </el-form-item>
        <p class="space"></p>
        <el-form-item label="可申请额度">
          <el-input v-model="form.Quota" disabled></el-input>
        </el-form-item>
        <el-form-item label="贷款金额" class="border-bottom">
          <el-input v-model="form.Amount" disabled></el-input>
        </el-form-item>
        <el-form-item label="贷款期限" class="border-bottom">
          <el-input v-model="form.Duration" disabled></el-input>
        </el-form-item>
        <el-form-item label="贷款利率">
          <el-input v-model="form.Rate" disabled></el-input>
        </el-form-item>
        <p class="space"></p>
        <el-form-item label="还款方式">
          <el-input v-model="form.Method" disabled></el-input>
        </el-form-item>
        <el-form-item label="还款计划">
          <el-input v-model="form.Plan" disabled></el-input>
        </el-form-item>
        <p class="space"></p>
        <el-form-item label="还款账户" class="border-bottom">
          <el-input v-model="form.Account" disabled></el-input>
        </el-form-item>
        <el-form-item label="贷款用途">
          <el-input v-model="form.Purpose" disabled></el-input>
        </el-form-item>
        <!-- <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item> -->
      </el-form>
      <el-button :class="show == false ? 'sumit' : ''" @click="sumit" :disabled = show style="margin-bottom:10px">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      baseurl: 'http://192.168.32.32:10014',
      form: {
        name: 'zhangsan'
      },
      show: true
    }
  },
  beforeRouteLeave (to, from, next) {
    this.form = ''
    next()
  },  
  computed: {
    isFtransferShow () {
      return this.$store.state.finished
    }
  },
  watch: {
    isFtransferShow (newVal, oldVal) {
      this.show = newVal
    }
  },
  mounted () {
    console.log('PLAT')
    // console.log(this.$store.state.plat)
    // this.form = this.$store.state.plat
    let data = JSON.parse(localStorage.getItem('PLAF'))
    this.form = data
  },
  methods: {
    sumit() {
      this.$router.push('/result')
    }
  }
}
</script>

<style scoped>
.space{
  height: 10px;
  background: #f2f2f2;
  padding: 0;
  margin: 0;
}
.border-bottom{
  border-bottom: 1px solid #f0f0f0;
}
.sumit{
  background: #B50029;
  color: white;
}
.title{
  background: #F2F2F2;
  color: black;
  font-weight: 400;
  margin: 0;
  padding: 20px 0;
}
.information{
  margin-left: 50px;
  width: 40%;
  font-size: 16px;
  border: 1px solid black;
}
>>>.el-input__inner{
  border: none;
}
>>>.el-input.is-disabled .el-input__inner{
  background-color: transparent; 
  border-color: #E4E7ED; 
  color: black !important;
  cursor: not-allowed;
}
</style>
