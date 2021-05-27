const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.post('/processCreateCourse', courseController.processCreateCourse);
router.get('/create',courseController.createCourse);
router.get('/:slug', courseController.show);

module.exports = router;