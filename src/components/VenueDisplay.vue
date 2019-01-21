<template>
  <v-container align-center justify-center fill-height class="carousel-container">
    <v-layout align-center column fill-height justify-center>
      <v-flex xs8>
        <v-carousel
          interval="2000"
          fill-width
          cycle
        >
          <v-carousel-item width="600"
            v-for="(item, index) in passedData[pos].venue.photos.groups.slice(0, 10)"
            :key="index"
            :src="item.prefix+'500x500'+item.suffix"
          >
          </v-carousel-item>
        </v-carousel>
        <hr>
        <v-layout align-left column justify-center>
          <h3>Price range: {{moreInfo.price.message}}</h3>
          <h3>Name: {{moreInfo.name}}</h3>
          <h3>Distance: {{passedData[pos].venue.location.distance}} m</h3>
        </v-layout>
        <hr>
        <v-layout align-left column justify-center>
          <h3 v-for="(tip, num) in moreInfo.tips.groups[0].items" :key="num">{{tip.text}}</h3>
        </v-layout>
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
      pos: null,
      passedData: {},
      moreInfo: {}
    }
  },
  methods: {
    ...mapActions([
      'setShowDimmed',
      'retMoreInfoAboutLocation'
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
    this.passedData = this.getVenuesData
    console.log(this.passedData)
    if (this.pos === null) this.$router.push('/')
    this.setShowDimmed(false)
    this.retMoreInfoAboutLocation(this.passedData[this.pos].venue.id)
    .then(retData => {
      this.moreInfo = retData
    })
    .catch(err => console.log(err))
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

.carousel-container {
  max-width: 600px;
  font-family: 'Roboto', sans-serif;
}
</style>