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