<template>
  <div class="hello">
    <div class="information">
      <p class="information-tit">个人信用报告查询授权书</p>
      <p class="company-name">人马商业银行股份公司：</p>
      <p>本人不可撤销授权贵行在办理以下涉及到本人的业务时，可以向中国人民银行个人信用信息基础数据库、其他依法设立征信机构、其他有权机关建立的信息数据库查询、打印、保存、使用本人信用报告，如涉及到需与贵行合作方共同提供服务的业务，则可向合作方提供本人的个人信用信息，同时本人不可撤销授权贵行将包括本人的个人基本信息、信贷交易信息及不良信用信息等相关信息向中国人民银行个人信用信息基础数据库报送：</p>
      <p class="info-shoose-label">
        <el-radio v-model="EOLA" disabled label="1">审核贷款申请</el-radio>
      </p>
       <p class="info-shoose-label">
        <el-radio v-model="RDCA" disabled label="1">审核贷记卡申请</el-radio>
      </p>
       <p class="info-shoose-label">
        <el-radio v-model="AMAG" disabled label="1">审核本人作为担保人</el-radio>
      </p>
       <p class="info-shoose-label">
        <el-radio v-model="ALPAG" disabled label="1">受理法人或其他组织的贷款申请或其作为担保人，需要查询其法定代表人及出资人信用状况</el-radio>
      </p>
      <p class="info-shoose-label">
        <el-radio v-model="CTCSOTLR" disabled label="1">对公业务贷后管理需查询法定代表人及出资人信用状况</el-radio>
      </p>
       <p class="info-shoose-label">
        <el-radio v-model="SMRME" disabled label="1">对特约商户实名审查</el-radio>
      </p>
      <p>本授权有效期为：自本人签署本授权书之日起至上述所有业务结清/办结之日止。本人在贵行所有业务结清/办结前，都无条件授权贵行以贷后风险管理查询本人信用信息</p>
      <p>本人知悉并充分理解本授权书中载明的所有内容，愿意承担本授权书中各类授权事项可能产生的相关法律责任，无论信贷业务是否获贵行批准，本人的授权书、个人信用报告等资料一律无需贵行退还。</p>
      <p>特此授权。</p>
      <p class="company-name">授权人签字</p>
      <div class="imgBox">
        <img :src = SIGNATURE alt=''  class="img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      baseurl: "http://192.168.32.32:10014",
      radio: "1",
      formJump: false,
      EOLA: '',
      RDCA: '',
      AMAG: '',
      ALPAG: '',
      CTCSOTLR: '',
      SMRME: '',
      SIGNATURE: 'data:image/png;base64,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'
    };
  },
  computed: {
    isFtransferShow () {
      return this.$store.state.formJump
    },
    isICRQAFun () {
      return this.$store.state.ICRQA
    }
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.EOLA = ''
    this.RDCA = ''
    this.AMAG = ''
    this.ALPAG = ''
    this.CTCSOTLR = ''
    this.SMRME = ''
    this.SIGNATURE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAngAAAEGCAYAAAD2V+gWAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAB/hJREFUeJzt3a2OZMkVhdEdRwalYVUwYTLjfP83cD6AScELq2ixMJi2xrLNMjRHc7QW6p9S6INbrYi+K8nfk/yW5DPJd/7wluQjyT3J+68/+05y/frZ//Se5PbrZ5PkJ8mXM53pTGc605nOdKYz//Qz//m3JL/tvf8RAAD+8tZaq/K/SxAAgL+wlSR7790dAgDA6/79L3gAAAxi4AEADGPgAQAMY+ABAAxj4AEADFP5/T/TAwBghlvl9/8pGQCAGR6VPz5tAQDAAJU/vnEGAMAAHlkAAAxTSb67IwAAOOZZSa7uCgAAjrlWkuy9d3cJAACvW2std/AAAIYx8AAAhjHwAACGMfAAAIYx8AAAhjHwAACG8akyAIBZHpXk1l0BAMAxt0py764AAOAcd/AAAIapJD/dEQAAHHNVkq/uCgAAjnlWks/uCgAAzllJsvfe3SEAALxurbU8sgAAGMbAAwAYxsADABjGwAMAGMbAAwAYppK8dUcAAHDMrZJ8dFcAAHDMo5LcuysAADinkrx3RwAAcI5HFgAAw1SS7+4IAACOeVaSq7sCAIBjrpUke+/dXQIAwOvWWssdPACAYQw8AIBhDDwAgGEMPACAYQw8AIBhDDwAgGF8qgwAYJZHJbl1VwAAcMytkty7KwAAOMcdPACAYSrJT3cEAADHXJXkq7sCAIBjnpXks7sCAIBzVpLsvXd3CAAAr1trLY8sAACGMfAAAIYx8AAAhjHwAACGMfAAAIapJG/dEQAAHHOrJB/dFQAAHPOoJPfuCgAAzqkk790RAACc45EFAMAwleS7OwIAgGOeleTqrgAA4JhrJcnee3eXAADwurXWcgcPAGAYAw8AYBgDDwBgGAMPAGAYAw8AYBgDDwBgGJ8qAwCY5VFJbt0VAAAcc6sk9+4KAADOcQcPAGCYSvLTHQEAwDFXJfnqrgAA4JhnJfnsrgAA4JyVJHvv3R0CAMDr1lrLIwsAgGEMPACAYQw8AIBhDDwAgGEMPACAYSrJW3cEAADH3CrJR3cFAADHPCrJvbsCAIBzKsl7dwQAAOd4ZAEAMEwl+e6OAADgmGcluborAAA45lpJsvfe3SUAALxurbXcwQMAGMbAAwAYxsADABjGwAMAGMbAAwAYxsADABjGp8oAAGZ5VJJbdwUAAMfcKsm9uwIAgHPcwQMAGKaS/HRHAABwzFVJvrorAAA45llJPrsrAAA4ZyXJ3nt3hwAA8Lq11vLIAgBgGAMPAGAYAw8AYBgDDwBgGAMPAGCYSvLWHQEAwDG3SvLRXQEAwDGPSnLvrgAA4JxK8t4dAQDAOR5ZAAAMU0m+uyMAADjmWUmu7goAAI65VpLsvXd3CQAAr1trLXfwAACGMfAAAIYx8AAAhjHwAACGMfAAAIYx8AAAhvGpMgCAWR6V5NZdAQDAMbdKcu+uAADgHHfwAACGqSQ/3REAABxzVZKv7goAAI55VpLP7goAAM5ZSbL33t0hAAC8bq21PLIAABjGwAMAGMbAAwAYxsADABjGwAMAGKaSvHVHAABwzK2SfHRXAABwzKOS3LsrAAA4p5K8d0cAAHCORxYAAMNUku/uCAAAjnlWkqu7AgCAY66VJHvv3V0CAMDr1lrLHTwAgGEMPACAYQw8AIBhDDwAgGEMPACAYQw8AIBhfKoMAGCWRyW5dVcAAHDMrZLcuysAADjHHTwAgGEqyU93BAAAx1yV5Ku7AgCAY56V5LO7AgCAc1aS7L13dwgAAK9bay2PLAAAhjHwAACGMfAAAIYx8AAAhjHwAACGqSRv3REAABxzqyQf3RUAABzzqCT37goAAM6pJO/dEQAAnOORBQDAMJXkuzsCAIBjnpXk6q4AAOCYayXJ3nt3lwAA8Lq11nIHDwBgGAMPAGAYAw8AYBgDDwBgGAMPAGAYAw8AYBifKgMAmOVRSW7dFQAAHHOrJPfuCgAAznEHDwBgmEry0x0BAMAxVyX56q4AAOCYZyX57K4AAOCclSR7790dAgDA69ZayyMLAIBhDDwAgGEMPACAYQw8AIBhDDwAgGEqyVt3BAAAx9wqyUd3BQAAxzwqyb27AgCAcyrJe3cEAADneGQBADBMJfnujgAA4JhnJbm6KwAAOOZaSbL33t0lAAC8bq213MEDABjGwAMAGMbAAwAYxsADABjGwAMAGMbAAwAYxqfKAABmeVSSW3cFAADH3CrJvbsCAIBz3MEDABimkvx0RwAAcMxVSb66KwAAOOZZST67KwAAOGclyd57d4cAAPC6tdbyyAIAYBgDDwBgGAMPAGAYAw8AYBgDDwBgmEry1h0BAMAxt0ry0V0BAMAxj0py764AAOCcSvLeHQEAwDkeWQAADFNJvrsjAAA45llJru4KAACOuVaS7L13dwkAAK9bay138AAAhjHwAACGMfAAAIYx8AAAhjHwAACGMfAAAIbxqTIAgFkeleTWXQEAwDG3SnLvrgAA4Bx38AAAhqkkP90RAAAcc1WSr+4KAACOeVaSz+4KAADOWUmy997dIQAAvG6ttTyyAAAYxsADABjGwAMAGMbAAwAYxsADABimkrx1RwAAcMytknx0VwAAcMyjkty7KwAAOKeSvHdHAABwjkcWAADDVJLv7ggAAI55VpKruwIAgGOulSR7791dAgDA69Zayx08AIBh1n/9/pbk8evXP0m+knzm/9/Te/z6+fz6++vXz/43ZzrTmc50pjOd6Uxn/oln/gsETVHX+zUoWgAAAABJRU5ErkJggg=='
    next()
  },
  watch: {
    isFtransferShow (newVal, oldVal) {
      this.formJump = newVal
      if (this.formJump == true) {
        this.$router.push('/form')
      }
    },
    isICRQAFun (newVal, oldVal) {
      console.log('isICRQAFun')
      console.log(newVal)
      this.getData()
      this.$store.commit('heightLightFun', 'two')
    }
  },
  mounted() {
    console.log('ICRQAmounted')
    // 第二页面高亮
    this.$store.commit('heightLightFun', 'two')
    this.getData()
  },
  methods: {
    getData () {
      console.log('ICRQA')
      console.log(JSON.parse(localStorage.getItem('ICRQA')))
      let data = JSON.parse(localStorage.getItem('ICRQA'))
      this.EOLA = data.EOLA + ''
      this.RDCA = data.RDCA + ''
      this.AMAG = data.AMAG + ''
      this.ALPAG = data.ALPAG + ''
      this.CTCSOTLR = data.CTCSOTLR + ''
      this.SMRME = data.SMRME + ''
      this.SIGNATURE = data.Signature
      // this.SIGNATURE = 
      // 'https://dev.egoonet.com/get?filename=/00/01/cb93f9cf-aae3-44de-9abc-42c560c524b5.jpg'
    },
    change() {
      this.$router.push('/result')
    }
  }
};
</script>

<style scoped>
.imgBox{
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img{
  width: 80%;
  height: 80%;
  margin: 0 auto;
}
*{
  margin:0;
  padding:0;
}
.information {
  padding: 20px 50px;
  text-align: left;
  width: 40%;
  font-size: 16px;
  color:#2e2e2e;

  background-color: #dbdbdb;
  min-width: 750px;
  border: 1px solid black;
}
.information-tit{
  line-height: 80px;
  font-weight: bold;
  text-align: center;
  color:#353535;
}
.information>p{
  line-height:40px;
  text-indent:30px;
}
.information>.company-name,.information>.info-shoose-label{
  text-indent: 0;
}
.info-shoose-label>>>.el-radio__inner{
  width:24px;
  height:24px;
}
.info-shoose-label>>>.el-radio__label{
  color:#353535;
  font-size:16px;
}
>>>.el-radio__input.is-disabled+span.el-radio__label{ 
  color: black !important
}
</style>
