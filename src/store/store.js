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

      if (data === undefined) data = {lat: 0, lon: 0}

      return api.getCoffeeShops(data)
      .then(response => {
        let venues = response.response.venues

        //because of promise this is done with iteration for i and not with other stuff
        function recursiveGetPhotos (i) {
          if (i === venues.length) {
            //commits venues data
            commit('changeVenuesData', venues)

            //takes data and sorts it by proximity
            venues.sort((a, b) => a.location.distance - b.location.distance)

            //then returns it through promise
            return venues
          } else {
            api.getVenuePhotos(venues[i].id)
            .then(photoList => {
              venues[i].photos = photoList.response.photos.items
              return recursiveGetPhotos(++i)
            })
            .catch(err => {
              console.log(err)
              venues[i].photos = []
            })
          }
        }

        let i = 0

        return Promise.resolve(recursiveGetPhotos(i))
      })
      .catch((err) => Promise.reject(err))
    }
  },
  modules: {
    namespaced: true,
    coordinates,
    venuesData
  }
})
