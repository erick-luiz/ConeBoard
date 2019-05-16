var minifier = require('minifier')
var input =  [
	'./js/url-register.js',
	'./js/apiRequest.js',
	'./js/viewModel.js',
	'./js/login.js']

minifier.on('error', function(err) {
	// handle any potential error
	console.log('deu erro!')
})

minifier.minify(input, {output:'./js/bundle.min.js'})