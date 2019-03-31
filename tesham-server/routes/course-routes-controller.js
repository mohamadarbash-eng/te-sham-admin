const Course = require('../models/course-model');
const CourseDetails = require('../models/course-details-model');
/**
 * CourseController Object, it contains Course Model's CRUDs
 * @type {{postCourse(*, *, *): void, getCourses(*, *, *): void, deleteCourse(*, *, *): void, updateCourse(*, *, *): void, getCourseByID(*, *, *): void}}
 */
const courseController = {
    postCourse(req, res, next) {
        const course = req.body;
        const courseDetails = req.body && req.body.courseDetails;
        const courseDetailsModel = new CourseDetails({...courseDetails});

        const courseModel = new Course({
            ...course,
            imageUrl: req.file ? `/assets/images/courses/${req.file.filename}`: null
        });
       courseModel.courseDetails = courseDetailsModel;
       // TODO use promise.all
       Promise.all([courseModel.save(),courseDetailsModel.save()]).then((data) => {
                res.status(201).json({
                    error: null
                });
                next();
        }).catch((error) => {
            res.status(400).json({error});
            next();
        });
    },
    getCourses(req, res, next) {
        const {offset, limit} = req.query;
        const courseQuery = Course.find();
        if (offset > -1 && limit > 0) {
            courseQuery.skip(+offset).limit(+limit)
        }
        Promise.all([courseQuery, Course.estimatedDocumentCount()]).then((courses) => {
            res.status(200).json({
                courses: courses[0],
                totalCount: courses[1]
            });
            next();
        }).catch((error) => {
            res.status(400).json({error});
            next();
        });

    },
     getCoursesCount(req, res, next) {
         Course.estimatedDocumentCount().then((courseCount) => {
             res.status(200).json({
                 courseCount
             });
             next();
         }).catch((error) => {
             res.status(400).json({error});
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
        }).catch((error) => res.status(400).json({error}));
    },
    getCourseDetails(req, res, next) {
        const {id} = req.params;
        Course.findById(id).populate('courseDetails').then((course) => {
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
        const {id} = req.params;
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
