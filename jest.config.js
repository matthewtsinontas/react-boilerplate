module.exports = {
	collectCoverageFrom: [
		'**/src/*.js'
	],
	coverageDirectory: './coverage',
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	reporters: ['default', 'jest-junit'],
	resetMocks: true,
	setupFiles: ['./setup-tests.js']
};