class SiteController{

    home(req, res){
        res.render('home');
    }
    search(req, res){
        res.render('news');
    }
}

module.exports = new SiteController;