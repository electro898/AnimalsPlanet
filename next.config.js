const withPWA = require('next-pwa')
const settings = {
    env: {
        WORDPRESS_URL: https://positivityminds.com/wp-json
    }
}

module.exports = process.env.NODE_ENV !== 'production' ? settings: withPWA(settings)
