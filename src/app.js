import Vue from 'vue'
import chai from 'chai'
import Button from './botton'
import Icon from './icon'
import ButtonGroup from './button-group'

const expect = chai.expect
Vue.component('jo-button', Button)
Vue.component('jo-icon', Icon)
Vue.component('jo-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data () {
    return {
      loading1: false
    }
  }
})

{
  let Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })

  button.$mount('#test')
  let useElement = button.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')
}
