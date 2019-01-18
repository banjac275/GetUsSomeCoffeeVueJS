<template>
  <div class="sidebar-custom">
    <v-card class="coffee-place-card--info">
      <v-layout row justify-center align-space-around fill-height>
        <v-flex xs4 text-xs-center><p>Picture</p></v-flex>
        <v-flex xs4 text-xs-center><p>Name</p></v-flex>
        <v-flex xs4 text-xs-center><p>Distance</p></v-flex>
      </v-layout>
    </v-card>
    <v-card v-for="(item, index) in venueDataTemp" :key="index" 
      class="coffee-place-card" 
      @mouseenter="showInfoWindow(index)" 
      @mouseleave="hideInfoWindow(index)"
      @click="displayVenueInfo(index)"
    >
      <v-layout row wrap justify-center align-center fill-height>
        <v-flex xs4><v-img :src="item.venue.photos.groups[0].prefix+'30x30'+item.venue.photos.groups[0].suffix" class="coffee-place-card--image" /></v-flex>
        <v-flex xs4 text-xs-center><p>{{item.venue.name}}</p></v-flex>
        <v-flex xs4 text-xs-center><p>{{item.venue.location.distance}} m</p></v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      venueDataTemp: []
    }
  },
  computed: {
    ...mapGetters ([
      'getVenuesData'
    ])
  },
  methods: {
    ...mapActions([
      'retPhotosAlt'
    ]),
    showInfoWindow (id) {
      this.$emit('cardHovered', id)
    },
    hideInfoWindow (id) {
      this.$emit('cardNotHovered', id)
    },
    displayVenueInfo (val) {
      sessionStorage.setItem('arrayPosition', val)
      this.$router.push('/venueDisplay')
    }
  },
  beforeMount () {
    this.venueDataTemp = this.getVenuesData

    this.retPhotosAlt()
    .then(photos => {
      this.venueDataTemp.forEach(el => {
        if (el.venue.photos.count === 0) el.venue.photos.groups = photos
      })

      
    })
    .catch(err => console.log(err))
  }
}
</script>

<style lang="scss" scoped>
.sidebar-custom {
  background-color: #fff;
  height: 100%;
}

.coffee-place-card--info {
  padding-top: 15px;
  min-height: 30px;
}

.coffee-place-card:hover {
  background-color: #38c0ff;
  color: #fff;
  cursor: pointer;
}

.coffee-place-card--image {
  max-height: 80px;
}
</style>