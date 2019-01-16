<template>
  <div id="map"></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      markerList: [],
      coffeeShopDataList: []
    }
  },
  methods: {
    ...mapActions([
      'retLocationData'
    ]),
    obtainLocationAndData () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let latitude = position.coords.latitude
          let longitude = position.coords.longitude
          //lattitude and longitude being sent to obtain location data
          this.retLocationData({lat: latitude, lon: longitude})
          .then(data => {
            console.log(data)

            this.$emit('dataUnobtained', true)
            this.$emit('geoEnabled', false)
            this.$emit('showDimmedScreen', false)

            this.coffeeShopDataList = data

            this.initMap({lat: latitude, lon: longitude})

            //when data returns, in a minute, the function is re-run and data refreshed
            setTimeout(() => this.obtainLocationAndData(), 60000)
          })
          .catch(err => {
            console.log(err)

            //show message about unobtained data
            this.$emit('dataUnobtained', true)
            this.$emit('geoEnabled', false)
            this.$emit('showDimmedScreen', true)
          })
        }, (error) => {
          console.log(error)
          
          //geolocation show message
          this.$emit('dataUnobtained', false)
          this.$emit('geoEnabled', false)
          this.$emit('showDimmedScreen', true)
        })
      } else {
        this.$emit('dataUnobtained', false)
        this.$emit('geoEnabled', false)
        this.$emit('showDimmedScreen', true)
      }
    },
    initMap(myPosition) {
      let pos = {lat: myPosition.lat, lng: myPosition.lon};

      let map = new google.maps.Map(document.getElementById('map'), {zoom: 15.5, center: pos});

      let myPositionMarker = new google.maps.Marker({position: pos, map: map});

      let myPositionMarkerCircle = new google.maps.Circle({
        strokeColor: '#38c0ff',
        strokeOpacity: 0.7,
        strokeWeight: 2,
        fillColor: '#38c0ff',
        fillOpacity: 0.2,
        map: map,
        center: pos,
        radius: 1000
      })

      let coffeeShopMarkers = []

      this.coffeeShopDataList.forEach((el, ind) => {
        coffeeShopMarkers.push(new google.maps.Marker({position: {lat: el.location.lat, lng: el.location.lng}, map: map}))
      })
    }
  },
  created () {
    this.obtainLocationAndData()
  }
}
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
