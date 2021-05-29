module.exports = () => {
    const showcaseData = require('../data/showcase.json');

    const controller = {};
    controller.getShowcase = (req, res) => res.status(200).json(showcaseData);

    return controller;
}