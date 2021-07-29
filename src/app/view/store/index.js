const SET_TEST = 'SET_TEST'

export default {
  namespaced: true,
  state: {
    test: 'test'
  },
  getters: {

  },
  mutations: {
    [SET_TEST](state){
      state.test = 'app'
    }
  },
  actions: {
    
  }
}