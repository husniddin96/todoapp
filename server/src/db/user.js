const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    }
})

mongoose.model('User', userSchema);