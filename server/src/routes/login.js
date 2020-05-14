require('../db');

const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.post('/', async (req, res) => {
    console.log('worked login', req.body);

    const { login, password } = req.body;
    const count = await User.find({ login, password }).countDocuments();

    if (count > 0) {
        res.json({ success: true })
    } else {
        res.json({ success: false });
    }
});

module.exports = router;