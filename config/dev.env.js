//support environment variables
var merge = require('webpack-merge')
var prodEnv = require('./pro.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"'
})
