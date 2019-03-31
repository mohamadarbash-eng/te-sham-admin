const express = require('express');
const multer = require('multer');
const checkAuth = require('./../middlewares/check-auth');

const courseController = require('./course-routes-controller');
const router = express.Router();
const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};
// TODO middleware file
const storage = multer.diskStorage({
   destination: (req, file, callback) => {
       const isValid = MIME_TYPE_MAP[file.mimetype];
       const error = isValid ? null : new Error(`Invalid mime type`);
       callback(error, 'assets/images/courses');
   },
    filename: (req, file, callback) => {
        const ext = MIME_TYPE_MAP[file.mimetype];
       const name = file.originalname.toLowerCase().split(' ').join('-');
       callback(null,  name);
    }
});

/**
 * Course restful API requests
 */
router.post('/api/course',checkAuth, multer({storage:storage}).single('image'),courseController.postCourse);
router.get('/api/courses', courseController.getCourses);
router.get('/api/course/:id', courseController.getCourseByID);
router.delete('/api/course/:id', courseController.deleteCourse);
router.put('/api/course/:id', multer({storage:storage}).single('image'), courseController.updateCourse);
router.get('/api/courses/count', courseController.getCoursesCount);
router.get('/api/course/details/:id', courseController.getCourseDetails);

module.exports = router;
