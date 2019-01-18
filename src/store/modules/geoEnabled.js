const state = {
  geoEnabled: true
}

const getters = {
  getGeoEnabled: state => {
    return state.geoEnabled
  }
}

const mutations = {
  changeGeoEnabled: (state, geoEnabled) => {
    state.geoEnabled = geoEnabled
  }
}

export default {
  state,
  getters,
  mutations
}