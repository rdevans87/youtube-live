const db = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
	signUp: async (req, res) => {
		try {
			const { firstName, lastName, email, username, password, passwordCheck } =
				req.body;

			// if not all fields are filled out then display a message
			(!firstName ||
				!lastName ||
				!email ||
				!username ||
				!password ||
				!passwordCheck) &&
				res.status(422).json({ msg: 'Please fill out all fields.' });

			const existingEmail = await db.User.findOne({ email: email });
			existingEmail &&
				res
					.status(422)
					.json({ msg: 'The email is already registered with an account.' });

			const existingUsername = await db.User.findOne({ username: username });
			existingUsername &&
				res
					.status(422)
					.json({ msg: 'That username is already taken. Please try again.' });

			password.length < 6 &&
				res
					.status(422)
					.json({ msg: 'Password must be at least 6 characters.' });

			if (password !== passwordCheck) {
				res
					.status(422)
					.json({ msg: 'Passwords do not match. Please try again.' });
			} else {
				const salt = await bcrypt.genSalt();
				const passwordHash = await bcrypt.hash(password, salt);

				const newUser = await db.User.create({
					firstName: firstName,
					lastName: lastName,
					username: username,
					email: email,
					password: passwordHash,
				});

				req.session.save(() => {
					req.session.user_id = newUser._id;
					req.session.logged_in = true;
					console.log(req.session);
					res.json({
						newUser,
						logged_in: req.session.logged_in,
					});
				});
			}
		} catch (err) {
			res.status(422).json(err);
		}
	},

	login: async (req, res) => {
		try {
			const { username, password } = req.body;

			(!username || !password) &&
				res.status(422).json({ msg: 'Please fill out all fields.' });

			const user = await db.User.findOne({ username: username });

			!user &&
				res
					.status(422)
					.json({ msg: 'Username has not been registered. Please try again.' });

			const isMatch = await bcrypt.compare(password, user.password);

			!isMatch &&
				res.send({
					message: 'Not Found',
					status: 404,
				});

			req.session.save(() => {
				req.session.user_id = user._id;
				req.session.logged_in = true;
				console.log(req.session);
				res.json({
					user: {
						id: user._id,
						firstName: user.firstName,
						lastName: user.lastName,
						email: user.email,
						username: username,
					},
					logged_in: req.session.logged_in,
				});
			});
		} catch (err) {
			console.log('KYLE', err);
			res.status(422).json(JSON.parse(JSON.stringify(err)));
		}
	},

	logout: (req, res) => {
		req.session.logged_in
			? req.session.destroy(() => res.status(204).end())
			: res.status(404).end();
	},
};
