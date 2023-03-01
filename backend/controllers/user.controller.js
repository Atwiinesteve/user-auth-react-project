const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const User = require("../models/user.model");

const registerUser = async (request, response) => {
	try {
		const salt = await bcrypt.genSalt(15);
		const hash = await bcrypt.hash(request.body.password, salt);
		const user = await User({
			names: request.body.names,
			email: request.body.email,
			username: request.body.username,
			password: hash,
		});
		user
			.save()
			.then((user) => {
				jwt.sign({ id: user._id, email: user.email}, process.nextTick.SECRET_TOKEN, (error, token) =>{
					if(error) {
						console.log({
							name: error.name,
							message: error.message,
							stack: error.stack,
						});
					} else {
						response.cookie('token', token).json({ id: user._id, email: user.email })
					}
				})
			})
			.catch((error) => {
				console.log({
					name: error.name,
					message: error.message,
					stack: error.stack,
				});
				return response
					.status(500)
					.json({ message: "Unexpected Server Shutdown" });
			});
	} catch (error) {
		console.log({
			name: error.name,
			message: error.message,
			stack: error.stack,
		});
		return response.status(500).json({ message: "Unexpected Server Shutdown" });
	}
};

const loginUser = async (request, response) => {
	try {
		const user = await User.findOne({ email: request.body.email })
		if(!user) {
			return response.json({ message: 'User not found'})
		} else {
			const validPassword = await bcrypt.compare(request.body.password, user.password)
			if(validPassword) {
				const maxAge = 1*24*60*60;
				jwt.sign({ id: user._id }, process.env.SECRET_TOKEN, { expiresIn: maxAge }, (error, token) => {
					if(error) {
						console.log({
							name: error.name,
							message: error.message,
							stack: error.stack,
						});
					} else {
						response.cookie('token', token).send();
					}
				})
			}
		}
	} catch (error) {
		console.log({
			name: error.name,
			message: error.message,
			stack: error.stack,
		});
		return response.status(500).json({ message: "Unexpected Server Shutdown" });
	}
};

module.exports = {
	registerUser,
    loginUser
};
