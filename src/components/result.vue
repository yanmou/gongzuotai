<template>
  <div class="hello">
    <div class="information" ref="nav">
      <p class="img">
        <img src="../assets/success.png" alt="">
     </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      baseurl: 'http://192.168.32.32:10014',
      radio: 1,
      winHeight: 0
    }
  },
  mounted () {
    this.winHeight = document.body.clientHeight * 0.8
    this.$refs.nav.style.height=this.winHeight+'px'
    localStorage.setItem('PLAF', JSON.stringify(''))
    // 第三页面高亮
    this.$store.commit('heightLightFun', 'three')
  },
  methods: {
    
  }
}
</script>

<style scoped>
.information{
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 800px;
  text-align: left;
  border: 1px solid black;
  width: 40%;
  font-size: 16px;
  margin-left: 50px;
}
.img{
  margin-top: 110px;
}
</style>
