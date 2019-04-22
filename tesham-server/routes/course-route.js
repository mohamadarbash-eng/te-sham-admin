const express = require('express');
const checkAuth = require('./../middlewares/check-auth');
const extractFile = require('./../middlewares/extract-file');
const courseController = require('./course-routes-controller');
const router = express.Router();


/**
 * Course restful API requests
 */
router.post('/api/course', checkAuth,extractFile,courseController.postCourse);
router.get('/api/courses', courseController.getCourses);
router.get('/api/course/:id', courseController.getCourseByID);
router.delete('/api/course/:id',checkAuth, courseController.deleteCourse);
router.put('/api/course/:id', checkAuth, extractFile, courseController.updateCourse);
router.get('/api/courses/count', courseController.getCoursesCount);
router.get('/api/course/details/:courseName', courseController.getCourseDetails);

module.exports = router;
