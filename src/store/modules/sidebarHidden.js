const state = {
  sidebarHidden: true
}

const getters = {
  getSidebarHidden: state => {
    return state.sidebarHidden
  }
}

const mutations = {
  changeSidebarHidden: (state, sidebarHidden) => {
    state.sidebarHidden = sidebarHidden
  }
}

export default {
  state,
  getters,
  mutations
}