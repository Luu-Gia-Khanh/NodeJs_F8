const Course = require('../models/Course');

class SiteController{

    home(req, res){
        Course.find({}, function(err, courses){
            if(!err) 
                res.json(courses);
            else{
                res.status(400).json({
                    error: 'ERR',
                });
            }
        });
    }
    search(req, res){
        res.render('news');
    }
}

module.exports = new SiteController;