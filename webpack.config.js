'use strict';

const config = require('./webpack.config.defaults');
const DotenvFlowWebpack = require('dotenv-flow-webpack');

module.exports = (_, argv) => {
	/**
	 * `dotenv-flow-webpack` plugin basic initialization.
	 */
	const dotenvFlowPlugin = new DotenvFlowWebpack({
		node_env: (argv.mode && argv.mode !== 'none') ? argv.mode : undefined,
		default_node_env: 'development',
		// pattern: 'config/[node_env/].env[.local]',
		// system_vars: true,
		debug: true
	});

	config.plugins.push(dotenvFlowPlugin);

	return config;
};
