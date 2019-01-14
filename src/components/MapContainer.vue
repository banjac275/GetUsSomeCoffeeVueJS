<template>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'retLocInfoAndData'
    ]),
    obtainLocationAndData () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let latitude = position.coords.latitude
          let longitude = position.coords.longitude
          console.log(latitude, longitude)
          //dobijena sirina i duzina se salju da se dobiju lokacije aviona
          /* this.retLocInfoAndData({lat: latitude, lon: longitude})
          .then(data => {
            //this.obtained = true
            //this.flights = data
            console.log(data)
            //kada se vrate podaci sprema se izvrsenje osvezavanja za minut
            setTimeout(() => this.startAll(), 60000)
          })
          .catch(err => {
            console.log(err)
          }) */
        }, (error) => {
          console.log(error)
          //ispisivanje poruke ako nije omogucena geolokacija
          this.waitText = 'Please enable geolocation!'
        })
      } else {
        this.waitText = 'Please enable geolocation!'
      }
    }
  },
  created () {
    this.obtainLocationAndData()
  }
}
</script>

<style lang="scss" scoped>

</style>
