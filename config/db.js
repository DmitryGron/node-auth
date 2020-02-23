import mongoose from 'mongoose';
import logger from 'v-response';
import config from 'config';

const db = config.get('database.url');

const InitiateMongoServer = async () => {
	mongoose
		.connect(
			db,
			{
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useCreateIndex: true,
			},
			err => {
				if (err) logger.log('error mongodb', err);
				mongoose.connect(db, {
					useUnifiedTopology: true,
					useNewUrlParser: true,
					useCreateIndex: true,
				});
			}
		)
		.then(() => logger.log('connected to mongoDB', db))
		.catch(err => logger.log('error mongodb', err));
};

module.exports = InitiateMongoServer;
