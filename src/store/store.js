import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api/index'
import coordinates from './modules/coordinates'
import venuesData from './modules/venuesData'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions: {
    retLocationData ({ commit }, data) {
      //commits location data
      commit('changeCoordinates', data)

      return api.getCoffeeShops(data.lat, data.lon)
      .then(response => {
        let venues = response.response.venues

        venues.map(venue => {
          api.getVenuePhotos(venue.id)
          .then(photoList => venue.photos = photoList.response.photos.items)
          .catch(err => venue.photos = [])
        })

        //commits venues data
        commit('changeVenuesData', venues)

        //takes data and sorts it by proximity
        /* let tmpList = response.acList
        tmpList.sort((a, b) => b.Alt - a.Alt) */

        //then returns it through promise
        return Promise.resolve(venues)
      })
      .catch((err) => Promise.reject(err))
    }
  },
  modules: {
    namespaced: true,
    coordinates
  }
})
