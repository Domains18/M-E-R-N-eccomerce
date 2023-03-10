const mongooose = require('mongoose');

//name, mobileNuber, email, password
const consumerSchema = mongooose.Schema({
    name: {
        type: String,
        required: [true, 'Please Add Name']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please Add mobile Number']
    },
    email: {
        type: String,
        required: [true, 'Please Add Email']
    },
    password: {
        type: String,
        required: [true, 'Add your password']
    }

}, { timestamps: true });

module.exports = mongooose.model('Consumer', consumerSchema);