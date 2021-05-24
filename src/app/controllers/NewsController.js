class NewsController{
    index(req, res){
        res.render('news');
    }
    show(req, res){
        console.log(req.query);
        res.send(req.query.k);
    }
}

module.exports = new NewsController;