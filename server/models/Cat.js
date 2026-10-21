const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    bedsOwned: {
        type: Number,
        min: 0,
        required: 0,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

const CatModel = mongoose.model('Cat',CatSchema);

module.exports = CatModel;