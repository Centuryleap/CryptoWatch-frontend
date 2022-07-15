const resolve = (base, path = '/') => `/${base}${path.startsWith('/') ? path : '/' + path}`

export default (ctx, inject) => {
  inject('user', (path) => resolve('user', path))
  // inject('signup', (path) => resolve('user/signup', path))
  // inject('password', (path) => resolve('user/password', path))
  inject('dashboard', (path) => resolve('dashboard', path))
  // inject('profile', (path) => resolve('dashboard/profile', path))
  // inject('settings', (path) => resolve('dashboard/settings', path))
  // inject('loanApplication', (path) => resolve('dashboard/loans/application', path))
  // inject('editProfile', (path) => resolve('dashboard/profile/edit', path))
}