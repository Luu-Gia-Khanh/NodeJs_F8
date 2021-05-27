const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose');
const {mongooesToObject} = require('../../util/mongoose');

class CourseController{
    show(req, res, next){
        var getSlug = req.params.slug;
        Course.findOne({ slug: getSlug })
            .then(course => {
                res.render('courses/show',{
                    course: mongooesToObject(course),
                });
            })
            .catch(next);
    }
    createCourse(req, res, next){
        res.render('courses/createCourse');
    }
    processCreateCourse(req, res, next){

        const formData = req.body;
        formData.image = 'okok';
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/home'))
            .catch(next);
    }
}

module.exports = new CourseController();