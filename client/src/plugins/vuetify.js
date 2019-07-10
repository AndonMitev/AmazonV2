import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import VueGoogleCharts from 'vue-google-charts'
 
Vue.use(VueGoogleCharts)
Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  },
  darkTheme: {
    background: '#2e1a6c',
  },
})
