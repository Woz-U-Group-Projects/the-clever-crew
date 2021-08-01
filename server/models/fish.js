var mongoose = require('mongoose'); 

var fishSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    fishImage: {type: String, required: true },
    bait: { type: String },
    location: { type: String },
    beer: { type: String }
});

module.exports = mongoose.model('fish', fishSchema);