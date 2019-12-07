const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDb = require('./config/db');
const colors = require('colors');
const errorHandler = require('./middleware/errorHandler');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDb();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.bold
	)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
	console.error(`Error: ${err.message}`.red);
	// Close server and exit process
	server.close(() => process.exit(1));
});
