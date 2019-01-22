<template>
  <v-layout row wrap fill-height>
    <transition name="stretch" mode="out-in">
      <v-flex xs3 fill-height class="sidebar-parent" v-show="getSidebarHidden">
        <sidebar-listing
          @cardHovered="handleHoveredCard($event)"
          @cardNotHovered="handleNotHoveredCard($event)"
        />
      </v-flex>
    </transition>
    <v-flex xs9 class="maps-parent">
      <map-container 
        :showInfoMarkerId='hoveredCardId'
        :hideInfoMarkerId='notHoveredCardId'
      />
    </v-flex>
  </v-layout>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
      notHoveredCardId: null,
      showSidebar: true
    }
  },
  computed: {
    ...mapGetters ([
      'getSidebarHidden'
    ])
  },
  methods: {
    ...mapActions([
      'setSidebarHidden'
    ]),
    handleHoveredCard (id) {
      this.hoveredCardId = id
    },
    handleNotHoveredCard (id) {
      this.notHoveredCardId = id
    }
  },
  watch: {
    getSidebarHidden (val) {
      this.showSidebar = val
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', (e) => {
        if (screen.width > 1024) {
          this.setSidebarHidden (true)
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>

@media screen and (max-width: 1024px) {
  .sidebar-parent {
    min-width: 290px !important;
    overflow: hidden;
    position: absolute;
    z-index: 5;
  }

  .stretch-enter {
    max-width: 0;
  }
  .stretch-enter-active {
    transition: max-width .6s;
  }
  .stretch-leave {
    max-width: 290px;
  }
  .stretch-leave-active {
    transition: max-width .6s;
    max-width: 0;
  }

  .maps-parent {
    min-width: 100% !important;
    z-index: 0;
  }
}
</style>