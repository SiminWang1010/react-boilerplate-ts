const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
	plugins: [
		{
			plugin: CracoAntDesignPlugin,
			options: {
				customizeTheme: {
					'@primary-color': '#FF5B18',
					'@link-color': '#FF5B18',
				},
			},
		},
	],
};
