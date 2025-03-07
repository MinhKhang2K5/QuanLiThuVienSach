const contactRouter = require('./contact.js');
const shopingRouter = require('./shopingcart.js');
const loginRouter = require('./login.js');
const homeRouter = require('./home.js');

function route(app) {
    app.use('/shopingcart', shopingRouter);
    app.use('/login', loginRouter);
    app.use('/contact', contactRouter);
    app.use('/home', homeRouter);
    app.use('/', homeRouter);
}

module.exports = route;
