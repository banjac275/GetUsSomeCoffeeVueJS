<template>
  <div class="sidebar-custom">
    <v-card class="coffee-place-card--info">
      <v-layout row justify-center align-space-around fill-height>
        <v-flex xs4 text-xs-center><p>Picture</p></v-flex>
        <v-flex xs4 text-xs-center><p>Name</p></v-flex>
        <v-flex xs4 text-xs-center><p>Distance</p></v-flex>
      </v-layout>
    </v-card>
    <v-card v-for="(item, index) in getVenuesData" :key="index" 
      class="coffee-place-card" 
      @mouseenter="showInfoWindow(index)" 
      @mouseleave="hideInfoWindow(index)"
    >
      <v-layout row wrap justify-center align-center fill-height>
        <v-flex xs4><v-img :src="item.photos[0].prefix+'30x30'+item.photos[0].suffix" class="coffee-place-card--image" /></v-flex>
        <v-flex xs4 text-xs-center><p>{{item.name}}</p></v-flex>
        <v-flex xs4 text-xs-center><p>{{item.location.distance}} m</p></v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters ([
      'getVenuesData'
    ])
  },
  methods: {
    showInfoWindow (id) {
      this.$emit('cardHovered', id)
    },
    hideInfoWindow (id) {
      this.$emit('cardNotHovered', id)
    }
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