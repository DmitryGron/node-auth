import express from 'express';
import bodyParser from 'body-parser';
import user from './routes/user';
import InitiateMongoServer from './config/db';
import logger from 'v-response';

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.json({ message: 'API Working' });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use('/user', user);

app.listen(port, logger.log('listing on port', port));
