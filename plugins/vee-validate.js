import Vue from 'vue'
import {
    ValidationObserver,
    ValidationProvider,
    extend
} from 'vee-validate'
import {
    required, email, min, max,
    alpha_spaces, alpha, numeric, is_not
} from 'vee-validate/dist/rules'
// import parsePhoneNumber from 'libphonenumber-js'


export default () => {
    // Register components globally
    Vue.component('ValidationObserver', ValidationObserver)
    Vue.component('ValidationProvider', ValidationProvider)

    // Register rules.
    extend('required', required)
    extend('alpha_spaces', alpha_spaces)
    extend('alpha', alpha)
    extend('email', email)
    extend('min', min)
    extend('max', max)
    extend('numeric', numeric)
    extend('is_not', is_not)
    extend('amount', {
        validate: (value) => value.match(/^[0-9\,]+$/),
        message: 'Amount is not valid'
    })
    extend('password', {
        validate: (value) => value.match(/^[a-z]$/),
        message: 'Password is only alphanumeric, no special characters'
    })
    extend('compare_password', {
        params: ['target'],
        validate: (value, { target }) => value === target,
        message: 'Passwords do not match'
    })
    
    extend('email_or_phone', {
        params: ['target'],
        validate: (value, { target='NG' }) => {
            const phone = parsePhoneNumber(value, target)
            return email.validate(value) || phone?.isValid()
        },
        message: 'Does not look either like an email or a phone'
    })
}