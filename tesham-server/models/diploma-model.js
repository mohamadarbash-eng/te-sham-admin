const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const diplomaSchema = Schema({
    imageAlt: String,
    imageUrl: { type: String, default: null },
    diplomaName: String,
    title: String,
    shortDescription: String,
    diplomaDetails: { type: Schema.Types.ObjectId, ref: 'DiplomaDetails' },
    category: String,
    price: Number,
    rating: String
});


diplomaSchema.set('toJSON', {
    virtuals: true
});
// TODO Count Virtual type
diplomaSchema.methods.toJSON = function () {
    const course = this;
    let courseObject = course.toObject();
    courseObject.id = courseObject._id;
    delete courseObject._id;
    delete courseObject.__t;
    delete courseObject.__v;
    return courseObject;
};


module.exports = mongoose.model('Diploma', diplomaSchema);
