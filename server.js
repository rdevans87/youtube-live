const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cookieParser = require('cookie-parser');



const session = require('express-session');
require('dotenv').config();


const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(
	session({
		key: 'userId',
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			// expires in 24 hours
			expires: 60 * 60 * 24,
		},
	})
);





// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// Add routes, both API and view// app.use(passport.initialize());
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/youtubeLiveDB',
	{
		// allowing app to fall back to old parser incase of bug finds
		useNewUrlParser: true,
		// removes connection options that are no longer relevant with new topology engine
		useUnifiedTopology: true,
		// using mongoose default engine build
		useCreateIndex: true,
		// using native findOneAndUpdate()
		useFindAndModify: false,
	}
);

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
