const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    imageAlt: String,
    imageUrl: { type: String, default: null },
    title: String,
    shortDescription: String,
    courseDetails: String,
    category: String,
    price: Number,
    rating: String
});
// TODO courseDetails ref it should be  sub document
courseSchema.set('toJSON', {
    virtuals: true
});

courseSchema.methods.toJSON = function () {
    const course = this;
    let courseObject = course.toObject();
    courseObject.id = courseObject._id;
    delete courseObject._id;
    delete courseObject.__t;
    delete courseObject.__v;
    return courseObject;
};


module.exports = mongoose.model('Course', courseSchema);
