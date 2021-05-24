const newRouter = require('./new');
const siteRoute = require('./site');
function route(app) {
    // NEWS
    app.use("/news", newRouter);

    // SITE
    app.use('/', siteRoute);

}

module.exports = route;
