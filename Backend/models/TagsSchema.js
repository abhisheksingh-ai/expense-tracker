
const mongoose = require('mongoose')

const TagsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 35,
        minlength: 3,
    },
    slug: {
        type: String,
        trim: true,
        unique: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Tags', TagsSchema);
