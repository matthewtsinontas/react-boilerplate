const presets = [
	[
		'@babel/env',
		{
			targets: {
				edge: '17',
				firefox: '60',
				chrome: '67',
				safari: '11.1',
			},
			useBuiltIns: 'entry',
			corejs: 2
		},
	],
	[
		'@babel/preset-react'
	]
];

const plugins = [
	[
		'module-resolver',
		{
			'alias': {
				'pages': './src/pages',
				'components': './src/components'
			}
		}
	],
	['@babel/plugin-proposal-class-properties', { 'loose': false }]
];
  
module.exports = { presets, plugins };