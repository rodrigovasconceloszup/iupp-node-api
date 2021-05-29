module.exports = app => {
    const controller = require('../controllers/showcase')();
    app.route('/api/showcase').get(controller.getShowcase);
}