import Vue from 'vue'
import Button from './botton'
import Icon from './icon'
import ButtonGroup from './button-group'

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

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect


{
  let Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })

  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.equal('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  let Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
    }
  })

  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.equal('0')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  let Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  })

  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.equal('2')
  vm.$el.remove()
  vm.$destroy()
}

{
  let Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  })
  vm.$mount()
  const spy = chai.spy(() => {})

  vm.$on('click', spy)
  vm.$el.click()
  expect(spy).to.have.been.called()
  vm.$el.remove()
  vm.$destroy()
}
