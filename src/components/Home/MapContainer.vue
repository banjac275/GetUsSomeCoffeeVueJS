<template>
  <div id="map"></div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: [
    'showInfoMarkerId',
    'hideInfoMarkerId'
  ],
  data () {
    return {
      markerList: [],
      map: ''
    }
  },
  methods: {
    ...mapActions([
      'retLocationData',
      'setGeoEnabled',
      'setDataUnobtained',
      'setShowDimmed'
    ]),
    obtainLocationAndData () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let latitude = position.coords.latitude
          let longitude = position.coords.longitude
          //lattitude and longitude being sent to obtain location data
          this.retLocationData({lat: latitude, lon: longitude})
          .then(data => {

            this.initMap({lat: latitude, lon: longitude}, data)

            //when data returns, in a minute, the function is re-run and data refreshed
            setTimeout(() => this.obtainLocationAndData(), 60000)
          })
          .catch(err => {
            console.log(err)

            //show message about unobtained data
            this.setDataUnobtained(true)
            this.setGeoEnabled(false)
            if (this.$route.path === '/') this.setShowDimmed(true)
          })
        }, (error) => {
          console.log(error)
          
          //geolocation show message
          this.setDataUnobtained(false)
          this.setGeoEnabled(false)
          this.setShowDimmed(true)
        })
      } else {
        this.setDataUnobtained(false)
        this.setGeoEnabled(false)
        this.setShowDimmed(true)
      }
    },
    initMap(myPosition, mapData) {
      let pos = {lat: myPosition.lat, lng: myPosition.lon};

      this.map = new google.maps.Map(document.getElementById('map'), {zoom: 15.5, center: pos});

      let myPositionMarker = new google.maps.Marker({position: pos, map: this.map});

      let myPositionMarkerCircle = new google.maps.Circle({
        strokeColor: '#38c0ff',
        strokeOpacity: 0.7,
        strokeWeight: 2,
        fillColor: '#38c0ff',
        fillOpacity: 0.2,
        map: this.map,
        center: pos,
        radius: 1000
      })

      console.log(this.getVenuesData)

      this.drawMarkers()
    },
    drawMarkers () {
      this.markerList = []

      this.getVenuesData.forEach((el, ind) => {
        let tempJSON = {}

        //creates marker on map
        tempJSON.marker = new google.maps.Marker({position: {lat: el.venue.location.lat, lng: el.venue.location.lng}, map: this.map})

        //infoWindow content
        let contentString = 
        `<div>
          <div>${el.venue.name}</div>
          <div>${el.venue.location.distance} m away</div>
        </div>`

        //creates infoWindow object
        tempJSON.infoWindow = new google.maps.InfoWindow({
          content: contentString
        })

        this.markerList.push(tempJSON)
      })
      
      this.setDataUnobtained(true)
      this.setGeoEnabled(false)
      this.setShowDimmed(false)
    }
  },
  computed: {
    ...mapGetters ([
      'getVenuesData'
    ])
  },
  watch: {
    $route (to, from) {
      console.log(to, from)
    },
    showInfoMarkerId (val) {
      if (val !== null) {
        this.markerList[val].infoWindow.open(this.map, this.markerList[val].marker)
      }
    },
    hideInfoMarkerId (val) {
      if (val !== null) {
        this.markerList[val].infoWindow.close(this.map, this.markerList[val].marker)
      }
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

.info-content {
  text-align: center;
}
</style>
