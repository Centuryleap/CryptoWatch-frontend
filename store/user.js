export const state = () => ({
  email: '',
  loggedIn: false,
})

export const mutations = {
  toggleLoginStatus(state) {
    state.loggedIn = !state.loggedIn
  },

  setEmail(state, paylaod) {
    state.email = paylaod
  }
}

// export const getters = {
//   appName: (state) => state.appName,
//   menu: (state) => state.menu
// }