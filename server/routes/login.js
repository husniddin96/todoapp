const router = require('express').Router();

router.post('/', (req, res) => {
    console.log('worked');
    
    if (req.params.login == 'johndoe', req.params.password == 'jdoe123') {
        res.json({ success: true })
    } else {
        res.json({ success: false });
    }
});

module.exports = router;