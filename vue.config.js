module.exports = {
	filenameHashing: false,
	productionSourceMap: false,
	// see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
	chainWebpack: config => {
		// If you wish to remove the standard entry point
		config.entryPoints.delete('app')
		// then add your own
		config
			.entry('vue-wp-components')
			.add('./src/main.js')
			.end()
	}
}
