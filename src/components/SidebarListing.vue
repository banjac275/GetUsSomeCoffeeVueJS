<template>
  <div class="sidebar-custom">
    <v-card v-for="(place, index) in getVenuesData" :key="index">
      <v-layout row wrap>
        <v-flex xs4><v-img :src="place.photos[0].prefix+'100x100'+place.photos[0].suffix" /></v-flex>
        <v-flex xs4>{{place.name}}</v-flex>
        <v-flex xs4>{{place.location.distance}}m</v-flex>
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
  }
}
</script>

<style lang="scss" scoped>
.sidebar-custom {
  background-color: #fff;
  height: 100%;
}
</style>