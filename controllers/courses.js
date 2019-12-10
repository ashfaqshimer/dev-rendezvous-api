const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const Course = require('../models/Course');

// @desc    Get all courses
// @route   GET /api/v1/courses
// @access  Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();

  res.status(200).json({ success: true, data: bootcamps });
});

// @desc    Get a specific bootcamp
// @route   GET /api/v1/bootcamps/:id
// @route   GET /api/v1/bootcamps/:bootcampId/courses
// @access  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.bootcampId) {
    query = Course.find({ bootcamp: req.params.bootcampId });
  } else {
    query = Course.find();
  }

  const courses = await query;

  res.status(200).json({ success: true, count: courses.length, data: courses });
});
