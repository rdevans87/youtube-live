
const path = require('path')
const fs = require('fs')
// const asyncHandler = require('../middleware/async')
// const ErrorResponse = require('../utils/errorResponse')
const Video = require('../models/video')


// @desc    Get videos
// @route   GET /api/v1/videos/public 
// @access  Public 
exports.getVideos = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})


exports.getVideo = asyncHandler(async (req, res, next) => {
    const video = await Video.findById(req.params.id)
      .populate({
        path: 'categoryId',
        
      })
      .populate({ path: 'videoId', select: 'videoName' })
   
    if (!video) {
      return next(new ErrorResponse(`No video with that id of ${req.params.id}`))
    }
  
    res.status(200).json({ sucess: true, data: video })
})

