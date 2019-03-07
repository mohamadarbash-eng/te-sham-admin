const Course = require('../models/course-model');
const Multer = require('multer');

const courseController = {
    postCourse(req, res, next) {
        const course = req.body;
        const courseModel = new Course({
            ...course,
            imageUrl: `/assets/images/courses/${req.file.filename}`
        });
        courseModel.save().then((data) => {
            res.status(201).json({
                error: null
            });
            next()
        }).catch((error) => res.status(400).json({error}));
    },
    getCourses(req, res, next) {
        Course.find().then((courses) => {
            res.status(200).json(
                courses
            );
            next();
        }).catch((error) => res.status(400).json({error}));

    },
    getCourseByID(req, res, next) {
        const {id} = req.params;
        Course.findById(id).then((course) => {
            res.status(200).json(
                course
            );
            next();
        }).catch((error) => res.status(400).json({error}));
    },
    deleteCourse(req, res, next) {
        const {id} = req.params;
        Course.findByIdAndDelete(id).then((result) => {
            console.log(result);
            res.status(200).json();
            next();
        })

    },
    updateCourse(req, res, next) {
        const imageUrl = req.file ? `/assets/images/courses/${req.file.filename}`
            : req.body.imageUrl;
        const courseData = {
            imageUrl,
            imageAlt: req.body.imageAlt,
            title: req.body.title,
            shortDescription: req.body.shortDescription,
            category: req.body.category,
            price: req.body.price,
            rating: req.body.rating
        };
        Course.findByIdAndUpdate(id, courseData, {new: false}).then(() => {
            res.status(200).json({error: null});
            next();
        }).catch((error) => res.status(400).json({error}));

    }
};

module.exports = courseController;
