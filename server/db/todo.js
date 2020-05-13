const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    isCompleted: {
        type: mongoose.Schema.Types.Boolean,
        default: false
    }
});

mongoose.model('Todo', todoSchema);