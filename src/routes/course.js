const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.delete('/delete/:id', courseController.deleteCourse);
router.put('/processUpdataCourse/:id', courseController.processUpdataCourse);
router.get('/update/:id', courseController.update);
router.get('/listCourse', courseController.listCourse);
router.post('/processCreateCourse', courseController.processCreateCourse);
router.get('/create',courseController.createCourse);
router.get('/:slug', courseController.show);

module.exports = router;