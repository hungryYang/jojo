import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('jo-button', Button)
Vue.component('jo-icon', Icon)
Vue.component('jo-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data () {
    return {
    }
  }
})
