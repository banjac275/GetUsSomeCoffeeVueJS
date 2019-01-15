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

            this.$emit('dataUnobtained', false)
            this.$emit('showDimmedScreen', false)

            //when data returns, in a minute, the function is re-run and data refreshed
            setTimeout(() => this.retLocationData(), 60000)
          })
          .catch(err => {
            //show message about unobtained data
            this.$emit('dataUnobtained', true)
            this.$emit('showDimmedScreen', true)
          })
        }, (error) => {
          console.log(error)
          
          //geolocation show message
          this.$emit('dataUnobtained', false)
          this.$emit('showDimmedScreen', true)
        })
      } else {
        this.$emit('dataUnobtained', false)
        this.$emit('showDimmedScreen', true)
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
