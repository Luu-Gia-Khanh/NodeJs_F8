const newRouter = require('./new');
const siteRoute = require('./site');
const courseRoute = require('./course');
function route(app) {
    // NEWS
    app.use("/news", newRouter);

    // SITE
    app.use('/', siteRoute);

    //COURSE
    app.use('/course',courseRoute);

}

module.exports = route;
