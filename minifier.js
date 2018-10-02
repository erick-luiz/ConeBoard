var minifier = require('minifier')
var input =  ['./js/viewModel.js']

minifier.on('error', function(err) {
	// handle any potential error
	console.log('deu erro!')
})

minifier.minify(input, {output:'./js/bundle.min.js'})