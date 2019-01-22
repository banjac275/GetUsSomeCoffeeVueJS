<template>
  <div class="content-wrapper">
    <geolocation-disabled />
    <v-app>
      <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase" @click="showSidebar()">
          <span>GET US SOME COFFEE Vue JS</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-content>
        <router-view />
        <v-footer app class="info" dark>
          <span class="ml-1">&copy; 2019, Nikola Stevanović</span>
        </v-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import GeolocationDisabled from './components/GeolocationDisabled'

export default {
  name: 'App',
  components: {
    GeolocationDisabled
  },
  data() {
    return {
      sidebarShown: true
    }
  },
  methods: {
    ...mapActions([
      'setSidebarHidden'
    ]),
    showSidebar () {
      (screen.width < 1024) ? this.sidebarShown = !this.sidebarShown : this.sidebarShown = true
      this.setSidebarHidden(this.sidebarShown)
    }
  }
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  position: relative;
  z-index: 0;
}
</style>

