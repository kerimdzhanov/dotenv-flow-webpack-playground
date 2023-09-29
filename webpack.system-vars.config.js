'use strict';

const config = require('./webpack.config.defaults');
const DotenvFlowWebpack = require('dotenv-flow-webpack');

module.exports = (_, argv) => {
	/**
	 * Initializing `dotenv-flow-webpack` with registering system environment variables.
	 */
	const dotenvFlowPlugin = new DotenvFlowWebpack({
		node_env: (argv.mode && argv.mode !== 'none') ? argv.mode : undefined,
		default_node_env: 'development',
		system_vars: true,
		debug: true
	});

	config.plugins.push(dotenvFlowPlugin);

	return config;
};
