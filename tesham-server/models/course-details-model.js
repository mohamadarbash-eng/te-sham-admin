const mongoose = require('mongoose');
const curriculumSchema = require('./sub-documents/curriculum-schema');
// TODO refactoring  review reference doc
// TODO : restructure reviews to use virtual populate
const Schema = mongoose.Schema;
const courseDetailsSchema = Schema({
    medias: [{type: 'image' | 'video', title: String, alt: String, url: {type: String, default: null}}],
    courseDescription: {title: String, content: String},
    curriculum: {title: String, content: curriculumSchema},
    reviews: [{type: Schema.Types.ObjectId, ref: 'Reviews'}]
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
