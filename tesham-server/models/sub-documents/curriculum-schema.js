const mongoose = require('mongoose');
// TODO refactoring
const curriculumSchema = mongoose.Schema({
    title: String,
    subTitle: String,
    curriculum: [{title: String, subTitle: String, subCurriculum: []}],

});


module.exports = curriculumSchema;
