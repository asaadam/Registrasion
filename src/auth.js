import router from '@/router';
import firebase from './firebase';
import store from '@/store';
import db from '@/db';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('auth/failLogin');
    const setUser = {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('users').doc(setUser.id).set(setUser);
    store.commit('auth/setUser', setUser);
    router.push('/registrasion');
  } else {
    store.commit('auth/setUser', null);
  }
});
