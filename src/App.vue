<template>
  <div id="app">
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bem.filkom.ub.ac.id/registrasiStaff">Registrasi Staff Bem 2019</a>
       
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
         
            <p class="control logged-in" v-if="isLoggedIn">
              <a class="button is-primary" @click="logout()">
                Logout
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="main container" style="margin-top:2em"/>
    
  </div>
  
</template>

<style lang="scss">
.main {
  margin-top: 2em;
}
</style>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods:mapActions("auth", ["login", "logout"]),
};
</script>
