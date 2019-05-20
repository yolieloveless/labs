const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        max: 9999,
        min: 10
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().getFullYear() + 1
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)