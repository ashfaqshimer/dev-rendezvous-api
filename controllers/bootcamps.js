// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc    Get a specific bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Get bootcamp ${req.params.id}`
	});
};

// @desc    Create a specific bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Create a bootcamp`
	});
};

// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Public
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Update bootcamp ${req.params.id}`
	});
};

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Public
exports.deleteBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Delete bootcamp ${req.params.id}`
	});
};
