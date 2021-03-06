import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from '../src/router';
import store from '../src/store';
import CardHome from '../src/components/CardHome'

Vue.use(CardHome)

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  CardHome,
  render: h => h(App)
}).$mount('#app')
