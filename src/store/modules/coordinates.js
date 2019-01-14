const state = {
  coordinates: {
    lat: 0,
    lon: 0
  }
}

const getters = {
  getCoordinates: state => {
    return state.coordinates
  }
}

const mutations = {
  changeCoordinates: (state, { coordinates }) => {
    state.coordinates = coordinates
  }
}

export default {
  state,
  getters,
  mutations
}