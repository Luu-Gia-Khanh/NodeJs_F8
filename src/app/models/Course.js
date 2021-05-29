const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Course = new Schema({
    name: { type: String, default: 'Nodejs', min: 1},
    desc: String,
    image: String,
    slug: { type: String, slug: 'name', unique: true },
    createdAt: {type:Date, default: Date.now},
    updatedAt: {type:Date, default: Date.now},
  });

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  overrideMethods: 'all', deletedAt : true
});

module.exports = mongoose.model('Course', Course);

