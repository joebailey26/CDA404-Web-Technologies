const express = require('express')
const router = express.Router()
 
router.get('/', (req, res) => {
    res.render('index')
})
 
router.get('/news', (req, res) => {
    res.render('news')
})
 
router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/cancer', (req, res) => {
    res.render('cancer')
})

router.get('/lincoln-and-kennedy', (req, res) => {
    res.render('lincoln-and-kennedy')
})

router.get('/mkultra', (req, res) => {
    res.render('mkultra')
})

router.get('/nine-eleven', (req, res) => {
    res.render('nine-eleven')
})
 
module.exports = router