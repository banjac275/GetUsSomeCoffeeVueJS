const state = {
  dataUnobtained: false
}

const getters = {
  getDataUnobtained: state => {
    return state.dataUnobtained
  }
}

const mutations = {
  changeDataUnobtained: (state, dataUnobtained) => {
    state.dataUnobtained = dataUnobtained
  }
}

export default {
  state,
  getters,
  mutations
}