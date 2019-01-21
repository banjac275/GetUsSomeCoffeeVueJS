<template>
  <v-layout row wrap fill-height>
    <v-flex xs3 class="sidebar-parent">
      <sidebar-listing
        @cardHovered="handleHoveredCard($event)"
        @cardNotHovered="handleNotHoveredCard($event)"
      />
    </v-flex>
    <v-flex xs9 class="maps-parent">
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
@media screen and (max-width: 1024px) {
  .sidebar-parent {
    max-width: 0;
    overflow: hidden;
  }

  .maps-parent {
    min-width: 100% !important;
  }
}
</style>