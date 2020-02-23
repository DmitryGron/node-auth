import mongoose from 'mongoose';
import Joi from 'joi';
import jwt from 'jsonwebtoken';

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
});

userSchema.methods.generateAuthToken = function() {
	return jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.jwt.key, {
		expiresIn: process.env.NODE_ENV == 'development' ? '20m' : '20m',
	});
};

const User = mongoose.model('User', userSchema);

function validateUser(user) {
	const schema = {
		username: Joi.string()
			.min(5)
			.max(50)
			.required(),
		email: Joi.string()
			.min(5)
			.max(255)
			.email()
			.required(),
		password: Joi.string()
			.min(5)
			.max(255)
			.required(),
	};

	return Joi.validate(user, schema);
}

exports.userSchema = userSchema;
exports.User = User;
exports.validate = validateUser;
