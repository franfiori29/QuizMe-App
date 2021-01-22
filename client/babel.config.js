module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module:react-native-dotenv',
				{
					moduleName: '@env',
					path: '.env',
					blacklist: null,
					whitelist: null,
					safe: false,
					allowUndefined: true,
				},
			],
			[
				'module-resolver',
				{
					root: ['./'],
					alias: {
						'@components': './src/components',
						'@screens': './src/screens',
						'@stores': './src/stores',
						'@utils': './src/utils',
						'@services': './src/services',
						'@assets': './assets',
						'@constants': './src/constants',
						'@redux': './src/redux',
					},
				},
			],
		],
	};
};
