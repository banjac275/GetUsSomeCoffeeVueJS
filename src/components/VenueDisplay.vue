<template>
  <v-container align-center justify-center fill-height>
    <v-layout align-center column fill-height justify-center>
      <v-flex xs8>
        <v-carousel
          interval="2000"
          fill-width
        >
          <v-carousel-item width="600"
            v-for="(item, index) in getVenuesData[pos].photos.slice(0, 10)"
            :key="index"
            :src="item.prefix+'500x500'+item.suffix"
          >
          </v-carousel-item>
        </v-carousel>
        <v-btn class="home-page-button" color="info" @click="goBackHome()">Home page</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      pos: null
    }
  },
  methods: {
    ...mapActions([
      'setShowDimmed'
    ]),
    goBackHome () {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters ([
      'getVenuesData'
    ])
  },
  mounted () {
    this.pos = sessionStorage.getItem('arrayPosition')
    console.log(this.getVenuesData)
    if (this.pos === null) this.$router.push('/')
    this.setShowDimmed(false)
  }
}
</script>

<style lang="scss" scoped>
.home-page-button {
  display: block;
  width: 100%;
  padding: 0;
  margin: 10px 0;
}
</style>