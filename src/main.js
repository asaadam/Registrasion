import Vue from 'vue';
import Buefy from 'buefy';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store/index';
import 'buefy/dist/buefy.css';
import auth from './auth';
import firebase from './firebase';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(Vuetify);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
