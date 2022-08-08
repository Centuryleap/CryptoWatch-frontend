 import cookie from 'cookie'
 import RawJSCookie from 'js-cookie'

 const AUTH_TOKEN = 'cryptowatch'

 const JsCookie = RawJSCookie.withAttributes({
    path: '/',
    domain: process.env.NODE_ENV == 'development' ? 'localhost' : 'cryptowatch.com',
  secure: process.env.NODE_ENV != 'development'
 })

 export default class Cookie {
    /**
     *
     * Get token from parse cookie
     * @param cookieDoc
     * @param key
     */
    static extract(cookieDoc = '', key) {
        return cookie.parse(cookieDoc)[key]
    }

    static get (key) {
        return JsCookie.get(key)
    }

    static set (key, value) {
        return JsCookie.set(key, value)
    }

    static remove (key) {
        return JsCookie.remove(key)
    }

    // Auth token Utility methods
    static extractToken(cookieDoc = '') {
        return Cookie.extract(cookieDoc, AUTH_TOKEN)
    }

    static getToken() {
        return Cookie.get(AUTH_TOKEN)
    }

    static setToken(token) {
        Cookie.set(AUTH_TOKEN, token)
    }

    static removeToken() {
        Cookie.remove(AUTH_TOKEN)
    }
 }
