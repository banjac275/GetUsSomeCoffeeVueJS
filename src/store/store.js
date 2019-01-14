import Vue from 'vue'
import Vuex from 'vuex'
import coordinates from './modules/coordinates'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions: {
    retLocInfoAndData ({ commit }, data) {
      return api.getRoutes(data.lat, data.lon)
      .then((response) => {
        //preuzima rute kao listu i sortira je po visini na kojoj se nalaze avioni
        /* let tmpList = response.acList
        tmpList.sort((a, b) => b.Alt - a.Alt) */
        //kasnije tu listu vraca preko promisa
        return Promise.resolve(response)
      })
      .catch((err) => Promise.reject(err))
    }
  },
  modules: {
    namespaced: true,
    coordinates
  }
})
