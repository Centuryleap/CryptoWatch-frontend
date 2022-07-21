export const state = () => ({
  appName: 'Crypto Watch',
  loggedIn: true,
  menu: [
    {
      title: 'Home',
      iconActive: 'menu/home',
      iconInactive: 'menu/home-outline',
      route: '/dashboard/home'
    },

    {
      title: 'Watchlist',
      iconActive: 'menu/watchlist',
      iconInactive: 'menu/watchlist-outline',
      route: '/dashboard/watchlist'
    },

    {
      title: 'Price alert',
      iconActive: 'menu/notifications',
      iconInactive: 'menu/notifications-outline',
      route: '/dashboard/price-alert'
    },

    {
      title: 'Settings',
      iconActive: 'menu/settings',
      iconInactive: 'menu/settings-outline',
      route: '/dashboard/settings'
    },
  ],
  modalOpened: true,
  position: 0,
})

export const mutations = {
  toggleModal(state) {
    state.modalOpened = !state.modalOpened
  },

  setPosition(state, position) {
    state.position = position
  }
}

export const getters = {
  appName: (state) => state.appName,
  menu: (state) => state.menu
}