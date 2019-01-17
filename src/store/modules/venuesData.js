const state = {
  venuesData: []
}

const getters = {
  getVenuesData: state => {
    return state.venuesData
  }
}

const mutations = {
  changeVenuesData: (state, venuesData) => {
    state.venuesData = venuesData
  }
}

export default {
  state,
  getters,
  mutations
}