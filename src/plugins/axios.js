import Vue from 'vue'
import axios from 'axios'

// Full config:  https://github.com/axios/axios#request-config

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || '',
  timeout: 60 * 1000,
  withCredentials: true // Check cross-site Access-Control
}

const _axios = axios.create(config)

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin