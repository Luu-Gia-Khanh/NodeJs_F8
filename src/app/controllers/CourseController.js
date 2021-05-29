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
        formData.deletedAt = null;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/home'))
            .catch(next);
    }
    listCourse(req, res, next){
        Course.find()
            .then(course => {
                res.render('courses/listCourse', {
                    course: mutipleMongooseToObject(course),
                });
            });
    }
    update(req, res, next){
        var id = req.params.id;
        Course.findOne({ _id: id })
            .then(course => {
                res.render('courses/updateCourse',{
                    course: mongooesToObject(course),
                });
            })
            .catch(next);
    }
    processUpdataCourse(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() =>{
                res.redirect('/course/listCourse');
            })
            .catch(next);
    }
    deleteCourse(req, res, next){
        Course.delete({_id:req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
        
    }
    trash(req, res, next){
        Course.findDeleted({})
            .then((course) => {res.render('courses/trash', {
                course: mutipleMongooseToObject(course),
            })})
            .catch(next);
    }

    restore(req, res, next){
        Course.restore({_id:req.params.id})
            .then(() => res.redirect('/course/listCourse'))
            .catch(next);
    }
    deleteforce(req, res, next){
        Course.deleteOne({_id:req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }


}

module.exports = new CourseController();