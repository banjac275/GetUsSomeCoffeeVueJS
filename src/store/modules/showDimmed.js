const state = {
  showDimmed: true
}

const getters = {
  getShowDimmed: state => {
    return state.showDimmed
  }
}

const mutations = {
  changeShowDimmed: (state, showDimmed) => {
    state.showDimmed = showDimmed
  }
}

export default {
  state,
  getters,
  mutations
}