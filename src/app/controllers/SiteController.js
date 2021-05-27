const Course = require("../models/Course");
const {mutipleMongooseToObject} = require('../../util/mongoose');
const { query } = require("express");
class SiteController {
    home(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home',{
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    
    search(req, res) {
        res.render("news");
    }

}

module.exports = new SiteController();