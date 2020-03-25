const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are on about');
})

router.get('/me', (req, res) => {
    res.send('We are on me');
})



module.exports = router;