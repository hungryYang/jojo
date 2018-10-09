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

  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.equal('#i-setting')
  button.$el.remove()
  button.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  let Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'setting',
    }
  })

  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.equal('0')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  let Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  })

  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.equal('2')
  button.$el.remove()
  button.$destroy()
}
