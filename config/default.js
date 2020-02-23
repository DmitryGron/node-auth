'use strict';
require('dotenv').config();

module.exports = {
	app: {
		port: process.env.PORT || 8888,
		prefix: '^/api/v[1-9]',
	},
	database: {
		url: process.env.TEST_DB_URL,
	},
	jwt: {
		key: process.env.JWT_KEY || 'mySecretKey',
	},
};

//mongodb://admin:US9E0jC9T9B6P5Y3@aml-cluster-0-shard-00-00-bbvps.mongodb.net:27017,aml-cluster-0-shard-00-01-bbvps.mongodb.net:27017,aml-cluster-0-shard-00-02-bbvps.mongodb.net:27017/${connectionDatabase}?ssl=true&replicaSet=aml-cluster-0-shard-0&authSource=admin&retryWrites=true,
