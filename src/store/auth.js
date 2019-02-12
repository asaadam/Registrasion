import router from '@/router';
import firebase from '../firebase';

const state = {
  user: {},
  isLoggedIn: false,
  google: false,
};

const mutations = {
  setUser(state, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
      state.google=false;
    } else {
      state.user = {};
      state.isLoggedIn = false;

    }
  },failLogin(){
    state.google=true;
  }
};

const getters = {
  getUser() {
    return state.user;
  },
  getGoogle(){
    return state.google;
  }
};

const actions = {
  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    await firebase.auth().signInWithPopup(provider);
  },

  async logout() {
    await firebase.auth().signOut();
    router.push('/');
  },

};


export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
