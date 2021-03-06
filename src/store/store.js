import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api/index'
import coordinates from './modules/coordinates'
import venuesData from './modules/venuesData'
import dataUnobtained from './modules/dataUnobtained'
import geoEnabled from './modules/geoEnabled'
import showDimmed from './modules/showDimmed'
import sidebarHidden from './modules/sidebarHidden'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions: {
    retLocationData ({ commit }, data) {
      //commits location data
      commit('changeCoordinates', data)

      if (data === undefined) data = {lat: 0, lon: 0}

      return api.getCoffeeShops(data)
      .then(response => {
        let venues = response.response.groups[0].items

        commit('changeVenuesData', venues)


        return Promise.resolve(venues)
      })
      .catch((err) => Promise.reject(err))
    },
    retPhotosAlt ({ commit }) {
      return api.getVenuePhotos()
      .then(photos => Promise.resolve(photos))
      .catch(err => Promise.reject(err))
    },
    retMoreInfoAboutLocation ({ commit }, id) {
      return api.getVenueInfoMore(id)
      .then(data => Promise.resolve(data.response.venue))
      .catch(err => Promise.reject(err))
    },
    setChangedData ({ commit }, data) {
      commit('changeVenuesData', data)
    },
    setGeoEnabled ({ commit }, data) {
      commit('changeGeoEnabled', data)
    },
    setDataUnobtained ({ commit }, data) {
      commit('changeDataUnobtained', data)
    },
    setShowDimmed ({ commit }, data) {
      commit('changeShowDimmed', data)
    },
    setSidebarHidden ({ commit }, data) {
      commit('changeSidebarHidden', data)
    }
  },
  modules: {
    namespaced: true,
    coordinates,
    venuesData,
    dataUnobtained,
    showDimmed,
    geoEnabled,
    sidebarHidden
  }
})
