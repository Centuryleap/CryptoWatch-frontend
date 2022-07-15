export const state = () => ({
  appName: 'Crypto Watch',
  menu: [
    {
      title: 'Home',
      iconActive: '/svg/menu/home',
      iconInactive: '/svg/menu/home-outline',
      route: '/dashboard/home'
    },

    {
      title: 'Watchlist',
      iconActive: '/svg/menu/watchlist',
      iconInactive: '/svg/menu/watchlist-outline',
      route: '/dashboard/watchlist'
    },

    {
      title: 'Notifications',
      iconActive: '/svg/menu/notifications',
      iconInactive: '/svg/menu/notifications-outline',
      route: '/dashboard/notifications'
    },

    {
      title: 'Settings',
      iconActive: '/svg/menu/settings',
      iconInactive: '/svg/menu/settings-outline',
      route: '/dashboard/settings'
    },
  ],
  modalOpened: false,
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