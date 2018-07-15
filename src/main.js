// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate, {
  Validator
} from 'vee-validate'
import validateConfig from './validate/validateConfig'

Vue.config.productionTip = false

Validator.extend('verify_phone', {
  getMessage: () => {
    return 'INVALID PHONE NUMBER'
  },
  validate: (value) => {
    return value.replace(/\s/g, '').match(/09[0-9]{8}/) !== null && value.match(/\S/g).length == 10;
  }
})

Vue.use(VeeValidate, validateConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
