const Course = require('../models/course-model');

const courseController = {
    postCourse(req, res, next) {
        const course = req.body;
        const courseModel = new Course({
            ...course
        });
        courseModel.save().then((result) => {
            console.log(result);
            res.status(201).json({
                result
            });
            next();
        });
    },
    getCourses(req, res, next) {
        Course.find().then((courses) => {
            res.status(200).json(
                courses
            );
            next();
        });

    },
    getCourseByID(req, res, next) {
        const {id} = req.params;
        Course.findById(id).then((course) => {
            res.status(200).json(
                course
            );
            next();
        });
    },
    deleteCourse(req, res, next) {
        const {id} = req.params;
        Course.findByIdAndDelete(id).then((result) => {
            console.log(result);
            res.status(200).json();
            next();
        })

    }
};

module.exports = courseController;
