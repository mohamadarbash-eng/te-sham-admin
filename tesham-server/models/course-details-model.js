const mongoose = require('mongoose');
// TODO refactoring
const courseDetailsSchema = mongoose.Schema({
    imageAlt: String,
    imageUrl: { type: String, default: null },
    title: String,
    courseDetails: String,
    category: String,
    price: Number,
    rating: String
});


courseDetailsSchema.set('toJSON', {
    virtuals: true
});

courseDetailsSchema.methods.toJSON = function () {
    const course = this;
    let courseObject = course.toObject();
    courseObject.id = courseObject._id;
    delete courseObject._id;
    delete courseObject.__t;
    delete courseObject.__v;
    return courseObject;
};


module.exports = mongoose.model('CourseDetails', courseDetailsSchema);
