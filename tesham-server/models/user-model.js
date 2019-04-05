const mongoose = require('mongoose');
 const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const userSchema = Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
    virtuals: true
});
// TODO Count Virtual type
userSchema.methods.toJSON = function () {
    const course = this;
    let courseObject = course.toObject();
    courseObject.id = courseObject._id;
    delete courseObject._id;
    delete courseObject.__t;
    delete courseObject.__v;
    return courseObject;
};


module.exports = mongoose.model('User', userSchema);
