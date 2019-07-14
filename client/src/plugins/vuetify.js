import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import VueGoogleCharts from 'vue-google-charts'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'

window.toastr = require('toastr')

Vue.use(VueGoogleCharts)
Vue.use(VueToastr2)
Vue.use(Vuetify, {
  iconfont: 'md'
})
