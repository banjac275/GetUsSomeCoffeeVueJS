<template>
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
      <map-container />
      <v-footer :fixed="fixed" app class="info" dark>
        <span class="ml-1">&copy; 2019, Nikola Stevanović</span>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import MapContainer from './components/MapContainer'

export default {
  name: 'App',
  components: {
    MapContainer
  },
  data () {
    return {
      //
    }
  }
}
</script>
