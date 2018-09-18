import Vue from 'vue'
import Button from './botton'
import Icon from './icon'

Vue.component('jo-button', Button)
Vue.component('jo-icon', Icon)

new Vue({
  el: '#app',
  data () {
    return {
      loading1: false
    }
  }
})