import Vue from 'vue'
import App from './App.vue'
import Morze from './components/morze'

Vue.component('morze', Morze)

new Vue({
  el: '#app',
  render: h => h(App)
})
