// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import axios from 'axios'
// import Vuex from 'vuex'

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/theme/index.css'

Vue.config.productionTip = false

// 使用Element UI
Vue.use(Element)

// Vue.use(Vuex)
// 引入store
import store from './store'

// Vue.prototype.$http = axios

Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 全局消息分发器
/* eslint-disable no-new */
window.eventEmitter = new Vue()
window.onmessage = function (messageEvent) {
  console.log('biz receive post message info ' + JSON.stringify(messageEvent))
  console.log('biz receive post message info ' + JSON.stringify(messageEvent.data))
  let message = messageEvent.data
  if (!message) {
    return
  }
  if (message.type == 'card') {
    window.eventEmitter.$emit('EventCard', message)
  }
  if (message.type == 'form') {
    window.eventEmitter.$emit('EventForm', message)
  }
  if (message.type == 'EndSession') {
    console.log('EndSession')
    if (store.state.EndSession == true) {
      store.commit('EndSessionFun', false)    
    } else {
      store.commit('EndSessionFun', true)    
    }
    localStorage.setItem('ICRQA', '')
    localStorage.setItem('PLAF', '')
    router.push('/begin')
  }
}

window.eventEmitter.$on('EventCard', res => {
  console.log('EventCard')
  console.log(res)
  if (res.option == 'front') {
    store.commit('frontUrlFun', res.data.url)
  } else if (res.option == 'back') {
    store.commit('backUrlFun', res.data.url)
  } else if (res.option == 'avatar') {
    console.log('avata')
    store.commit('avataUrlFun', res.data.url)
  }
})
window.eventEmitter.$on('EventForm', res => {
  console.log('EventForm')
  console.log(res)
  if (res.option == 'ICRQA') {
    console.log('ICRQA')
    localStorage.setItem('ICRQA', JSON.stringify(res.data))
    store.commit('ICRQAFun', res.data)
  } else if (res.option == 'PLAF') {
    console.log('PLAF')
    console.log(res.data)
    localStorage.setItem('PLAF', JSON.stringify(res.data))
    store.commit('platFun', res.data)
    store.commit('formJumpFun', true)
  } else if (res.option == 'finished') {
    console.log('finished')
    store.commit('finishedFun', false)
  }
})

