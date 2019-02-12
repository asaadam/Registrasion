import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Registrasion from './views/Registrasion.vue';
import store from './store/index';
import Sukses from './views/Sukses.vue';
// import Stepper from './views/Stepper.vue';

Vue.use(Router);

// mapState('auth', ['isLoggedIn'])


function isLoggedIn(to, from, next) {
  if (store.state.auth.isLoggedIn) {
    next();
  } else {
    next('/');
  }
}

function redirect(to, from, next) {
  if (!store.state.auth.isLoggedIn) {
    next();
  } else {
    to('/');
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: redirect,
    },
    {
      path: '/registrasion',
      name: 'registrasion',
      component: Registrasion,
      beforeEnter: isLoggedIn,
    },
    {
      path: '/sukses',
      name: 'sukses',
      component: Sukses,
      beforeEnter: isLoggedIn,
    },
  ],
});
