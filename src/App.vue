<template>
  <div class="content-wrapper">
    <geolocation-disabled :geoEnabled='geoEnabled' :showDimmed='showDimmed' :dataUnobtained='dataUnobtained' />
    <v-app>
      <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
          <span>Vuetify</span>
          <span class="font-weight-light">MATERIAL DESIGN</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          flat
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
        >
          <span class="mr-2">Latest Release</span>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-layout row wrap fill-height>
          <v-flex xs3>
            <sidebar-listing />
          </v-flex>
          <v-flex xs9>
            <map-container @dataUnobtained="mapUnobtainedData($event)" @showDimmedScreen="mapShowDimmedScreen($event)" @geoEnabled="mapGeoEnabled($event)"/>
          </v-flex>
        </v-layout>      
        <v-footer app class="info" dark>
          <span class="ml-1">&copy; 2019, Nikola Stevanović</span>
        </v-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import MapContainer from './components/MapContainer'
import GeolocationDisabled from './components/GeolocationDisabled'
import SidebarListing from './components/SidebarListing'

export default {
  name: 'App',
  components: {
    MapContainer,
    GeolocationDisabled,
    SidebarListing
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

