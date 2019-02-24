const express = require('express');

const courseController = require('./course-routes-controller');
const router = express.Router();

router.post('/api/course', courseController.postCourse);
router.get('/api/courses', courseController.getCourses);
router.get('/api/course/:id', courseController.getCourseByID);
router.delete('/api/course/:id', courseController.deleteCourse);


module.exports = router;
