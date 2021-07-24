import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import './assets/tailwind.css'
import firebase from './assets/firebaseconf'
Vue.config.productionTip = false
let app;
firebase.auth().onIdTokenChanged(user => { // eslint-disable-line no-unused-vars
  if(!app){
new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
}});
