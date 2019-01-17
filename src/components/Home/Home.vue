<template>
  <v-layout row wrap fill-height>
    <v-flex xs3>
      <sidebar-listing 
        @cardHovered="handleHoveredCard($event)"
        @cardNotHovered="handleNotHoveredCard($event)"
      />
    </v-flex>
    <v-flex xs9>
      <map-container 
        @dataUnobtained="mapUnobtainedData($event)" 
        @showDimmedScreen="mapShowDimmedScreen($event)" 
        @geoEnabled="mapGeoEnabled($event)"
        :showInfoMarkerId='hoveredCardId'
        :hideInfoMarkerId='notHoveredCardId'
      />
    </v-flex>
  </v-layout>  
</template>

<script>
import SidebarListing from './SidebarListing'
import MapContainer from './MapContainer'

export default {
  name: 'Home',
  components: {
    SidebarListing,
    MapContainer
  },
  data () {
    return {
      hoveredCardId: null,
      notHoveredCardId: null
    }
  },
  methods: {
    mapUnobtainedData (val) {
      this.$emit('homeUnobtainedData', val)
    },
    mapShowDimmedScreen (val) {
      this.$emit('homeShowDimmedScreen', val)
    },
    mapGeoEnabled (val) {
      this.$emit('homeGeoEnabled', val)
    },
    handleHoveredCard (id) {
      this.hoveredCardId = id
    },
    handleNotHoveredCard (id) {
      this.notHoveredCardId = id
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>