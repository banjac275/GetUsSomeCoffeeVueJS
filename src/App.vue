<template>
  <div class="content-wrapper">
    <geolocation-disabled :geoEnabled='geoEnabled' :showDimmed='showDimmed' :dataUnobtained='dataUnobtained' />
    <v-app>
      <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
          <span>GET US SOME COFFEE Vue JS</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-content>
        <home 
          @mapUnobtainedData="homeUnobtainedData($event)"
          @mapShowDimmedScreen="homeShowDimmedScreen($event)"
          @mapGeoEnabled="homeGeoEnabled($event)"
        />
        <v-footer app class="info" dark>
          <span class="ml-1">&copy; 2019, Nikola Stevanović</span>
        </v-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import GeolocationDisabled from './components/GeolocationDisabled'
import Home from './components/Home/Home'

export default {
  name: 'App',
  components: {
    GeolocationDisabled,
    Home
  },
  data () {
    return {
      geoEnabled: true,
      dataUnobtained: false,
      showDimmed: true
    }
  },
  methods: {
    mapUnobtainedData (val) {
      this.dataUnobtained = val
    },
    mapShowDimmedScreen (val) {
      this.showDimmed = val
    },
    mapGeoEnabled (val) {
      this.geoEnabled = val
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

