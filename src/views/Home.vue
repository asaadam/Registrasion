<template>
  <div>
    <article class="media-content">
      <h1 class="title is-2">REGISTRATION PAGE STAFF BEM FILKOM 2019</h1>

      <p class="control" v-if="!isLoggedIn">
        <a class="button is-info is-hovered" @click="login()">Login with Google</a>
      </p>
   
      <v-layout row justify-center>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <a slot="activator" class="button is-info is-hovered">Show Timeline</a>
          <v-card>
            <v-toolbar  color="info">
              <v-btn icon  @click="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
              <h1>Timeline</h1>
            </v-toolbar>
            <v-container fluid fill-height>
              <v-layout align-center justify-center>
                <v-timeline align-center justify-center>
                  <v-timeline-item v-for="(year, i) in years" :color="year.color" :key="i" small>
                    <span
                      slot="opposite"
                      :class="`headline font-weight-bold ${year.color}--text`"
                      v-text="year.year"
                    ></span>
                    <div>
                      <h2 :class="`headline  ${year.color}--text`">{{year.info}}</h2>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-layout>
            </v-container>
          </v-card>
        </v-dialog>
      </v-layout>
      <b-message
        title="Danger"
        type="is-danger"
        v-if="google"
      >You're detected login without right domain , please try again</b-message>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import Timeline from "./Timeline.vue";
export default {
  name: "home",
  computed: {
    ...mapGetters({
      google: "auth/getGoogle"
    })
  },
  methods: mapActions("auth", ["login", "logout"]),
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    years: [
      {
        color: "cyan",
        year: "5-7 Feb",
        info: "Pendaftaran Online"
      },
      {
        color: "green",
        year: "7-8 Feb",
        info: "Pengumpulan Berkas"
      },
      {
        color: "pink",
        year: "9-10 Feb",
        info: "Screening"
      },
      {
        color: "amber",
        year: "12 Feb",
        info: "Pengumuman Staff"
      },
      {
        color: "orange",
        year: "13 Feb",
        info: "First Gathering"
      }
    ]
  })
};
</script>

